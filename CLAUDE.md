# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

A web-based slide presentation (not a PDF/PowerPoint export) that teaches the basic concepts of
LLMs (Large Language Models) and the main market tools, aimed at an audience that needs an
accessible, non-jargon explanation with good visual/content balance.

The full content spec (in Portuguese) is in `instrucoes.md` — it defines the required slide
content, order, and technical constraints, and is the authoritative source for what each slide
should say. Read it before changing slide content or adding/removing slides.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start the Vite dev server (hot reload)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally

There is no test suite or linter configured.

## Architecture

Vue 3 + Vite, single-page app, no router — it's a slide deck, not a multi-route site.

- `src/components/SlideDeck.vue` — the navigation controller. Owns `currentIndex`, renders
  `slides[currentIndex]` via `<component :is>` inside a `<Transition>`, and wires up
  keyboard (arrow/Home/End), click (prev/next buttons + dot indicators), and touch-swipe
  navigation. **Only one slide transition plays at a time** — `goTo()` locks navigation for
  `TRANSITION_MS` (see the comment in that file) and ignores input while a transition is in
  flight. This is load-bearing: with Vue's default (non-`out-in`) transition mode, firing a
  new navigation before the previous transition finishes causes leave transitions to never
  resolve, leaving stale slide content stacked/stuck in the DOM. Don't remove the lock or
  switch back to `mode="out-in"` without re-testing rapid key-repeat/click navigation.
- `src/slides/index.js` — the ordered array of `{ component, title }` that defines the deck.
  Add/remove/reorder slides here; each slide is a standalone component under `src/slides/`.
- `src/slides/*.vue` — one component per slide, matching the structure in `instrucoes.md`.
  Slides that need reusable content pull from `src/data/*.js` (tool cards, timeline entries,
  comparison-table ratings); slides with a one-off visual (the context-window diagram, the
  model-vs-agent flow diagram, the timeline) build it inline with plain CSS/HTML rather than a
  shared component, since those diagrams aren't reused elsewhere.
- `src/components/ToolCard.vue`, `ComparisonTable.vue` — reusable presentational components
  used by the tools slide and the comparison-table slide respectively.
- `src/style.css` — global design tokens (CSS custom properties) and shared slide primitives
  (`.slide`, `.slide-title`, `.card`, `.pill`, etc.) that every slide component builds on. The
  app is dark-theme-only (no light-mode/theme-toggle support).

## Content/design constraints from the spec

- Avoid hardcoding exact benchmark numbers or prices on slides — they go stale quickly. The
  comparison table (`src/data/comparisonData.js`) uses relative qualitative levels
  (Baixo/Médio/Médio-alto/Alto/Muito alto), not numbers — keep new comparative content in that
  same style.
- Keep language accessible; don't use technical jargon without explaining it inline.
- No quiz slide — an interactive quiz was explicitly removed at the user's request even though
  `instrucoes.md` lists one as an optional slide.
