<script setup>
defineProps({
  tool: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="tool-card card">
    <header class="tool-card__header">
      <div class="tool-card__badge" :style="{ background: tool.color }">{{ tool.initials }}</div>
      <div>
        <h3 class="tool-card__company">{{ tool.company }}</h3>
        <p class="tool-card__product">{{ tool.product }}</p>
      </div>
    </header>

    <span class="pill tool-card__type">{{ tool.type }}</span>

    <p class="tool-card__tagline">{{ tool.tagline }}</p>

    <div class="tool-card__usecase" :style="{ borderColor: tool.color }">
      <span class="tool-card__usecase-label">{{ tool.useCaseLabel }}</span>
      <p>{{ tool.useCase }}</p>
    </div>
  </article>
</template>

<style scoped>
.tool-card {
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 0;
}

.tool-card__header {
  display: flex;
  align-items: center;
  gap: 14px;
}

.tool-card__badge {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  color: #0d0d0d;
}

.tool-card__company {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
}

.tool-card__product {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.tool-card__type {
  align-self: flex-start;
}

.tool-card__tagline {
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--text-secondary);
}

.tool-card__usecase {
  margin-top: auto;
  padding: 10px 14px;
  border-left: 3px solid;
  background: var(--surface-2);
  border-radius: 0 8px 8px 0;
}

.tool-card__usecase-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.tool-card__usecase p {
  margin-top: 4px;
  font-size: 0.88rem;
  color: var(--text-primary);
  line-height: 1.4;
}
</style>
