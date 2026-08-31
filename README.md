# LLMs: conceitos e ferramentas

Apresentação de slides interativa (web, não é um PDF/PowerPoint exportado) que explica os
conceitos básicos de LLMs (Large Language Models) e apresenta um panorama das principais
ferramentas do mercado, com linguagem acessível e sem jargão técnico.

O conteúdo completo (em português) está especificado em [`SPEC.md`](./SPEC.md).

## Stack

Vue 3 + Vite — SPA sem router, navegação por slides.

## Como rodar

```bash
npm install
npm run dev       # servidor de desenvolvimento com hot reload
npm run build     # build de produção em dist/
npm run preview   # serve o build de produção localmente
```

## Estrutura

- `src/components/SlideDeck.vue` — controlador de navegação (teclado, clique, swipe).
- `src/slides/` — um componente por slide, na ordem definida em `src/slides/index.js`.
- `src/data/` — conteúdo reutilizável entre slides (cards de ferramentas, linha do tempo,
  tabela comparativa).
- `src/style.css` — tokens de design e primitivos de slide compartilhados.

Mais detalhes de arquitetura em [`CLAUDE.md`](./CLAUDE.md).
