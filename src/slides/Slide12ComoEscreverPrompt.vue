<script setup>
const tips = [
  { n: '01', title: 'Seja específico', desc: 'Diga exatamente o resultado esperado, em vez de pedir algo vago.' },
  { n: '02', title: 'Dê contexto', desc: 'Quem é o público? Qual é o objetivo por trás do pedido?' },
  { n: '03', title: 'Peça um formato', desc: 'Lista, tabela, texto corrido, e-mail pronto: diga como quer receber a resposta.' },
  { n: '04', title: 'Itere', desc: 'Refine o pedido com base na resposta anterior, em vez de tentar acertar tudo de uma vez.' },
]
</script>

<template>
  <section class="slide">
    <p class="slide-eyebrow">Valor prático imediato</p>
    <h2 class="slide-title">Como escrever um bom prompt</h2>
    <p class="slide-subtitle">
      Depois de ver riscos e guardrails, veja como você mesmo consegue melhores respostas no dia
      a dia.
    </p>

    <div class="slide-body tips-grid">
      <div v-for="t in tips" :key="t.n" class="tip-card card">
        <span class="tip-card__number">{{ t.n }}</span>
        <h3>{{ t.title }}</h3>
        <p>{{ t.desc }}</p>
      </div>
    </div>

    <div class="prompt-example card">
      <span class="prompt-example__label">Exemplo</span>
      <p class="prompt-example__line prompt-example__line--bad">❌ "Escreva um post sobre marketing"</p>
      <p class="prompt-example__line prompt-example__line--good">
        ✅ "Escreva um post de LinkedIn (150 palavras, tom direto) anunciando o produto X para
        gestores de RH, destacando 3 benefícios"
      </p>
      <p class="prompt-example__line prompt-example__line--iterate">
        🔁 Depois, peça: "Deixe o tom mais informal e adicione uma chamada para ação no final."
      </p>
    </div>
  </section>
</template>

<style scoped>
.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.tip-card {
  padding: 20px;
}

.tip-card__number {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent-blue);
  margin-bottom: 10px;
}

.tip-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.tip-card p {
  font-size: 0.86rem;
  line-height: 1.5;
  color: var(--text-secondary);
}

.prompt-example {
  margin-top: 20px;
  padding: 18px 20px;
}

.prompt-example__label {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 10px;
}

.prompt-example__line {
  font-size: 0.88rem;
  line-height: 1.5;
  margin-top: 6px;
}

.prompt-example__line--bad {
  color: var(--text-muted);
}

.prompt-example__line--good {
  color: var(--text-primary);
  font-weight: 500;
}

.prompt-example__line--iterate {
  color: var(--text-secondary);
}
</style>
