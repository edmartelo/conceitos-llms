<script setup>
import ComparisonTable from '../components/ComparisonTable.vue'
import { comparisonColumns, comparisonRows } from '../data/comparisonData.js'
</script>

<template>
  <section class="slide">
    <p class="slide-eyebrow">Comparativo · anexo</p>
    <h2 class="slide-title">Tabela comparativa relativa</h2>
    <p class="slide-subtitle">
      Comparação relativa entre ferramentas, sem números exatos de benchmark, que ficam
      desatualizados rápido.
    </p>

    <div class="slide-body">
      <ComparisonTable :columns="comparisonColumns" :rows="comparisonRows" />
      <p class="table-caption">
        Percepção geral do mercado em 2026, baseada em benchmarks públicos de referência
        disponíveis até o momento, sujeita a mudar conforme novos modelos são lançados.
      </p>

      <div class="arena-callout">
        <span class="arena-callout__label">Quer testar você mesmo?</span>
        <p>
          Ferramentas de comparação lado a lado, como o
          <a href="https://arena.ai/text/side-by-side" target="_blank" rel="noopener noreferrer">LM Arena</a>,
          colocam duas IAs respondendo ao mesmo prompt sem identificar qual é qual, você vota na
          melhor resposta. É um jeito prático de testar empiricamente na sua própria tarefa, em vez
          de confiar só na percepção geral desta tabela.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.table-caption {
  margin-top: 12px;
  font-size: 0.78rem;
  color: var(--text-muted);
}

.arena-callout {
  margin-top: 20px;
  padding: 16px 20px;
  border-radius: 12px;
  background: var(--surface-1);
  border-left: 3px solid var(--accent-blue);
}

.arena-callout__label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent-blue);
}

.arena-callout p {
  margin-top: 6px;
  font-size: 0.88rem;
  color: var(--text-primary);
  line-height: 1.5;
}

.arena-callout a {
  color: var(--accent-blue);
  text-decoration: underline;
}
</style>
