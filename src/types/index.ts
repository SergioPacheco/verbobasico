export type Pronoun = 'yo' | 'tu' | 'el' | 'nosotros' | 'vosotros' | 'ellos';

export type TenseKey = 'presente' | 'preteritoIndefinido' | 'futuroSimple' | 'preteritoPerfecto' | 'imperfecto' | 'condicional' | 'subjuntivo';

export type VerbType = 'regular' | 'irregular';

export type Situation =
  | 'mercado'
  | 'medico'
  | 'trabalho'
  | 'documentos'
  | 'restaurante'
  | 'transporte'
  | 'aluguel'
  | 'entrevista';

export interface Conjugation {
  yo: string;
  tu: string;
  el: string;
  nosotros: string;
  vosotros: string;
  ellos: string;
}

/** Pronúncia abrasileirada — sílaba tônica em MAIÚSCULA, alerta opcional */
export interface Pronunciation {
  text: string;
  alert?: string;
}

export interface ConjugationWithPronunciation {
  yo: string;
  tu: string;
  el: string;
  nosotros: string;
  vosotros: string;
  ellos: string;
  pronunciation?: {
    yo: Pronunciation;
    tu: Pronunciation;
    el: Pronunciation;
    nosotros: Pronunciation;
    vosotros: Pronunciation;
    ellos: Pronunciation;
  };
}

export interface Verb {
  infinitive: string;
  translation: string;
  type: VerbType;
  tip: string;
  tenses: Partial<Record<TenseKey, Conjugation>>;
}

/** Uma frase contextual associada a um verbo + situação */
export interface ContextualPhrase {
  id: string;
  verb: string;
  pronoun: Pronoun;
  tense: TenseKey;
  conjugation: string;
  spanish: string;
  portuguese: string;
  situation: Situation;
  /** Frase com ___ no lugar da conjugação — o usuário preenche */
  challenge: string;
  tip?: string;
}

/** Pegadinha para brasileiros */
export interface Gotcha {
  id: string;
  title: string;
  wrong: string;
  wrongExplanation: string;
  correct: string;
  correctExplanation: string;
  example: string;
  exampleTranslation: string;
  category: 'verbo' | 'uso' | 'expressao';
}

export interface TrainingQuestion {
  phrase: ContextualPhrase;
  verb: Verb;
}

export type TrainingMode = 'daily' | 'situation' | 'verb' | 'mistakes' | 'gotchas';

export type GameLevel = 'iniciante' | 'intermediario' | 'avancado';

export interface SessionProgress {
  questionsAnswered: number;
  correct: number;
  startTime: number;
  targetQuestions: number;
}

export interface UserProgress {
  totalCorrect: number;
  totalWrong: number;
  currentStreak: number;
  bestStreak: number;
  totalAnswered: number;
  level: GameLevel;
  points: number;
  dailyStreak: number;
  lastSessionDate: string;
  mistakes: MistakeRecord[];
  completedSituations: Situation[];
  situationProgress: Partial<Record<Situation, number>>;
}

export interface MistakeRecord {
  phraseId: string;
  verb: string;
  tense: TenseKey;
  pronoun: Pronoun;
  userAnswer: string;
  correctAnswer: string;
  spanish: string;
  timestamp: number;
}

export const PRONOUN_LABELS: Record<Pronoun, string> = {
  yo: 'yo',
  tu: 'tú',
  el: 'él/ella/usted',
  nosotros: 'nosotros/as',
  vosotros: 'vosotros/as',
  ellos: 'ellos/ellas/ustedes',
};

export const TENSE_LABELS: Record<TenseKey, string> = {
  presente: 'Presente',
  preteritoIndefinido: 'Pretérito Indefinido',
  futuroSimple: 'Futuro Simple',
  preteritoPerfecto: 'Pretérito Perfecto',
  imperfecto: 'Imperfecto',
  condicional: 'Condicional',
  subjuntivo: 'Subjuntivo',
};

export const SITUATION_LABELS: Record<Situation, { emoji: string; name: string; description: string }> = {
  mercado: { emoji: '🛒', name: 'Supermercado', description: 'Compras e pagamentos' },
  medico: { emoji: '🏥', name: 'Médico', description: 'Consultas e saúde' },
  trabalho: { emoji: '💼', name: 'Trabalho', description: 'Dia a dia no escritório' },
  documentos: { emoji: '📄', name: 'Documentos', description: 'NIE, empadronamiento...' },
  restaurante: { emoji: '🍽️', name: 'Restaurante', description: 'Pedir comida e bebida' },
  transporte: { emoji: '🚌', name: 'Transporte', description: 'Ônibus, metrô, trem' },
  aluguel: { emoji: '🏠', name: 'Aluguel', description: 'Moradia e contratos' },
  entrevista: { emoji: '🤝', name: 'Entrevista', description: 'Emprego e apresentação' },
};

export const LEVEL_LABELS: Record<GameLevel, string> = {
  iniciante: '🌱 Iniciante',
  intermediario: '📚 Intermediário',
  avancado: '🏆 Avançado',
};

/** Verbo destacado numa letra/poesia */
export interface LyricVerb {
  word: string;
  infinitive: string;
  tense: TenseKey;
  pronoun: Pronoun;
  translation: string;
}

/** Uma linha da letra com verbos anotados */
export interface LyricLine {
  text: string;
  verbs: LyricVerb[];
}

/** Entrada de letra/poesia */
export interface LyricEntry {
  id: string;
  title: string;
  artist: string;
  type: 'musica' | 'poesia' | 'refran';
  context: string;
  lines: LyricLine[];
  translation: string;
}

export const TENSE_COLORS: Record<TenseKey, { bg: string; text: string; label: string }> = {
  presente: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Presente' },
  preteritoIndefinido: { bg: 'bg-purple-100', text: 'text-purple-800', label: 'P. Indefinido' },
  futuroSimple: { bg: 'bg-green-100', text: 'text-green-800', label: 'Futuro' },
  preteritoPerfecto: { bg: 'bg-orange-100', text: 'text-orange-800', label: 'P. Perfecto' },
  imperfecto: { bg: 'bg-pink-100', text: 'text-pink-800', label: 'Imperfecto' },
  condicional: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Condicional' },
  subjuntivo: { bg: 'bg-teal-100', text: 'text-teal-800', label: 'Subjuntivo' },
};

/** Falso cognato português-espanhol */
export interface FalseCognate {
  id: string;
  word: string;
  appearsToMean: string;
  actuallyMeans: string;
  correctWord: string;
  example: string;
  exampleTranslation: string;
  danger: 'alto' | 'medio' | 'leve';
}

/** Palavra/expressão andaluza */
export interface AndaluzWord {
  id: string;
  word: string;
  standardSpanish: string;
  portuguese: string;
  example: string;
  exampleTranslation: string;
  category: 'saludo' | 'comida' | 'expresion' | 'pronuncia' | 'cotidiano';
  note?: string;
}
