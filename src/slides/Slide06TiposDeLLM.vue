<script setup>
import { closedModels, openWeightModels } from '../data/tools.js'
</script>

<template>
  <section class="slide">
    <p class="slide-eyebrow">Tipos de LLM</p>
    <h2 class="slide-title">Fechados vs. abertos</h2>
    <p class="slide-subtitle">
      Além disso, quase toda família de modelos tem variantes "raciocínio" (mais lentas e
      caras, para tarefas difíceis) e variantes rápidas/leves — geralmente chamadas de
      <em>mini</em>, <em>flash</em> ou <em>haiku</em>.
    </p>

    <div class="slide-body types-grid">
      <div class="card types-column">
        <h3><span class="types-column__dot" style="background: var(--accent-blue)"></span>Proprietários / fechados</h3>
        <p class="types-column__desc">Acesso via API ou assinatura, rodam na nuvem do fornecedor.</p>
        <ul>
          <li v-for="m in closedModels" :key="m">{{ m }}</li>
        </ul>
      </div>

      <div class="card types-column">
        <h3><span class="types-column__dot" style="background: var(--accent-yellow)"></span>Abertos / open-weight</h3>
        <p class="types-column__desc">Podem ser baixados e rodados localmente ou em infraestrutura própria.</p>
        <ul>
          <li v-for="m in openWeightModels" :key="m">{{ m }}</li>
        </ul>
        <p class="types-column__footnote">Algumas empresas, como a Mistral, oferecem tanto modelos abertos quanto fechados.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.types-column {
  padding: 24px;
}

.types-column h3 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
}

.types-column__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.types-column__desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-top: 8px;
  margin-bottom: 16px;
}

.types-column ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.types-column li {
  font-size: 0.9rem;
  color: var(--text-secondary);
  padding: 8px 12px;
  background: var(--surface-2);
  border-radius: 8px;
}

.types-column__footnote {
  margin-top: 12px;
  font-size: 0.76rem;
  color: var(--text-muted);
}
</style>
