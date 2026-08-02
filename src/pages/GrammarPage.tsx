import { useState } from 'react';
import { grammarTopics } from '../data/grammarTopics';
import type { GrammarTopic, GrammarRule } from '../data/grammarTopics';
import { Header } from '../components';

// Organização por categoria
const categories = [
  {
    id: 'essential',
    title: '⭐ Essencial',
    description: 'Comece por aqui',
    topicIds: ['ser-estar', 'muy-mucho', 'reflexivos', 'genero'],
  },
  {
    id: 'structure',
    title: '🏗️ Estrutura',
    description: 'Base da língua',
    topicIds: ['articulos', 'pronombres', 'preposiciones'],
  },
  {
    id: 'verbs',
    title: '🔄 Verbos',
    description: 'Tempos e construções',
    topicIds: ['tiempos', 'subjuntivo', 'perifrasis'],
  },
  {
    id: 'advanced',
    title: '📈 Avançado',
    description: 'Polimento',
    topicIds: ['heterotonicos', 'acentuacion', 'conectores'],
  },
];

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
    <div className="mb-3">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full bg-white border border-gray-200 hover:border-spain-red/50 px-4 py-3 rounded-xl flex items-center justify-between transition-colors shadow-sm"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{topic.emoji}</span>
          <div className="text-left">
            <h3 className="font-bold text-gray-900">{topic.title}</h3>
            <p className="text-sm text-gray-500">{topic.description}</p>
          </div>
        </div>
        <span className="text-gray-400 transition-transform duration-200" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
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
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const speak = (text: string) => {
    if (!speechSupported) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  };

  // Filtra tópicos por categoria ou mostra todos
  const getTopicsForCategory = (topicIds: string[]) => {
    return topicIds.map(id => grammarTopics.find(t => t.id === id)).filter(Boolean) as GrammarTopic[];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Header
        title="📚 Gramática"
        subtitle={`${grammarTopics.length} tópicos essenciais`}
      />

      <div className="max-w-2xl mx-auto px-4 py-4">
        {/* Intro */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
          <p className="text-sm text-blue-800">
            <span className="font-bold">💡 Dica:</span> Comece pelos tópicos <strong>Essenciais</strong> — são as diferenças mais importantes entre português e espanhol.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
          <button
            onClick={() => setActiveCategory(null)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === null
                ? 'bg-spain-red text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-spain-red text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Topics by category */}
        {activeCategory === null ? (
          // Show all categories
          categories.map((category) => (
            <div key={category.id} className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <h2 className="text-lg font-bold text-gray-800">{category.title}</h2>
                <span className="text-sm text-gray-500">— {category.description}</span>
              </div>
              {getTopicsForCategory(category.topicIds).map((topic) => (
                <TopicSection 
                  key={topic.id} 
                  topic={topic} 
                  speak={speak}
                  speechSupported={speechSupported}
                />
              ))}
            </div>
          ))
        ) : (
          // Show only selected category
          <>
            {(() => {
              const category = categories.find(c => c.id === activeCategory);
              if (!category) return null;
              return getTopicsForCategory(category.topicIds).map((topic) => (
                <TopicSection 
                  key={topic.id} 
                  topic={topic} 
                  speak={speak}
                  speechSupported={speechSupported}
                />
              ));
            })()}
          </>
        )}
      </div>
    </div>
  );
}
