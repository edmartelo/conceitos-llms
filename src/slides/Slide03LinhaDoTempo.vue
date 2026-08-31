<script setup>
import { timeline } from '../data/timeline.js'
</script>

<template>
  <section class="slide">
    <p class="slide-eyebrow">Contexto histórico</p>
    <h2 class="slide-title">Linha do tempo rápida</h2>
    <p class="slide-subtitle">
      Por que existem tantas ferramentas hoje e para onde o mercado está indo.
    </p>

    <div class="slide-body timeline">
      <div class="timeline__line"></div>
      <div v-for="(item, i) in timeline" :key="item.title" class="timeline__item">
        <span class="timeline__dot" :class="{ 'timeline__dot--last': i === timeline.length - 1 }"></span>
        <span class="timeline__period">{{ item.period }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  padding-top: 8px;
}

.timeline__line {
  position: absolute;
  top: 5px;
  left: calc(100% / 12 - 8px);
  right: calc(100% / 12 - 8px);
  height: 2px;
  background: var(--gridline);
}

.timeline__item {
  position: relative;
  padding-top: 24px;
}

.timeline__dot {
  position: absolute;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent-blue);
  box-shadow: 0 0 0 4px var(--page);
}

.timeline__dot--last {
  background: var(--accent-orange);
}

.timeline__period {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent-blue);
  margin-bottom: 4px;
}

.timeline__item h3 {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.timeline__item p {
  font-size: 0.78rem;
  line-height: 1.45;
  color: var(--text-secondary);
}

@media (max-width: 860px) {
  .timeline {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .timeline__line {
    top: 5px;
    bottom: auto;
    left: 5px;
    right: auto;
    width: 2px;
    height: calc(100% - 10px);
  }

  .timeline__item {
    padding-top: 0;
    padding-left: 24px;
  }

  .timeline__dot {
    top: 4px;
    left: 0;
  }
}
</style>
