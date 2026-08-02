import { useState } from 'react';
import { normalizeAnswer } from '../utils';
import { Header } from '../components';
import { useSoundEffects } from '../hooks';

interface ClozeText {
  id: string;
  title: string;
  situation: string;
  emoji: string;
  sentences: string[];
  blanks: { sentence: number; placeholder: string; answer: string }[];
}

const CLOZE_TEXTS: ClozeText[] = [
  {
    id: 'cloze-01',
    title: 'Primeiro dia no trabalho',
    situation: 'Trabalho',
    emoji: '💼',
    sentences: [
      'Hoy ___(1) mi primer día en la empresa.',
      'Cuando ___(2) a la oficina, ___(3) a mis compañeros.',
      'El jefe ___(4) las normas y yo ___(5) muchas preguntas.',
      '___(6) trabajar aquí y ___(7) aprender mucho.',
    ],
    blanks: [
      { sentence: 0, placeholder: '___(1)', answer: 'es' },
      { sentence: 1, placeholder: '___(2)', answer: 'llego' },
      { sentence: 1, placeholder: '___(3)', answer: 'conozco' },
      { sentence: 2, placeholder: '___(4)', answer: 'explica' },
      { sentence: 2, placeholder: '___(5)', answer: 'tengo' },
      { sentence: 3, placeholder: '___(6)', answer: 'quiero' },
      { sentence: 3, placeholder: '___(7)', answer: 'espero' },
    ],
  },
  {
    id: 'cloze-02',
    title: 'No médico',
    situation: 'Saúde',
    emoji: '🏥',
    sentences: [
      '___(1) mal desde ayer y ___(2) fiebre.',
      'La doctora ___(3) mi garganta y ___(4) que ___(5) antibióticos.',
      '___(6) la receta y ___(7) a la farmacia.',
    ],
    blanks: [
      { sentence: 0, placeholder: '___(1)', answer: 'estoy' },
      { sentence: 0, placeholder: '___(2)', answer: 'tengo' },
      { sentence: 1, placeholder: '___(3)', answer: 'mira' },
      { sentence: 1, placeholder: '___(4)', answer: 'dice' },
      { sentence: 1, placeholder: '___(5)', answer: 'necesito' },
      { sentence: 2, placeholder: '___(6)', answer: 'tomo' },
      { sentence: 2, placeholder: '___(7)', answer: 'voy' },
    ],
  },
  {
    id: 'cloze-03',
    title: 'Alugando um apartamento',
    situation: 'Aluguel',
    emoji: '🏠',
    sentences: [
      '___(1) un piso para alquilar cerca del metro.',
      'El casero ___(2) que el alquiler ___(3) 900 euros al mes.',
      '___(4) mucho pero al final ___(5) que es razonable.',
      '___(6) el contrato y ___(7) en el piso el mes que viene.',
    ],
    blanks: [
      { sentence: 0, placeholder: '___(1)', answer: 'busco' },
      { sentence: 1, placeholder: '___(2)', answer: 'dice' },
      { sentence: 1, placeholder: '___(3)', answer: 'es' },
      { sentence: 2, placeholder: '___(4)', answer: 'pienso' },
      { sentence: 2, placeholder: '___(5)', answer: 'creo' },
      { sentence: 3, placeholder: '___(6)', answer: 'firmo' },
      { sentence: 3, placeholder: '___(7)', answer: 'vivo' },
    ],
  },
  {
    id: 'cloze-04',
    title: 'No restaurante',
    situation: 'Restaurante',
    emoji: '🍽️',
    sentences: [
      '___(1) a un restaurante con mi familia.',
      'El camarero ___(2) y ___(3) la carta.',
      'Yo ___(4) la paella y mi pareja ___(5) el bacalao.',
      'La comida ___(6) muy rica y ___(7) muy contentos.',
    ],
    blanks: [
      { sentence: 0, placeholder: '___(1)', answer: 'voy' },
      { sentence: 1, placeholder: '___(2)', answer: 'llega' },
      { sentence: 1, placeholder: '___(3)', answer: 'trae' },
      { sentence: 2, placeholder: '___(4)', answer: 'pido' },
      { sentence: 2, placeholder: '___(5)', answer: 'pide' },
      { sentence: 3, placeholder: '___(6)', answer: 'está' },
      { sentence: 3, placeholder: '___(7)', answer: 'estamos' },
    ],
  },
  {
    id: 'cloze-05',
    title: 'Pedindo o NIE',
    situation: 'Documentos',
    emoji: '📄',
    sentences: [
      'Para ___(1) el NIE, primero ___(2) pedir cita por internet.',
      '___(3) todos los documentos: el pasaporte, una foto y el formulario.',
      'En la cita, el funcionario ___(4) los papeles y ___(5) el sello.',
      'Al final ___(6) el NIE y ___(7) mucho.',
    ],
    blanks: [
      { sentence: 0, placeholder: '___(1)', answer: 'conseguir' },
      { sentence: 0, placeholder: '___(2)', answer: 'tienes que' },
      { sentence: 1, placeholder: '___(3)', answer: 'traigo' },
      { sentence: 2, placeholder: '___(4)', answer: 'revisa' },
      { sentence: 2, placeholder: '___(5)', answer: 'pone' },
      { sentence: 3, placeholder: '___(6)', answer: 'recibo' },
      { sentence: 3, placeholder: '___(7)', answer: 'me alegro' },
    ],
  },
];

