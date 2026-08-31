<script setup>
import ToolCard from '../components/ToolCard.vue'
import { mainTools, otherTools } from '../data/tools.js'
</script>

<template>
  <section class="slide">
    <p class="slide-eyebrow">Panorama do mercado</p>
    <h2 class="slide-title">Principais ferramentas</h2>
    <p class="slide-subtitle">Cada uma com um ponto forte diferente — e um caso de uso onde brilha mais.</p>

    <div class="slide-body tools-grid">
      <ToolCard v-for="tool in mainTools" :key="tool.id" :tool="tool" />
    </div>

    <div class="other-tools">
      <span class="other-tools__label">Outros relevantes, fortes em custo-benefício:</span>
      <span v-for="t in otherTools" :key="t.name" class="pill">{{ t.name }}</span>
    </div>
  </section>
</template>

<style scoped>
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}

.other-tools {
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.other-tools__label {
  font-size: 0.82rem;
  color: var(--text-muted);
}
</style>
