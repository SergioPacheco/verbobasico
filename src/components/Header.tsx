import { useState } from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  onNavigate: (page: string) => void;
  showBack?: boolean;
  onBack?: () => void;
}

const menuItems = [
  { id: 'conjugation', label: '📖 Conjugação', desc: 'Tabelas completas' },
  { id: 'home', label: '🏠 Início', desc: 'Página principal' },
  { id: 'training', label: '🎯 Treino Diário', desc: 'Sessão de 3-5 min' },
  { id: 'listening', label: '🎧 Modo Escuta', desc: 'Ouça e escreva' },
  { id: 'speed', label: '⚡ Speed Drill', desc: '60s cronometrado' },
  { id: 'dialogue', label: '💬 Diálogos', desc: 'Conversas situacionais' },
  { id: 'cloze', label: '📝 Cloze Test', desc: 'Preencha lacunas' },
  { id: 'transform', label: '🔄 Transformação', desc: 'Troque o tempo verbal' },
  { id: 'idioms', label: '🗣️ Expressões', desc: 'Idiomáticas + Quiz' },
  { id: 'gotchas', label: '⚠️ Pegadinhas', desc: 'Erros de brasileiros' },
  { id: 'lyrics', label: '🎵 Música', desc: 'Verbos em letras' },
  { id: 'vocabulary', label: '📚 Vocabulário', desc: 'Cognatos + Andaluz' },
];

export function Header({ title, subtitle, onNavigate, showBack, onBack }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-gradient-to-r from-spain-red to-red-700 text-white py-3 px-4 shadow-lg sticky top-0 z-20">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-2">
          {showBack && onBack ? (
            <button
              onClick={onBack}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors text-sm"
              aria-label="Voltar"
            >
              ←
            </button>
          ) : (
            <div className="w-8" />
          )}
          
          <div className="flex-1 text-center">
            <h1 className="text-lg sm:text-xl font-bold truncate">{title}</h1>
            {subtitle && <p className="text-xs opacity-80">{subtitle}</p>}
          </div>
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-black/50" onClick={() => setMenuOpen(false)}>
          <div 
            className="absolute top-14 right-4 left-4 sm:left-auto sm:w-72 bg-white rounded-xl shadow-2xl overflow-hidden max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 bg-gray-50 border-b font-semibold text-gray-700 text-sm">
              Navegação
            </div>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setMenuOpen(false);
                  onNavigate(item.id);
                }}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b last:border-b-0 transition-colors"
              >
                <div className="font-medium text-gray-900">{item.label}</div>
                <div className="text-xs text-gray-500">{item.desc}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
