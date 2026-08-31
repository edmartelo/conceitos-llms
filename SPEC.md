PROJETO: Apresentação de slides web sobre LLMs (Large Language Models)

OBJETIVO
Criar uma apresentação de slides (web) explicando os conceitos básicos de LLMs 
e as principais ferramentas do mercado, de forma didática, prática e com bom 
equilíbrio entre visual e conteúdo técnico acessível.

ESCOPO DE CONTEÚDO

1. O que é um LLM (conceito básico)
   - Modelo de linguagem treinado em grandes volumes de texto para prever/gerar linguagem
   - Diferença entre modelo base, modelo "instruct/chat" e modelo de raciocínio (reasoning)
   - Conceitos-chave a explicar de forma simples: parâmetros, tokens, janela de contexto, 
     fine-tuning, RAG (Retrieval-Augmented Generation)

2. Linha do tempo rápida (contexto histórico)
   - GPT-3 → ChatGPT (popularização) → modelos multimodais (texto+imagem+voz) → 
     modelos de raciocínio → era dos agentes (2025-2026)
   - Objetivo: mostrar por que existem tantas ferramentas hoje e para onde o mercado vai

3. Modelo vs Agente (conceito importante, merece slide próprio)
   - LLM = o "motor de linguagem" que gera texto
   - Agente = sistema que usa esse motor + ferramentas (busca, código, arquivos, apps) 
     para executar tarefas com múltiplas etapas de forma autônoma
   - Essa é a principal tendência do mercado em 2026: sair de "responder perguntas" 
     para "executar tarefas sozinho"

4. Tipos de LLMs no mercado
   - Modelos proprietários/fechados (acesso via API/assinatura): GPT (OpenAI), Claude 
     (Anthropic), Gemini (Google)
   - Modelos abertos/open-weight (podem rodar localmente): Llama (Meta), DeepSeek, 
     Qwen (Alibaba), Mistral, GLM
   - Modelos "raciocínio" vs modelos rápidos/leves (variantes "mini", "flash", "haiku")

5. Principais ferramentas do mercado + caso de uso prático de cada uma
   - OpenAI (ChatGPT/GPT): assistente mais completo e popular, forte em criatividade 
     e produtividade geral → ex: gerar ideias para campanha de marketing
   - Anthropic (Claude): foco em segurança, tarefas longas e uso de ferramentas 
     (agentic), muito usado por desenvolvedores → ex: revisar um contrato de 50 páginas 
     ou programar um sistema inteiro
   - Google (Gemini): forte integração com Workspace/Busca, bom em multimodal 
     → ex: analisar uma planilha e gerar gráfico automaticamente
   - Meta (Llama): principal opção open source/self-hosted, sem custo de licença 
     → ex: empresa que não pode enviar dados sensíveis para a nuvem
   - Outros relevantes: xAI (Grok), DeepSeek, Qwen — fortes em custo-benefício

6. Como comparar/escolher um LLM
   - Critérios: inteligência/raciocínio, custo por tarefa, velocidade, janela de 
     contexto, capacidade agentic
   - Regra prática (evitar números exatos de benchmark, usar comparação relativa):
     • Uso geral do dia a dia → modelo custo-benefício (ex: Sonnet, GPT mini, Gemini Flash)
     • Tarefas complexas/código crítico → modelo topo de linha (ex: Opus, GPT-5, Gemini Pro)
     • Alto volume/tarefas simples → modelo leve/barato (ex: Haiku, mini, Flash-Lite)
     • Dados sensíveis → modelo open source self-hosted (Llama)

7. Limitações e cuidados (slide de credibilidade)
   - Alucinação: o modelo pode inventar informação com aparência de confiança
   - Viés herdado dos dados de treinamento
   - Corte de conhecimento: o modelo só "sabe" até a data em que foi treinado
   - Recomendação: sempre revisar output crítico, não confiar cegamente

7b. Guardrails (segurança de agentes)
   - Conceito: regras e mecanismos que limitam o que um agente pode fazer sozinho,
     resposta direta ao risco de ações erradas ou irreversíveis sem supervisão
     (risco introduzido no slide de Limitações)
   - Mecanismos: permissões explícitas, aprovação humana para ações irreversíveis,
     sandboxing, limites de escopo e orçamento

8. Como escrever um bom prompt (valor prático imediato)
   - Ser específico sobre o resultado esperado
   - Dar contexto (quem é o público, qual o objetivo)
   - Pedir um formato de saída (lista, tabela, texto corrido)
   - Iterar: refinar o pedido com base na resposta

9. Tendências do mercado (fechamento)
   - Contexto grande (1 milhão de tokens) virou padrão entre os principais players
   - Competição migrou de "quem é mais inteligente" para "quem executa tarefas 
     longas com ferramentas de forma confiável"
   - Preços caindo e modelos leves ficando cada vez mais competentes

ESTRUTURA SUGERIDA DE SLIDES
1. Capa
2. O que é um LLM (explicação simples + analogia)
3. Linha do tempo rápida da evolução dos LLMs
4. Como um LLM funciona (tokens, contexto, treinamento) — usar diagrama/analogia visual 
   (ex: janela de contexto como uma caixa enchendo de blocos de texto)
5. Modelo vs Agente
6. Tipos de LLM (fechados vs abertos)
7. Principais ferramentas do mercado (cards com logo + caso de uso prático)
8. Tabela comparativa relativa (custo, contexto, ponto forte) — opcional como slide extra/anexo
9. Como escolher o modelo certo para cada tarefa
10. Limitações e cuidados
11. Guardrails (segurança de agentes)
12. Como escrever um bom prompt
13. Tendências e para onde o mercado está indo
14. (Opcional) Mini quiz interativo de 2-3 perguntas ("qual modelo você usaria para X?")
15. Encerramento/resumo

REQUISITOS TÉCNICOS DO PROJETO
- Apresentação em formato web (vue3 com vite), navegável por slides
- Design limpo, boa hierarquia visual, ícones/logos das ferramentas quando possível 
- Incluir pelo menos: uma tabela/comparativo relativo, um diagrama conceitual e 
  um card por ferramenta com caso de uso
- Evitar números exatos de benchmark/preço direto no slide (ficam desatualizados 
  rápido) — preferir comparação relativa, com fonte e data se precisão for necessária
- Linguagem acessível, sem jargão técnico sem explicação