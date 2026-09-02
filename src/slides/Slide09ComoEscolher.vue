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
    examples: 'ex.: Opus, GPT (modelo topo de linha da OpenAI), Gemini Pro',
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
    pick: 'Modelo open-weight self-hosted',
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

    <div class="slide-body">
      <div class="rules-scroll">
        <table class="rules-table">
          <thead>
            <tr>
              <th scope="col">Cenário</th>
              <th scope="col">Modelo recomendado</th>
              <th scope="col">Exemplos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in rules" :key="r.scenario">
              <th scope="row">
                <span class="rules-table__dot" :style="{ background: r.color }"></span>
                {{ r.scenario }}
              </th>
              <td class="rules-table__pick">{{ r.pick }}</td>
              <td class="rules-table__examples">{{ r.examples }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="table-footnote">
        Para tarefas complexas, "modelo topo de linha" muitas vezes significa também ativar o
        modo de raciocínio (visto no slide "O que é um LLM?").
      </p>
    </div>
  </section>
</template>

<style scoped>
.rules-scroll {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: 14px;
}

.rules-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 560px;
  font-size: 0.88rem;
}

.rules-table th,
.rules-table td {
  padding: 14px 18px;
  text-align: left;
  border-bottom: 1px solid var(--gridline);
}

.rules-table thead th {
  color: var(--text-muted);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  background: var(--surface-1);
}

.rules-table tbody th {
  color: var(--text-primary);
  font-weight: 600;
  background: var(--surface-1);
  white-space: nowrap;
}

.rules-table tbody tr:last-child td,
.rules-table tbody tr:last-child th {
  border-bottom: none;
}

.rules-table__dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 8px;
}

.rules-table__pick {
  font-weight: 700;
  color: var(--text-primary);
}

.rules-table__examples {
  color: var(--text-muted);
  font-size: 0.82rem;
}

.table-footnote {
  margin-top: 12px;
  font-size: 0.82rem;
  color: var(--text-muted);
}
</style>
