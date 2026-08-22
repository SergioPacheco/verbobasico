import { useState } from 'react';
import { pronunciationGuide } from '../data/pronunciationGuide';
import type { PronunciationSection, PronunciationSound } from '../data/pronunciationGuide';
import { Header } from '../components';

function SoundCard({ sound, speak, speechSupported }: { sound: PronunciationSound; speak: (text: string) => void; speechSupported: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-3">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-spain-red bg-spain-red/10 w-12 h-12 rounded-xl flex items-center justify-center">
            {sound.letter.charAt(0)}
          </span>
          <div className="text-left">
            <h4 className="font-bold text-gray-900">{sound.letter}</h4>
            <p className="text-sm text-gray-500">{sound.sound}</p>
          </div>
        </div>
        <span className="text-gray-400 transition-transform duration-200" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ▼
        </span>
      </button>

      {expanded && (
        <div className="px-4 pb-4 animate-fade-in">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-3">
            <p className="text-sm text-amber-800 font-medium">{sound.description}</p>
            <p className="text-xs text-amber-700 mt-1">💡 {sound.tip}</p>
          </div>

          <div className="space-y-2">
            {sound.examples.map((ex, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-3 flex items-center justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">{ex.word}</span>
                    <span className="text-xs text-spain-red font-mono bg-spain-red/10 px-2 py-0.5 rounded">
                      {ex.phonetic}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{ex.meaning}</p>
                </div>
                {speechSupported && (
                  <button
                    onClick={() => speak(ex.word)}
                    className="p-2 text-gray-400 hover:text-spain-red hover:bg-spain-red/10 rounded-lg transition-colors flex-shrink-0"
                    aria-label={`Ouvir ${ex.word}`}
                  >
                    🔊
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SectionBlock({ section, speak, speechSupported }: { section: PronunciationSection; speak: (text: string) => void; speechSupported: boolean }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="mb-6">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full bg-gradient-to-r from-spain-red to-red-600 text-white px-4 py-3 rounded-xl flex items-center justify-between hover:from-red-700 hover:to-red-700 transition-colors mb-3"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{section.emoji}</span>
          <h3 className="font-bold text-lg">{section.title}</h3>
          <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
            {section.sounds.length} sons
          </span>
        </div>
        <span className="text-xl transition-transform duration-200" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ▼
        </span>
      </button>

      {expanded && (
        <div className="animate-fade-in">
          {section.sounds.map((sound) => (
            <SoundCard key={sound.id} sound={sound} speak={speak} speechSupported={speechSupported} />
          ))}
        </div>
      )}
    </div>
  );
}

export function PronunciationPage() {
  const [speechSupported] = useState(() => 'speechSynthesis' in window);
  
  const speak = (text: string) => {
    if (!speechSupported) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  };

  const totalSounds = pronunciationGuide.reduce((acc, section) => acc + section.sounds.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Header
        title="🎯 Pronúncia"
        subtitle={`${totalSounds} sons do espanhol`}
      />

      <div className="mx-auto w-full max-w-4xl px-3 py-4 sm:px-4">
        {/* Intro */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
          <p className="text-sm text-blue-800">
            <span className="font-bold">🎧 Dica:</span> Clique em cada som para ver detalhes e exemplos. 
            Use o botão 🔊 para ouvir a pronúncia correta. A transcrição fonética usa notação simplificada para brasileiros.
          </p>
        </div>

        {/* Regional Note */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
          <p className="text-sm text-amber-800">
            <span className="font-bold">🌍 Variações regionais:</span> Algumas pronúncias variam entre Espanha e América Latina. 
            Indicamos as principais diferenças (ex: Z/C com som de "TH" na Espanha, "S" na Latam).
          </p>
        </div>

        {/* Sections */}
        {pronunciationGuide.map((section) => (
          <SectionBlock 
            key={section.id} 
            section={section} 
            speak={speak}
            speechSupported={speechSupported}
          />
        ))}

        {/* Footer */}
        <footer className="text-center py-4 text-gray-500 text-xs">
          <p>Guia de pronúncia para brasileiros</p>
        </footer>
      </div>
    </div>
  );
}
