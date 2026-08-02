import { useState } from 'react';
import { gotchas, falseCognates, andaluzWords } from '../data';
import { idioms } from '../data/idioms';
import type { Idiom } from '../data/idioms';
import { useSpeech } from '../hooks';
import { Header } from '../components';

type Tab = 'pegadinhas' | 'cognatos' | 'andaluz' | 'expressoes';
type IdiomCategory = 'all' | 'cotidiano' | 'trabalho' | 'emocao' | 'comida';

const ANDALUZ_CATEGORIES: Record<string, { emoji: string; name: string }> = {
  saludo: { emoji: '👋', name: 'Saudações' },
  comida: { emoji: '🍽️', name: 'Comida' },
  expresion: { emoji: '💬', name: 'Expressões' },
  pronuncia: { emoji: '🗣️', name: 'Pronúncia' },
  cotidiano: { emoji: '🏠', name: 'Cotidiano' },
};

const IDIOM_CATEGORIES: Record<IdiomCategory, string> = {
  all: '🌟 Todas',
  cotidiano: '☀️ Cotidiano',
  trabalho: '💼 Trabalho',
  emocao: '❤️ Emoção',
  comida: '🍕 Comida',
};

const DANGER_COLORS = {
  alto: { bg: 'bg-red-100', text: 'text-red-700', label: '⚠️ Alto risco' },
  medio: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: '⚡ Médio' },
  leve: { bg: 'bg-blue-100', text: 'text-blue-700', label: '💡 Leve' },
};

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildQuizOptions(idiom: Idiom, all: Idiom[]): string[] {
  const others = shuffle(all.filter((i) => i.id !== idiom.id)).slice(0, 3);
  return shuffle([idiom.meaning, ...others.map((o) => o.meaning)]);
}

