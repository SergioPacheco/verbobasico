import { useState, useEffect, useRef } from 'react';
import { useSpeech } from '../hooks';
import { contextualPhrases } from '../data/phrases';
import { normalizeAnswer } from '../utils';

interface ListeningPageProps {
  onBack: () => void;
}

const SESSION_SIZE = 10;

function pickPhrases() {
  const shuffled = [...contextualPhrases].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, SESSION_SIZE);
}

export function ListeningPage({ onBack }: ListeningPageProps) {
  const { speak, isSupported } = useSpeech();
  const [sessionPhrases] = useState(pickPhrases);
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'listening' | 'correct' | 'wrong' | 'done'>('listening');
  const [score, setScore] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const phrase = sessionPhrases[current];

  // Auto-speak when phrase changes
  useEffect(() => {
    if (status === 'listening' && phrase) {
      setTimeout(() => speak(phrase.spanish), 300);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, status]);

  // Focus input
  useEffect(() => {
    if (status === 'listening') {
      inputRef.current?.focus();
    }
  }, [status]);

  function handleRepeat() {
    speak(phrase.spanish);
  }

  function handleSubmit() {
    if (!input.trim()) return;

    const correct = normalizeAnswer(input) === normalizeAnswer(phrase.spanish);
    if (correct) {
      setScore((s) => s + 1);
      setStatus('correct');
    } else {
      setStatus('wrong');
    }
  }

  function handleNext() {
    const nextIndex = current + 1;
    if (nextIndex >= SESSION_SIZE) {
      setStatus('done');
    } else {
      setCurrent(nextIndex);
      setInput('');
      setStatus('listening');
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      if (status === 'listening') handleSubmit();
      else handleNext();
    }
  }

  if (!isSupported) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="card max-w-sm text-center">
          <p className="text-4xl mb-4">🔇</p>
          <p className="font-semibold text-gray-800 mb-2">Áudio não suportado</p>
          <p className="text-sm text-gray-500 mb-4">
            Seu navegador não suporta síntese de voz.
          </p>
          <button onClick={onBack} className="btn-secondary">
            ← Voltar
          </button>
        </div>
      </div>
    );
  }

  // Done screen
  if (status === 'done') {
    const pct = Math.round((score / SESSION_SIZE) * 100);
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="card max-w-sm w-full text-center animate-slide-up">
          <p className="text-5xl mb-3">{pct >= 80 ? '🏆' : pct >= 50 ? '🎯' : '💪'}</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Sessão concluída!</h2>
          <p className="text-gray-500 mb-6">
            {score}/{SESSION_SIZE} frases corretas ({pct}%)
          </p>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-6">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${pct}%`,
                backgroundColor: pct >= 80 ? '#22c55e' : pct >= 50 ? '#f59e0b' : '#ef4444',
              }}
            />
          </div>
          <button onClick={onBack} className="btn-primary w-full">
            ← Voltar ao início
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="text-gray-500 hover:text-gray-700 text-lg" aria-label="Voltar">
          ←
        </button>
        <div className="flex-1">
          <h1 className="font-bold text-gray-900">🎧 Modo Escuta</h1>
          <p className="text-xs text-gray-500">Digite o que ouviu em espanhol</p>
        </div>
        <span className="text-sm font-semibold text-gray-600">
          {current + 1}/{SESSION_SIZE}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-gray-100 rounded-full mb-8">
        <div
          className="h-full bg-spain-red rounded-full transition-all duration-300"
          style={{ width: `${((current + (status !== 'listening' ? 1 : 0)) / SESSION_SIZE) * 100}%` }}
        />
      </div>

      {/* Score */}
      <div className="flex justify-between text-sm text-gray-500 mb-6">
        <span>✅ {score} corretas</span>
        <span>❌ {current - score + (status === 'wrong' ? 0 : 0)} erradas</span>
      </div>

      {/* Card */}
      <div className="card text-center animate-slide-up">
        <p className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-wide">
          🎧 Ouça e escreva a frase
        </p>

        {/* Big play button */}
        <button
          onClick={handleRepeat}
          className="w-24 h-24 rounded-full bg-spain-red text-white text-4xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:bg-red-700 active:scale-95 transition-transform"
          aria-label="Repetir áudio"
        >
          🔊
        </button>

        <button
          onClick={handleRepeat}
          className="text-sm text-spain-red underline mb-6 block mx-auto"
        >
          Repetir áudio
        </button>

        {/* Input */}
        {status === 'listening' && (
          <div>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escreva o que ouviu..."
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-center text-lg focus:outline-none focus:border-spain-red mb-4"
              autoComplete="off"
              autoCapitalize="none"
            />
            <button
              onClick={handleSubmit}
              disabled={!input.trim()}
              className="btn-primary w-full disabled:opacity-40"
            >
              Verificar
            </button>
          </div>
        )}

        {/* Feedback */}
        {(status === 'correct' || status === 'wrong') && (
          <div className="animate-fade-in">
            <div
              className={`rounded-xl p-4 mb-4 ${
                status === 'correct' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
              }`}
            >
              {status === 'correct' ? (
                <p className="text-green-700 font-semibold">✅ Correto!</p>
              ) : (
                <>
                  <p className="text-red-700 font-semibold mb-2">❌ Incorreto</p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="text-gray-400">Você escreveu:</span>{' '}
                    <span className="line-through text-red-600">{input}</span>
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    <span className="text-gray-400">Correto:</span>{' '}
                    <span className="text-green-700">{phrase.spanish}</span>
                  </p>
                </>
              )}
            </div>
            <p className="text-sm text-gray-500 mb-4 italic">"{phrase.portuguese}"</p>
            <button onClick={handleNext} className="btn-primary w-full" onKeyDown={handleKeyDown}>
              {current + 1 >= SESSION_SIZE ? 'Ver resultado' : 'Próxima →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
