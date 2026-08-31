export const mainTools = [
  {
    id: 'openai',
    company: 'OpenAI',
    product: 'ChatGPT / GPT',
    initials: 'AI',
    color: 'var(--accent-blue)',
    type: 'Fechado (API/assinatura)',
    tagline: 'O assistente mais completo e popular, forte em criatividade e produtividade geral.',
    useCaseLabel: 'Caso de uso',
    useCase: 'Gerar ideias para uma campanha de marketing em poucos minutos.',
  },
  {
    id: 'anthropic',
    company: 'Anthropic',
    product: 'Claude',
    initials: 'C',
    color: 'var(--accent-orange)',
    type: 'Fechado (API/assinatura)',
    tagline: 'Foco em segurança, tarefas longas e uso de ferramentas (agentic), muito usado por desenvolvedores.',
    useCaseLabel: 'Caso de uso',
    useCase: 'Revisar um contrato de 50 páginas ou programar um sistema inteiro.',
  },
  {
    id: 'google',
    company: 'Google',
    product: 'Gemini',
    initials: 'G',
    color: 'var(--accent-aqua)',
    type: 'Fechado (API/assinatura)',
    tagline: 'Forte integração com Workspace e Busca, muito bom em tarefas multimodais.',
    useCaseLabel: 'Caso de uso',
    useCase: 'Analisar uma planilha e gerar um gráfico automaticamente.',
  },
  {
    id: 'meta',
    company: 'Meta',
    product: 'Llama',
    initials: 'L',
    color: 'var(--accent-yellow)',
    type: 'Aberto (open-weight, self-hosted)',
    tagline: 'Principal opção open-weight, sem custo de licença para a maioria dos usos, pode rodar dentro da própria empresa.',
    useCaseLabel: 'Caso de uso',
    useCase: 'Empresa que não pode enviar dados sensíveis para a nuvem.',
  },
]

export const otherTools = [
  { name: 'xAI (Grok)', note: 'custo-benefício' },
  { name: 'DeepSeek', note: 'custo-benefício' },
  { name: 'Qwen (Alibaba)', note: 'custo-benefício' },
]

export const openWeightModels = ['Llama (Meta)', 'DeepSeek', 'Qwen (Alibaba)', 'Mistral', 'GLM']

export const closedModels = ['GPT (OpenAI)', 'Claude (Anthropic)', 'Gemini (Google)']
