import { useState } from 'react';
import { falseCognates, andaluzWords } from '../data';
import { useSpeech } from '../hooks';
import { Header } from '../components';

interface VocabularyPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

type Tab = 'cognatos' | 'andaluz';

const CATEGORY_LABELS: Record<string, { emoji: string; name: string }> = {
  saludo: { emoji: '👋', name: 'Saudações' },
  comida: { emoji: '🍽️', name: 'Comida' },
  expresion: { emoji: '💬', name: 'Expressões' },
  pronuncia: { emoji: '🗣️', name: 'Pronúncia' },
  cotidiano: { emoji: '🏠', name: 'Cotidiano' },
};

const DANGER_COLORS = {
  alto: { bg: 'bg-red-100', text: 'text-red-700', label: '⚠️ Alto risco' },
  medio: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: '⚡ Médio' },
  leve: { bg: 'bg-blue-100', text: 'text-blue-700', label: '💡 Leve' },
};

export function VocabularyPage({ onBack, onNavigate }: VocabularyPageProps) {
  const [tab, setTab] = useState<Tab>('cognatos');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [andaluzFilter, setAndaluzFilter] = useState<string>('all');
  const { speak, isSupported } = useSpeech();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Header
        title="📚 Vocabulário"
        subtitle="Cognatos + Andaluz"
        onNavigate={onNavigate}
        showBack
        onBack={onBack}
      />

      <div className="max-w-2xl mx-auto px-4 py-4">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setTab('cognatos')}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
              tab === 'cognatos'
                ? 'bg-spain-red text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
            aria-pressed={tab === 'cognatos'}
          >
            🎭 Falsos Cognatos
          </button>
          <button
            onClick={() => setTab('andaluz')}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
              tab === 'andaluz'
                ? 'bg-spain-red text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
            aria-pressed={tab === 'andaluz'}
          >
            🌞 Andaluz
          </button>
        </div>

        {/* FALSOS COGNATOS */}
        {tab === 'cognatos' && (
          <div className="animate-fade-in">
            <p className="text-sm text-gray-600 mb-4 bg-red-50 rounded-xl p-3 border border-red-100">
              ⚠️ <strong>Falsos cognatos</strong> são palavras que parecem iguais em português e espanhol, 
              mas significam coisas completamente diferentes. Cuidado para não passar vergonha!
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
                        <span className={`text-xs px-2 py-0.5 rounded-full ${danger.bg} ${danger.text}`}>
                          {danger.label}
                        </span>
                      </div>
                      <span className="text-gray-400">{isExpanded ? '−' : '+'}</span>
                    </div>

                    {!isExpanded && (
                      <p className="text-sm text-gray-500 mt-1">
                        Parece: "{fc.appearsToMean}" → Significa: <strong>{fc.actuallyMeans}</strong>
                      </p>
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
                            {isSupported && (
                              <button
                                onClick={() => speak(fc.example)}
                                className="text-gray-400 hover:text-spain-red p-1 shrink-0"
                                aria-label="Ouvir"
                              >
                                🔊
                              </button>
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

        {/* VOCABULÁRIO ANDALUZ */}
        {tab === 'andaluz' && (
          <div className="animate-fade-in">
            <p className="text-sm text-gray-600 mb-4 bg-yellow-50 rounded-xl p-3 border border-yellow-100">
              🌞 <strong>Espanhol Andaluz</strong> — Se você mora em Sevilla, Málaga, Cádiz ou Granada, 
              vai ouvir estas palavras e pronúncias todos os dias.
            </p>

            <div className="flex gap-1.5 overflow-x-auto pb-3 mb-4">
              <button
                onClick={() => setAndaluzFilter('all')}
                className={`whitespace-nowrap py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
                  andaluzFilter === 'all' ? 'bg-spain-yellow text-gray-900' : 'bg-gray-100 text-gray-600'
                }`}
              >
                Todos
              </button>
              {Object.entries(CATEGORY_LABELS).map(([key, info]) => (
                <button
                  key={key}
                  onClick={() => setAndaluzFilter(key)}
                  className={`whitespace-nowrap py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
                    andaluzFilter === key ? 'bg-spain-yellow text-gray-900' : 'bg-gray-100 text-gray-600'
                  }`}
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
                  const catInfo = CATEGORY_LABELS[word.category];

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

                      {!isExpanded && (
                        <p className="text-sm text-gray-500 mt-1">
                          = {word.portuguese}
                        </p>
                      )}

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
                              {isSupported && (
                                <button
                                  onClick={() => speak(word.example)}
                                  className="text-gray-400 hover:text-spain-red p-1 shrink-0"
                                  aria-label="Ouvir"
                                >
                                  🔊
                                </button>
                              )}
                            </div>
                          </div>

                          {word.note && (
                            <p className="text-xs text-gray-500 italic bg-gray-50 rounded-lg p-2">
                              📌 {word.note}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
