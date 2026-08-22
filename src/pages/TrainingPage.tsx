import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import type { Situation } from '../types';
import { PRONOUN_LABELS, TENSE_LABELS, SITUATION_LABELS } from '../types';
import { useTraining, useSpeech, useSoundEffects } from '../hooks';
import { getMotivationalMessage, formatTime } from '../utils';
import { useProgressContext } from '../context';
import confetti from 'canvas-confetti';
import { Header } from '../components';

export function TrainingPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams] = useSearchParams();
  const situationParam = params.situation || searchParams.get('situation');
  const situation = situationParam as Situation | null;
  const phraseIdsParam = searchParams.get('phraseIds');
  const phraseIds = phraseIdsParam ? phraseIdsParam.split(',') : undefined;

  const { progress, recordAnswer, updateSituationProgress } = useProgressContext();

  const {
    question,
    currentPhrase,
    isAnswered,
    isCorrect,
    submitAnswer,
    nextQuestion,
    sessionCorrect,
    sessionTotal,
    progressPercent,
    isSessionComplete,
  } = useTraining({ situation: situation || undefined, phraseIds });

  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [shakeError, setShakeError] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [sessionDone, setSessionDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { speak, isSupported: speechSupported } = useSpeech();
  const { playCorrect, playWrong, playSuccess } = useSoundEffects();

  const handleBack = () => navigate('/conjugation');

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isAnswered && inputRef.current && !sessionDone) {
      inputRef.current.focus();
    }
  }, [isAnswered, sessionDone, currentPhrase]);

  const fireConfetti = useCallback(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#DC2626', '#FBBF24', '#10B981', '#8B5CF6'],
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !currentPhrase) return;

    const correct = submitAnswer(inputValue);
    const newStreak = correct ? progress.currentStreak + 1 : 0;
    setMessage(getMotivationalMessage(newStreak, correct));

    if (correct) {
      playCorrect(); // Som de acerto
      if (newStreak >= 4 && newStreak % 5 === 0) {
        fireConfetti();
      }
      recordAnswer(true);
      if (situation) {
        updateSituationProgress(situation, 1);
      }
    } else {
      playWrong(); // Som de erro
      setShakeError(true);
      setTimeout(() => setShakeError(false), 500);
      recordAnswer(false, {
        phraseId: currentPhrase.id,
        verb: currentPhrase.verb,
        tense: currentPhrase.tense,
        pronoun: currentPhrase.pronoun,
        userAnswer: inputValue,
        correctAnswer: currentPhrase.conjugation,
        spanish: currentPhrase.spanish,
      });
    }
  };

  const handleNext = () => {
    if (isSessionComplete) {
      setSessionDone(true);
      if (timerRef.current) clearInterval(timerRef.current);
      playSuccess(); // Som de conclusão
      fireConfetti();
      return;
    }
    setInputValue('');
    setMessage('');
    nextQuestion();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && isAnswered) {
      handleNext();
    }
  };

  // Handle case when no questions are available
  if (!question && !sessionDone) {
    return (
      <div className="min-h-[100dvh] overflow-x-hidden bg-gradient-to-br from-amber-50 via-white to-red-50">
        <Header title="🎯 Treino" />
        <div className="flex items-center justify-center px-4 py-10">
          <div className="card text-center w-full max-w-sm">
            <span className="text-5xl block mb-4">🤔</span>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Sin preguntas disponibles</h2>
            <p className="text-gray-500 mb-6">
              {situation 
                ? `No hay frases para el módulo "${SITUATION_LABELS[situation]?.name || situation}".`
                : 'No se encontraron frases para practicar.'}
            </p>
            <button onClick={handleBack} className="btn-primary w-full">
              ← Volver
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (sessionDone) {
    const accuracy = sessionTotal > 0 ? Math.round((sessionCorrect / sessionTotal) * 100) : 0;
    return (
      <div className="min-h-[100dvh] overflow-x-hidden bg-gradient-to-br from-amber-50 via-white to-red-50">
        <Header title="🎯 Treino" />
        <div className="flex items-center justify-center px-4 py-10">
          <div className="card text-center w-full max-w-sm animate-bounce-in">
            <span className="text-5xl block mb-4">🎉</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Sesión completada!</h2>
            <p className="text-gray-500 mb-6">
              {situation
                ? `Módulo: ${SITUATION_LABELS[situation].emoji} ${SITUATION_LABELS[situation].name}`
                : 'Treino diário'}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 rounded-xl p-3">
                <p className="text-2xl font-bold text-green-700">{sessionCorrect}</p>
                <p className="text-xs text-green-600">acertos</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-3">
                <p className="text-2xl font-bold text-blue-700">{accuracy}%</p>
                <p className="text-xs text-blue-600">precisão</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-3">
                <p className="text-2xl font-bold text-purple-700">{formatTime(elapsedTime)}</p>
                <p className="text-xs text-purple-600">tempo</p>
              </div>
            </div>

            <button onClick={handleBack} className="btn-primary w-full">
              ← Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!question || !currentPhrase) {
    return (
      <div className="min-h-[100dvh] overflow-x-hidden bg-gradient-to-br from-amber-50 via-white to-red-50">
        <Header title="🎯 Treino" />
        <div className="flex items-center justify-center px-4 py-20">
          <div className="card text-center">
            <p className="text-gray-600 text-lg mb-4">Nenhuma frase disponível.</p>
            <button onClick={handleBack} className="btn-primary">
              Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] overflow-x-hidden bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Header
        title={
          situation
            ? `${SITUATION_LABELS[situation].emoji} ${SITUATION_LABELS[situation].name}`
            : '🎯 Treino Diário'
        }
        subtitle={`⏱ ${formatTime(elapsedTime)} | 🔥${progress.currentStreak}`}
      />

      <div className="mx-auto w-full max-w-4xl px-3 py-4 sm:px-4">
        {/* Progress bar */}
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-spain-red to-spain-yellow rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Question Card */}
        <div className={`card mb-4 ${shakeError ? 'animate-shake' : 'animate-fade-in'}`}>
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-1">🇧🇷 Você quer dizer:</p>
            <p className="text-lg text-gray-800 font-medium">{currentPhrase.portuguese}</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-500 mb-2">🇪🇸 Complete com a conjugação correta:</p>
            <p className="text-xl text-gray-900 font-medium leading-relaxed">
              {currentPhrase.challenge.split('___').map((part, idx, arr) => (
                <span key={idx}>
                  {part}
                  {idx < arr.length - 1 && (
                    <span className="inline-block mx-1 border-b-2 border-spain-red min-w-[80px] text-center text-spain-red font-bold">
                      {isAnswered ? currentPhrase.conjugation : '?'}
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap text-xs text-gray-500 mb-4">
            <span className="bg-gray-100 rounded-full px-2 py-1">
              verbo: <strong>{currentPhrase.verb}</strong>
            </span>
            <span className="bg-gray-100 rounded-full px-2 py-1">
              {PRONOUN_LABELS[currentPhrase.pronoun]}
            </span>
            <span className="bg-gray-100 rounded-full px-2 py-1">
              {TENSE_LABELS[currentPhrase.tense]}
            </span>
            {question.verb.type === 'irregular' && (
              <span className="bg-red-100 text-red-700 rounded-full px-2 py-1">⚡ irregular</span>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isAnswered}
              placeholder="Digite a conjugação..."
              className={`input-field mb-3 ${
                isAnswered
                  ? isCorrect
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : 'border-red-500 bg-red-50 text-red-800'
                  : ''
              }`}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
            />

            {!isAnswered ? (
              <button type="submit" disabled={!inputValue.trim()} className="btn-primary w-full">
                Verificar
              </button>
            ) : (
              <button type="button" onClick={handleNext} className="btn-primary w-full" autoFocus>
                {isSessionComplete ? '🏁 Ver resultado' : 'Próxima →'}
              </button>
            )}
          </form>
        </div>

        {isAnswered && (
          <div
            className={`card animate-bounce-in ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}
          >
            <div className="flex items-start gap-3 mb-2">
              <span className="text-2xl">{isCorrect ? '✅' : '❌'}</span>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{message}</p>
                {!isCorrect && (
                  <p className="mt-1 text-gray-700 text-sm">
                    Correto: <strong className="text-green-700">{currentPhrase.conjugation}</strong>
                  </p>
                )}
              </div>
              {speechSupported && (
                <button
                  onClick={() => speak(currentPhrase.spanish)}
                  className="text-gray-400 hover:text-spain-red p-1"
                  aria-label="Ouvir frase completa"
                >
                  🔊
                </button>
              )}
            </div>

            <div className="bg-white/60 rounded-lg p-3">
              <p className="text-sm text-gray-700 font-medium">🇪🇸 {currentPhrase.spanish}</p>
              <p className="text-xs text-gray-500 mt-1">
                💡 <em>{question.verb.tip}</em>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
