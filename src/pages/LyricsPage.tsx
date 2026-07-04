import { useState } from 'react';
import type { LyricEntry, LyricLine, LyricVerb } from '../types';
import { TENSE_COLORS } from '../types';
import { lyrics } from '../data';
import { useSpeech } from '../hooks';

interface LyricsPageProps {
  onBack: () => void;
}

function HighlightedLine({ line }: { line: LyricLine }) {
  const [activeVerb, setActiveVerb] = useState<LyricVerb | null>(null);

  // Build the line with highlighted verbs
  let remaining = line.text;
  const segments: Array<{ text: string; verb?: LyricVerb }> = [];

  for (const verb of line.verbs) {
    const idx = remaining.toLowerCase().indexOf(verb.word.toLowerCase());
    if (idx === -1) continue;

    // Text before the verb
    if (idx > 0) {
      segments.push({ text: remaining.slice(0, idx) });
    }
    // The verb itself (preserve original casing)
    segments.push({ text: remaining.slice(idx, idx + verb.word.length), verb });
    remaining = remaining.slice(idx + verb.word.length);
  }
  // Remaining text after last verb
  if (remaining) {
    segments.push({ text: remaining });
  }

  return (
    <div className="relative">
      <p className="text-lg leading-relaxed">
        {segments.map((seg, i) =>
          seg.verb ? (
            <span
              key={i}
              className={`relative cursor-pointer font-semibold px-1 py-0.5 rounded ${TENSE_COLORS[seg.verb.tense].bg} ${TENSE_COLORS[seg.verb.tense].text} hover:ring-2 hover:ring-offset-1 transition-all`}
              onMouseEnter={() => setActiveVerb(seg.verb!)}
              onMouseLeave={() => setActiveVerb(null)}
              onClick={() => setActiveVerb(activeVerb === seg.verb ? null : seg.verb!)}
              role="button"
              tabIndex={0}
              aria-label={`${seg.text}: verbo ${seg.verb.infinitive}, ${TENSE_COLORS[seg.verb.tense].label}`}
            >
              {seg.text}
            </span>
          ) : (
            <span key={i} className="text-gray-800">{seg.text}</span>
          )
        )}
      </p>

      {/* Tooltip */}
      {activeVerb && (
        <div className="absolute left-0 top-full mt-1 z-10 bg-white border border-gray-200 rounded-xl shadow-lg p-3 text-sm animate-fade-in min-w-[200px]">
          <div className="flex items-center gap-2 mb-1">
            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${TENSE_COLORS[activeVerb.tense].bg} ${TENSE_COLORS[activeVerb.tense].text}`}>
              {TENSE_COLORS[activeVerb.tense].label}
            </span>
          </div>
          <p className="font-semibold text-gray-900">
            {activeVerb.word} → <span className="text-spain-red">{activeVerb.infinitive}</span>
          </p>
          <p className="text-gray-500 text-xs mt-0.5">
            🇧🇷 {activeVerb.translation}
          </p>
        </div>
      )}
    </div>
  );
}

function LyricCard({ entry }: { entry: LyricEntry; }) {
  const [expanded, setExpanded] = useState(false);
  const { speak, isSupported } = useSpeech();

  const typeIcon = entry.type === 'musica' ? '🎵' : entry.type === 'poesia' ? '📜' : '💬';

  return (
    <div className="card animate-slide-up">
      {/* Header */}
      <div
        className="flex items-start justify-between cursor-pointer"
        onClick={() => setExpanded(!expanded)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span>{typeIcon}</span>
            <h3 className="font-bold text-gray-900">{entry.title}</h3>
          </div>
          <p className="text-sm text-gray-500">{entry.artist}</p>
        </div>
        <span className="text-gray-400 text-xl">{expanded ? '−' : '+'}</span>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="mt-4 animate-fade-in" onClick={(e) => e.stopPropagation()}>
          {/* Context */}
          <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3 mb-4 italic">
            {entry.context}
          </p>

          {/* Lines with highlighted verbs */}
          <div className="space-y-3 mb-4 border-l-4 border-spain-yellow pl-4">
            {entry.lines.map((line, i) => (
              <HighlightedLine key={i} line={line} />
            ))}
          </div>

          {/* Translation */}
          <div className="bg-blue-50 rounded-xl p-3 mb-3">
            <p className="text-xs font-semibold text-blue-700 mb-1">🇧🇷 Tradução:</p>
            <p className="text-sm text-blue-800">{entry.translation}</p>
          </div>

          {/* Listen button */}
          {isSupported && (
            <button
              onClick={() => speak(entry.lines.map((l) => l.text).join('. '))}
              className="btn-ghost w-full flex items-center justify-center gap-2 text-sm"
              aria-label="Ouvir em espanhol"
            >
              🔊 Ouvir em espanhol
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export function LyricsPage({ onBack }: LyricsPageProps) {
  const [filter, setFilter] = useState<'all' | 'musica' | 'poesia' | 'refran'>('all');

  const filtered = filter === 'all' ? lyrics : lyrics.filter((l) => l.type === filter);

  return (
    <div className="min-h-screen px-4 py-6 max-w-lg mx-auto">
      <button onClick={onBack} className="btn-ghost mb-4" aria-label="Voltar">
        ← Voltar
      </button>

      <div className="card mb-6 animate-fade-in">
        <h2 className="text-xl font-bold text-gray-900 mb-2">🎵 Verbos na Música</h2>
        <p className="text-gray-500 text-sm mb-4">
          Toque nos verbos <span className="bg-blue-100 text-blue-800 px-1 rounded">destacados</span> para ver o tempo verbal e a tradução.
        </p>

        {/* Legend */}
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.entries(TENSE_COLORS).slice(0, 6).map(([, color]) => (
            <span key={color.label} className={`text-xs px-2 py-1 rounded-full ${color.bg} ${color.text}`}>
              {color.label}
            </span>
          ))}
        </div>

        {/* Filter */}
        <div className="flex gap-2">
          {([['all', '📋 Todos'], ['musica', '🎵 Músicas'], ['poesia', '📜 Poesia'], ['refran', '💬 Refranes']] as const).map(
            ([value, label]) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={`py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
                  filter === value
                    ? 'bg-spain-red text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                aria-pressed={filter === value}
              >
                {label}
              </button>
            )
          )}
        </div>
      </div>

      {/* Lyrics list */}
      <div className="space-y-4">
        {filtered.map((entry, i) => (
          <div key={entry.id} style={{ animationDelay: `${i * 0.05}s` }}>
            <LyricCard entry={entry} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Nenhum conteúdo nesta categoria ainda.
        </div>
      )}
    </div>
  );
}
