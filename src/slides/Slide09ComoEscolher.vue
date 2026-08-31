<script setup>
const criteria = ['Inteligência / raciocínio', 'Custo por tarefa', 'Velocidade', 'Janela de contexto', 'Capacidade agentic']

const rules = [
  {
    scenario: 'Uso geral do dia a dia',
    pick: 'Modelo custo-benefício',
    examples: 'ex.: Sonnet, GPT mini, Gemini Flash',
    color: 'var(--accent-blue)',
  },
  {
    scenario: 'Tarefas complexas / código crítico',
    pick: 'Modelo topo de linha',
    examples: 'ex.: Opus, GPT-5, Gemini Pro',
    color: 'var(--accent-orange)',
  },
  {
    scenario: 'Alto volume / tarefas simples',
    pick: 'Modelo leve e barato',
    examples: 'ex.: Haiku, mini, Flash-Lite',
    color: 'var(--accent-aqua)',
  },
  {
    scenario: 'Dados sensíveis',
    pick: 'Modelo open source self-hosted',
    examples: 'ex.: Llama',
    color: 'var(--accent-yellow)',
  },
]
</script>

<template>
  <section class="slide">
    <p class="slide-eyebrow">Guia prático</p>
    <h2 class="slide-title">Como escolher o modelo certo</h2>
    <p class="slide-subtitle">Critérios: {{ criteria.join(' · ') }}.</p>

    <div class="slide-body rules-list">
      <div v-for="r in rules" :key="r.scenario" class="rule-row card">
        <span class="rule-row__bar" :style="{ background: r.color }"></span>
        <div class="rule-row__scenario">{{ r.scenario }}</div>
        <div class="rule-row__arrow">→</div>
        <div class="rule-row__pick">
          {{ r.pick }}
          <span class="rule-row__examples">{{ r.examples }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.rules-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.rule-row {
  position: relative;
  padding: 16px 20px 16px 24px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 14px;
}

.rule-row__bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 4px 0 0 4px;
}

.rule-row__scenario {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.rule-row__arrow {
  color: var(--text-muted);
}

.rule-row__pick {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.rule-row__examples {
  font-size: 0.76rem;
  font-weight: 400;
  color: var(--text-muted);
}

@media (max-width: 700px) {
  .rule-row {
    grid-template-columns: 1fr;
    justify-items: start;
    gap: 6px;
  }
}
</style>
