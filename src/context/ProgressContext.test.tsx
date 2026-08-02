import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { ProgressProvider, useProgressContext } from './ProgressContext';
import type { ReactNode } from 'react';

function wrapper({ children }: { children: ReactNode }) {
  return <ProgressProvider>{children}</ProgressProvider>;
}

describe('ProgressContext', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('should provide progress state', () => {
    const { result } = renderHook(() => useProgressContext(), { wrapper });

    expect(result.current.progress).toBeDefined();
    expect(result.current.progress.totalCorrect).toBe(0);
  });

  it('should record answer correctly', () => {
    const { result } = renderHook(() => useProgressContext(), { wrapper });

    act(() => {
      result.current.recordAnswer(true);
    });

    expect(result.current.progress.totalCorrect).toBe(1);
  });

  it('should update situation progress', () => {
    const { result } = renderHook(() => useProgressContext(), { wrapper });

    act(() => {
      result.current.updateSituationProgress('mercado', 3);
    });

    expect(result.current.progress.situationProgress.mercado).toBe(3);
  });

  it('should mark situation as completed when progress reaches 6', () => {
    const { result } = renderHook(() => useProgressContext(), { wrapper });

    act(() => {
      result.current.updateSituationProgress('mercado', 6);
    });

    expect(result.current.progress.completedSituations).toContain('mercado');
  });

  it('should clear mistakes', () => {
    const { result } = renderHook(() => useProgressContext(), { wrapper });

    // Add a mistake
    act(() => {
      result.current.recordAnswer(false, {
        phraseId: 'test',
        verb: 'hablar',
        tense: 'presente',
        pronoun: 'yo',
        userAnswer: 'wrong',
        correctAnswer: 'hablo',
        spanish: 'Yo hablo',
      });
    });

    expect(result.current.progress.mistakes).toHaveLength(1);

    act(() => {
      result.current.clearMistakes();
    });

    expect(result.current.progress.mistakes).toHaveLength(0);
  });

  it('should throw error when used outside provider', () => {
    // Suppress console.error for this test
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => {
      renderHook(() => useProgressContext());
    }).toThrow('useProgressContext must be used within a ProgressProvider');

    consoleSpy.mockRestore();
  });
});
