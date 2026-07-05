import type { UserProgress, GameLevel, MistakeRecord } from '../types';

const STORAGE_KEY = 'verbo-basico-progress';

const DEFAULT_PROGRESS: UserProgress = {
  totalCorrect: 0,
  totalWrong: 0,
  currentStreak: 0,
  bestStreak: 0,
  totalAnswered: 0,
  level: 'iniciante',
  points: 0,
  dailyStreak: 0,
  lastSessionDate: '',
  mistakes: [],
  completedSituations: [],
  situationProgress: {},
  spacedRepetition: [],
};

export function loadProgress(): UserProgress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...DEFAULT_PROGRESS, ...parsed };
    }
  } catch {
    // corrupted data, reset
  }
  return { ...DEFAULT_PROGRESS };
}

export function saveProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // localStorage full or unavailable
  }
}

export function resetProgress(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function calculateLevel(points: number): GameLevel {
  if (points >= 500) return 'avancado';
  if (points >= 150) return 'intermediario';
  return 'iniciante';
}

export function calculatePoints(isCorrect: boolean, streak: number): number {
  if (!isCorrect) return 0;
  return 10 + Math.min(streak * 2, 20);
}

export function getProgressPercentage(progress: UserProgress): number {
  if (progress.totalAnswered === 0) return 0;
  return Math.round((progress.totalCorrect / progress.totalAnswered) * 100);
}

export function updateDailyStreak(progress: UserProgress): UserProgress {
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  if (progress.lastSessionDate === today) {
    return progress; // Already counted today
  }

  if (progress.lastSessionDate === yesterday) {
    return { ...progress, dailyStreak: progress.dailyStreak + 1, lastSessionDate: today };
  }

  // Streak broken
  return { ...progress, dailyStreak: 1, lastSessionDate: today };
}

export function getMotivationalMessage(streak: number, isCorrect: boolean): string {
  if (!isCorrect) {
    const messages = [
      '¡No pasa nada! Aprender es equivocarse. 💪',
      'Tranquilo, la próxima vez lo clavas. 🎯',
      '¡Ánimo! Cada error es una lección. 📝',
      'No te preocupes, estás aprendiendo. 🌱',
      'Así se aprende, ¡vamos de nuevo! 🚀',
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  if (streak >= 10) {
    const messages = [
      '🔥 ¡INCREÍBLE! ¡Estás en llamas!',
      '🏆 ¡IMPARABLE! ¡Eres un crack!',
      '⭐ ¡PERFECTO! ¡Nivel nativo!',
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }
  if (streak >= 5) {
    const messages = [
      '🎉 ¡Genial! ¡Racha de 5+!',
      '💫 ¡Muy bien! ¡Sigue así!',
      '🚀 ¡Vas volando!',
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }
  if (streak >= 3) {
    return '✨ ¡Muy bien! ¡Vas por buen camino!';
  }

  const messages = [
    '¡Correcto! ✅',
    '¡Bien hecho! 👏',
    '¡Perfecto! ⭐',
    '¡Así se hace! 🎯',
    '¡Olé! 💃',
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

export function addMistake(progress: UserProgress, mistake: MistakeRecord): UserProgress {
  const mistakes = [mistake, ...progress.mistakes].slice(0, 50);
  return { ...progress, mistakes };
}

export function normalizeAnswer(answer: string): string {
  return answer.trim().toLowerCase().normalize('NFC');
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
