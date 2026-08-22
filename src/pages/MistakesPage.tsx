import { useNavigate } from 'react-router-dom';
import { TENSE_LABELS, PRONOUN_LABELS } from '../types';
import { useSpeech } from '../hooks';
import { useProgressContext } from '../context';
import { Header } from '../components';

export function MistakesPage() {
  const navigate = useNavigate();
  const { progress, clearMistakes } = useProgressContext();
  const { speak, isSupported: speechSupported } = useSpeech();
  const { mistakes } = progress;

  const handlePracticeMistakes = () => {
    const ids = [...new Set(mistakes.map((m) => m.phraseId))];
    navigate(`/training?phraseIds=${ids.join(',')}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Header
        title="🔄 Revisão de Erros"
        subtitle={mistakes.length > 0 ? `${mistakes.length} erro${mistakes.length !== 1 ? 's' : ''}` : undefined}
      />

      <div className="mx-auto w-full max-w-4xl px-3 py-4 sm:px-4">
        <div className="card mb-6 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            {mistakes.length > 0 && (
              <button
                onClick={clearMistakes}
                className="text-sm text-red-600 hover:text-red-700 font-medium ml-auto"
                aria-label="Limpar todos os erros"
              >
                Limpar todos
              </button>
            )}
          </div>

          {mistakes.length === 0 ? (
            <div className="text-center py-8">
              <span className="text-4xl mb-4 block">🎉</span>
              <p className="text-gray-600 text-lg">Nenhum erro registrado!</p>
              <p className="text-gray-400 text-sm mt-1">Continue praticando!</p>
            </div>
          ) : (
            <button onClick={handlePracticeMistakes} className="btn-primary w-full">
              🎯 Praticar estes erros
            </button>
          )}
        </div>

        {/* Lista de erros */}
        <div className="space-y-3">
          {mistakes.map((mistake, idx) => (
            <div
              key={`${mistake.phraseId}-${mistake.timestamp}`}
              className="card animate-slide-up"
              style={{ animationDelay: `${idx * 0.03}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <p className="text-sm text-gray-800 font-medium mb-1">{mistake.spanish}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <span className="bg-gray-100 rounded px-1.5 py-0.5">{mistake.verb}</span>
                    <span>{PRONOUN_LABELS[mistake.pronoun]}</span>
                    <span>{TENSE_LABELS[mistake.tense]}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-red-600">
                      ❌ <span className="line-through">{mistake.userAnswer}</span>
                    </span>
                    <span className="text-green-600">
                      ✓ <strong>{mistake.correctAnswer}</strong>
                    </span>
                  </div>
                </div>
                {speechSupported && (
                  <button
                    onClick={() => speak(mistake.spanish)}
                    className="text-gray-400 hover:text-spain-red p-1"
                    aria-label="Ouvir frase"
                  >
                    🔊
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
