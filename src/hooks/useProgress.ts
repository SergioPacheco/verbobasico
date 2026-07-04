import { useState, useEffect, useCallback } from 'react';
import type { UserProgress, MistakeRecord, Situation } from '../types';
import {
  loadProgress,
  saveProgress,
  resetProgress as resetStoredProgress,
  calculateLevel,
  calculatePoints,
  updateDailyStreak,
  addMistake,
} from '../utils';

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const loaded = loadProgress();
    return updateDailyStreak(loaded);
  });

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const recordAnswer = useCallback((isCorrect: boolean, mistake?: Omit<MistakeRecord, 'timestamp'>) => {
    setProgress((prev) => {
      const newStreak = isCorrect ? prev.currentStreak + 1 : 0;
      const pointsEarned = calculatePoints(isCorrect, prev.currentStreak);
      const newPoints = prev.points + pointsEarned;

      let updated: UserProgress = {
        ...prev,
        totalCorrect: prev.totalCorrect + (isCorrect ? 1 : 0),
        totalWrong: prev.totalWrong + (isCorrect ? 0 : 1),
        currentStreak: newStreak,
        bestStreak: Math.max(prev.bestStreak, newStreak),
        totalAnswered: prev.totalAnswered + 1,
        points: newPoints,
        level: calculateLevel(newPoints),
        lastSessionDate: new Date().toISOString().split('T')[0],
      };

      if (!isCorrect && mistake) {
        updated = addMistake(updated, { ...mistake, timestamp: Date.now() });
      }

      return updated;
    });
  }, []);

  const updateSituationProgress = useCallback((situation: Situation, correct: number) => {
    setProgress((prev) => {
      const currentProg = prev.situationProgress[situation] || 0;
      const newProg = Math.min(currentProg + correct, 6); // max 6 per situation
      const completed = newProg >= 6 && !prev.completedSituations.includes(situation)
        ? [...prev.completedSituations, situation]
        : prev.completedSituations;

      return {
        ...prev,
        situationProgress: { ...prev.situationProgress, [situation]: newProg },
        completedSituations: completed,
      };
    });
  }, []);

  const resetAll = useCallback(() => {
    resetStoredProgress();
    setProgress(loadProgress());
  }, []);

  const clearMistakes = useCallback(() => {
    setProgress((prev) => ({ ...prev, mistakes: [] }));
  }, []);

  return { progress, recordAnswer, updateSituationProgress, resetAll, clearMistakes };
}
