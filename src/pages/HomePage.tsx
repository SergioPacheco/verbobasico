import type { UserProgress, Situation } from '../types';
import { LEVEL_LABELS, SITUATION_LABELS } from '../types';
import { getProgressPercentage } from '../utils';

interface HomePageProps {
  progress: UserProgress;
  onStartDaily: () => void;
  onStartSituation: (situation: Situation) => void;
  onViewGotchas: () => void;
  onViewConjugation: () => void;
  onViewLyrics: () => void;
  onViewVocabulary: () => void;
}

const SITUATIONS: Situation[] = [
  'mercado', 'restaurante', 'medico', 'transporte',
  'trabalho', 'documentos', 'aluguel', 'entrevista',
];

export function HomePage({
  progress,
  onStartDaily,
  onStartSituation,
  onViewGotchas,
  onViewConjugation,
  onViewLyrics,
  onViewVocabulary,
}: HomePageProps) {
  const percentage = getProgressPercentage(progress);
  const today = new Date().toISOString().split('T')[0];
  const hasTrainedToday = progress.lastSessionDate === today;

  return (
    <div className="min-h-screen px-4 py-6 pb-24 max-w-lg mx-auto">
      {/* Header */}
      <header className="text-center mb-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Verbo Básico</h1>
        <p className="text-gray-500 text-sm">
          Aprenda os verbos que você realmente usa na Espanha
        </p>
      </header>

      {/* Daily streak + Level */}
      <div className="flex items-center justify-between mb-6 animate-slide-up">
        <div className="flex items-center gap-2">
          <div className="bg-orange-100 rounded-xl px-3 py-2 text-center">
            <p className="text-xl font-bold text-orange-600">🔥 {progress.dailyStreak}</p>
            <p className="text-xs text-orange-500">dias</p>
          </div>
        </div>
        <span className="badge-neutral text-sm">
          {LEVEL_LABELS[progress.level]}
        </span>
        <div className="text-right">
          <p className="text-lg font-bold text-gray-900">{progress.points}</p>
          <p className="text-xs text-gray-500">pontos</p>
        </div>
      </div>

      {/* Daily Session CTA */}
      <div className="card mb-6 animate-slide-up border-2 border-spain-red/20" style={{ animationDelay: '0.05s' }}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-bold text-gray-900 text-lg">
              {hasTrainedToday ? '✅ Sessão de hoje feita!' : '🎯 Sessão do dia'}
            </h2>
            <p className="text-sm text-gray-500">
              {hasTrainedToday
                ? 'Volte amanhã para manter a sequência'
                : 'Treino rápido de 3-5 min com frases reais'}
            </p>
          </div>
        </div>

        <button
          onClick={onStartDaily}
          className="btn-primary w-full text-lg py-4"
          aria-label="Começar sessão diária"
        >
          {hasTrainedToday ? '🔄 Treinar mais' : '▶️ Começar agora'}
        </button>

        {/* Mini progress bar */}
        {progress.totalAnswered > 0 && (
          <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span>{percentage}% acerto</span>
          </div>
        )}
      </div>

      {/* Módulos por situação */}
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        📍 Módulos por situação
      </h2>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {SITUATIONS.map((situation, i) => {
          const info = SITUATION_LABELS[situation];
          const prog = progress.situationProgress[situation] || 0;
          const isComplete = prog >= 6;

          return (
            <button
              key={situation}
              onClick={() => onStartSituation(situation)}
              className="card text-left p-4 animate-slide-up hover:border-spain-red/30"
              style={{ animationDelay: `${0.1 + i * 0.03}s` }}
              aria-label={`Módulo ${info.name}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{info.emoji}</span>
                {isComplete && <span className="text-green-500 text-sm">✓</span>}
              </div>
              <p className="font-semibold text-gray-900 text-sm">{info.name}</p>
              <p className="text-xs text-gray-500">{info.description}</p>
              {/* Progress dots */}
              <div className="flex gap-1 mt-2">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 flex-1 rounded-full ${
                      idx < prog ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {/* Extra sections */}
      <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <button
          onClick={onViewConjugation}
          className="card w-full text-left p-4 flex items-center gap-3 border-2 border-blue-200 hover:border-blue-300"
          aria-label="Tabelas de conjugação"
        >
          <span className="text-2xl">📖</span>
          <div>
            <p className="font-semibold text-gray-900">Tabelas de Conjugação</p>
            <p className="text-xs text-gray-500">Todos os verbos com pronúncia e 6 tempos verbais</p>
          </div>
        </button>

        <button
          onClick={onViewGotchas}
          className="card w-full text-left p-4 flex items-center gap-3 border-2 border-yellow-200 hover:border-yellow-300"
          aria-label="Pegadinhas para brasileiros"
        >
          <span className="text-2xl">⚠️</span>
          <div>
            <p className="font-semibold text-gray-900">Pegadinhas para brasileiros</p>
            <p className="text-xs text-gray-500">tener vs ter, ser vs estar, pedir vs preguntar...</p>
          </div>
        </button>

        <button
          onClick={onViewLyrics}
          className="card w-full text-left p-4 flex items-center gap-3 border-2 border-purple-200 hover:border-purple-300"
          aria-label="Verbos na música e poesia"
        >
          <span className="text-2xl">🎵</span>
          <div>
            <p className="font-semibold text-gray-900">Verbos na Música</p>
            <p className="text-xs text-gray-500">Letras e poesias com verbos destacados por tempo verbal</p>
          </div>
        </button>

        <button
          onClick={onViewVocabulary}
          className="card w-full text-left p-4 flex items-center gap-3 border-2 border-green-200 hover:border-green-300"
          aria-label="Vocabulário: falsos cognatos e andaluz"
        >
          <span className="text-2xl">📚</span>
          <div>
            <p className="font-semibold text-gray-900">Vocabulário</p>
            <p className="text-xs text-gray-500">Falsos cognatos + expressões andaluzas</p>
          </div>
        </button>
      </div>

      {/* Stats summary */}
      {progress.totalAnswered > 0 && (
        <div className="mt-6 grid grid-cols-4 gap-2 text-center animate-fade-in">
          <div className="bg-green-50 rounded-xl p-2">
            <p className="text-lg font-bold text-green-700">{progress.totalCorrect}</p>
            <p className="text-xs text-green-600">acertos</p>
          </div>
          <div className="bg-red-50 rounded-xl p-2">
            <p className="text-lg font-bold text-red-700">{progress.totalWrong}</p>
            <p className="text-xs text-red-600">erros</p>
          </div>
          <div className="bg-yellow-50 rounded-xl p-2">
            <p className="text-lg font-bold text-yellow-700">{progress.currentStreak}</p>
            <p className="text-xs text-yellow-600">racha</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-2">
            <p className="text-lg font-bold text-purple-700">{progress.bestStreak}</p>
            <p className="text-xs text-purple-600">recorde</p>
          </div>
        </div>
      )}
    </div>
  );
}