export function ClozePage() {
  const { playCorrect, playWrong, playSuccess } = useSoundEffects();
  const [selectedText, setSelectedText] = useState<ClozeText | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});

  function selectText(text: ClozeText) {
    setSelectedText(text);
    setAnswers({});
    setSubmitted(false);
    setResults({});
  }

  function handleChange(key: string, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit() {
    if (!selectedText) return;
    const res: Record<string, boolean> = {};
    for (const blank of selectedText.blanks) {
      const key = blank.placeholder;
      res[key] = normalizeAnswer(answers[key] ?? '') === normalizeAnswer(blank.answer);
    }
    setResults(res);
    setSubmitted(true);
    
    // Play sound based on results
    const correctCount = Object.values(res).filter(Boolean).length;
    const totalCount = selectedText.blanks.length;
    if (correctCount === totalCount) {
      playSuccess();
    } else if (correctCount >= totalCount / 2) {
      playCorrect();
    } else {
      playWrong();
    }
  }

  function allFilled() {
    if (!selectedText) return false;
    return selectedText.blanks.every((b) => (answers[b.placeholder] ?? '').trim() !== '');
  }

  const correctCount = Object.values(results).filter(Boolean).length;
  const totalCount = selectedText?.blanks.length ?? 0;

  if (!selectedText) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
        <Header title="📝 Cloze Test" subtitle="Textos com lacunas" />
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="space-y-3">
            {CLOZE_TEXTS.map((text) => (
              <button
                key={text.id}
                onClick={() => selectText(text)}
                className="card w-full text-left p-4 flex items-center gap-4 hover:border-spain-red/30"
              >
                <span className="text-3xl">{text.emoji}</span>
                <div>
                  <p className="font-semibold text-gray-900">{text.title}</p>
                  <p className="text-xs text-gray-500">
                    {text.situation} · {text.blanks.length} lacunas
                  </p>
                </div>
                <span className="ml-auto text-gray-300">→</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Header
        title={`${selectedText.emoji} ${selectedText.title}`}
        subtitle={submitted ? `${correctCount}/${totalCount}` : selectedText.situation}
      />

      <div className="max-w-2xl mx-auto px-4 py-4">
        <div className="card mb-6">
          {selectedText.sentences.map((sentence, si) => {
            const blanksInSentence = selectedText.blanks.filter((b) => b.sentence === si);
            const rendered = sentence;

            return (
              <div key={si} className="mb-3 last:mb-0">
                <p className="text-gray-800 leading-relaxed">
                  {(() => {
                    const parts = rendered.split(/(_+\(\d+\))/g);
                    return parts.map((part, pi) => {
                      const blank = blanksInSentence.find((b) => b.placeholder === part);
                      if (blank) {
                        const key = blank.placeholder;
                        const val = answers[key] ?? '';
                        const isCorrect = results[key];
                        const isWrong = submitted && isCorrect === false;
                        return (
                          <span key={pi} className="inline-block">
                            <input
                              type="text"
                              value={val}
                              onChange={(e) => handleChange(key, e.target.value)}
                              disabled={submitted}
                              placeholder="___"
                              className={`inline-block w-24 border-b-2 px-1 text-center text-sm focus:outline-none ${
                                submitted
                                  ? isCorrect
                                    ? 'border-green-500 text-green-700 bg-green-50'
                                    : 'border-red-500 text-red-600 bg-red-50'
                                  : 'border-spain-red bg-transparent'
                              }`}
                            />
                            {isWrong && (
                              <span className="text-xs text-green-600 ml-1 font-medium">
                                ({blank.answer})
                              </span>
                            )}
                          </span>
                        );
                      }
                      return <span key={pi}>{part}</span>;
                    });
                  })()}
                </p>
              </div>
            );
          })}
        </div>

        {submitted && (
          <div
            className={`card mb-4 text-center animate-fade-in ${
              correctCount === totalCount ? 'border-green-300 bg-green-50' : 'border-yellow-300 bg-yellow-50'
            }`}
          >
            <p className="text-2xl mb-1">{correctCount === totalCount ? '🏆' : '📝'}</p>
            <p className="font-bold text-gray-900">
              {correctCount}/{totalCount} corretas ({Math.round((correctCount / totalCount) * 100)}%)
            </p>
          </div>
        )}

        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allFilled()}
            className="btn-primary w-full disabled:opacity-40"
          >
            Verificar respostas
          </button>
        ) : (
          <div className="space-y-3">
            <button onClick={() => selectText(selectedText)} className="btn-primary w-full">
              🔄 Tentar novamente
            </button>
            <button onClick={() => setSelectedText(null)} className="btn-secondary w-full">
              ← Escolher outro texto
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
