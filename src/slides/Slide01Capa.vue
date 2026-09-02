<template>
  <section class="slide slide-cover">
    <p class="slide-eyebrow">Guia rápido</p>
    <h1 class="cover-title">LLMs: o que são<br />e como usar bem</h1>
    <p class="slide-subtitle cover-subtitle">
      Conceitos básicos de Large Language Models e um panorama prático das
      principais ferramentas do mercado.
    </p>
    <div class="cover-tags">
      <span class="pill">Conceitos</span>
      <span class="pill">Ferramentas de mercado</span>
      <span class="pill">Como escolher</span>
      <span class="pill">Boas práticas de prompt</span>
    </div>
  </section>
</template>

<style scoped>
.slide-cover {
  justify-content: center;
}

.cover-title {
  font-size: clamp(2.4rem, 6vw, 4.2rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.01em;
  background: linear-gradient(120deg, var(--text-primary) 0%, var(--text-secondary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.cover-subtitle {
  margin-top: 20px;
  max-width: 56ch;
}

.cover-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: clamp(28px, 5vw, 48px);
}
</style>
