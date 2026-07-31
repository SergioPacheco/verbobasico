import type { Verb, TenseKey, Pronoun } from '../types';
import { TENSE_LABELS, PRONOUN_LABELS } from '../types';
import { verbs, getPronunciation } from '../data';
import { useSpeech } from '../hooks';
import { Header } from '../components';

const PRONOUNS: Pronoun[] = ['yo', 'tu', 'el', 'nosotros', 'vosotros', 'ellos'];
const ALL_TENSES: TenseKey[] = ['presente', 'preteritoIndefinido', 'futuroSimple', 'preteritoPerfecto', 'imperfecto', 'condicional', 'subjuntivo'];

interface VerbSectionProps {
  verb: Verb;
  speak: (text: string) => void;
  speechSupported: boolean;
}

function VerbSection({ verb, speak, speechSupported }: VerbSectionProps) {
  return (
    <section className="mb-6" id={verb.infinitive}>
      {/* Verb Header */}
      <div className="bg-gradient-to-r from-spain-red to-red-600 text-white p-3 rounded-t-xl">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl font-bold">{verb.infinitive}</h2>
            {speechSupported && (
              <button
                onClick={() => speak(verb.infinitive)}
                className="text-white/70 hover:text-white p-1"
                aria-label={`Ouvir ${verb.infinitive}`}
              >
                🔊
              </button>
            )}
          </div>
          <span className={`text-xs px-2 py-0.5 rounded-full ${verb.type === 'irregular' ? 'bg-yellow-400 text-yellow-900' : 'bg-green-400 text-green-900'}`}>
            {verb.type === 'irregular' ? '⚡ Irregular' : '✓ Regular'}
          </span>
        </div>
        <p className="text-sm opacity-90 mt-1">
          <strong>{verb.translation}</strong> — {verb.tip}
        </p>
      </div>

      {/* All Tenses - Single Column */}
      <div className="bg-white border border-gray-200 border-t-0 rounded-b-xl overflow-hidden">
        {ALL_TENSES.map((tense) => {
          const conjugation = verb.tenses[tense];
          if (!conjugation) return null;

          return (
            <div key={tense} className="border-b last:border-b-0">
              <div className="bg-gray-100 px-3 py-2 font-semibold text-gray-700 text-sm flex items-center justify-between">
                <span>{TENSE_LABELS[tense]}</span>
                {speechSupported && (
                  <button
                    onClick={() => {
                      const allForms = PRONOUNS.map(p => `${PRONOUN_LABELS[p]}, ${conjugation[p]}`).join('. ');
                      speak(allForms);
                    }}
                    className="text-gray-400 hover:text-spain-red p-1 text-xs"
                    aria-label={`Ouvir todas as conjugações do ${TENSE_LABELS[tense]}`}
                  >
                    🔊 Ouvir tudo
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-200">
                {PRONOUNS.map((pronoun) => {
                  const form = conjugation[pronoun];
                  const pron = getPronunciation(verb.infinitive, tense, pronoun);
                  
                  return (
                    <div key={pronoun} className="bg-white p-2">
                      <div className="text-xs text-gray-500">{PRONOUN_LABELS[pronoun]}</div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-gray-900 text-sm">{form}</span>
                        {speechSupported && (
                          <button
                            onClick={() => speak(`${PRONOUN_LABELS[pronoun]} ${form}`)}
                            className="text-gray-400 hover:text-spain-red p-0.5 text-xs"
                            aria-label={`Ouvir ${form}`}
                          >
                            🔊
                          </button>
                        )}
                      </div>
                      {pron && (
                        <div className="text-xs text-spain-red font-mono truncate">
                          {pron.br}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

interface FullPageProps {
  onNavigate: (page: string) => void;
}

export function FullPage({ onNavigate }: FullPageProps) {
  const { speak, isSupported: speechSupported } = useSpeech();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Header
        title="🇪🇸 Verbo Básico"
        subtitle={`${verbs.length} verbos • 7 tempos`}
        onNavigate={onNavigate}
      />

      <div className="max-w-2xl mx-auto px-3 py-4">
        {/* Legend */}
        <div className="bg-white rounded-xl shadow p-3 mb-4 text-xs">
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-1">
              <span className="bg-green-400 text-green-900 px-1.5 py-0.5 rounded text-xs">✓</span>
              Regular
            </span>
            <span className="flex items-center gap-1">
              <span className="bg-yellow-400 text-yellow-900 px-1.5 py-0.5 rounded text-xs">⚡</span>
              Irregular
            </span>
            <span className="flex items-center gap-1">
              <span className="text-spain-red font-mono">MAIÚSC</span>
              = tônica
            </span>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white rounded-xl shadow p-3 mb-4">
          <div className="text-xs font-semibold text-gray-600 mb-2">Ir para verbo:</div>
          <div className="flex flex-wrap gap-1">
            {verbs.map((verb) => (
              <a
                key={verb.infinitive}
                href={`#${verb.infinitive}`}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                  verb.type === 'irregular'
                    ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                    : 'bg-green-100 text-green-800 hover:bg-green-200'
                }`}
              >
                {verb.infinitive}
              </a>
            ))}
          </div>
        </div>

        {/* All Verbs - Single Column */}
        {verbs.map((verb) => (
          <VerbSection
            key={verb.infinitive}
            verb={verb}
            speak={speak}
            speechSupported={speechSupported}
          />
        ))}

        {/* Footer */}
        <footer className="text-center py-6 text-gray-500 text-xs">
          <p>🇪🇸 Verbo Básico — Para brasileiros na Espanha</p>
        </footer>
      </div>
    </div>
  );
}
