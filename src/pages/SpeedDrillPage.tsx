import { useState, useEffect, useRef, useCallback } from 'react';
import { contextualPhrases } from '../data/phrases';
import { normalizeAnswer } from '../utils';
import type { ContextualPhrase } from '../types';
import { Header } from '../components';

interface SpeedDrillPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const TOTAL_TIME = 60;

function shuffleAll(): ContextualPhrase[] {
  return [...contextualPhrases].sort(() => Math.random() - 0.5);
}

export function SpeedDrillPage({ onBack, onNavigate }: SpeedDrillPageProps) {
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [queue, setQueue] = useState<ContextualPhrase[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [input, setInput] = useState('');
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const [showCorrect, setShowCorrect] = useState(false);
  const [responseTimes, setResponseTimes] = useState<number[]>([]);
  const [questionStart, setQuestionStart] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const endGame = useCallback(() => {
    setDone(true);
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (started && !done) {
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            endGame();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [started, done, endGame]);

  function startGame() {
    setQueue(shuffleAll());
    setCurrentIdx(0);
    setInput('');
    setCorrect(0);
    setTotal(0);
    setTimeLeft(TOTAL_TIME);
    setResponseTimes([]);
    setDone(false);
    setStarted(true);
    setQuestionStart(Date.now());
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  function advance(wasCorrect: boolean) {
    const rt = Date.now() - questionStart;
    setResponseTimes((prev) => [...prev, rt]);
    setTotal((t) => t + 1);
    if (wasCorrect) setCorrect((c) => c + 1);
    setCurrentIdx((i) => i + 1);
    setInput('');
    setQuestionStart(Date.now());
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setInput(val);

    const phrase = queue[currentIdx];
    if (!phrase) return;

    if (normalizeAnswer(val) === normalizeAnswer(phrase.conjugation)) {
      advance(true);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && input.trim()) {
      const phrase = queue[currentIdx];
      if (!phrase) return;

      if (normalizeAnswer(input) === normalizeAnswer(phrase.conjugation)) {
        advance(true);
      } else {
        setShowCorrect(true);
        setTimeout(() => {
          setShowCorrect(false);
          advance(false);
        }, 1000);
      }
    }
  }

  const timerPct = (timeLeft / TOTAL_TIME) * 100;
  const timerColor = timeLeft > 30 ? '#22c55e' : timeLeft > 15 ? '#f59e0b' : '#ef4444';

  const avgTime =
    responseTimes.length > 0
      ? Math.round(responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length / 100) / 10
      : 0;

  const phrase = queue[currentIdx];

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
        <Header title="⚡ Speed Drill" onNavigate={onNavigate} showBack onBack={onBack} />
        <div className="flex items-center justify-center px-4 py-10">
          <div className="card max-w-sm w-full text-center animate-slide-up">
            <p className="text-5xl mb-4">⚡</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Speed Drill</h2>
            <p className="text-gray-500 mb-6 text-sm">
              60 segundos. Preencha a conjugação o mais rápido que conseguir.
              Próxima frase automática ao acertar!
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-lg font-bold text-gray-800">⏱ 60s</p>
                <p className="text-gray-500">tempo total</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-lg font-bold text-gray-800">⚡ Auto</p>
                <p className="text-gray-500">ao acertar</p>
              </div>
            </div>
            <button onClick={startGame} className="btn-primary w-full text-lg py-4">
              ▶️ Começar
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (done) {
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
        <Header title="⚡ Speed Drill" onNavigate={onNavigate} showBack onBack={onBack} />
        <div className="flex items-center justify-center px-4 py-10">
          <div className="card max-w-sm w-full text-center animate-slide-up">
            <p className="text-5xl mb-3">
              {pct >= 80 ? '🏆' : pct >= 60 ? '⚡' : '💪'}
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Tempo esgotado!</h2>
            <p className="text-gray-500 mb-6">Veja como foi seu desempenho</p>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-green-50 rounded-xl p-3">
                <p className="text-xl font-bold text-green-700">{correct}</p>
                <p className="text-xs text-green-600">acertos</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xl font-bold text-gray-700">{total}</p>
                <p className="text-xs text-gray-500">tentativas</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-3">
                <p className="text-xl font-bold text-blue-700">{avgTime}s</p>
                <p className="text-xs text-blue-600">média/resp</p>
              </div>
            </div>

            <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-6">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${pct}%`,
                  backgroundColor: pct >= 80 ? '#22c55e' : pct >= 60 ? '#f59e0b' : '#ef4444',
                }}
              />
            </div>
            <p className="text-sm text-gray-500 mb-6">{pct}% de precisão</p>

            <button onClick={startGame} className="btn-primary w-full mb-3">
              🔄 Jogar novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Header
        title="⚡ Speed Drill"
        subtitle={`✅ ${correct} | #${total + 1}`}
        onNavigate={onNavigate}
        showBack
        onBack={endGame}
      />

      <div className="max-w-2xl mx-auto px-4 py-4">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-500">Tempo restante</span>
            <span
              className="text-2xl font-bold tabular-nums transition-colors duration-300"
              style={{ color: timerColor }}
            >
              {timeLeft}s
            </span>
          </div>
          <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{ width: `${timerPct}%`, backgroundColor: timerColor }}
            />
          </div>
        </div>

        {phrase && (
          <div className="card animate-slide-up" key={currentIdx}>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">
              {phrase.situation} • {phrase.tense}
            </p>

            <p className="text-base text-gray-700 mb-1 leading-relaxed">
              {phrase.portuguese}
            </p>

            <div className="text-lg font-medium text-gray-800 mb-4 leading-relaxed">
              {phrase.challenge.split('___').map((part: string, i: number, arr: string[]) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="inline-block border-b-2 border-spain-red min-w-[80px] text-center">
                      {showCorrect ? (
                        <span className="text-green-600 font-bold">{phrase.conjugation}</span>
                      ) : (
                        <span className="text-gray-400">___</span>
                      )}
                    </span>
                  )}
                </span>
              ))}
            </div>

            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="conjugação..."
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-center text-lg focus:outline-none focus:border-spain-red"
              autoComplete="off"
              autoCapitalize="none"
              disabled={showCorrect}
            />

            {showCorrect && (
              <p className="text-center text-red-500 text-sm mt-2 animate-fade-in">
                ❌ Correto: <span className="font-bold text-green-600">{phrase.conjugation}</span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
