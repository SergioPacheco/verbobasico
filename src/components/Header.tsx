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
      { id: '/training', label: '🎯 Treino Diário', desc: 'Sessão de 3-5 min' },
      { id: '/listening', label: '🎧 Modo Escuta', desc: 'Ouça e escreva' },
      { id: '/speed', label: '⚡ Speed Drill', desc: '60s cronometrado' },
      { id: '/dialogue', label: '💬 Diálogos', desc: 'Conversas situacionais' },
      { id: '/cloze', label: '📝 Cloze Test', desc: 'Preencha lacunas' },
      { id: '/transform', label: '🔄 Transformação', desc: 'Troque o tempo verbal' },
    ],
  },
  {
    title: '📚 Referência',
    items: [
      { id: '/conjugation', label: '📖 Conjugação', desc: 'Tabelas completas' },
      { id: '/grammar', label: '📚 Gramática', desc: 'Regras essenciais' },
      { id: '/gotchas', label: '⚠️ Pegadinhas', desc: 'Erros comuns' },
      { id: '/pronunciation', label: '🗣️ Pronúncia', desc: 'Sons do espanhol' },
    ],
  },
  {
    title: '🎵 Conteúdo',
    items: [
      { id: '/reading', label: '📖 Leitura', desc: 'Textos com áudio' },
      { id: '/lyrics', label: '🎵 Música', desc: 'Hits em espanhol' },
      { id: '/refranes', label: '💬 Refranes', desc: 'Provérbios' },
      { id: '/conversation', label: '🗣️ Conversação', desc: 'Perguntas temáticas' },
    ],
  },
];

const bottomNavItems = [
  { id: '/home', label: 'Início', icon: '🏠' },
  { id: '/training', label: 'Treino', icon: '🎯' },
  { id: '/conjugation', label: 'Verbos', icon: '📖' },
  { id: '/lyrics', label: 'Música', icon: '🎵' },
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

      {/* Dropdown Menu - Grouped */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50"
          onClick={() => setMenuOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <nav
            className="absolute top-14 right-2 left-2 sm:right-4 sm:left-4 max-w-2xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            aria-label="Menu de navegação"
          >
            {/* Home link */}
            <button
              onClick={() => handleNavigate('/home')}
              className={`w-full text-left p-3 border-b hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                location.pathname === '/home' ? 'bg-amber-50' : ''
              }`}
            >
              <span className="text-xl">🏠</span>
              <div>
                <div className="font-semibold text-gray-900">Início</div>
                <div className="text-xs text-gray-500">Página principal</div>
              </div>
            </button>

            {/* Grouped menu items */}
            {menuGroups.map((group) => (
              <div key={group.title}>
                <div className="px-3 py-2 bg-gray-50 border-b font-semibold text-gray-600 text-xs uppercase tracking-wide">
                  {group.title}
                </div>
                <div className="grid grid-cols-2 gap-1 p-2">
                  {group.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavigate(item.id)}
                      className={`text-left p-2.5 rounded-lg hover:bg-gray-100 transition-colors ${
                        location.pathname === item.id ? 'bg-amber-50 ring-1 ring-amber-200' : ''
                      }`}
                      aria-current={location.pathname === item.id ? 'page' : undefined}
                    >
                      <div className="font-medium text-gray-900 text-sm truncate">{item.label}</div>
                      <div className="text-xs text-gray-500 truncate">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20 safe-area-bottom">
        <div className="max-w-2xl mx-auto flex justify-around">
          {bottomNavItems.map((item) => {
            const isActive = location.pathname === item.id;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`flex-1 py-2 pt-2 pb-1 flex flex-col items-center gap-0.5 transition-colors ${
                  isActive 
                    ? 'text-spain-red' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="text-xl">{item.icon}</span>
                <span className={`text-xs ${isActive ? 'font-semibold' : ''}`}>{item.label}</span>
                {isActive && (
                  <div className="absolute bottom-0 w-12 h-0.5 bg-spain-red rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
