<script setup>
const takeaways = [
  'LLM é o motor de linguagem; Agente é esse motor + ferramentas para executar tarefas sozinho.',
  'Não existe "o melhor modelo" — existe o modelo certo para cada tarefa e orçamento.',
  'Sempre revise output crítico: alucinação e viés são reais.',
  'Um bom prompt tem contexto, especificidade, formato de saída e é refinado por iteração.',
]
</script>

<template>
  <section class="slide slide-closing">
    <p class="slide-eyebrow">Resumo</p>
    <h2 class="slide-title">Encerramento</h2>

    <ul class="slide-body takeaway-list">
      <li v-for="(t, i) in takeaways" :key="i" class="takeaway">
        <span class="takeaway__marker"></span>
        <p>{{ t }}</p>
      </li>
    </ul>

    <p class="closing-note">Obrigado!</p>
  </section>
</template>

<style scoped>
.takeaway-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 68ch;
}

.takeaway {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.takeaway__marker {
  flex-shrink: 0;
  margin-top: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-blue);
}

.takeaway p {
  font-size: 1rem;
  line-height: 1.55;
  color: var(--text-secondary);
}

.closing-note {
  margin-top: clamp(32px, 6vw, 56px);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
}
</style>
