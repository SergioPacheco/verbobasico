import { useState } from 'react';
import { gotchas } from '../data';
import { useSpeech } from '../hooks';
import { Header } from '../components';

interface GotchasPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export function GotchasPage({ onBack, onNavigate }: GotchasPageProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const { speak, isSupported: speechSupported } = useSpeech();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Header
        title="⚠️ Pegadinhas"
        subtitle="Erros de brasileiros"
        onNavigate={onNavigate}
        showBack
        onBack={onBack}
      />

      <div className="max-w-2xl mx-auto px-4 py-4">
        <div className="card mb-6 animate-fade-in border-2 border-yellow-200">
          <p className="text-gray-500 text-sm">
            Erros que TODO brasileiro comete em espanhol. Conhecê-los é o primeiro passo para evitá-los!
          </p>
        </div>

        <div className="space-y-3">
          {gotchas.map((gotcha, index) => {
            const isExpanded = expanded === gotcha.id;
            return (
              <div
                key={gotcha.id}
                className="card animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setExpanded(isExpanded ? null : gotcha.id)}
                role="button"
                aria-expanded={isExpanded}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setExpanded(isExpanded ? null : gotcha.id)}
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">
                      {gotcha.category === 'verbo' ? '🔤' : gotcha.category === 'uso' ? '📝' : '💬'}
                    </span>
                    <h3 className="font-semibold text-gray-900">{gotcha.title}</h3>
                  </div>
                  <span className="text-gray-400 text-lg">{isExpanded ? '−' : '+'}</span>
                </div>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="mt-4 space-y-3 animate-fade-in" onClick={(e) => e.stopPropagation()}>
                    {/* Wrong */}
                    <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                      <p className="text-sm font-semibold text-red-700 mb-1">❌ Errado:</p>
                      <p className="text-red-800 font-medium">{gotcha.wrong}</p>
                      <p className="text-xs text-red-600 mt-1">{gotcha.wrongExplanation}</p>
                    </div>

                    {/* Correct */}
                    <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                      <p className="text-sm font-semibold text-green-700 mb-1">✅ Correto:</p>
                      <p className="text-green-800 font-medium">{gotcha.correct}</p>
                      <p className="text-xs text-green-600 mt-1">{gotcha.correctExplanation}</p>
                    </div>

                    {/* Example */}
                    <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-semibold text-blue-700 mb-1">💡 Exemplo:</p>
                          <p className="text-blue-800">{gotcha.example}</p>
                          <p className="text-xs text-blue-600 mt-1">{gotcha.exampleTranslation}</p>
                        </div>
                        {speechSupported && (
                          <button
                            onClick={() => speak(gotcha.example)}
                            className="text-blue-400 hover:text-blue-600 p-1 shrink-0"
                            aria-label="Ouvir exemplo"
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
    </div>
  );
}
