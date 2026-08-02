import { useState } from 'react';
import { conversationTopics } from '../data/conversationTopics';
import type { ConversationTopic, ConversationQuestion } from '../data/conversationTopics';
import { Header } from '../components';
import { useSpeech } from '../hooks';

type Mode = 'topics' | 'practice';

function VocabularySection({
  topic,
  speak,
  speechSupported,
}: {
  topic: ConversationTopic;
  speak: (text: string) => void;
  speechSupported: boolean;
}) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="card p-4 mb-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">📚</span>
          <h3 className="font-bold text-gray-900">Vocabulario útil</h3>
          <span className="text-xs bg-spain-red/10 text-spain-red px-2 py-0.5 rounded-full">
            {topic.vocabulary.length} palabras
          </span>
        </div>
        <span className="text-gray-400">{expanded ? '▲' : '▼'}</span>
      </button>

      {expanded && (
        <div className="mt-4 grid grid-cols-2 gap-2 animate-fade-in">
          {topic.vocabulary.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg p-2 hover:bg-spain-yellow/10 transition-colors flex items-center justify-between group"
            >
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 text-sm truncate">{item.word}</p>
                <p className="text-xs text-gray-500 truncate">{item.translation}</p>
              </div>
              {speechSupported && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speak(item.word);
                  }}
                  className="ml-2 p-1.5 text-gray-400 hover:text-spain-red opacity-0 group-hover:opacity-100 transition-all"
                  aria-label={`Ouvir ${item.word}`}
                >
                  🔊
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TopicSelector({
  topics,
  onSelect,
}: {
  topics: ConversationTopic[];
  onSelect: (topic: ConversationTopic) => void;
}) {
  return (
    <div className="space-y-3">
      <p className="text-gray-600 text-sm text-center mb-4">
        Elige un tema para practicar conversación en español
      </p>
      {topics.map((topic, idx) => (
        <button
          key={topic.id}
          onClick={() => onSelect(topic)}
          className="card w-full p-5 text-left hover:border-spain-red/40 hover:shadow-md transition-all animate-slide-up"
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">{topic.emoji}</span>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">{topic.name}</h3>
              <p className="text-sm text-gray-500">
                {topic.vocabulary.length} palabras · {topic.questions.length} preguntas
              </p>
            </div>
            <span className="text-spain-red text-xl">→</span>
          </div>
        </button>
      ))}
    </div>
  );
}

export function ConversationPage() {
  const [mode, setMode] = useState<Mode>('topics');
  const [selectedTopic, setSelectedTopic] = useState<ConversationTopic | null>(null);
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const { speak, isSupported: speechSupported } = useSpeech();

  const handleSelectTopic = (topic: ConversationTopic) => {
    setSelectedTopic(topic);
    setMode('practice');
    setShowAllAnswers(false);
  };

  const handleBackToTopics = () => {
    setMode('topics');
    setSelectedTopic(null);
  };

  if (mode === 'practice' && selectedTopic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
        <Header
          title={`${selectedTopic.emoji} ${selectedTopic.name}`}
          subtitle={`${selectedTopic.questions.length} preguntas para practicar`}
        />

        <div className="max-w-2xl mx-auto px-4 py-4">
          <VocabularySection
            topic={selectedTopic}
            speak={speak}
            speechSupported={speechSupported}
          />

          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <span>❓</span>
              <span>Preguntas de conversación</span>
            </h3>
            <button
              onClick={() => setShowAllAnswers(!showAllAnswers)}
              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-lg transition-colors"
            >
              {showAllAnswers ? '🙈 Ocultar todas' : '👁️ Mostrar todas'}
            </button>
          </div>

          <div className="space-y-4">
            {selectedTopic.questions.map((q, idx) => (
              <QuestionCardControlled
                key={q.id}
                question={q}
                index={idx}
                forceShow={showAllAnswers}
                speak={speak}
                speechSupported={speechSupported}
              />
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <button onClick={handleBackToTopics} className="btn-secondary w-full">
              ← Elegir otro tema
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Header
        title="💬 Conversación Temática"
        subtitle={`${conversationTopics.length} temas disponibles`}
      />

      <div className="max-w-2xl mx-auto px-4 py-4">
        <TopicSelector topics={conversationTopics} onSelect={handleSelectTopic} />

        <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-sm text-blue-800">
            <span className="font-bold">💡 Consejo:</span> Lee la pregunta en voz alta, intenta
            formular tu respuesta y luego compara con la respuesta modelo.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCardControlled({
  question,
  index,
  forceShow,
  speak,
  speechSupported,
}: {
  question: ConversationQuestion;
  index: number;
  forceShow: boolean;
  speak: (text: string) => void;
  speechSupported: boolean;
}) {
  const [localShow, setLocalShow] = useState(false);
  const showAnswer = forceShow || localShow;

  return (
    <div className="card p-4 animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
      {/* Pergunta */}
      <div className="flex items-start gap-3 mb-3">
        <span className="flex-shrink-0 w-7 h-7 bg-spain-red text-white rounded-full flex items-center justify-center text-sm font-bold">
          {index + 1}
        </span>
        <div className="flex-1">
          <p className="text-gray-900 font-medium leading-relaxed">{question.question}</p>
        </div>
        {speechSupported && (
          <button
            onClick={() => speak(question.question)}
            className="flex-shrink-0 p-2 text-gray-400 hover:text-spain-red hover:bg-spain-red/10 rounded-lg transition-all"
            aria-label="Ouvir pergunta"
            title="Escuchar pregunta"
          >
            🔊
          </button>
        )}
      </div>

      {!showAnswer ? (
        <button
          onClick={() => setLocalShow(true)}
          className="w-full py-3 bg-gradient-to-r from-spain-red/10 to-spain-yellow/10 hover:from-spain-red/20 hover:to-spain-yellow/20 rounded-xl border-2 border-dashed border-spain-red/30 text-spain-red font-medium transition-all flex items-center justify-center gap-2"
        >
          <span>👁️</span>
          <span>Ver respuesta</span>
        </button>
      ) : (
        <div className="animate-fade-in">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-green-600 uppercase tracking-wide font-semibold">
                💬 Respuesta modelo
              </p>
              {speechSupported && (
                <button
                  onClick={() => speak(question.answer)}
                  className="p-1.5 text-green-500 hover:text-green-700 hover:bg-green-100 rounded-lg transition-all"
                  aria-label="Ouvir resposta"
                  title="Escuchar respuesta"
                >
                  🔊
                </button>
              )}
            </div>
            <p className="text-gray-800 leading-relaxed">{question.answer}</p>
          </div>
          {!forceShow && (
            <button
              onClick={() => setLocalShow(false)}
              className="mt-2 text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              Ocultar respuesta
            </button>
          )}
        </div>
      )}
    </div>
  );
}
