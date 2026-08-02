import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
}

const navItems = [
  { path: '/training', label: 'Treino', icon: '🎯' },
  { path: '/conjugation', label: 'Conjugação', icon: '📖' },
  { path: '/gotchas', label: 'Pegadinhas', icon: '⚠️' },
  { path: '/grammar', label: 'Gramática', icon: '📚' },
  { path: '/reading', label: 'Leitura', icon: '📄' },
];

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
    title: '📍 Situações',
    items: [
      { id: '/training?situation=mercado', label: 'Supermercado', icon: '🛒' },
      { id: '/training?situation=restaurante', label: 'Restaurante', icon: '🍽️' },
      { id: '/training?situation=medico', label: 'Médico', icon: '🏥' },
      { id: '/training?situation=transporte', label: 'Transporte', icon: '🚌' },
      { id: '/training?situation=trabalho', label: 'Trabalho', icon: '💼' },
      { id: '/training?situation=documentos', label: 'Documentos', icon: '📄' },
      { id: '/training?situation=aluguel', label: 'Aluguel', icon: '🏠' },
      { id: '/training?situation=entrevista', label: 'Entrevista', icon: '🤝' },
    ],
  },
  {
    title: '📚 Aprender',
    items: [
      { id: '/conjugation', label: 'Conjugação', icon: '📖' },
      { id: '/grammar', label: 'Gramática', icon: '📚' },
      { id: '/gotchas', label: 'Pegadinhas', icon: '⚠️' },
      { id: '/reading', label: 'Leitura', icon: '📄' },
      { id: '/pronunciation', label: 'Pronúncia', icon: '🗣️' },
    ],
  },
  {
    title: '🎵 Extras',
    items: [
      { id: '/lyrics', label: 'Música', icon: '🎵' },
      { id: '/refranes', label: 'Refranes', icon: '💬' },
      { id: '/conversation', label: 'Conversação', icon: '🗣️' },
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
      {/* Main Header */}
      <header className="bg-gradient-to-r from-spain-red to-red-700 text-white shadow-lg sticky top-0 z-20">
        {/* Top bar with title */}
        <div className="py-3 px-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
            {showBack ? (
              <button
                onClick={handleBack}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors text-sm"
                aria-label="Voltar"
              >
                ←
              </button>
            ) : (
              <Link to="/home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <span className="text-xl">🇪🇸</span>
                <span className="font-bold hidden sm:inline">Verbo Básico</span>
              </Link>
            )}

            <div className="flex-1 text-center">
              <h1 className="text-lg sm:text-xl font-bold truncate">{title}</h1>
              {subtitle && <p className="text-xs opacity-80">{subtitle}</p>}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors lg:hidden"
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? '✕' : '☰'}
            </button>

            {/* Desktop: placeholder for alignment */}
            <div className="hidden lg:block w-10" />
          </div>
        </div>

        {/* Horizontal nav - visible on larger screens */}
        <nav className="hidden lg:block border-t border-white/20 bg-red-800/30">
          <div className="max-w-4xl mx-auto px-4">
            <ul className="flex items-center justify-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
              {/* More dropdown for desktop */}
              <li className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium">
                  <span>Mais</span>
                  <span className="text-xs">▼</span>
                </button>
                {/* Dropdown */}
                <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                  <div className="py-2">
                    <Link to="/lyrics" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">🎵 Música</Link>
                    <Link to="/refranes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">💬 Refranes</Link>
                    <Link to="/pronunciation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">🗣️ Pronúncia</Link>
                    <Link to="/listening" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">🎧 Modo Escuta</Link>
                    <Link to="/speed" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">⚡ Speed Drill</Link>
                    <Link to="/dialogue" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">💬 Diálogos</Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 animate-fade-in lg:hidden"
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
