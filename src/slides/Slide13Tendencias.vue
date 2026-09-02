<script setup>
const trends = [
  {
    title: 'Contexto gigante virou padrão',
    desc: 'Janelas de contexto de milhões de tokens já estão disponíveis na maioria dos principais modelos, embora o tamanho padrão ainda varie bastante entre fornecedores.',
    color: 'var(--accent-blue)',
  },
  {
    title: 'A competição mudou de eixo',
    desc: 'Saiu de "quem é mais inteligente" para "quem executa tarefas longas com ferramentas de forma confiável".',
    color: 'var(--accent-orange)',
  },
  {
    title: 'Preços caindo, modelos leves melhorando',
    desc: 'Modelos leves e baratos ficam cada vez mais competentes para o uso do dia a dia.',
    color: 'var(--accent-aqua)',
  },
]
</script>

<template>
  <section class="slide">
    <p class="slide-eyebrow">Para onde o mercado vai</p>
    <h2 class="slide-title">Tendências do mercado</h2>

    <div class="slide-body trends-grid">
      <div v-for="t in trends" :key="t.title" class="trend-card card">
        <span class="trend-card__bar" :style="{ background: t.color }"></span>
        <h3>{{ t.title }}</h3>
        <p>{{ t.desc }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trends-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.trend-card {
  padding: 20px;
  position: relative;
  padding-top: 24px;
}

.trend-card__bar {
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  height: 3px;
  border-radius: 0 0 4px 4px;
}

.trend-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.trend-card p {
  font-size: 0.86rem;
  line-height: 1.5;
  color: var(--text-secondary);
}
</style>
