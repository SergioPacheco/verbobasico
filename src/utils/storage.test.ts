import { describe, it, expect } from 'vitest';
import {
  calculateLevel,
  calculatePoints,
  getProgressPercentage,
  normalizeAnswer,
  getMotivationalMessage,
  formatTime,
} from './storage';
import type { UserProgress } from '../types';

describe('storage utils', () => {
  describe('calculateLevel', () => {
    it('should return iniciante for low points', () => {
      expect(calculateLevel(0)).toBe('iniciante');
      expect(calculateLevel(100)).toBe('iniciante');
      expect(calculateLevel(149)).toBe('iniciante');
    });

    it('should return intermediario for medium points', () => {
      expect(calculateLevel(150)).toBe('intermediario');
      expect(calculateLevel(300)).toBe('intermediario');
      expect(calculateLevel(499)).toBe('intermediario');
    });

    it('should return avancado for high points', () => {
      expect(calculateLevel(500)).toBe('avancado');
      expect(calculateLevel(1000)).toBe('avancado');
    });
  });

  describe('calculatePoints', () => {
    it('should return 0 for wrong answer', () => {
      expect(calculatePoints(false, 0)).toBe(0);
      expect(calculatePoints(false, 10)).toBe(0);
    });

    it('should return base points plus streak bonus for correct answer', () => {
      expect(calculatePoints(true, 0)).toBe(10);
      expect(calculatePoints(true, 1)).toBe(12);
      expect(calculatePoints(true, 5)).toBe(20);
    });

    it('should cap streak bonus at 20', () => {
      expect(calculatePoints(true, 10)).toBe(30);
      expect(calculatePoints(true, 20)).toBe(30);
    });
  });

  describe('getProgressPercentage', () => {
    it('should return 0 when no questions answered', () => {
      const progress = { totalCorrect: 0, totalAnswered: 0 } as UserProgress;
      expect(getProgressPercentage(progress)).toBe(0);
    });

    it('should calculate percentage correctly', () => {
      const progress = { totalCorrect: 8, totalAnswered: 10 } as UserProgress;
      expect(getProgressPercentage(progress)).toBe(80);
    });

    it('should round percentage', () => {
      const progress = { totalCorrect: 1, totalAnswered: 3 } as UserProgress;
      expect(getProgressPercentage(progress)).toBe(33);
    });
  });

  describe('normalizeAnswer', () => {
    it('should lowercase and trim', () => {
      expect(normalizeAnswer('  HABLO  ')).toBe('hablo');
    });

    it('should preserve accents', () => {
      expect(normalizeAnswer('Él habló')).toBe('él habló');
    });

    it('should remove punctuation', () => {
      expect(normalizeAnswer('¿Cómo estás?')).toBe('cómo estás');
      expect(normalizeAnswer('¡Hola!')).toBe('hola');
    });

    it('should normalize multiple spaces', () => {
      expect(normalizeAnswer('yo   hablo   español')).toBe('yo hablo español');
    });
  });

  describe('getMotivationalMessage', () => {
    it('should return encouraging message for wrong answer', () => {
      const message = getMotivationalMessage(0, false);
      expect(message).toBeTruthy();
      expect(typeof message).toBe('string');
    });

    it('should return celebration message for high streak', () => {
      const message = getMotivationalMessage(10, true);
      // High streak can return messages with 🔥, 🏆, or ⭐
      expect(message.length).toBeGreaterThan(0);
      expect(['🔥', '🏆', '⭐'].some((emoji) => message.includes(emoji))).toBe(true);
    });

    it('should return different messages for different streaks', () => {
      const lowStreak = getMotivationalMessage(1, true);
      const highStreak = getMotivationalMessage(10, true);
      // Messages should be different
      expect(lowStreak).not.toBe(highStreak);
    });
  });

  describe('formatTime', () => {
    it('should format seconds correctly', () => {
      expect(formatTime(0)).toBe('0:00');
      expect(formatTime(5)).toBe('0:05');
      expect(formatTime(65)).toBe('1:05');
      expect(formatTime(125)).toBe('2:05');
    });
  });
});
