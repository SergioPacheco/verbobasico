import { useState, useRef, useEffect } from 'react';
import { readingTexts } from '../data/readingTexts';
import type { ReadingText } from '../data/readingTexts';
import { Header } from '../components';

type Level = 'all' | 'basico' | 'intermedio' | 'avanzado';

const LEVEL_LABELS: Record<Level, string> = {
  all: '🌟 Todos',
  basico: '🟢 Básico',
  intermedio: '🟡 Intermedio',
  avanzado: '🔴 Avanzado',
};

function AudioPlayer({ content }: { text: ReadingText; content: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>('');
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Load available Spanish voices
  useEffect(() => {
    const loadVoices = () => {
      const allVoices = speechSynthesis.getVoices();
      // Filter Spanish voices (es-ES, es-MX, es-AR, etc.)
      const spanishVoices = allVoices.filter(v => v.lang.startsWith('es'));
      setVoices(spanishVoices);
      
      // Select first Spanish voice by default (prefer es-ES)
      if (spanishVoices.length > 0 && !selectedVoice) {
        const esES = spanishVoices.find(v => v.lang === 'es-ES');
        setSelectedVoice(esES?.name || spanishVoices[0].name);
      }
    };

    loadVoices();
    // Voices may load asynchronously
    speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      speechSynthesis.onvoiceschanged = null;
    };
  }, [selectedVoice]);

  const speak = () => {
    if (!('speechSynthesis' in window)) return;

    // Cancel any ongoing speech
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(content);
    utterance.lang = 'es-ES';
    utterance.rate = speed;
    utterance.pitch = 1;

    // Set selected voice
    const voice = voices.find(v => v.name === selectedVoice);
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
  };

  const pause = () => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const resume = () => {
    if (speechSynthesis.paused) {
      speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  const stop = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  useEffect(() => {
    return () => {
      speechSynthesis.cancel();
    };
  }, []);

  // Helper to get voice label
  const getVoiceLabel = (voice: SpeechSynthesisVoice) => {
    // Try to identify gender from voice name
    const name = voice.name.toLowerCase();
    const isFemale = name.includes('female') || name.includes('mujer') || 
                     name.includes('mónica') || name.includes('paulina') || 
                     name.includes('elena') || name.includes('lucia') ||
                     name.includes('conchita') || name.includes('elvira');
    const isMale = name.includes('male') || name.includes('hombre') || 
                   name.includes('jorge') || name.includes('diego') || 
                   name.includes('pablo') || name.includes('enrique');
    
    const gender = isFemale ? '👩' : isMale ? '👨' : '🗣️';
    const region = voice.lang === 'es-ES' ? '🇪🇸' : 
                   voice.lang === 'es-MX' ? '🇲🇽' : 
                   voice.lang === 'es-AR' ? '🇦🇷' : '🌎';
    
    return `${gender} ${region} ${voice.name.split(' ').slice(0, 2).join(' ')}`;
  };

  return (
    <div className="bg-gray-100 rounded-xl p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-gray-700">🎧 Escuchar texto</span>
      </div>

      {/* Voice and Speed selectors */}
      <div className="flex flex-wrap gap-3 mb-3">
        {/* Voice selector */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="text-xs text-gray-500 flex-shrink-0">Voz:</span>
          <select
            value={selectedVoice}
            onChange={(e) => setSelectedVoice(e.target.value)}
            className="text-xs bg-white border border-gray-300 rounded px-2 py-1.5 flex-1 min-w-0 truncate"
            disabled={isPlaying || voices.length === 0}
          >
            {voices.length === 0 ? (
              <option>Cargando voces...</option>
            ) : (
              voices.map((voice) => (
                <option key={voice.name} value={voice.name}>
                  {getVoiceLabel(voice)}
                </option>
              ))
            )}
          </select>
        </div>

        {/* Speed selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Velocidad:</span>
          <select
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="text-xs bg-white border border-gray-300 rounded px-2 py-1.5"
            disabled={isPlaying}
          >
            <option value={0.5}>0.5x</option>
            <option value={0.75}>0.75x</option>
            <option value={1}>1x</option>
            <option value={1.25}>1.25x</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {!isPlaying ? (
          <button
            onClick={speak}
            className="flex-1 py-3 bg-spain-red text-white rounded-xl font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
          >
            <span>▶️</span>
            <span>Reproducir</span>
          </button>
        ) : (
          <>
            {isPaused ? (
              <button
                onClick={resume}
                className="flex-1 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>▶️</span>
                <span>Continuar</span>
              </button>
            ) : (
              <button
                onClick={pause}
                className="flex-1 py-3 bg-yellow-600 text-white rounded-xl font-medium hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>⏸️</span>
                <span>Pausar</span>
              </button>
            )}
            <button
              onClick={stop}
              className="py-3 px-4 bg-gray-600 text-white rounded-xl font-medium hover:bg-gray-700 transition-colors"
            >
              ⏹️
            </button>
          </>
        )}
      </div>

      {isPlaying && (
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1 h-1 bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full bg-spain-red rounded-full animate-pulse" style={{ width: '100%' }} />
          </div>
          <span className="text-xs text-gray-500">{isPaused ? 'Pausado' : 'Reproduciendo...'}</span>
        </div>
      )}
    </div>
  );
}

function VocabularySection({ vocabulary }: { vocabulary: { word: string; meaning: string }[] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between"
      >
        <span className="font-semibold text-amber-800">📚 Vocabulario ({vocabulary.length} palabras)</span>
        <span className="text-amber-600">{expanded ? '▲' : '▼'}</span>
      </button>

      {expanded && (
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 animate-fade-in">
          {vocabulary.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-2 border border-amber-100">
              <span className="font-medium text-gray-900">{item.word}</span>
              <span className="text-gray-500"> — {item.meaning}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function QuestionsSection({ questions }: { questions: { question: string; answer: string }[] }) {
  const [showAnswers, setShowAnswers] = useState<boolean[]>(new Array(questions.length).fill(false));

  const toggleAnswer = (idx: number) => {
    const newShow = [...showAnswers];
    newShow[idx] = !newShow[idx];
    setShowAnswers(newShow);
  };

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
      <h3 className="font-semibold text-blue-800 mb-3">❓ Preguntas de comprensión</h3>
      <div className="space-y-3">
        {questions.map((q, idx) => (
          <div key={idx} className="bg-white rounded-lg p-3 border border-blue-100">
            <p className="font-medium text-gray-900 mb-2">{idx + 1}. {q.question}</p>
            {showAnswers[idx] ? (
              <div className="animate-fade-in">
                <p className="text-sm text-green-700 bg-green-50 p-2 rounded-lg">
                  ✅ {q.answer}
                </p>
                <button
                  onClick={() => toggleAnswer(idx)}
                  className="text-xs text-gray-400 mt-2 hover:text-gray-600"
                >
                  Ocultar respuesta
                </button>
              </div>
            ) : (
              <button
                onClick={() => toggleAnswer(idx)}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                👁️ Ver respuesta
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TextCard({ text, onSelect }: { text: ReadingText; onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      className="card w-full text-left p-4 hover:border-spain-red/40 hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-3">
        <span className="text-3xl">{text.emoji}</span>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-gray-900">{text.title}</h3>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className={`px-2 py-0.5 rounded-full ${
              text.level === 'basico' ? 'bg-green-100 text-green-700' :
              text.level === 'intermedio' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {LEVEL_LABELS[text.level]}
            </span>
            <span className="text-gray-500">{text.topic}</span>
          </div>
          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
            {text.content.substring(0, 100)}...
          </p>
        </div>
        <span className="text-spain-red text-xl">→</span>
      </div>
    </button>
  );
}

function ReadingView({ text, onBack }: { text: ReadingText; onBack: () => void }) {
  // Split content into paragraphs
  const paragraphs = text.content.split('\n\n').filter(p => p.trim());

  // Highlight important words in text
  const highlightText = (paragraph: string): React.ReactNode => {
    if (!text.highlights || text.highlights.length === 0) {
      return paragraph;
    }

    // Sort highlights by length (longer first) to avoid partial matches
    const sortedHighlights = [...text.highlights].sort((a, b) => b.length - a.length);
    
    // Create regex pattern for all highlights (case-insensitive for flexibility)
    const pattern = new RegExp(
      `(${sortedHighlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
      'gi'
    );

    const parts = paragraph.split(pattern);
    
    return parts.map((part, index) => {
      // Check if this part matches any highlight
      const isHighlight = sortedHighlights.some(
        h => h.toLowerCase() === part.toLowerCase()
      );
      
      if (isHighlight) {
        return (
          <span
            key={index}
            className="bg-yellow-200 text-yellow-900 px-0.5 rounded font-semibold"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Header
        title={text.emoji + ' Lectura'}
        subtitle={text.title}
      />

      <div className="max-w-2xl mx-auto px-4 py-4">
        {/* Back button */}
        <button
          onClick={onBack}
          className="text-sm text-spain-red hover:text-red-700 mb-4 flex items-center gap-1"
        >
          ← Volver a la lista
        </button>

        {/* Title and meta */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{text.title}</h1>
          <div className="flex items-center gap-2">
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              text.level === 'basico' ? 'bg-green-100 text-green-700' :
              text.level === 'intermedio' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {LEVEL_LABELS[text.level]}
            </span>
            <span className="text-xs text-gray-500">{text.topic}</span>
          </div>
        </div>

        {/* Audio Player */}
        <AudioPlayer text={text} content={text.content} />

        {/* Vocabulary (collapsed by default) */}
        <VocabularySection vocabulary={text.vocabulary} />

        {/* Main text */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4 shadow-sm">
          <div className="prose prose-gray max-w-none">
            {paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-gray-800 leading-relaxed mb-4 last:mb-0">
                {highlightText(paragraph)}
              </p>
            ))}
          </div>
        </div>

        {/* Comprehension Questions */}
        <QuestionsSection questions={text.questions} />

        {/* Tip */}
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
          <p className="text-sm text-green-800">
            <span className="font-bold">💡 Sugerencia:</span> Lee el texto una vez sin el audio, 
            luego escúchalo mientras lees, y finalmente intenta escucharlo sin mirar el texto.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ReadingPage() {
  const [selectedText, setSelectedText] = useState<ReadingText | null>(null);
  const [levelFilter, setLevelFilter] = useState<Level>('all');

  const filteredTexts = levelFilter === 'all' 
    ? readingTexts 
    : readingTexts.filter(t => t.level === levelFilter);

  if (selectedText) {
    return <ReadingView text={selectedText} onBack={() => setSelectedText(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Header
        title="📖 Lectura"
        subtitle={`${readingTexts.length} textos para practicar`}
      />

      <div className="max-w-2xl mx-auto px-4 py-4">
        {/* Intro */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
          <p className="text-sm text-blue-800">
            <span className="font-bold">🎧 Entrena tu oído:</span> Lee textos sobre gramática y lengua española 
            mientras escuchas el audio. Ajusta la velocidad según tu nivel.
          </p>
        </div>

        {/* Level Filter */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {(Object.keys(LEVEL_LABELS) as Level[]).map((level) => (
            <button
              key={level}
              onClick={() => setLevelFilter(level)}
              className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                levelFilter === level
                  ? 'bg-spain-red text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {LEVEL_LABELS[level]}
            </button>
          ))}
        </div>

        {/* Text List */}
        <div className="space-y-3">
          {filteredTexts.map((text) => (
            <TextCard 
              key={text.id} 
              text={text} 
              onSelect={() => setSelectedText(text)} 
            />
          ))}
        </div>

        {filteredTexts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No hay textos en este nivel todavía.
          </div>
        )}
      </div>
    </div>
  );
}
