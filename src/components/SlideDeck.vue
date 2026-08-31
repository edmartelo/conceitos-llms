<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { slides } from '../slides/index.js'

const total = slides.length
const currentIndex = ref(0)
const direction = ref('next')

const THEME_KEY = 'llm-deck-theme'
const theme = ref('light')

function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t)
}

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem(THEME_KEY, theme.value)
  applyTheme(theme.value)
}

const currentSlide = computed(() => slides[currentIndex.value].component)

// Only one slide transition plays at a time — extra input while one is in
// flight is ignored instead of queueing, which is what let rapid key/click
// presses pile up overlapping transitions and leave slides stuck mid-fade.
const TRANSITION_MS = 320
let navLocked = false

function goTo(i) {
  if (navLocked || i < 0 || i >= total || i === currentIndex.value) return
  navLocked = true
  direction.value = i > currentIndex.value ? 'next' : 'prev'
  currentIndex.value = i
  setTimeout(() => {
    navLocked = false
  }, TRANSITION_MS)
}

function next() {
  goTo(currentIndex.value + 1)
}

function prev() {
  goTo(currentIndex.value - 1)
}

function onKeydown(e) {
  if (['ArrowRight', 'ArrowDown', 'PageDown'].includes(e.key)) {
    e.preventDefault()
    next()
  } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
    e.preventDefault()
    prev()
  } else if (e.key === 'Home') {
    e.preventDefault()
    goTo(0)
  } else if (e.key === 'End') {
    e.preventDefault()
    goTo(total - 1)
  }
}

let touchStartX = null

function onTouchStart(e) {
  touchStartX = e.changedTouches[0].clientX
}

function onTouchEnd(e) {
  if (touchStartX === null) return
  const deltaX = e.changedTouches[0].clientX - touchStartX
  if (Math.abs(deltaX) > 60) {
    deltaX < 0 ? next() : prev()
  }
  touchStartX = null
}

onMounted(() => {
  const stored = localStorage.getItem(THEME_KEY)
  const preferred = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  theme.value = preferred
  applyTheme(preferred)
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="deck" @touchstart="onTouchStart" @touchend="onTouchEnd">
    <div class="deck__progress">
      <div class="deck__progress-bar" :style="{ width: ((currentIndex + 1) / total) * 100 + '%' }"></div>
    </div>

    <button
      class="deck__theme-toggle"
      :aria-label="theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'"
      @click="toggleTheme"
    >
      <svg v-if="theme === 'light'" class="deck__theme-toggle-icon" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
      <svg v-else class="deck__theme-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="12" y1="2" x2="12" y2="4"></line>
        <line x1="12" y1="20" x2="12" y2="22"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="2" y1="12" x2="4" y2="12"></line>
        <line x1="20" y1="12" x2="22" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    </button>

    <Transition :name="'slide-' + direction">
      <component :is="currentSlide" :key="currentIndex" class="deck__slide" />
    </Transition>

    <button class="deck__nav deck__nav--prev" :disabled="currentIndex === 0" aria-label="Slide anterior" @click="prev">
      <svg class="deck__nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="15 6 9 12 15 18"></polyline>
      </svg>
    </button>
    <button class="deck__nav deck__nav--next" :disabled="currentIndex === total - 1" aria-label="Próximo slide" @click="next">
      <svg class="deck__nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="9 6 15 12 9 18"></polyline>
      </svg>
    </button>

    <div class="deck__footer">
      <div class="deck__dots">
        <button
          v-for="(s, i) in slides"
          :key="s.title"
          class="deck__dot"
          :class="{ 'is-active': i === currentIndex }"
          :aria-label="s.title"
          :aria-current="i === currentIndex"
          @click="goTo(i)"
        ></button>
      </div>
      <span class="deck__counter">{{ currentIndex + 1 }} / {{ total }}</span>
    </div>
  </div>
</template>

<style scoped>
.deck {
  position: relative;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  background: var(--page);
}

.deck__progress {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: var(--gridline);
  z-index: 5;
}

.deck__progress-bar {
  height: 100%;
  background: var(--accent-blue);
  transition: width 0.25s ease;
}

.deck__slide {
  position: absolute;
  inset: 0;
}

.deck__nav {
  position: absolute;
  bottom: 32px;
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--surface-1);
  color: var(--text-primary);
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  box-shadow: 0 2px 8px var(--shadow-nav);
  transition: border-color 0.15s ease, opacity 0.15s ease;
}

.deck__nav-icon {
  width: 1.4rem;
  height: 1.4rem;
}

.deck__theme-toggle {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--surface-1);
  color: var(--text-primary);
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;
  box-shadow: 0 2px 8px var(--shadow-nav);
  transition: border-color 0.15s ease, transform 0.1s ease;
}

.deck__theme-toggle:hover {
  border-color: var(--accent-blue);
}

.deck__theme-toggle:active {
  transform: scale(0.92);
}

.deck__theme-toggle-icon {
  width: 1.15rem;
  height: 1.15rem;
}

.deck__nav:hover:not(:disabled) {
  border-color: var(--accent-blue);
}

.deck__nav:disabled {
  opacity: 0.3;
  cursor: default;
}

.deck__nav--prev {
  left: 32px;
}

.deck__nav--next {
  right: 32px;
}

.deck__footer {
  position: absolute;
  bottom: 34px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 5;
}

.deck__dots {
  display: flex;
  gap: 12px;
}

.deck__dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background: var(--gridline);
  cursor: pointer;
  transition: background 0.15s ease, transform 0.15s ease;
}

.deck__dot.is-active {
  background: var(--accent-blue);
  transform: scale(1.3);
}

.deck__counter {
  font-size: 1.05rem;
  color: var(--text-muted);
  font-variant-numeric: tabular-nums;
}

@media (max-width: 640px) {
  .deck__nav {
    width: 2.2rem;
    height: 2.2rem;
    bottom: 64px;
  }
  .deck__nav-icon {
    width: 0.95rem;
    height: 0.95rem;
  }
  .deck__nav--prev {
    left: 12px;
  }
  .deck__nav--next {
    right: 12px;
  }
  .deck__theme-toggle {
    width: 2.1rem;
    height: 2.1rem;
    top: 12px;
    right: 12px;
  }
  .deck__theme-toggle-icon {
    width: 0.9rem;
    height: 0.9rem;
  }
  .deck__footer {
    bottom: 16px;
  }
  .deck__counter {
    font-size: 0.75rem;
  }
}

/* transitions */
.slide-next-enter-active,
.slide-prev-enter-active {
  transition: transform 0.28s ease, opacity 0.28s ease;
}
.slide-next-leave-active,
.slide-prev-leave-active {
  transition: transform 0.18s ease, opacity 0.18s ease;
}

.slide-next-enter-from {
  transform: translateX(32px);
  opacity: 0;
}
.slide-next-leave-to {
  transform: translateX(-32px);
  opacity: 0;
}
.slide-prev-enter-from {
  transform: translateX(-32px);
  opacity: 0;
}
.slide-prev-leave-to {
  transform: translateX(32px);
  opacity: 0;
}
</style>
