import { useState } from 'react';
import { normalizeAnswer } from '../utils';

interface TransformPageProps {
  onBack: () => void;
}

type TargetTense = 'preteritoIndefinido' | 'futuroSimple' | 'condicional' | 'imperfecto';

interface TransformExercise {
  id: string;
  presentSentence: string;
  verb: string;
  pronoun: string;
  presentConjugation: string;
  targetTense: TargetTense;
  targetConjugation: string;
  targetSentence: string;
  hint: string;
}

const TENSE_NAMES: Record<TargetTense, string> = {
  preteritoIndefinido: 'Pretérito Indefinido (passado)',
  futuroSimple: 'Futuro Simple',
  condicional: 'Condicional',
  imperfecto: 'Imperfecto',
};

const TENSE_TIPS: Record<TargetTense, string> = {
  preteritoIndefinido: 'Ação pontual e concluída no passado.',
  futuroSimple: 'Ação futura ou hipótese.',
  condicional: 'Ação condicional ou cortesia.',
  imperfecto: 'Ação habitual ou em progresso no passado.',
};

const EXERCISES: TransformExercise[] = [
  {
    id: 'tf-01',
    presentSentence: 'Hoy trabajo mucho.',
    verb: 'trabajar',
    pronoun: 'yo',
    presentConjugation: 'trabajo',
    targetTense: 'preteritoIndefinido',
    targetConjugation: 'trabajé',
    targetSentence: 'Ayer trabajé mucho.',
    hint: 'yo → -é (verbos -ar)',
  },
  {
    id: 'tf-02',
    presentSentence: 'Hoy como en casa.',
    verb: 'comer',
    pronoun: 'yo',
    presentConjugation: 'como',
    targetTense: 'futuroSimple',
    targetConjugation: 'comeré',
    targetSentence: 'Mañana comeré en casa.',
    hint: 'infinitivo + -é',
  },
  {
    id: 'tf-03',
    presentSentence: 'Hoy tiene mucho trabajo.',
    verb: 'tener',
    pronoun: 'él',
    presentConjugation: 'tiene',
    targetTense: 'condicional',
    targetConjugation: 'tendría',
    targetSentence: 'En ese caso, tendría mucho trabajo.',
    hint: 'tener → tendr- + ía',
  },
  {
    id: 'tf-04',
    presentSentence: 'Voy al médico hoy.',
    verb: 'ir',
    pronoun: 'yo',
    presentConjugation: 'voy',
    targetTense: 'imperfecto',
    targetConjugation: 'iba',
    targetSentence: 'De niño, iba al médico cada mes.',
    hint: 'ir → iba (irregular)',
  },
  {
    id: 'tf-05',
    presentSentence: 'Habla español muy bien.',
    verb: 'hablar',
    pronoun: 'él',
    presentConjugation: 'habla',
    targetTense: 'preteritoIndefinido',
    targetConjugation: 'habló',
    targetSentence: 'En la entrevista, habló español muy bien.',
    hint: 'él → -ó (verbos -ar)',
  },
  {
    id: 'tf-06',
    presentSentence: 'Puedo ayudarte.',
    verb: 'poder',
    pronoun: 'yo',
    presentConjugation: 'puedo',
    targetTense: 'condicional',
    targetConjugation: 'podría',
    targetSentence: '¿Podría ayudarte?',
    hint: 'poder → podr- + ía',
  },
  {
    id: 'tf-07',
    presentSentence: 'Vivimos en Madrid.',
    verb: 'vivir',
    pronoun: 'nosotros',
    presentConjugation: 'vivimos',
    targetTense: 'imperfecto',
    targetConjugation: 'vivíamos',
    targetSentence: 'Antes vivíamos en Madrid.',
    hint: 'nosotros -ir → -íamos',
  },
  {
    id: 'tf-08',
    presentSentence: 'Estudio español todos los días.',
    verb: 'estudiar',
    pronoun: 'yo',
    presentConjugation: 'estudio',
    targetTense: 'futuroSimple',
    targetConjugation: 'estudiaré',
    targetSentence: 'Mañana estudiaré español.',
    hint: 'infinitivo + -é',
  },
];

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function TransformPage({ onBack }: TransformPageProps) {
  const [queue] = useState(() => shuffle(EXERCISES).slice(0, 8));
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'answering' | 'correct' | 'wrong'>('answering');
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const exercise = queue[current];

  function handleSubmit() {
    if (!input.trim()) return;
    const correct = normalizeAnswer(input) === normalizeAnswer(exercise.targetConjugation);
    if (correct) {
      setScore((s) => s + 1);
      setStatus('correct');
    } else {
      setStatus('wrong');
    }
  }

  function handleNext() {
    const next = current + 1;
    if (next >= queue.length) {
      setDone(true);
      return;
    }
    setCurrent(next);
    setInput('');
    setStatus('answering');
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      if (status === 'answering') handleSubmit();
      else handleNext();
    }
  }

  if (done) {
    const pct = Math.round((score / queue.length) * 100);
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="card max-w-sm w-full text-center animate-slide-up">
          <p className="text-5xl mb-3">{pct >= 80 ? '🏆' : pct >= 50 ? '🎯' : '💪'}</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Transformações concluídas!</h2>
          <p className="text-4xl font-bold text-spain-red my-4">
            {score}/{queue.length}
          </p>
          <p className="text-gray-500 mb-6">{pct}% de precisão</p>

          <button
            onClick={() => { setCurrent(0); setInput(''); setStatus('answering'); setScore(0); setDone(false); }}
            className="btn-primary w-full mb-3"
          >
            🔄 Tentar novamente
          </button>
          <button onClick={onBack} className="btn-secondary w-full">
            ← Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="text-gray-500 hover:text-gray-700 text-lg">←</button>
        <div className="flex-1">
          <h1 className="font-bold text-gray-900">🔄 Transformação de Tempos</h1>
          <p className="text-xs text-gray-500">Reescreva no tempo pedido</p>
        </div>
        <span className="text-sm font-semibold text-gray-600">
          {current + 1}/{queue.length}
        </span>
      </div>

      {/* Progress */}
      <div className="h-2 bg-gray-100 rounded-full mb-6">
        <div
          className="h-full bg-spain-red rounded-full transition-all duration-300"
          style={{ width: `${(current / queue.length) * 100}%` }}
        />
      </div>

      {/* Card */}
      <div className="card animate-slide-up" key={current}>
        {/* Tense target */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-4">
          <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">
            Transforme para →
          </p>
          <p className="text-blue-800 font-bold">{TENSE_NAMES[exercise.targetTense]}</p>
          <p className="text-xs text-blue-600">{TENSE_TIPS[exercise.targetTense]}</p>
        </div>

        {/* Present sentence */}
        <div className="mb-4">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Frase no presente</p>
          <p className="text-xl font-semibold text-gray-800">{exercise.presentSentence}</p>
          <p className="text-sm text-gray-500 mt-1">
            Verbo: <span className="font-medium text-spain-red">{exercise.verb}</span> ({exercise.pronoun})
          </p>
        </div>

        {/* Input */}
        {status === 'answering' && (
          <div>
            <p className="text-xs text-gray-500 mb-2">
              Qual é a conjugação de <strong>{exercise.verb}</strong> ({exercise.pronoun}) no{' '}
              {TENSE_NAMES[exercise.targetTense]}?
            </p>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={`conjugação de ${exercise.verb}...`}
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-center text-lg focus:outline-none focus:border-spain-red mb-4"
              autoComplete="off"
              autoCapitalize="none"
              autoFocus
            />
            <button
              onClick={handleSubmit}
              disabled={!input.trim()}
              className="btn-primary w-full disabled:opacity-40"
            >
              Verificar
            </button>
          </div>
        )}

        {/* Feedback */}
        {(status === 'correct' || status === 'wrong') && (
          <div className="animate-fade-in">
            <div
              className={`rounded-xl p-4 mb-4 ${
                status === 'correct'
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
              }`}
            >
              {status === 'correct' ? (
                <>
                  <p className="text-green-700 font-bold mb-1">✅ Correto!</p>
                  <p className="text-green-600 text-sm">
                    <span className="font-semibold">{exercise.targetConjugation}</span>
                  </p>
                </>
              ) : (
                <>
                  <p className="text-red-700 font-bold mb-1">❌ Incorreto</p>
                  <p className="text-sm text-gray-600">
                    Você: <span className="line-through text-red-500">{input}</span>
                  </p>
                  <p className="text-sm font-semibold text-green-700">
                    Correto: {exercise.targetConjugation}
                  </p>
                </>
              )}
            </div>

            {/* Full sentence in target tense */}
            <div className="bg-gray-50 rounded-xl p-3 mb-4">
              <p className="text-xs text-gray-400 mb-1">Exemplo completo:</p>
              <p className="text-gray-800 font-medium">{exercise.targetSentence}</p>
            </div>

            {/* Hint */}
            <div className="text-xs text-gray-500 bg-yellow-50 border border-yellow-200 rounded-xl p-2 mb-4">
              💡 <span className="font-medium">Dica:</span> {exercise.hint}
            </div>

            <button onClick={handleNext} className="btn-primary w-full">
              {current + 1 >= queue.length ? 'Ver resultado' : 'Próxima →'}
            </button>
          </div>
        )}
      </div>

      {/* Score */}
      <div className="mt-4 text-center text-sm text-gray-500">
        ✅ {score} acertos até agora
      </div>
    </div>
  );
}
