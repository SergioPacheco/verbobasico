import { useState } from 'react';
import { idioms } from '../data/idioms';
import type { Idiom } from '../data/idioms';

interface IdiomsPageProps {
  onBack: () => void;
}

type Category = 'all' | 'cotidiano' | 'trabalho' | 'emocao' | 'comida';
type Mode = 'browse' | 'quiz';

const CATEGORY_LABELS: Record<Category, string> = {
  all: '🌟 Todas',
  cotidiano: '☀️ Cotidiano',
  trabalho: '💼 Trabalho',
  emocao: '❤️ Emoção',
  comida: '🍕 Comida',
};

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildQuizOptions(idiom: Idiom, all: Idiom[]): string[] {
  const others = shuffle(all.filter((i) => i.id !== idiom.id)).slice(0, 3);
  return shuffle([idiom.meaning, ...others.map((o) => o.meaning)]);
}

export function IdiomsPage({ onBack }: IdiomsPageProps) {
  const [mode, setMode] = useState<Mode>('browse');
  const [category, setCategory] = useState<Category>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  // Quiz state
  const [quizQueue, setQuizQueue] = useState<Idiom[]>([]);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  const filtered = category === 'all' ? idioms : idioms.filter((i) => i.category === category);

  function startQuiz() {
    const queue = shuffle(filtered);
    setQuizQueue(queue);
    setQuizIdx(0);
    setScore(0);
    setQuizDone(false);
    setSelected(null);
    setQuizOptions(buildQuizOptions(queue[0], idioms));
    setMode('quiz');
  }

  function handleQuizAnswer(option: string) {
    if (selected) return;
    setSelected(option);
    const correct = option === quizQueue[quizIdx].meaning;
    if (correct) setScore((s) => s + 1);
  }

  function handleQuizNext() {
    const next = quizIdx + 1;
    if (next >= quizQueue.length) {
      setQuizDone(true);
      return;
    }
    setQuizIdx(next);
    setSelected(null);
    setQuizOptions(buildQuizOptions(quizQueue[next], idioms));
  }

  // Quiz done
  if (mode === 'quiz' && quizDone) {
    const pct = Math.round((score / quizQueue.length) * 100);
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="card max-w-sm w-full text-center animate-slide-up">
          <p className="text-5xl mb-3">{pct >= 80 ? '🏆' : pct >= 50 ? '🎯' : '📚'}</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Quiz concluído!</h2>
          <p className="text-4xl font-bold text-spain-red my-4">
            {score}/{quizQueue.length}
          </p>
          <p className="text-gray-500 mb-6">{pct}% de precisão</p>
          <button onClick={startQuiz} className="btn-primary w-full mb-3">
            🔄 Novo quiz
          </button>
          <button onClick={() => setMode('browse')} className="btn-secondary w-full">
            📚 Ver lista
          </button>
        </div>
      </div>
    );
  }

  // Quiz mode
  if (mode === 'quiz' && quizQueue.length > 0) {
    const idiom = quizQueue[quizIdx];
    const correctAnswer = idiom.meaning;

    return (
      <div className="min-h-screen px-4 py-6 max-w-lg mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => setMode('browse')} className="text-gray-500 hover:text-gray-700 text-lg">←</button>
          <div className="flex-1">
            <h1 className="font-bold text-gray-900">🗣️ Quiz de Expressões</h1>
            <p className="text-xs text-gray-500">Escolha o significado correto</p>
          </div>
          <span className="text-sm font-semibold text-gray-600">
            {quizIdx + 1}/{quizQueue.length}
          </span>
        </div>

        {/* Progress */}
        <div className="h-2 bg-gray-100 rounded-full mb-6">
          <div
            className="h-full bg-spain-red rounded-full transition-all duration-300"
            style={{ width: `${(quizIdx / quizQueue.length) * 100}%` }}
          />
        </div>

        <div className="card mb-4 animate-slide-up" key={quizIdx}>
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">O que significa?</p>
          <p className="text-2xl font-bold text-gray-900 mb-2">{idiom.expression}</p>
          <p className="text-sm text-gray-400 italic mb-1">"{idiom.literal}"</p>
          <p className="text-xs text-gray-400">{idiom.example}</p>
        </div>

        <div className="space-y-3">
          {quizOptions.map((option) => {
            let style = 'card w-full text-left p-4 transition-colors';
            if (selected) {
              if (option === correctAnswer) {
                style += ' border-green-400 bg-green-50';
              } else if (option === selected && option !== correctAnswer) {
                style += ' border-red-400 bg-red-50';
              } else {
                style += ' opacity-60';
              }
            } else {
              style += ' hover:border-spain-red/40 cursor-pointer';
            }

            return (
              <button
                key={option}
                onClick={() => handleQuizAnswer(option)}
                className={style}
                disabled={!!selected}
              >
                <p className="text-sm font-medium text-gray-800">{option}</p>
              </button>
            );
          })}
        </div>

        {selected && (
          <div className="mt-4 animate-fade-in">
            <div className="bg-gray-50 rounded-xl p-3 mb-4">
              <p className="text-xs text-gray-400 mb-1">Exemplo completo:</p>
              <p className="text-sm text-gray-700 font-medium">{idiom.example}</p>
              <p className="text-xs text-gray-500">{idiom.exampleTranslation}</p>
            </div>
            <button onClick={handleQuizNext} className="btn-primary w-full">
              {quizIdx + 1 >= quizQueue.length ? 'Ver resultado' : 'Próxima →'}
            </button>
          </div>
        )}
      </div>
    );
  }

  // Browse mode
  return (
    <div className="min-h-screen px-4 py-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button onClick={onBack} className="text-gray-500 hover:text-gray-700 text-lg">←</button>
        <div className="flex-1">
          <h1 className="font-bold text-gray-900">🗣️ Expressões Idiomáticas</h1>
          <p className="text-xs text-gray-500">{idioms.length} expressões</p>
        </div>
        <button
          onClick={startQuiz}
          className="bg-spain-red text-white text-xs font-semibold px-3 py-1.5 rounded-xl"
        >
          Quiz →
        </button>
      </div>

      {/* Category filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
        {(Object.keys(CATEGORY_LABELS) as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
              category === cat
                ? 'bg-spain-red text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {filtered.map((idiom) => {
          const isExpanded = expanded === idiom.id;
          return (
            <button
              key={idiom.id}
              onClick={() => setExpanded(isExpanded ? null : idiom.id)}
              className="card w-full text-left p-4 hover:border-spain-red/30"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <p className="font-bold text-gray-900 text-base">{idiom.expression}</p>
                  <p className="text-sm text-spain-red font-medium mt-0.5">{idiom.meaning}</p>
                </div>
                <span className="text-gray-400 text-lg mt-0.5">{isExpanded ? '▲' : '▼'}</span>
              </div>

              {isExpanded && (
                <div className="mt-3 pt-3 border-t border-gray-100 animate-fade-in space-y-2">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Tradução literal</p>
                    <p className="text-sm text-gray-600 italic">"{idiom.literal}"</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Exemplo</p>
                    <p className="text-sm font-medium text-gray-800">{idiom.example}</p>
                    <p className="text-xs text-gray-500">{idiom.exampleTranslation}</p>
                  </div>
                  <span
                    className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${
                      idiom.category === 'cotidiano'
                        ? 'bg-yellow-100 text-yellow-700'
                        : idiom.category === 'trabalho'
                        ? 'bg-blue-100 text-blue-700'
                        : idiom.category === 'emocao'
                        ? 'bg-pink-100 text-pink-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {CATEGORY_LABELS[idiom.category as Category]}
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
