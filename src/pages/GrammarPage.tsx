import { useState } from 'react';
import { grammarTopics } from '../data/grammarTopics';
import type { GrammarTopic, GrammarRule } from '../data/grammarTopics';
import { Header } from '../components';

function RuleCard({ rule, speak, speechSupported }: { rule: GrammarRule; speak: (text: string) => void; speechSupported: boolean }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 mb-3">
      <p className="font-semibold text-gray-900 mb-3">{rule.rule}</p>
      <div className="space-y-2">
        {rule.examples.map((ex, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-3 flex items-start justify-between gap-2">
            <div className="flex-1">
              <p className="font-medium text-spain-red">{ex.spanish}</p>
              <p className="text-sm text-gray-500">{ex.portuguese}</p>
            </div>
            {speechSupported && (
              <button
                onClick={() => speak(ex.spanish)}
                className="p-2 text-gray-400 hover:text-spain-red hover:bg-spain-red/10 rounded-lg transition-colors flex-shrink-0"
                aria-label="Ouvir"
              >
                🔊
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TopicSection({ topic, speak, speechSupported }: { topic: GrammarTopic; speak: (text: string) => void; speechSupported: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full bg-gradient-to-r from-spain-red to-red-600 text-white px-4 py-3 rounded-xl flex items-center justify-between hover:from-red-700 hover:to-red-700 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{topic.emoji}</span>
          <div className="text-left">
            <h3 className="font-bold text-lg">{topic.title}</h3>
            <p className="text-sm opacity-90">{topic.description}</p>
          </div>
        </div>
        <span className="text-xl transition-transform duration-200" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ▼
        </span>
      </button>

      {expanded && (
        <div className="mt-3 animate-fade-in">
          {topic.rules.map((rule) => (
            <RuleCard key={rule.id} rule={rule} speak={speak} speechSupported={speechSupported} />
          ))}
        </div>
      )}
    </div>
  );
}

export function GrammarPage() {
  const [speechSupported] = useState(() => 'speechSynthesis' in window);
  
  const speak = (text: string) => {
    if (!speechSupported) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Header
        title="📚 Gramática Básica"
        subtitle={`${grammarTopics.length} tópicos essenciais`}
      />

      <div className="max-w-2xl mx-auto px-4 py-4">
        {/* Intro */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
          <p className="text-sm text-blue-800">
            <span className="font-bold">💡 Dica:</span> Clique em cada tópico para expandir as regras e exemplos. 
            Use o botão 🔊 para ouvir a pronúncia em espanhol.
          </p>
        </div>

        {/* Topics */}
        {grammarTopics.map((topic) => (
          <TopicSection 
            key={topic.id} 
            topic={topic} 
            speak={speak}
            speechSupported={speechSupported}
          />
        ))}

        {/* Footer */}
        <footer className="text-center py-4 text-gray-500 text-xs">
          <p>Gramática essencial para brasileiros</p>
        </footer>
      </div>
    </div>
  );
}
