# 🇪🇸 Verbo Básico

**Aprenda os verbos que você realmente usa na Espanha.**

App estilo Duolingo focado em conjugação contextual para brasileiros que moram ou estão chegando na Espanha. Treino rápido com frases reais do dia a dia.

## ✨ O que é diferente

- **Treino contextual** — não é decorar tabela. Você aprende o verbo dentro de frases reais
- **Módulos por situação** — supermercado, médico, trabalho, documentos, restaurante, transporte, aluguel, entrevista
- **Pegadinhas para brasileiros** — tener ≠ ter, ser vs estar, pedir vs preguntar, ir + a...
- **Sessões curtas** — 3-5 min por dia com timer e progresso visual
- **Correção imediata** — resposta certa, tradução, dica e áudio

## 🎯 Como funciona

O app mostra uma frase em português e pede para você completar a conjugação em espanhol:

```
🇧🇷 "Quero um café com leite, por favor."
🇪🇸 "___ un café con leche, por favor."

Resposta: quiero ✅
```

## 🚀 Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`

## 📦 Build para produção

```bash
npm run build
```

Gera arquivos estáticos em `dist/` — deploy em Netlify, Vercel, GitHub Pages, etc.

## 🛠 Tecnologias

- React 19 + TypeScript
- Vite 5
- Tailwind CSS 3
- Canvas Confetti
- Web Speech API (áudio em espanhol)
- localStorage (progresso offline)

## 📂 Estrutura

```
src/
├── types/        → Tipos TypeScript (Verb, ContextualPhrase, Gotcha, etc.)
├── data/         → Verbos, frases contextuais e pegadinhas
│   ├── verbs.ts       → 15 verbos com conjugações em 3 tempos
│   ├── phrases.ts     → 48 frases reais (6 por situação × 8 situações)
│   └── gotchas.ts     → 8 pegadinhas para brasileiros
├── hooks/        → useProgress, useTraining, useSpeech
├── utils/        → localStorage, scoring, mensagens motivacionais
├── pages/        → HomePage, TrainingPage, ConjugationPage, MistakesPage, GotchasPage
└── components/   → (extensível)
```

## 📍 Módulos por situação

| Módulo | Situação | Frases |
|--------|----------|--------|
| 🛒 Supermercado | Compras e pagamentos | 6 |
| 🏥 Médico | Consultas e saúde | 6 |
| 💼 Trabalho | Dia a dia no escritório | 6 |
| 📄 Documentos | NIE, empadronamiento | 6 |
| 🍽️ Restaurante | Pedir comida e bebida | 6 |
| 🚌 Transporte | Ônibus, metrô, trem | 6 |
| 🏠 Aluguel | Moradia e contratos | 6 |
| 🤝 Entrevista | Emprego e apresentação | 6 |

## ⚠️ Pegadinhas para brasileiros

- **Tener ≠ Ter** (idade: "tengo 30 años", não "soy")
- **Ser vs Estar** (permanente vs temporário)
- **Pedir vs Preguntar** (solicitar vs perguntar)
- **Estar + gerúndio** (agora vs rotina)
- **Tener que vs Deber** (prático vs moral)
- **Ir + a + infinitivo** (nunca sem o "a"!)
- **Quedar vs Ficar** ("ficar" não existe em espanhol)
- **Tener + sensações** (tengo hambre, não "estoy hambre")

## 🎮 Gamificação

- 🔥 Daily streak (sequência de dias)
- ⭐ Pontos por acerto (bônus por racha)
- 📊 Progresso por situação (dots de 0 a 6)
- 🏆 Níveis: Iniciante → Intermediário → Avançado
- 🎉 Confete a cada 5 acertos seguidos
- 🔄 Revisão de erros com prática direcionada

## 🔮 Próximos passos

- Mais tempos verbais (Perfecto, Imperfecto, Condicional, Subjuntivo)
- Mais verbos e frases por situação
- PWA (instalável como app)
- Spaced repetition (algoritmo SM-2)
- Dark mode
- Áudio gravado por nativos
