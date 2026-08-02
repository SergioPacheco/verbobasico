import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
}

const menuGroups = [
  {
    title: '🎯 Treino',
    items: [
      { id: '/training', label: 'Treino Diário', icon: '🎯' },
      { id: '/listening', label: 'Modo Escuta', icon: '🎧' },
      { id: '/speed', label: 'Speed Drill', icon: '⚡' },
      { id: '/dialogue', label: 'Diálogos', icon: '💬' },
    ],
  },
  {
    title: '📚 Aprender',
    items: [
      { id: '/conjugation', label: 'Conjugação', icon: '📖' },
      { id: '/grammar', label: 'Gramática', icon: '📚' },
      { id: '/gotchas', label: 'Pegadinhas', icon: '⚠️' },
      { id: '/reading', label: 'Leitura', icon: '📄' },
    ],
  },
  {
    title: '🎵 Extras',
    items: [
      { id: '/lyrics', label: 'Música', icon: '🎵' },
      { id: '/refranes', label: 'Refranes', icon: '💬' },
      { id: '/pronunciation', label: 'Pronúncia', icon: '🗣️' },
    ],
  },
];

export function Header({ title, subtitle, showBack = true }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1);
  };

  const handleNavigate = (path: string) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-spain-red to-red-700 text-white py-3 px-4 shadow-lg sticky top-0 z-20">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-2">
          {showBack ? (
            <button
              onClick={handleBack}
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
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 animate-fade-in"
          onClick={() => setMenuOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <nav
            className="absolute top-14 right-2 left-2 sm:right-4 sm:left-4 max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden animate-slide-up"
            onClick={(e) => e.stopPropagation()}
            aria-label="Menu de navegação"
          >
            {/* Home */}
            <button
              onClick={() => handleNavigate('/home')}
              className={`w-full text-left p-4 border-b hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                location.pathname === '/home' ? 'bg-amber-50 border-l-4 border-l-spain-red' : ''
              }`}
            >
              <span className="text-2xl">🏠</span>
              <span className="font-semibold text-gray-900">Início</span>
            </button>

            {/* Groups */}
            {menuGroups.map((group) => (
              <div key={group.title}>
                <div className="px-4 py-2 bg-gray-100 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {group.title}
                </div>
                {group.items.map((item) => {
                  const isActive = location.pathname === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigate(item.id)}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                        isActive ? 'bg-amber-50 border-l-4 border-l-spain-red' : ''
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className={`${isActive ? 'font-semibold text-spain-red' : 'text-gray-700'}`}>
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