export function GotchasPage() {
  const [tab, setTab] = useState<Tab>('pegadinhas');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [andaluzFilter, setAndaluzFilter] = useState<string>('all');
  const [idiomCategory, setIdiomCategory] = useState<IdiomCategory>('all');
  const { speak, isSupported: speechSupported } = useSpeech();

  // Quiz state for idioms
  const [quizMode, setQuizMode] = useState(false);
  const [quizQueue, setQuizQueue] = useState<Idiom[]>([]);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  const totalItems = gotchas.length + falseCognates.length + andaluzWords.length + idioms.length;
  const filteredIdioms = idiomCategory === 'all' ? idioms : idioms.filter((i) => i.category === idiomCategory);

  function startQuiz() {
    const queue = shuffle(filteredIdioms);
    setQuizQueue(queue);
    setQuizIdx(0);
    setScore(0);
    setQuizDone(false);
    setSelected(null);
    setQuizOptions(buildQuizOptions(queue[0], idioms));
    setQuizMode(true);
  }

  function handleQuizAnswer(option: string) {
    if (selected) return;
    setSelected(option);
    if (option === quizQueue[quizIdx].meaning) setScore((s) => s + 1);
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

  const changeTab = (newTab: Tab) => {
    setTab(newTab);
    setExpandedId(null);
    setQuizMode(false);
    setQuizDone(false);
  };

  // Quiz result screen
  if (tab === 'expressoes' && quizDone) {
    const pct = Math.round((score / quizQueue.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
        <Header title="🗣️ Quiz de Expressões" />
        <div className="flex items-center justify-center px-4 py-10">
          <div className="card max-w-sm w-full text-center animate-slide-up">
            <p className="text-5xl mb-3">{pct >= 80 ? '🏆' : pct >= 50 ? '🎯' : '📚'}</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Quiz concluído!</h2>
            <p className="text-4xl font-bold text-spain-red my-4">{score}/{quizQueue.length}</p>
            <p className="text-gray-500 mb-6">{pct}% de precisão</p>
            <button onClick={startQuiz} className="btn-primary w-full mb-3">🔄 Novo quiz</button>
            <button onClick={() => setQuizMode(false)} className="btn-secondary w-full">📚 Ver lista</button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz in progress
  if (tab === 'expressoes' && quizMode && quizQueue.length > 0) {
    const idiom = quizQueue[quizIdx];
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
        <Header title="🗣️ Quiz de Expressões" subtitle={`${quizIdx + 1}/${quizQueue.length}`} />
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="h-2 bg-gray-100 rounded-full mb-6">
            <div className="h-full bg-spain-red rounded-full transition-all" style={{ width: `${(quizIdx / quizQueue.length) * 100}%` }} />
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
                if (option === idiom.meaning) style += ' border-green-400 bg-green-50';
                else if (option === selected) style += ' border-red-400 bg-red-50';
                else style += ' opacity-60';
              } else {
                style += ' hover:border-spain-red/40 cursor-pointer';
              }
              return (
                <button key={option} onClick={() => handleQuizAnswer(option)} className={style} disabled={!!selected}>
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Header title="⚠️ Pegadinhas do Espanhol" subtitle={`${totalItems} armadilhas para evitar`} />

      <div className="max-w-2xl mx-auto px-4 py-4">
        {/* Tabs */}
        <div className="grid grid-cols-4 gap-1.5 mb-6">
          {([
            { id: 'pegadinhas', label: '❌ Erros', count: gotchas.length },
            { id: 'cognatos', label: '🎭 Cognatos', count: falseCognates.length },
            { id: 'andaluz', label: '🌞 Andaluz', count: andaluzWords.length },
            { id: 'expressoes', label: '🗣️ Expressões', count: idioms.length },
          ] as const).map((t) => (
            <button
              key={t.id}
              onClick={() => changeTab(t.id)}
              className={`py-2 px-1 rounded-xl font-semibold text-xs transition-all ${
                tab === t.id
                  ? 'bg-spain-red text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span className="block">{t.label}</span>
              <span className="opacity-70 text-[10px]">({t.count})</span>
            </button>
          ))}
        </div>

        {/* TAB: PEGADINHAS */}
        {tab === 'pegadinhas' && (
          <div className="animate-fade-in">
            <div className="card mb-4 border-2 border-yellow-200">
              <p className="text-gray-500 text-sm">
                Erros que TODO brasileiro comete em espanhol. Conhecê-los é o primeiro passo para evitá-los!
              </p>
            </div>
            <div className="space-y-3">
              {gotchas.map((gotcha, index) => {
                const isExpanded = expandedId === gotcha.id;
                return (
                  <div
                    key={gotcha.id}
                    className="card animate-slide-up cursor-pointer"
                    style={{ animationDelay: `${index * 0.03}s` }}
                    onClick={() => setExpandedId(isExpanded ? null : gotcha.id)}
                    role="button"
                    aria-expanded={isExpanded}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setExpandedId(isExpanded ? null : gotcha.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{gotcha.category === 'verbo' ? '🔤' : gotcha.category === 'uso' ? '📝' : '💬'}</span>
                        <h3 className="font-semibold text-gray-900">{gotcha.title}</h3>
                      </div>
                      <span className="text-gray-400 text-lg">{isExpanded ? '−' : '+'}</span>
                    </div>
                    {isExpanded && (
                      <div className="mt-4 space-y-3 animate-fade-in" onClick={(e) => e.stopPropagation()}>
                        <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                          <p className="text-sm font-semibold text-red-700 mb-1">❌ Errado:</p>
                          <p className="text-red-800 font-medium">{gotcha.wrong}</p>
                          <p className="text-xs text-red-600 mt-1">{gotcha.wrongExplanation}</p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                          <p className="text-sm font-semibold text-green-700 mb-1">✅ Correto:</p>
                          <p className="text-green-800 font-medium">{gotcha.correct}</p>
                          <p className="text-xs text-green-600 mt-1">{gotcha.correctExplanation}</p>
                        </div>
                        <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-sm font-semibold text-blue-700 mb-1">💡 Exemplo:</p>
                              <p className="text-blue-800">{gotcha.example}</p>
                              <p className="text-xs text-blue-600 mt-1">{gotcha.exampleTranslation}</p>
                            </div>
                            {speechSupported && (
                              <button onClick={() => speak(gotcha.example)} className="text-blue-400 hover:text-blue-600 p-1 shrink-0" aria-label="Ouvir">🔊</button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB: FALSOS COGNATOS */}
        {tab === 'cognatos' && (
          <div className="animate-fade-in">
            <p className="text-sm text-gray-600 mb-4 bg-red-50 rounded-xl p-3 border border-red-100">
              ⚠️ <strong>Falsos cognatos</strong> são palavras que parecem iguais em português e espanhol, mas significam coisas completamente diferentes.
            </p>
            <div className="space-y-3">
              {falseCognates.map((fc, i) => {
                const isExpanded = expandedId === fc.id;
                const danger = DANGER_COLORS[fc.danger];
                return (
                  <div
                    key={fc.id}
                    className="card animate-slide-up cursor-pointer"
                    style={{ animationDelay: `${i * 0.03}s` }}
                    onClick={() => setExpandedId(isExpanded ? null : fc.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setExpandedId(isExpanded ? null : fc.id)}
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-spain-red">{fc.word}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${danger.bg} ${danger.text}`}>{danger.label}</span>
                      </div>
                      <span className="text-gray-400">{isExpanded ? '−' : '+'}</span>
                    </div>
                    {!isExpanded && (
                      <p className="text-sm text-gray-500 mt-1">Parece: "{fc.appearsToMean}" → Significa: <strong>{fc.actuallyMeans}</strong></p>
                    )}
                    {isExpanded && (
                      <div className="mt-4 space-y-3 animate-fade-in" onClick={(e) => e.stopPropagation()}>
                        <div className="bg-red-50 rounded-lg p-3">
                          <p className="text-xs font-semibold text-red-600 mb-1">❌ Brasileiro pensa que é:</p>
                          <p className="text-red-800">{fc.appearsToMean}</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <p className="text-xs font-semibold text-green-600 mb-1">✅ Na verdade significa:</p>
                          <p className="text-green-800 font-semibold">{fc.actuallyMeans}</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-xs font-semibold text-blue-600 mb-1">💡 Para dizer o que você quer, use:</p>
                          <p className="text-blue-800 font-semibold">{fc.correctWord}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-xs font-semibold text-gray-600 mb-1">📝 Exemplo:</p>
                              <p className="text-gray-800">{fc.example}</p>
                              <p className="text-xs text-gray-500 mt-0.5">{fc.exampleTranslation}</p>
                            </div>
                            {speechSupported && (
                              <button onClick={() => speak(fc.example)} className="text-gray-400 hover:text-spain-red p-1 shrink-0" aria-label="Ouvir">🔊</button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB: ANDALUZ - will be added in next part */}
        {tab === 'andaluz' && <AndaluzTab expandedId={expandedId} setExpandedId={setExpandedId} andaluzFilter={andaluzFilter} setAndaluzFilter={setAndaluzFilter} speak={speak} speechSupported={speechSupported} />}

        {/* TAB: EXPRESSÕES - will be added in next part */}
        {tab === 'expressoes' && <ExpressoesTab expandedId={expandedId} setExpandedId={setExpandedId} idiomCategory={idiomCategory} setIdiomCategory={setIdiomCategory} filteredIdioms={filteredIdioms} startQuiz={startQuiz} />}
      </div>
    </div>
  );
}

// Andaluz Tab Component
function AndaluzTab({ expandedId, setExpandedId, andaluzFilter, setAndaluzFilter, speak, speechSupported }: {
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
  andaluzFilter: string;
  setAndaluzFilter: (f: string) => void;
  speak: (text: string) => void;
  speechSupported: boolean;
}) {
  return (
    <div className="animate-fade-in">
      <p className="text-sm text-gray-600 mb-4 bg-yellow-50 rounded-xl p-3 border border-yellow-100">
        🌞 <strong>Espanhol Andaluz</strong> — Se você mora em Sevilla, Málaga, Cádiz ou Granada, vai ouvir estas palavras todos os dias.
      </p>
      <div className="flex gap-1.5 overflow-x-auto pb-3 mb-4">
        <button
          onClick={() => setAndaluzFilter('all')}
          className={`whitespace-nowrap py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${andaluzFilter === 'all' ? 'bg-spain-yellow text-gray-900' : 'bg-gray-100 text-gray-600'}`}
        >
          Todos
        </button>
        {Object.entries(ANDALUZ_CATEGORIES).map(([key, info]) => (
          <button
            key={key}
            onClick={() => setAndaluzFilter(key)}
            className={`whitespace-nowrap py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${andaluzFilter === key ? 'bg-spain-yellow text-gray-900' : 'bg-gray-100 text-gray-600'}`}
          >
            {info.emoji} {info.name}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {andaluzWords
          .filter((w) => andaluzFilter === 'all' || w.category === andaluzFilter)
          .map((word, i) => {
            const isExpanded = expandedId === word.id;
            const catInfo = ANDALUZ_CATEGORIES[word.category];
            return (
              <div
                key={word.id}
                className="card animate-slide-up cursor-pointer"
                style={{ animationDelay: `${i * 0.03}s` }}
                onClick={() => setExpandedId(isExpanded ? null : word.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setExpandedId(isExpanded ? null : word.id)}
                aria-expanded={isExpanded}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{catInfo.emoji}</span>
                    <span className="font-bold text-gray-900">{word.word}</span>
                  </div>
                  <span className="text-gray-400">{isExpanded ? '−' : '+'}</span>
                </div>
                {!isExpanded && <p className="text-sm text-gray-500 mt-1">= {word.portuguese}</p>}
                {isExpanded && (
                  <div className="mt-4 space-y-2 animate-fade-in" onClick={(e) => e.stopPropagation()}>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gray-50 rounded-lg p-2">
                        <p className="text-xs text-gray-500">Espanhol padrão:</p>
                        <p className="text-sm font-medium text-gray-800">{word.standardSpanish}</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-2">
                        <p className="text-xs text-green-600">Português:</p>
                        <p className="text-sm font-medium text-green-800">{word.portuguese}</p>
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs font-semibold text-yellow-700 mb-1">💬 Exemplo:</p>
                          <p className="text-gray-800">{word.example}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{word.exampleTranslation}</p>
                        </div>
                        {speechSupported && (
                          <button onClick={() => speak(word.example)} className="text-gray-400 hover:text-spain-red p-1 shrink-0" aria-label="Ouvir">🔊</button>
                        )}
                      </div>
                    </div>
                    {word.note && <p className="text-xs text-gray-500 italic bg-gray-50 rounded-lg p-2">📌 {word.note}</p>}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

// Expressões Tab Component
function ExpressoesTab({ expandedId, setExpandedId, idiomCategory, setIdiomCategory, filteredIdioms, startQuiz }: {
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
  idiomCategory: IdiomCategory;
  setIdiomCategory: (c: IdiomCategory) => void;
  filteredIdioms: Idiom[];
  startQuiz: () => void;
}) {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2 overflow-x-auto pb-2 flex-1">
          {(Object.keys(IDIOM_CATEGORIES) as IdiomCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setIdiomCategory(cat)}
              className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                idiomCategory === cat ? 'bg-spain-red text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {IDIOM_CATEGORIES[cat]}
            </button>
          ))}
        </div>
        <button onClick={startQuiz} className="bg-spain-red text-white text-xs font-semibold px-3 py-1.5 rounded-xl ml-2">
          Quiz →
        </button>
      </div>
      <div className="space-y-3">
        {filteredIdioms.map((idiom) => {
          const isExpanded = expandedId === idiom.id;
          return (
            <button
              key={idiom.id}
              onClick={() => setExpandedId(isExpanded ? null : idiom.id)}
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
                <div className="mt-3 pt-3 border-t border-gray-100 animate-fade-in space-y-2" onClick={(e) => e.stopPropagation()}>
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
                      idiom.category === 'cotidiano' ? 'bg-yellow-100 text-yellow-700' :
                      idiom.category === 'trabalho' ? 'bg-blue-100 text-blue-700' :
                      idiom.category === 'emocao' ? 'bg-pink-100 text-pink-700' :
                      'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {IDIOM_CATEGORIES[idiom.category as IdiomCategory]}
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
