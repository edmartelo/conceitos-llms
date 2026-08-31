<script setup>
const modelTypes = [
  {
    name: 'Modelo base',
    color: 'var(--accent-blue)',
    desc: 'Só aprendeu a prever o próximo pedaço de texto. Não segue instruções nem conversa de forma natural.',
  },
  {
    name: 'Modelo instruct / chat',
    color: 'var(--accent-orange)',
    desc: 'Foi ajustado para seguir instruções e conversar — é o que usamos no ChatGPT, Claude, Gemini etc.',
  },
  {
    name: 'Modelo de raciocínio',
    color: 'var(--accent-aqua)',
    desc: 'Antes de responder, gera passos intermediários de "pensamento" para tarefas mais complexas.',
  },
]

const glossary = [
  { term: 'Parâmetros', desc: 'Os "ajustes internos" do modelo, aprendidos durante o treinamento. Mais parâmetros geralmente ajuda, mas hoje a qualidade dos dados de treino e a técnica usada pesam tanto quanto o tamanho.' },
  { term: 'Tokens', desc: 'Pedaços de texto (não letras, nem sempre palavras inteiras) que o modelo lê e gera.' },
  { term: 'Janela de contexto', desc: 'Quantidade de texto que o modelo consegue "ter em mente" ao mesmo tempo em uma conversa.' },
  { term: 'Fine-tuning', desc: 'Treinamento adicional, mais específico, para especializar um modelo em uma tarefa ou domínio.' },
  { term: 'RAG', desc: 'Retrieval-Augmented Generation: o modelo busca informação externa antes de responder, em vez de confiar só na memória.' },
  { term: 'API', desc: 'Forma de um app "conversar" com o modelo pela internet — é assim que ferramentas de terceiros usam um LLM sem rodar nada localmente.' },
  { term: 'Multimodal', desc: 'Modelo que entende e gera mais de um tipo de conteúdo — texto, imagem, áudio — dentro do mesmo sistema.' },
]
</script>

<template>
  <section class="slide">
    <p class="slide-eyebrow">Conceito básico</p>
    <h2 class="slide-title">O que é um LLM?</h2>
    <p class="slide-subtitle">
      Um <strong>LLM (Large Language Model)</strong> é um modelo de linguagem treinado em
      grandes volumes de texto para prever e gerar linguagem — como um leitor que absorveu
      uma fração enorme da internet e aprendeu os padrões de como as palavras se encaixam.
    </p>

    <div class="slide-body llm-types">
      <article v-for="t in modelTypes" :key="t.name" class="card llm-type">
        <span class="llm-type__bar" :style="{ background: t.color }"></span>
        <h3>{{ t.name }}</h3>
        <p>{{ t.desc }}</p>
      </article>
    </div>

    <div class="glossary">
      <div v-for="g in glossary" :key="g.term" class="glossary__item">
        <h4>{{ g.term }}</h4>
        <p>{{ g.desc }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.llm-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.llm-type {
  padding: 18px 20px;
  position: relative;
  padding-left: 24px;
}

.llm-type__bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 4px 0 0 4px;
}

.llm-type h3 {
  font-size: 0.98rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.llm-type p {
  font-size: 0.86rem;
  line-height: 1.5;
  color: var(--text-secondary);
}

.glossary {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  border-top: 1px solid var(--gridline);
  padding-top: 20px;
}

.glossary__item h4 {
  font-size: 0.86rem;
  font-weight: 700;
  color: var(--accent-blue);
  margin-bottom: 4px;
}

.glossary__item p {
  font-size: 0.8rem;
  line-height: 1.45;
  color: var(--text-secondary);
}
</style>
