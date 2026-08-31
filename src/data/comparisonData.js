// Níveis relativos (1 a 5), não números de benchmark — evita comparações que
// ficam desatualizadas rápido. Ver SPEC.md, seção 6.
export const LEVELS = ['Baixo', 'Médio', 'Médio-alto', 'Alto', 'Muito alto']

export const comparisonColumns = [
  { key: 'intelligence', label: 'Inteligência / raciocínio' },
  { key: 'cost', label: 'Custo-benefício' },
  { key: 'speed', label: 'Velocidade' },
  { key: 'context', label: 'Janela de contexto' },
  { key: 'agentic', label: 'Capacidade agentic' },
]

export const comparisonRows = [
  {
    name: 'OpenAI (GPT)',
    color: 'var(--accent-blue)',
    intelligence: 4,
    cost: 2,
    speed: 2,
    context: 4,
    agentic: 4,
  },
  {
    name: 'Anthropic (Claude)',
    color: 'var(--accent-orange)',
    intelligence: 4,
    cost: 2,
    speed: 2,
    context: 4,
    agentic: 5,
  },
  {
    name: 'Google (Gemini)',
    color: 'var(--accent-aqua)',
    intelligence: 4,
    cost: 4,
    speed: 4,
    context: 5,
    agentic: 3,
  },
  {
    name: 'Meta (Llama)',
    color: 'var(--accent-yellow)',
    intelligence: 2,
    cost: 5,
    speed: 2,
    context: 2,
    agentic: 2,
  },
  {
    name: 'DeepSeek',
    color: 'var(--accent-violet)',
    intelligence: 3,
    cost: 5,
    speed: 4,
    context: 3,
    agentic: 3,
  },
  {
    name: 'Qwen (Alibaba)',
    color: 'var(--accent-magenta)',
    intelligence: 3,
    cost: 5,
    speed: 3,
    context: 4,
    agentic: 2,
  },
]
