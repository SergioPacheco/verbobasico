import { useNavigate } from 'react-router-dom';
import type { Situation } from '../types';
import { LEVEL_LABELS, SITUATION_LABELS } from '../types';
import { getProgressPercentage } from '../utils';
import { useProgressContext } from '../context';
import { Header } from '../components';

const SITUATIONS: Situation[] = [
  'mercado',
  'restaurante',
  'medico',
  'transporte',
  'trabalho',
  'documentos',
  'aluguel',
  'entrevista',
];

export function HomePage() {
  const navigate = useNavigate();
  const { progress } = useProgressContext();

  const percentage = getProgressPercentage(progress);
  const today = new Date().toISOString().split('T')[0];
  const hasTrainedToday = progress.lastSessionDate === today;

  const handleStartSituation = (situation: Situation) => {
    navigate(`/training/${situation}`);
  };

  return (
    <div className="min-h-[100dvh] overflow-x-hidden bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Header
        title="🇪🇸 Verbo Básico"
        subtitle="Aprenda os verbos que você realmente usa"
        showBack={false}
      />

      <div className="mx-auto w-full max-w-6xl px-3 py-4 pb-20 sm:px-4 sm:pb-24">
        {/* Daily streak + Level */}
        <div className="flex items-center justify-between mb-6 animate-slide-up">
          <div className="flex items-center gap-2">
            <div className="bg-orange-100 rounded-xl px-3 py-2 text-center">
              <p className="text-xl font-bold text-orange-600">🔥 {progress.dailyStreak}</p>
              <p className="text-xs text-orange-500">dias</p>
            </div>
          </div>
          <span className="badge-neutral text-sm">{LEVEL_LABELS[progress.level]}</span>
          <div className="text-right">
            <p className="text-lg font-bold text-gray-900">{progress.points}</p>
            <p className="text-xs text-gray-500">pontos</p>
          </div>
        </div>

        {/* Daily Session CTA */}
        <div
          className="card mb-6 animate-slide-up border-2 border-spain-red/20"
          style={{ animationDelay: '0.05s' }}
        >
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
            onClick={() => navigate('/training')}
            className="btn-primary w-full text-lg py-4"
            aria-label="Começar sessão diária"
          >
            {hasTrainedToday ? '🔄 Treinar mais' : '▶️ Começar agora'}
          </button>

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
        <h2
          className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1 animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
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
                onClick={() => handleStartSituation(situation)}
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
                <div className="flex gap-1 mt-2">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 flex-1 rounded-full ${idx < prog ? 'bg-green-500' : 'bg-gray-200'}`}
                    />
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Modos de Treino */}
        <h2
          className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1 animate-slide-up"
          style={{ animationDelay: '0.25s' }}
        >
          🎮 Modos de Treino
        </h2>

        <div className="grid grid-cols-2 gap-3 mb-6 animate-slide-up" style={{ animationDelay: '0.27s' }}>
          <button
            onClick={() => navigate('/listening')}
            className="card text-left p-4 hover:border-spain-red/30 border-2 border-red-100"
          >
            <span className="text-2xl block mb-2">🎧</span>
            <p className="font-semibold text-gray-900 text-sm">Modo Escuta</p>
            <p className="text-xs text-gray-500">Ouça e escreva a frase</p>
          </button>

          <button
            onClick={() => navigate('/speed')}
            className="card text-left p-4 hover:border-spain-red/30 border-2 border-orange-100"
          >
            <span className="text-2xl block mb-2">⚡</span>
            <p className="font-semibold text-gray-900 text-sm">Speed Drill</p>
            <p className="text-xs text-gray-500">60s cronometrado</p>
          </button>

          <button
            onClick={() => navigate('/dialogue')}
            className="card text-left p-4 hover:border-spain-red/30 border-2 border-blue-100"
          >
            <span className="text-2xl block mb-2">💬</span>
            <p className="font-semibold text-gray-900 text-sm">Diálogos</p>
            <p className="text-xs text-gray-500">Conversas por situação</p>
          </button>

          <button
            onClick={() => navigate('/cloze')}
            className="card text-left p-4 hover:border-spain-red/30 border-2 border-green-100"
          >
            <span className="text-2xl block mb-2">📝</span>
            <p className="font-semibold text-gray-900 text-sm">Cloze Test</p>
            <p className="text-xs text-gray-500">Textos com lacunas</p>
          </button>

          <button
            onClick={() => navigate('/transform')}
            className="card text-left p-4 hover:border-spain-red/30 border-2 border-purple-100"
          >
            <span className="text-2xl block mb-2">🔄</span>
            <p className="font-semibold text-gray-900 text-sm">Transformação</p>
            <p className="text-xs text-gray-500">Troque o tempo verbal</p>
          </button>

          <button
            onClick={() => navigate('/conversation')}
            className="card text-left p-4 hover:border-spain-red/30 border-2 border-teal-100"
          >
            <span className="text-2xl block mb-2">🗣️</span>
            <p className="font-semibold text-gray-900 text-sm">Conversação</p>
            <p className="text-xs text-gray-500">Frases úteis por tema</p>
          </button>
        </div>

        {/* Aprender */}
        <h2
          className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          📚 Aprender
        </h2>

        <div className="space-y-3 mb-6 animate-slide-up" style={{ animationDelay: '0.32s' }}>
          <button
            onClick={() => navigate('/conjugation')}
            className="card w-full text-left p-4 flex items-center gap-3 border-2 border-blue-200 hover:border-blue-300"
          >
            <span className="text-2xl">📖</span>
            <div>
              <p className="font-semibold text-gray-900">Tabelas de Conjugação</p>
              <p className="text-xs text-gray-500">
                Todos os verbos com pronúncia e 7 tempos verbais
              </p>
            </div>
          </button>

          <button
            onClick={() => navigate('/grammar')}
            className="card w-full text-left p-4 flex items-center gap-3 border-2 border-indigo-200 hover:border-indigo-300"
          >
            <span className="text-2xl">📚</span>
            <div>
              <p className="font-semibold text-gray-900">Gramática</p>
              <p className="text-xs text-gray-500">
                Regras essenciais: ser/estar, muy/mucho, subjuntivo...
              </p>
            </div>
          </button>

          <button
            onClick={() => navigate('/gotchas')}
            className="card w-full text-left p-4 flex items-center gap-3 border-2 border-yellow-200 hover:border-yellow-300"
          >
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="font-semibold text-gray-900">Pegadinhas para brasileiros</p>
              <p className="text-xs text-gray-500">
                Falsos cognatos, expressões e armadilhas
              </p>
            </div>
          </button>

          <button
            onClick={() => navigate('/pronunciation')}
            className="card w-full text-left p-4 flex items-center gap-3 border-2 border-pink-200 hover:border-pink-300"
          >
            <span className="text-2xl">🗣️</span>
            <div>
              <p className="font-semibold text-gray-900">Pronúncia</p>
              <p className="text-xs text-gray-500">
                Guia de sons difíceis para brasileiros
              </p>
            </div>
          </button>

          <button
            onClick={() => navigate('/reading')}
            className="card w-full text-left p-4 flex items-center gap-3 border-2 border-emerald-200 hover:border-emerald-300"
          >
            <span className="text-2xl">📄</span>
            <div>
              <p className="font-semibold text-gray-900">Leitura</p>
              <p className="text-xs text-gray-500">
                Textos com tradução e vocabulário
              </p>
            </div>
          </button>
        </div>

        {/* Extras */}
        <h2
          className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-1 animate-slide-up"
          style={{ animationDelay: '0.35s' }}
        >
          🎵 Extras
        </h2>

        <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.37s' }}>
          <button
            onClick={() => navigate('/lyrics')}
            className="card w-full text-left p-4 flex items-center gap-3 border-2 border-purple-200 hover:border-purple-300"
          >
            <span className="text-2xl">🎵</span>
            <div>
              <p className="font-semibold text-gray-900">Música</p>
              <p className="text-xs text-gray-500">Letras de músicas espanholas com Spotify</p>
            </div>
          </button>

          <button
            onClick={() => navigate('/refranes')}
            className="card w-full text-left p-4 flex items-center gap-3 border-2 border-amber-200 hover:border-amber-300"
          >
            <span className="text-2xl">💬</span>
            <div>
              <p className="font-semibold text-gray-900">Refranes</p>
              <p className="text-xs text-gray-500">Provérbios e ditos populares espanhóis</p>
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
    </div>
  );
}
