<script setup>
import { LEVELS } from '../data/comparisonData.js'

defineProps({
  columns: {
    type: Array,
    required: true,
  },
  rows: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="comparison-scroll">
    <table class="comparison-table">
      <thead>
        <tr>
          <th scope="col">Ferramenta</th>
          <th scope="col" v-for="col in columns" :key="col.key">{{ col.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.name">
          <th scope="row">
            <span class="comparison-table__dot" :style="{ background: row.color }"></span>
            {{ row.name }}
          </th>
          <td v-for="col in columns" :key="col.key">
            <div class="rating" :aria-label="LEVELS[row[col.key] - 1]">
              <div class="rating__track">
                <div
                  class="rating__fill"
                  :style="{ width: (row[col.key] / LEVELS.length) * 100 + '%', background: row.color }"
                ></div>
              </div>
              <span class="rating__label">{{ LEVELS[row[col.key] - 1] }}</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.comparison-scroll {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: 14px;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 640px;
  font-size: 0.88rem;
}

.comparison-table th,
.comparison-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--gridline);
  white-space: nowrap;
}

.comparison-table thead th {
  color: var(--text-muted);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  background: var(--surface-1);
}

.comparison-table tbody th {
  color: var(--text-primary);
  font-weight: 600;
  background: var(--surface-1);
}

.comparison-table tbody tr:last-child td,
.comparison-table tbody tr:last-child th {
  border-bottom: none;
}

.comparison-table__dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 8px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 160px;
}

.rating__track {
  width: 64px;
  height: 6px;
  border-radius: 999px;
  background: var(--gridline);
  overflow: hidden;
  flex-shrink: 0;
}

.rating__fill {
  height: 100%;
  border-radius: 999px;
}

.rating__label {
  color: var(--text-secondary);
  font-size: 0.8rem;
}
</style>
