<script setup>
const examples = [
  { label: 'Início de uma conversa curta', total: 60, used: 8 },
  { label: 'Conversa longa, quase no limite', total: 60, used: 52 },
]

function cellClass(i, used) {
  return i < used ? 'context-cell context-cell--used' : 'context-cell'
}
</script>

<template>
  <section class="slide">
    <p class="slide-eyebrow">Conceito básico</p>
    <h2 class="slide-title">Como um LLM funciona, na prática</h2>

    <div class="slide-body context-layout">
      <div class="context-text">
        <p class="slide-subtitle">
          Na fase de <strong>treinamento</strong>, o modelo lê uma quantidade enorme de texto
          (livros, artigos, código, sites) e ajusta bilhões de "parâmetros" internos até ficar
          bom em prever o que vem a seguir. Na hora de responder, ele gera a resposta um
          <strong>token</strong> (pedaço de palavra) de cada vez: a cada passo, calcula qual é o
          próximo token mais provável dado tudo o que já foi dito, acrescenta esse token e
          repete — é por isso que às vezes ele muda de direção no meio de uma resposta.
        </p>

        <p class="context-diagram__caption">
          Todo esse texto — o que você escreveu e o que o modelo já gerou — precisa caber na
          <strong>janela de contexto</strong>: uma caixa com espaço limitado que vai enchendo de
          tokens conforme a conversa cresce, até atingir o limite do modelo.
        </p>
      </div>

      <div class="context-panel">
        <div class="context-legend">
          <span class="context-legend__item"><span class="context-cell context-cell--used"></span> tokens já usados</span>
          <span class="context-legend__item"><span class="context-cell"></span> espaço ainda disponível</span>
        </div>

        <div class="context-boxes">
          <div v-for="ex in examples" :key="ex.label" class="context-box">
            <span class="context-box__label">{{ ex.label }}</span>
            <div class="context-grid">
              <span v-for="i in ex.total" :key="i" :class="cellClass(i - 1, ex.used)"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.context-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 40px;
  align-items: start;
}

.context-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.context-diagram__caption {
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--text-secondary);
  max-width: 60ch;
}

.context-panel {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.context-boxes {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.context-box {
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-1);
}

.context-box__label {
  display: block;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.context-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 5px;
  width: 300px;
}

.context-cell {
  aspect-ratio: 1;
  border-radius: 3px;
  background: var(--gridline);
}

.context-cell--used {
  background: var(--accent-blue);
}

.context-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.context-legend__item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  color: var(--text-secondary);
}

.context-legend__item .context-cell {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

@media (max-width: 860px) {
  .context-layout {
    grid-template-columns: 1fr;
  }
}
</style>
