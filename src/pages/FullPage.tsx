import { useState } from 'react';
import type { Verb, TenseKey, Pronoun } from '../types';
import { TENSE_LABELS, PRONOUN_LABELS } from '../types';
import { verbs, getPronunciation, contextualPhrases } from '../data';
import { useSpeech } from '../hooks';
import { Header } from '../components';

const PRONOUNS: Pronoun[] = ['yo', 'tu', 'el', 'nosotros', 'vosotros', 'ellos'];
const ALL_TENSES: TenseKey[] = ['presente', 'preteritoIndefinido', 'futuroSimple', 'preteritoPerfecto', 'imperfecto', 'condicional', 'subjuntivo'];

// Get example phrases for a verb
function getVerbExamples(verbInfinitive: string) {
  return contextualPhrases.filter(p => p.verb === verbInfinitive).slice(0, 6);
}

interface ExamplesModalProps {
  verb: Verb;
  onClose: () => void;
  speak: (text: string) => void;
  speechSupported: boolean;
}

function ExamplesModal({ verb, onClose, speak, speechSupported }: ExamplesModalProps) {
  const examples = getVerbExamples(verb.infinitive);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-spain-red to-red-600 text-white px-4 py-3 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">{verb.infinitive}</h3>
            <p className="text-sm opacity-90">{verb.translation} — Exemplos de uso</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors text-xl"
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 overflow-y-auto max-h-[calc(85vh-120px)]">
          {/* Tip */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4">
            <p className="text-sm text-amber-800">
              <span className="font-bold">💡 Dica:</span> {verb.tip}
            </p>
          </div>

          {/* Examples */}
          {examples.length > 0 ? (
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-700 text-sm">Frases de exemplo:</h4>
              {examples.map((example) => (
                <div key={example.id} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{example.spanish}</p>
                      <p className="text-sm text-gray-500 mt-1">{example.portuguese}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs bg-spain-red/10 text-spain-red px-2 py-0.5 rounded-full font-medium">
                          {example.conjugation}
                        </span>
                        <span className="text-xs text-gray-400">
                          {TENSE_LABELS[example.tense as TenseKey]} • {PRONOUN_LABELS[example.pronoun as Pronoun]}
                        </span>
                      </div>
                    </div>
                    {speechSupported && (
                      <button
                        onClick={() => speak(example.spanish)}
                        className="p-2 text-spain-red hover:bg-spain-red/10 rounded-lg transition-colors flex-shrink-0"
                        aria-label="Ouvir frase"
                      >
                        🔊
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">
              Nenhum exemplo disponível para este verbo ainda.
            </p>
          )}

          {/* Listen all conjugations */}
          {speechSupported && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  const presente = verb.tenses.presente;
                  if (presente) {
                    const allForms = PRONOUNS.map(p => `${PRONOUN_LABELS[p]}, ${presente[p]}`).join('. ');
                    speak(`${verb.infinitive}. Presente: ${allForms}`);
                  }
                }}
                className="w-full py-3 bg-spain-red text-white rounded-xl font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                🔊 Ouvir conjugação completa (Presente)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface TenseColumnProps {
  verb: Verb;
  tense: TenseKey;
  speak: (text: string) => void;
  speechSupported: boolean;
}

function TenseColumn({ verb, tense, speak, speechSupported }: TenseColumnProps) {
  const conjugation = verb.tenses[tense];
  if (!conjugation) return null;

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="bg-gray-100 px-2 py-1.5 font-semibold text-gray-700 text-xs flex items-center justify-between">
        <span className="truncate">{TENSE_LABELS[tense]}</span>
        {speechSupported && (
          <button
            onClick={() => {
              const allForms = PRONOUNS.map(p => `${PRONOUN_LABELS[p]}, ${conjugation[p]}`).join('. ');
              speak(allForms);
            }}
            className="text-gray-400 hover:text-spain-red p-0.5 text-xs flex-shrink-0"
            aria-label={`Ouvir ${TENSE_LABELS[tense]}`}
          >
            🔊
          </button>
        )}
      </div>
      <div className="divide-y divide-gray-100">
        {PRONOUNS.map((pronoun) => {
          const form = conjugation[pronoun];
          const pron = getPronunciation(verb.infinitive, tense, pronoun);
          
          return (
            <div key={pronoun} className="flex items-center gap-2 px-2 py-1">
              <span className="text-[10px] text-gray-500 w-14 flex-shrink-0">
                {PRONOUN_LABELS[pronoun]}
              </span>
              <span className="font-bold text-gray-900 text-xs flex-1">
                {form}
              </span>
              {pron && (
                <span className="text-[9px] text-spain-red font-mono hidden sm:block">
                  {pron.br}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface VerbSectionProps {
  verb: Verb;
  speak: (text: string) => void;
  speechSupported: boolean;
  onOpenExamples: (verb: Verb) => void;
  forceExpanded: boolean;
}

function VerbSection({ verb, speak, speechSupported, onOpenExamples, forceExpanded }: VerbSectionProps) {
  const [localExpanded, setLocalExpanded] = useState(true);
  const exampleCount = getVerbExamples(verb.infinitive).length;
  const isExpanded = forceExpanded && localExpanded;

  return (
    <section className="mb-4" id={verb.infinitive}>
      <div 
        className="bg-gradient-to-r from-spain-red to-red-600 text-white px-3 py-2 rounded-t-xl cursor-pointer hover:from-red-700 hover:to-red-700 transition-colors"
        onClick={() => setLocalExpanded(!localExpanded)}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span 
              className="text-lg transition-transform duration-200" 
              style={{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)' }}
            >
              ▼
            </span>
            <h2 className="text-base sm:text-lg font-bold">{verb.infinitive}</h2>
            {speechSupported && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speak(verb.infinitive);
                }}
                className="text-white/70 hover:text-white text-sm p-1 hover:bg-white/20 rounded transition-colors"
                aria-label={`Ouvir ${verb.infinitive}`}
              >
                🔊
              </button>
            )}
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${verb.type === 'irregular' ? 'bg-yellow-400 text-yellow-900' : 'bg-green-400 text-green-900'}`}>
              {verb.type === 'irregular' ? '⚡' : '✓'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm opacity-90 truncate hidden sm:block">{verb.translation}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenExamples(verb);
              }}
              className="p-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-1"
              aria-label="Ver exemplos"
              title="Ver exemplos de uso"
            >
              <span className="text-sm">📖</span>
              {exampleCount > 0 && (
                <span className="text-[10px] bg-white/30 px-1.5 py-0.5 rounded-full">{exampleCount}</span>
              )}
            </button>
          </div>
        </div>
        <p className="text-sm opacity-90 mt-1 sm:hidden">{verb.translation}</p>
      </div>

      {isExpanded && (
        <div className="bg-gray-50 border border-t-0 border-gray-200 rounded-b-xl p-2 animate-fade-in">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {ALL_TENSES.map((tense) => (
              <TenseColumn
                key={tense}
                verb={verb}
                tense={tense}
                speak={speak}
                speechSupported={speechSupported}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export function FullPage() {
  const { speak, isSupported: speechSupported } = useSpeech();
  const [modalVerb, setModalVerb] = useState<Verb | null>(null);
  const [allExpanded, setAllExpanded] = useState(true);

  return (
    <div className="min-h-[100dvh] w-full overflow-x-hidden bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Header
        title="🇪🇸 Verbo Básico"
        subtitle={`${verbs.length} verbos • 7 tempos`}
        showBack={false}
      />

      <div className="w-full max-w-[1800px] mx-auto px-2 sm:px-4 py-3">
        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm p-2 mb-3 flex flex-wrap items-center justify-between gap-2">
          {/* Quick Navigation */}
          <div className="flex gap-1 overflow-x-auto flex-1 min-w-0">
            <span className="text-xs text-gray-500 px-2 py-1 flex-shrink-0">Ir para:</span>
            {verbs.map((verb) => (
              <a
                key={verb.infinitive}
                href={`#${verb.infinitive}`}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors whitespace-nowrap ${
                  verb.type === 'irregular'
                    ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                    : 'bg-green-100 text-green-800 hover:bg-green-200'
                }`}
              >
                {verb.infinitive}
              </a>
            ))}
          </div>
          {/* Expand/Collapse all */}
          <button
            onClick={() => setAllExpanded(!allExpanded)}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-lg transition-colors flex-shrink-0"
          >
            {allExpanded ? '🔼 Recolher' : '🔽 Expandir'}
          </button>
        </div>

        {/* Legend */}
        <div className="bg-white rounded-xl shadow-sm p-2 mb-3 text-xs flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="bg-green-400 text-green-900 px-1.5 py-0.5 rounded">✓</span>
            Regular
          </span>
          <span className="flex items-center gap-1">
            <span className="bg-yellow-400 text-yellow-900 px-1.5 py-0.5 rounded">⚡</span>
            Irregular
          </span>
          <span className="flex items-center gap-1">
            🔊 = Ouvir áudio
          </span>
          <span className="flex items-center gap-1">
            📖 = Ver exemplos
          </span>
        </div>

        {/* All Verbs */}
        {verbs.map((verb) => (
          <VerbSection
            key={verb.infinitive}
            verb={verb}
            speak={speak}
            speechSupported={speechSupported}
            onOpenExamples={setModalVerb}
            forceExpanded={allExpanded}
          />
        ))}

        {/* Footer */}
        <footer className="text-center py-4 text-gray-500 text-xs">
          <p>🇪🇸 Verbo Básico — Para brasileiros na Espanha</p>
        </footer>
      </div>

      {/* Examples Modal */}
      {modalVerb && (
        <ExamplesModal
          verb={modalVerb}
          onClose={() => setModalVerb(null)}
          speak={speak}
          speechSupported={speechSupported}
        />
      )}
    </div>
  );
}
