import { useState } from 'react';
import type { Situation } from '../types';
import { SITUATION_LABELS } from '../types';
import { dialogues } from '../data/dialogues';
import type { Dialogue } from '../data/dialogues';
import { normalizeAnswer } from '../utils';

interface DialoguePageProps {
  onBack: () => void;
}

const SITUATIONS = Object.keys(SITUATION_LABELS) as Situation[];

export function DialoguePage({ onBack }: DialoguePageProps) {
  const [selectedSituation, setSelectedSituation] = useState<Situation | null>(null);
  const [dialogue, setDialogue] = useState<Dialogue | null>(null);
  const [turnIndex, setTurnIndex] = useState(0);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'waiting' | 'correct' | 'wrong'>('waiting');
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [done, setDone] = useState(false);
  const [revealedTurns, setRevealedTurns] = useState<number[]>([]);

  function selectSituation(sit: Situation) {
    const d = dialogues.find((d) => d.situation === sit);
    if (!d) return;
    setSelectedSituation(sit);
    setDialogue(d);
    setTurnIndex(0);
    setInput('');
    setStatus('waiting');
    setScore(0);
    setTotal(0);
    setDone(false);
    setRevealedTurns([]);
    // Reveal first turns automatically up to first user challenge
    revealUntilChallenge(d, 0, []);
  }

  function revealUntilChallenge(d: Dialogue, fromIndex: number, current: number[]) {
    const revealed = [...current];
    let i = fromIndex;
    while (i < d.turns.length) {
      const turn = d.turns[i];
      if (turn.speaker === 'other') {
        revealed.push(i);
        i++;
      } else if (turn.speaker === 'user' && !turn.challenge) {
        revealed.push(i);
        i++;
      } else {
        // User turn with challenge — stop here
        break;
      }
    }
    setRevealedTurns(revealed);
    setTurnIndex(i);
  }

  function handleSubmit() {
    if (!dialogue || !input.trim()) return;
    const turn = dialogue.turns[turnIndex];
    if (!turn || !turn.challenge) return;

    const correct = normalizeAnswer(input) === normalizeAnswer(turn.conjugation ?? '');
    setTotal((t) => t + 1);
    if (correct) {
      setScore((s) => s + 1);
      setStatus('correct');
    } else {
      setStatus('wrong');
    }
  }

  function handleNext() {
    if (!dialogue) return;
    const newRevealed = [...revealedTurns, turnIndex];
    const nextIdx = turnIndex + 1;

    if (nextIdx >= dialogue.turns.length) {
      setRevealedTurns(newRevealed);
      setDone(true);
      return;
    }

    setInput('');
    setStatus('waiting');
    revealUntilChallenge(dialogue, nextIdx, newRevealed);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      if (status === 'waiting') handleSubmit();
      else handleNext();
    }
  }

  // Situation selector
  if (!selectedSituation) {
    return (
      <div className="min-h-screen px-4 py-6 max-w-lg mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={onBack} className="text-gray-500 hover:text-gray-700 text-lg">←</button>
          <div>
            <h1 className="font-bold text-gray-900">💬 Diálogos</h1>
            <p className="text-xs text-gray-500">Escolha uma situação</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {SITUATIONS.map((sit) => {
            const info = SITUATION_LABELS[sit];
            const hasDialogue = dialogues.some((d) => d.situation === sit);
            if (!hasDialogue) return null;
            return (
              <button
                key={sit}
                onClick={() => selectSituation(sit)}
                className="card text-left p-4 hover:border-spain-red/30"
              >
                <span className="text-3xl block mb-2">{info.emoji}</span>
                <p className="font-semibold text-gray-900 text-sm">{info.name}</p>
                <p className="text-xs text-gray-500">{info.description}</p>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Done screen
  if (done && dialogue) {
    const pct = total > 0 ? Math.round((score / total) * 100) : 100;
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="card max-w-sm w-full text-center animate-slide-up">
          <p className="text-5xl mb-3">{pct >= 80 ? '🎉' : '💪'}</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Diálogo concluído!</h2>
          <p className="text-gray-500 mb-2">{dialogue.title}</p>
          <p className="text-4xl font-bold text-spain-red mb-6">
            {score}/{total}
          </p>
          <p className="text-sm text-gray-500 mb-6">{pct}% de precisão</p>

          <button
            onClick={() => setSelectedSituation(null)}
            className="btn-primary w-full mb-3"
          >
            🔄 Outro diálogo
          </button>
          <button onClick={onBack} className="btn-secondary w-full">
            ← Voltar ao início
          </button>
        </div>
      </div>
    );
  }

  if (!dialogue) return null;

  const currentTurn = dialogue.turns[turnIndex];

  return (
    <div className="min-h-screen px-4 py-6 max-w-lg mx-auto flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => setSelectedSituation(null)}
          className="text-gray-500 hover:text-gray-700 text-lg"
          aria-label="Voltar"
        >
          ←
        </button>
        <div className="flex-1">
          <h1 className="font-bold text-gray-900 text-sm">{dialogue.title}</h1>
          <p className="text-xs text-gray-500">{dialogue.description}</p>
        </div>
        <span className="text-sm text-gray-500">
          {score}/{total}
        </span>
      </div>

      {/* Chat bubbles */}
      <div className="flex-1 space-y-3 mb-4 overflow-y-auto">
        {dialogue.turns.map((turn, i) => {
          const isRevealed = revealedTurns.includes(i);
          const isCurrent = i === turnIndex;

          if (!isRevealed && !isCurrent) return null;

          const isUser = turn.speaker === 'user';

          return (
            <div key={i} className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}>
              {!isUser && (
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-1">
                  🧑
                </div>
              )}

              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                  isUser
                    ? 'bg-spain-red text-white rounded-br-sm'
                    : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                }`}
              >
                {isCurrent && turn.challenge && !isRevealed ? (
                  // Challenge turn — show challenge text with ___
                  <p className="text-sm font-medium">
                    {turn.challenge.split('___').map((part, j, arr) => (
                      <span key={j}>
                        {part}
                        {j < arr.length - 1 && (
                          <span className="inline-block border-b-2 border-white/60 min-w-[60px] text-center text-xs">
                            {status === 'correct' || status === 'wrong' ? (
                              <span className={status === 'correct' ? 'text-yellow-200' : 'text-red-200'}>
                                {turn.conjugation}
                              </span>
                            ) : '___'}
                          </span>
                        )}
                      </span>
                    ))}
                  </p>
                ) : (
                  <p className="text-sm">{turn.spanish}</p>
                )}
                <p className={`text-xs mt-1 ${isUser ? 'text-red-200' : 'text-gray-500'}`}>
                  {turn.portuguese}
                </p>
              </div>

              {isUser && (
                <div className="w-8 h-8 rounded-full bg-spain-red/20 flex items-center justify-center text-sm ml-2 flex-shrink-0 mt-1">
                  🇧🇷
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Input area */}
      {currentTurn && currentTurn.challenge && !revealedTurns.includes(turnIndex) && !done && (
        <div className="card animate-slide-up">
          <p className="text-xs text-gray-500 mb-2">
            Complete a frase com o verbo <span className="font-semibold text-spain-red">{currentTurn.verb}</span>
          </p>

          {status === 'waiting' ? (
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={`conjugação de ${currentTurn.verb}...`}
                className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-2 text-center focus:outline-none focus:border-spain-red"
                autoComplete="off"
                autoCapitalize="none"
                autoFocus
              />
              <button
                onClick={handleSubmit}
                disabled={!input.trim()}
                className="btn-primary px-4 disabled:opacity-40"
              >
                ✓
              </button>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div
                className={`rounded-xl p-3 mb-3 ${
                  status === 'correct' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                }`}
              >
                {status === 'correct' ? (
                  <p className="text-green-700 font-semibold text-sm">✅ Correto!</p>
                ) : (
                  <p className="text-red-700 text-sm">
                    ❌ Correto:{' '}
                    <span className="font-bold">{currentTurn.conjugation}</span>
                  </p>
                )}
              </div>
              <button onClick={handleNext} className="btn-primary w-full" onKeyDown={handleKeyDown}>
                {turnIndex + 1 >= dialogue.turns.length ? 'Ver resultado' : 'Continuar →'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
