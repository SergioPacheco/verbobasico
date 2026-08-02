import { useState } from 'react';
import { lyrics } from '../data';
import { MUSIC_CATEGORIES } from '../types';
import { Header } from '../components';

type CategoryFilter = 'all' | 'latino' | 'movida80' | 'cantautor' | 'flamenco' | 'pop2000' | 'rock';

function SpotifyPlayer({ trackId, title }: { trackId: string; title: string }) {
  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
      width="100%"
      height="152"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title={`Spotify player - ${title}`}
      className="rounded-xl"
    />
  );
}

export function LyricsPage() {
  const [category, setCategory] = useState<CategoryFilter>('all');

  const filtered = category === 'all' 
    ? lyrics 
    : lyrics.filter((l) => l.category === category);

  const categories: Array<{ key: CategoryFilter; emoji: string; name: string }> = [
    { key: 'all', emoji: '📋', name: 'Todas' },
    ...Object.entries(MUSIC_CATEGORIES).map(([key, val]) => ({
      key: key as CategoryFilter,
      emoji: val.emoji,
      name: val.name,
    })),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
      <Header title="🎵 Música" subtitle={`${lyrics.length} músicas para aprender`} />

      <div className="max-w-2xl mx-auto px-4 py-4">
        {/* Info */}
        <div className="card mb-4 border-2 border-green-200 animate-fade-in">
          <p className="text-gray-600 text-sm">
            🎧 Ouça no <strong>Spotify</strong>. Se estiver logado, as <strong>letras sincronizadas</strong> aparecem automaticamente!
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              className={`whitespace-nowrap py-2 px-3 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                category === cat.key
                  ? 'bg-spain-red text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-spain-red/30'
              }`}
              aria-pressed={category === cat.key}
            >
              <span>{cat.emoji}</span>
              <span>{cat.name}</span>
              {cat.key !== 'all' && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  category === cat.key ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  {lyrics.filter(l => l.category === cat.key).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Music Cards */}
        <div className="space-y-4">
          {filtered.map((entry, i) => {
            const catInfo = MUSIC_CATEGORIES[entry.category];
            return (
              <div
                key={entry.id}
                className="card animate-slide-up"
                style={{ animationDelay: `${i * 0.03}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">🎵</span>
                      <h3 className="font-bold text-gray-900">{entry.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500">{entry.artist}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600`}>
                    {catInfo?.emoji} {catInfo?.name}
                  </span>
                </div>

                {/* Spotify Player */}
                {entry.spotifyId ? (
                  <SpotifyPlayer trackId={entry.spotifyId} title={entry.title} />
                ) : (
                  <div className="bg-gray-100 rounded-xl p-4 text-center text-gray-500 text-sm">
                    🎵 Player não disponível
                  </div>
                )}

                {/* Context & Translation */}
                <div className="mt-3 flex flex-col gap-2">
                  <p className="text-sm text-gray-600 italic">
                    {entry.context}
                  </p>
                  <div className="bg-blue-50 rounded-lg p-2">
                    <p className="text-xs text-blue-700">
                      🇧🇷 <span className="font-medium">{entry.translation}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Nenhuma música nesta categoria.
          </div>
        )}

        {/* Stats footer */}
        <div className="mt-6 text-center text-xs text-gray-400">
          {filtered.length} de {lyrics.length} músicas
        </div>
      </div>
    </div>
  );
}
