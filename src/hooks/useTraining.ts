import { useState, useCallback } from 'react';
import type { ContextualPhrase, Situation, TrainingQuestion } from '../types';
import { contextualPhrases } from '../data';
import { verbs } from '../data';
import { normalizeAnswer } from '../utils';

interface TrainingConfig {
  situation?: Situation;
  /** Se definido, filtra frases do array de mistakes (revisar erros) */
  phraseIds?: string[];
}

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function buildQuestion(phrase: ContextualPhrase): TrainingQuestion | null {
  const verb = verbs.find((v) => v.infinitive === phrase.verb);
  if (!verb) return null;
  return { phrase, verb };
}

export function useTraining(config: TrainingConfig) {
  const [queue, setQueue] = useState<ContextualPhrase[]>(() => {
    let available: ContextualPhrase[];

    if (config.phraseIds && config.phraseIds.length > 0) {
      available = contextualPhrases.filter((p) => config.phraseIds!.includes(p.id));
    } else if (config.situation) {
      available = contextualPhrases.filter((p) => p.situation === config.situation);
    } else {
      available = contextualPhrases;
    }

    return shuffleArray(available);
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);

  const currentPhrase = queue[currentIndex] || null;
  const question = currentPhrase ? buildQuestion(currentPhrase) : null;

  const submitAnswer = useCallback((answer: string): boolean => {
    if (!currentPhrase) return false;

    const normalized = normalizeAnswer(answer);
    const correct = normalizeAnswer(currentPhrase.conjugation);
    const result = normalized === correct;

    setUserAnswer(answer);
    setIsAnswered(true);
    setIsCorrect(result);
    setSessionTotal((prev) => prev + 1);
    if (result) setSessionCorrect((prev) => prev + 1);

    return result;
  }, [currentPhrase]);

  const nextQuestion = useCallback(() => {
    setIsAnswered(false);
    setIsCorrect(null);
    setUserAnswer('');

    if (currentIndex + 1 < queue.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Reshuffle and restart
      setQueue((prev) => shuffleArray(prev));
      setCurrentIndex(0);
    }
  }, [currentIndex, queue]);

  const totalInSession = queue.length;
  const progressPercent = totalInSession > 0
    ? Math.round(((currentIndex + (isAnswered ? 1 : 0)) / totalInSession) * 100)
    : 0;

  return {
    question,
    currentPhrase,
    isAnswered,
    isCorrect,
    userAnswer,
    submitAnswer,
    nextQuestion,
    sessionCorrect,
    sessionTotal,
    progressPercent,
    questionsRemaining: totalInSession - currentIndex - (isAnswered ? 1 : 0),
    isSessionComplete: isAnswered && currentIndex + 1 >= totalInSession,
  };
}
