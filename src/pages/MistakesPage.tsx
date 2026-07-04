import type { UserProgress } from '../types';
import { TENSE_LABELS, PRONOUN_LABELS } from '../types';
import { useSpeech } from '../hooks';

interface MistakesPageProps {
  progress: UserProgress;
  onBack: () => void;
  onClearMistakes: () => void;
  onPracticeMistakes: () => void;
}

export function MistakesPage({ progress, onBack, onClearMistakes, onPracticeMistakes }: MistakesPageProps) {
  const { speak, isSupported: speechSupported } = useSpeech();
  const { mistakes } = progress;

  return (
    <div className="min-h-screen px-4 py-6 max-w-lg mx-auto">
      <button onClick={onBack} className="btn-ghost mb-4" aria-label="Voltar">
        ← Voltar
      </button>

      <div className="card mb-6 animate-fade-in">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold text-gray-900">🔄 Revisão de Erros</h2>
          {mistakes.length > 0 && (
            <button
              onClick={onClearMistakes}
              className="text-sm text-red-600 hover:text-red-700 font-medium"
              aria-label="Limpar todos os erros"
            >
              Limpar
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
          <>
            <p className="text-gray-500 text-sm mb-4">
              {mistakes.length} erro{mistakes.length !== 1 ? 's' : ''}. Pratique novamente!
            </p>
            <button onClick={onPracticeMistakes} className="btn-primary w-full mb-2">
              🎯 Praticar estes erros
            </button>
          </>
        )}
      </div>

      {/* Mistakes list */}
      <div className="space-y-3">
        {mistakes.slice(0, 20).map((mistake, index) => (
          <div
            key={`${mistake.phraseId}-${mistake.timestamp}`}
            className="card animate-slide-up border-l-4 border-l-red-400 p-4"
            style={{ animationDelay: `${index * 0.03}s` }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-gray-800 mb-2 italic">"{mistake.spanish}"</p>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs bg-gray-100 rounded px-2 py-0.5 text-gray-600">
                    {mistake.verb}
                  </span>
                  <span className="text-xs text-gray-400">
                    {PRONOUN_LABELS[mistake.pronoun]} • {TENSE_LABELS[mistake.tense]}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm mt-1">
                  <span className="text-red-600 line-through">{mistake.userAnswer}</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-green-700 font-semibold">{mistake.correctAnswer}</span>
                </div>
              </div>
              {speechSupported && (
                <button
                  onClick={() => speak(mistake.spanish)}
                  className="text-gray-400 hover:text-spain-red p-1"
                  aria-label="Ouvir"
                >
                  🔊
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
