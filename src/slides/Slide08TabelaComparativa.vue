<script setup>
import ComparisonTable from '../components/ComparisonTable.vue'
import { comparisonColumns, comparisonRows } from '../data/comparisonData.js'
</script>

<template>
  <section class="slide">
    <p class="slide-eyebrow">Comparativo · anexo</p>
    <h2 class="slide-title">Tabela comparativa relativa</h2>
    <p class="slide-subtitle">
      Comparação relativa entre ferramentas — sem números exatos de benchmark, que ficam
      desatualizados rápido.
    </p>

    <div class="slide-body">
      <ComparisonTable :columns="comparisonColumns" :rows="comparisonRows" />
      <p class="table-caption">
        Percepção geral do mercado em 2026, sujeita a mudar conforme novos modelos são lançados.
      </p>
    </div>
  </section>
</template>

<style scoped>
.table-caption {
  margin-top: 12px;
  font-size: 0.78rem;
  color: var(--text-muted);
}
</style>
