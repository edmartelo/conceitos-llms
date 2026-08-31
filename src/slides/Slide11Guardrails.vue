<script setup>
const guardrails = [
  {
    n: '01',
    title: 'Permissões explícitas',
    desc: 'Regra de projeto: o agente deve acessar só as ferramentas e os dados necessários para aquela tarefa específica, nunca mais que isso. Ex.: um agente de atendimento só vê o histórico daquele cliente, não o banco de dados inteiro.',
  },
  {
    n: '02',
    title: 'Aprovação humana para ações irreversíveis',
    desc: 'Enviar um e-mail, apagar um arquivo ou fazer um pagamento passam por confirmação antes de executar.',
  },
  {
    n: '03',
    title: 'Sandboxing',
    desc: 'O agente roda em um ambiente isolado, sem acesso direto a sistemas de produção ou dados sensíveis. Ex.: um agente que testa código roda numa máquina descartável, não no servidor real da empresa.',
  },
  {
    n: '04',
    title: 'Limites de escopo e orçamento',
    desc: 'Restrição de quantas ações, quanto tempo ou quanto custo o agente pode gastar antes de parar e pedir orientação.',
  },
  {
    n: '05',
    title: 'Desconfiança de conteúdo externo',
    desc: 'Texto vindo de páginas, e-mails ou documentos que o agente lê é tratado como não confiável; instruções escondidas nesse conteúdo não são obedecidas automaticamente.',
  },
  {
    n: '06',
    title: 'Registro e auditoria',
    desc: 'Toda ação do agente fica registrada, para que seja possível revisar depois o que foi feito e por quê.',
  },
]
</script>

<template>
  <section class="slide">
    <p class="slide-eyebrow">Segurança de agentes</p>
    <h2 class="slide-title">Guardrails: contendo um agente autônomo</h2>
    <p class="slide-subtitle">
      Guardrails são as regras e mecanismos que limitam o que um agente pode fazer sozinho,
      a resposta direta ao risco de ações erradas ou irreversíveis sem supervisão.
    </p>

    <div class="slide-body guardrails-grid">
      <div v-for="g in guardrails" :key="g.n" class="guardrail-card card">
        <span class="guardrail-card__number">{{ g.n }}</span>
        <h3>{{ g.title }}</h3>
        <p>{{ g.desc }}</p>
      </div>
    </div>

    <div class="recommendation">
      <span class="recommendation__label">Por que importa</span>
      <p>
        Um agente sem supervisão pode executar ações erradas ou irreversíveis. Guardrails
        existem exatamente para conter esse risco: quanto mais autonomia o agente tem, mais
        guardrails são necessários.
      </p>
    </div>
  </section>
</template>

<style scoped>
.guardrails-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.guardrail-card {
  padding: 20px;
}

.guardrail-card__number {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent-blue);
  margin-bottom: 10px;
}

.guardrail-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.guardrail-card p {
  font-size: 0.86rem;
  line-height: 1.5;
  color: var(--text-secondary);
}

.recommendation {
  margin-top: 22px;
  padding: 16px 20px;
  border-radius: 12px;
  background: var(--surface-1);
  border-left: 3px solid var(--status-warning);
}

.recommendation__label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--status-warning);
}

.recommendation p {
  margin-top: 6px;
  font-size: 0.9rem;
  color: var(--text-primary);
  line-height: 1.5;
}
</style>
