<template>
  <section class="slide">
    <p class="slide-eyebrow">Conceito importante</p>
    <h2 class="slide-title">Modelo vs. Agente</h2>
    <p class="slide-subtitle">
      <strong>LLM</strong> é o "motor de linguagem" que gera texto. <strong>Agente</strong> é um
      sistema que usa esse motor + ferramentas (busca, código, arquivos, apps) para executar
      tarefas com várias etapas, de forma autônoma (a principal tendência do mercado em 2026).
    </p>

    <div class="slide-body flow-panels">
      <div class="flow-panel card">
        <h3>Modo chat <span class="flow-panel__tag">só o modelo</span></h3>
        <div class="flow-steps">
          <div class="flow-step">Usuário faz uma pergunta</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step flow-step--accent">LLM gera uma resposta em texto</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">Fim da tarefa</div>
        </div>
      </div>

      <div class="flow-panel card flow-panel--agent">
        <h3>Modo agente <span class="flow-panel__tag flow-panel__tag--accent">modelo + ferramentas</span></h3>
        <div class="flow-steps">
          <div class="flow-step">Usuário pede uma tarefa completa</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-loop">
            <div class="flow-step flow-step--accent">LLM decide o próximo passo</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-step">Usa uma ferramenta (busca, código, arquivos...)</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-step">Avalia o resultado</div>
            <div class="flow-loop__back">↻ repete até concluir</div>
          </div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">Tarefa concluída de ponta a ponta</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.flow-panels {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  align-items: start;
}

.flow-panel {
  padding: 16px 18px;
}

.flow-panel h3 {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.flow-panel--agent {
  border-color: var(--accent-orange);
}

.flow-panel__tag {
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-muted);
}

.flow-panel__tag--accent {
  color: var(--accent-orange);
}

.flow-steps {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 4px;
}

.flow-step {
  padding: 7px 14px;
  border-radius: 8px;
  background: var(--surface-2);
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-align: center;
}

.flow-step--accent {
  color: var(--text-primary);
  font-weight: 600;
  border: 1px solid var(--accent-blue);
}

.flow-arrow {
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1;
}

.flow-loop {
  border: 1px dashed var(--border);
  border-radius: 10px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.flow-loop__back {
  text-align: center;
  font-size: 0.72rem;
  color: var(--accent-orange);
  font-weight: 600;
  margin-top: 0;
}
</style>
