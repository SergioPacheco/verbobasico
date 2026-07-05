import { useCallback } from 'react';
import type { SpacedRepetitionCard } from '../types';
import { useProgress } from './useProgress';

const MIN_EASE_FACTOR = 1.3;

/**
 * SM-2 simplified algorithm.
 * quality: 0-5 (0=total blank, 1=wrong, 3=correct after thinking, 5=instant correct)
 */
export function updateCard(card: SpacedRepetitionCard, quality: number): SpacedRepetitionCard {
  const q = Math.max(0, Math.min(5, quality));
  const now = Date.now();

  let { interval, repetition, easeFactor } = card;

  if (q < 3) {
    // Failed — reset repetitions
    repetition = 0;
    interval = 1;
  } else {
    // Passed
    if (repetition === 0) {
      interval = 1;
    } else if (repetition === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetition += 1;
  }

  // Update ease factor
  easeFactor = easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  if (easeFactor < MIN_EASE_FACTOR) easeFactor = MIN_EASE_FACTOR;

  const nextReview = now + interval * 24 * 60 * 60 * 1000;

  return { ...card, interval, repetition, easeFactor, nextReview };
}

/** Returns cards due for review (nextReview <= now) */
export function getCardsForReview(
  cards: SpacedRepetitionCard[],
  now: number = Date.now()
): SpacedRepetitionCard[] {
  return cards.filter((c) => c.nextReview <= now);
}

/** Creates a new card with SM-2 defaults */
export function createCard(phraseId: string): SpacedRepetitionCard {
  return {
    phraseId,
    interval: 1,
    repetition: 0,
    easeFactor: 2.5,
    nextReview: Date.now(), // due immediately
  };
}

export function useSpacedRepetition() {
  const { progress, recordAnswer } = useProgress();

  const recordSpacedAnswer = useCallback(
    (_phraseId: string, quality: number) => {
      const isCorrect = quality >= 3;
      recordAnswer(isCorrect);
    },
    [recordAnswer]
  );

  const getDueCards = useCallback(() => {
    return getCardsForReview(progress.spacedRepetition ?? []);
  }, [progress.spacedRepetition]);

  return { recordSpacedAnswer, getDueCards, cards: progress.spacedRepetition ?? [] };
}
