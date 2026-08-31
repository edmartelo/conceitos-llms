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
    <p class="slide-subtitle">
      O modelo aprende padrões de linguagem lendo uma quantidade enorme de texto
      (livros, artigos, código, sites) antes de responder a qualquer pergunta. Depois,
      ele não lê letra por letra — ele lê e gera <strong>tokens</strong>, pedaços de
      palavras.
    </p>

    <div class="slide-body context-diagram">
      <p class="context-diagram__caption">
        A <strong>janela de contexto</strong> é como uma caixa com espaço limitado: conforme a
        conversa cresce, ela vai enchendo de tokens — até atingir o limite do modelo.
      </p>

      <div class="context-boxes">
        <div v-for="ex in examples" :key="ex.label" class="context-box">
          <span class="context-box__label">{{ ex.label }}</span>
          <div class="context-grid">
            <span v-for="i in ex.total" :key="i" :class="cellClass(i - 1, ex.used)"></span>
          </div>
        </div>
      </div>

      <div class="context-legend">
        <span class="context-legend__item"><span class="context-cell context-cell--used"></span> tokens já usados</span>
        <span class="context-legend__item"><span class="context-cell"></span> espaço ainda disponível</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.context-diagram__caption {
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--text-secondary);
  max-width: 62ch;
  margin-bottom: 20px;
}

.context-boxes {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
}

.context-box {
  padding: 18px 20px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-1);
}

.context-box__label {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.context-grid {
  display: grid;
  grid-template-columns: repeat(10, 24px);
  gap: 5px;
}

.context-cell {
  width: 24px;
  height: 24px;
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
  margin-top: 16px;
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
</style>
