import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useProgress } from './useProgress';

describe('useProgress', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('should initialize with default progress', () => {
    const { result } = renderHook(() => useProgress());

    expect(result.current.progress.totalCorrect).toBe(0);
    expect(result.current.progress.totalWrong).toBe(0);
    expect(result.current.progress.currentStreak).toBe(0);
    expect(result.current.progress.level).toBe('iniciante');
  });

  it('should record correct answer', () => {
    const { result } = renderHook(() => useProgress());

    act(() => {
      result.current.recordAnswer(true);
    });

    expect(result.current.progress.totalCorrect).toBe(1);
    expect(result.current.progress.totalWrong).toBe(0);
    expect(result.current.progress.currentStreak).toBe(1);
    expect(result.current.progress.points).toBeGreaterThan(0);
  });

  it('should record wrong answer and reset streak', () => {
    const { result } = renderHook(() => useProgress());

    // First, record some correct answers
    act(() => {
      result.current.recordAnswer(true);
      result.current.recordAnswer(true);
    });

    expect(result.current.progress.currentStreak).toBe(2);

    // Then record a wrong answer
    act(() => {
      result.current.recordAnswer(false);
    });

    expect(result.current.progress.totalWrong).toBe(1);
    expect(result.current.progress.currentStreak).toBe(0);
  });

  it('should add mistake record when answer is wrong', () => {
    const { result } = renderHook(() => useProgress());

    const mistakeData = {
      phraseId: 'test-phrase-1',
      verb: 'hablar',
      tense: 'presente' as const,
      pronoun: 'yo' as const,
      userAnswer: 'hablo',
      correctAnswer: 'hablo',
      spanish: 'Yo hablo español',
    };

    act(() => {
      result.current.recordAnswer(false, mistakeData);
    });

    expect(result.current.progress.mistakes).toHaveLength(1);
    expect(result.current.progress.mistakes[0].phraseId).toBe('test-phrase-1');
    expect(result.current.progress.mistakes[0].verb).toBe('hablar');
  });

  it('should clear all mistakes', () => {
    const { result } = renderHook(() => useProgress());

    const mistakeData = {
      phraseId: 'test-phrase-1',
      verb: 'hablar',
      tense: 'presente' as const,
      pronoun: 'yo' as const,
      userAnswer: 'wrong',
      correctAnswer: 'hablo',
      spanish: 'Yo hablo español',
    };

    act(() => {
      result.current.recordAnswer(false, mistakeData);
    });

    expect(result.current.progress.mistakes).toHaveLength(1);

    act(() => {
      result.current.clearMistakes();
    });

    expect(result.current.progress.mistakes).toHaveLength(0);
  });

  it('should update level based on points', () => {
    const { result } = renderHook(() => useProgress());

    // Record many correct answers to accumulate points
    act(() => {
      for (let i = 0; i < 20; i++) {
        result.current.recordAnswer(true);
      }
    });

    expect(result.current.progress.level).toBe('intermediario');
  });
});
