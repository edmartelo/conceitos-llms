<script setup>
const cautions = [
  {
    title: 'Alucinação',
    desc: 'O modelo pode inventar informação com aparência de confiança — sem sinalizar que está incerto.',
    status: 'critical',
  },
  {
    title: 'Viés herdado',
    desc: 'Reflete padrões e desequilíbrios presentes nos dados de treinamento.',
    status: 'warning',
  },
  {
    title: 'Corte de conhecimento',
    desc: 'O modelo só "sabe" até a data em que foi treinado — para informação recente, ele depende de busca ou RAG.',
    status: 'warning',
  },
  {
    title: 'Agentes e dados sensíveis',
    desc: 'Um agente pode executar ações erradas ou irreversíveis sozinho, sem supervisão — e ferramentas na nuvem não são o lugar certo para dados sensíveis.',
    status: 'warning',
  },
]
</script>

<template>
  <section class="slide">
    <p class="slide-eyebrow">Slide de credibilidade</p>
    <h2 class="slide-title">Limitações e cuidados</h2>
    <p class="slide-subtitle">Nenhum LLM deve ser tratado como uma fonte infalível.</p>

    <div class="slide-body caution-grid">
      <div v-for="c in cautions" :key="c.title" class="caution-card card" :class="`caution-card--${c.status}`">
        <span class="caution-card__icon">!</span>
        <div>
          <h3>{{ c.title }}</h3>
          <p>{{ c.desc }}</p>
        </div>
      </div>
    </div>

    <div class="recommendation">
      <span class="recommendation__label">Recomendação</span>
      <p>Sempre revise output crítico. Não confie cegamente — trate o LLM como um assistente rápido, não como veredito final.</p>
    </div>
  </section>
</template>

<style scoped>
.caution-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.caution-card {
  padding: 18px 20px;
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.caution-card__icon {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.9rem;
  color: #0d0d0d;
}

.caution-card--critical {
  border-color: var(--status-critical);
}
.caution-card--critical .caution-card__icon {
  background: var(--status-critical);
}

.caution-card--warning {
  border-color: var(--status-warning);
}
.caution-card--warning .caution-card__icon {
  background: var(--status-warning);
}

.caution-card h3 {
  font-size: 0.98rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.caution-card p {
  font-size: 0.86rem;
  line-height: 1.5;
  color: var(--text-secondary);
}

.recommendation {
  margin-top: 22px;
  padding: 16px 20px;
  border-radius: 12px;
  background: var(--surface-1);
  border-left: 3px solid var(--status-good);
}

.recommendation__label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--status-good);
}

.recommendation p {
  margin-top: 6px;
  font-size: 0.9rem;
  color: var(--text-primary);
  line-height: 1.5;
}
</style>
