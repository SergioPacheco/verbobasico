import { useState } from 'react';
import { refranes, REFRAN_CATEGORIES } from '../data/refranes';
import type { Refran } from '../data/refranes';
import { useSpeech } from '../hooks';
import { Header } from '../components';

type Category = 'all' | 'sabedoria' | 'trabalho' | 'amizade' | 'dinheiro' | 'tempo' | 'amor' | 'vida';

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function RefranesPage() {
  const [category, setCategory] = useState<Category>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [quizMode, setQuizMode] = useState(false);
  const [quizQueue, setQuizQueue] = useState<Refran[]>([]);
  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const { speak, isSupported } = useSpeech();

  const filtered = category === 'all' ? refranes : refranes.filter((r) => r.category === category);

  const startQuiz = () => {
    const queue = shuffle(refranes).slice(0, 10);
    setQuizQueue(queue);
    setQuizIdx(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizOptions(buildOptions(queue[0]));
    setQuizMode(true);
  };

  const buildOptions = (refran: Refran): string[] => {
    const others = shuffle(refranes.filter((r) => r.id !== refran.id)).slice(0, 3);
    return shuffle([refran.portuguese, ...others.map((r) => r.portuguese)]);
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(answer);
    if (answer === quizQueue[quizIdx].portuguese) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    const next = quizIdx + 1;
    if (next >= quizQueue.length) {
      setQuizMode(false);
      return;
    }
    setQuizIdx(next);
    setSelectedAnswer(null);
    setQuizOptions(buildOptions(quizQueue[next]));
  };

  // Quiz finished
  if (!quizMode && quizQueue.length > 0 && quizIdx >= quizQueue.length - 1 && selectedAnswer) {
    const pct = Math.round((score / quizQueue.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
        <Header title="💬 Quiz de Refranes" />
        <div className="flex items-center justify-center px-4 py-10">
          <div className="card max-w-sm w-full text-center animate-slide-up">
            <p className="text-5xl mb-3">{pct >= 80 ? '🏆' : pct >= 50 ? '🎯' : '📚'}</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Quiz concluído!</h2>
            <p className="text-4xl font-bold text-spain-red my-4">{score}/{quizQueue.length}</p>
            <p className="text-gray-500 mb-6">{pct}% de precisão</p>
            <button onClick={startQuiz} className="btn-primary w-full mb-3">🔄 Novo quiz</button>
            <button onClick={() => { setQuizQueue([]); setQuizIdx(0); }} className="btn-secondary w-full">
              📚 Ver provérbios
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz mode
  if (quizMode && quizQueue.length > 0) {
    const current = quizQueue[quizIdx];
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
        <Header title="💬 Quiz de Refranes" subtitle={`${quizIdx + 1}/${quizQueue.length}`} />
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="h-2 bg-gray-100 rounded-full mb-6">
            <div
              className="h-full bg-spain-red rounded-full transition-all"
              style={{ width: `${((quizIdx + (selectedAnswer ? 1 : 0)) / quizQueue.length) * 100}%` }}
            />
          </div>

          <div className="card mb-4 animate-slide-up">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
              Qual a tradução deste refrán?
            </p>
            <p className="text-xl font-bold text-gray-900 mb-2">"{current.spanish}"</p>
            {isSupported && (
              <button
                onClick={() => speak(current.spanish)}
                className="text-sm text-gray-400 hover:text-spain-red flex items-center gap-1"
              >
                🔊 Ouvir
              </button>
            )}
          </div>

          <div className="space-y-3">
            {quizOptions.map((option) => {
              let style = 'card w-full text-left p-4 transition-all';
              if (selectedAnswer) {
                if (option === current.portuguese) {
                  style += ' border-green-400 bg-green-50';
                } else if (option === selectedAnswer) {
                  style += ' border-red-400 bg-red-50';
                } else {
                  style += ' opacity-50';
                }
              } else {
                style += ' hover:border-spain-red/40 cursor-pointer';
              }
              return (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={style}
                  disabled={!!selectedAnswer}
                >
                  <p className="text-sm text-gray-800">{option}</p>
                </button>
              );
            })}
          </div>

          {selectedAnswer && (
            <div className="mt-4 animate-fade-in">
              <div className="bg-blue-50 rounded-xl p-3 mb-4">
                <p className="text-xs text-blue-600 font-semibold mb-1">💡 Significado:</p>
                <p className="text-sm text-blue-800">{current.meaning}</p>
              </div>
              <button onClick={nextQuestion} className="btn-primary w-full">
                {quizIdx + 1 >= quizQueue.length ? 'Ver resultado' : 'Próximo →'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Browse mode
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Header title="💬 Refranes Españoles" subtitle={`${refranes.length} provérbios populares`} />

      <div className="max-w-2xl mx-auto px-4 py-4">
        {/* Info card */}
        <div className="card mb-4 border-2 border-amber-200 animate-fade-in">
          <p className="text-gray-600 text-sm">
            <strong>Refranes</strong> são provérbios espanhóis usados no dia a dia.
            Aprenda verbos em contexto e impressione os nativos! 🇪🇸
          </p>
        </div>

        {/* Categories + Quiz button */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1.5 overflow-x-auto flex-1 pb-1">
            <button
              onClick={() => setCategory('all')}
              className={`whitespace-nowrap py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
                category === 'all' ? 'bg-spain-red text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              📋 Todos
            </button>
            {Object.entries(REFRAN_CATEGORIES).map(([key, info]) => (
              <button
                key={key}
                onClick={() => setCategory(key as Category)}
                className={`whitespace-nowrap py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
                  category === key ? 'bg-spain-red text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {info.emoji} {info.name}
              </button>
            ))}
          </div>
          <button
            onClick={startQuiz}
            className="bg-spain-red text-white text-xs font-semibold px-3 py-1.5 rounded-xl shrink-0"
          >
            Quiz →
          </button>
        </div>

        {/* Refranes list */}
        <div className="space-y-3">
          {filtered.map((refran, idx) => {
            const isExpanded = expandedId === refran.id;
            const catInfo = REFRAN_CATEGORIES[refran.category];

            return (
              <div
                key={refran.id}
                className="card animate-slide-up cursor-pointer"
                style={{ animationDelay: `${idx * 0.03}s` }}
                onClick={() => setExpandedId(isExpanded ? null : refran.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setExpandedId(isExpanded ? null : refran.id)}
                aria-expanded={isExpanded}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{catInfo.emoji}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600`}
                      >
                        {catInfo.name}
                      </span>
                    </div>
                    <p className="font-semibold text-gray-900 text-base">"{refran.spanish}"</p>
                    {!isExpanded && (
                      <p className="text-sm text-gray-500 mt-1">= {refran.portuguese}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {isSupported && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speak(refran.spanish);
                        }}
                        className="p-1.5 text-gray-400 hover:text-spain-red"
                        aria-label="Ouvir"
                      >
                        🔊
                      </button>
                    )}
                    <span className="text-gray-400">{isExpanded ? '−' : '+'}</span>
                  </div>
                </div>

                {isExpanded && (
                  <div
                    className="mt-4 space-y-3 animate-fade-in"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Translation */}
                    <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                      <p className="text-xs font-semibold text-green-600 mb-1">🇧🇷 Tradução:</p>
                      <p className="text-green-800 font-medium">{refran.portuguese}</p>
                    </div>

                    {/* Meaning */}
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                      <p className="text-xs font-semibold text-blue-600 mb-1">💡 Significado:</p>
                      <p className="text-blue-800 text-sm">{refran.meaning}</p>
                    </div>

                    {/* Usage */}
                    <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                      <p className="text-xs font-semibold text-amber-600 mb-1">📝 Quando usar:</p>
                      <p className="text-amber-800 text-sm">{refran.usage}</p>
                    </div>

                    {/* Verbs */}
                    {refran.verbs.length > 0 && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs font-semibold text-gray-600 mb-2">🔤 Verbos:</p>
                        <div className="flex flex-wrap gap-2">
                          {refran.verbs.map((verb, i) => (
                            <span
                              key={i}
                              className="text-xs bg-white border border-gray-200 rounded-lg px-2 py-1"
                            >
                              <strong className="text-spain-red">{verb.word}</strong>
                              <span className="text-gray-400 mx-1">→</span>
                              <span className="text-gray-600">{verb.infinitive}</span>
                              <span className="text-gray-400 mx-1">=</span>
                              <span className="text-gray-800">{verb.translation}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Nenhum refrán nesta categoria.
          </div>
        )}
      </div>
    </div>
  );
}
