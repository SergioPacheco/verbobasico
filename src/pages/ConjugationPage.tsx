import { useState } from 'react';
import type { Verb, TenseKey, Pronoun } from '../types';
import { TENSE_LABELS, PRONOUN_LABELS } from '../types';
import { verbs, getPronunciation } from '../data';
import { useSpeech } from '../hooks';

interface ConjugationPageProps {
  onBack: () => void;
}

const PRONOUNS: Pronoun[] = ['yo', 'tu', 'el', 'nosotros', 'vosotros', 'ellos'];
const AVAILABLE_TENSES: TenseKey[] = ['presente', 'preteritoIndefinido', 'futuroSimple', 'preteritoPerfecto', 'imperfecto', 'condicional'];

type PronMode = 'off' | 'br' | 'ipa';

export function ConjugationPage({ onBack }: ConjugationPageProps) {
  const [selectedVerb, setSelectedVerb] = useState<Verb>(verbs[0]);
  const [selectedTense, setSelectedTense] = useState<TenseKey>('presente');
  const [pronMode, setPronMode] = useState<PronMode>('br');
  const { speak, isSupported: speechSupported } = useSpeech();

  const conjugation = selectedVerb.tenses[selectedTense];

  return (
    <div className="min-h-screen px-4 py-6 max-w-lg mx-auto">
      <button onClick={onBack} className="btn-ghost mb-4" aria-label="Voltar">
        ← Voltar
      </button>

      <div className="card mb-4 animate-fade-in">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📖 Tabela de Conjugação</h2>

        <div className="mb-4">
          <label htmlFor="conj-verb-select" className="text-sm font-semibold text-gray-600 mb-2 block">
            Verbo
          </label>
          <select
            id="conj-verb-select"
            value={selectedVerb.infinitive}
            onChange={(e) => {
              const v = verbs.find((verb) => verb.infinitive === e.target.value);
              if (v) setSelectedVerb(v);
            }}
            className="input-field text-left"
          >
            {verbs.map((v) => (
              <option key={v.infinitive} value={v.infinitive}>
                {v.infinitive} ({v.translation}) — {v.type}
              </option>
            ))}
          </select>
        </div>

        {/* Tense tabs */}
        <div className="flex gap-1 overflow-x-auto pb-2 mb-3">
          {AVAILABLE_TENSES.map((tense) => (
            <button
              key={tense}
              onClick={() => setSelectedTense(tense)}
              className={`whitespace-nowrap py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                selectedTense === tense
                  ? 'bg-spain-red text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-pressed={selectedTense === tense}
            >
              {TENSE_LABELS[tense]}
            </button>
          ))}
        </div>

        {/* Pronunciation mode toggle */}
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setPronMode('off')}
            className={`flex-1 py-1.5 px-2 rounded-md text-xs font-medium transition-all ${
              pronMode === 'off' ? 'bg-white shadow text-gray-900' : 'text-gray-500'
            }`}
          >
            Sem pronúncia
          </button>
          <button
            onClick={() => setPronMode('br')}
            className={`flex-1 py-1.5 px-2 rounded-md text-xs font-medium transition-all ${
              pronMode === 'br' ? 'bg-white shadow text-gray-900' : 'text-gray-500'
            }`}
          >
            🇧🇷 Brasileiro
          </button>
          <button
            onClick={() => setPronMode('ipa')}
            className={`flex-1 py-1.5 px-2 rounded-md text-xs font-medium transition-all ${
              pronMode === 'ipa' ? 'bg-white shadow text-gray-900' : 'text-gray-500'
            }`}
          >
            🔤 IPA
          </button>
        </div>
      </div>

      {/* Verb Info */}
      <div className="card mb-4 animate-slide-up">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-spain-red">{selectedVerb.infinitive}</h3>
          <span className={`badge ${selectedVerb.type === 'irregular' ? 'badge-error' : 'badge-success'}`}>
            {selectedVerb.type === 'irregular' ? '⚡ Irregular' : '✓ Regular'}
          </span>
        </div>
        <p className="text-gray-600 text-sm">
          <strong>{selectedVerb.translation}</strong> — {selectedVerb.tip}
        </p>
      </div>

      {/* Legend */}
      {pronMode === 'br' && (
        <div className="mb-3 text-xs text-gray-500 bg-gray-50 rounded-lg p-2 animate-fade-in">
          💡 <strong className="text-spain-red">MAIÚSCULA</strong> = sílaba tônica 
          &nbsp;|&nbsp; ⚠️ = pegadinha 
          &nbsp;|&nbsp; 🇧🇷 = som parecido em português
        </div>
      )}
      {pronMode === 'ipa' && (
        <div className="mb-3 text-xs text-gray-500 bg-gray-50 rounded-lg p-2 animate-fade-in">
          🔤 Alfabeto Fonético Internacional — <strong>ˈ</strong> marca sílaba tônica | <strong>ɾ</strong> = R suave | <strong>θ</strong> = Z/C (Espanha)
        </div>
      )}

      {/* Conjugation Table */}
      {conjugation ? (
        <div className="card animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="space-y-1">
            {PRONOUNS.map((pronoun) => {
              const pron = getPronunciation(selectedVerb.infinitive, selectedTense, pronoun);

              return (
                <div key={pronoun} className="bg-gray-50 rounded-xl px-4 py-3">
                  {/* Main row: pronoun + conjugation */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium text-sm">{PRONOUN_LABELS[pronoun]}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 text-lg">{conjugation[pronoun]}</span>
                      {speechSupported && (
                        <button
                          onClick={() => speak(`${PRONOUN_LABELS[pronoun]} ${conjugation[pronoun]}`)}
                          className="text-gray-400 hover:text-spain-red p-1"
                          aria-label={`Ouvir ${conjugation[pronoun]}`}
                        >
                          🔊
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Pronunciation row */}
                  {pronMode !== 'off' && pron && (
                    <div className="mt-1.5 space-y-1">
                      {/* BR or IPA */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono font-semibold text-spain-red">
                          {pronMode === 'br' ? pron.br : pron.ipa}
                        </span>
                        {pronMode === 'br' && pron.example && (
                          <span className="text-xs text-gray-500 italic">
                            🇧🇷 {pron.example}
                          </span>
                        )}
                      </div>
                      {/* Alert */}
                      {pron.alert && (
                        <span className="inline-block text-xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                          ⚠️ {pron.alert}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="card text-center text-gray-500">
          Conjugação não disponível para este tempo verbal.
        </div>
      )}
    </div>
  );
}
