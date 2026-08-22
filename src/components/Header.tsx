import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
}

const navGroups = [
  {
    title: 'Praticar',
    items: [
      { path: '/training', label: 'Treino', icon: '🎯' },
      { path: '/listening', label: 'Escuta', icon: '🎧' },
      { path: '/speed', label: 'Speed', icon: '⚡' },
      { path: '/dialogue', label: 'Diálogos', icon: '💬' },
      { path: '/cloze', label: 'Cloze', icon: '📝' },
      { path: '/transform', label: 'Transform.', icon: '🔄' },
      { path: '/conversation', label: 'Conversação', icon: '🗣️' },
      { path: '/lyrics', label: 'Música', icon: '🎵' },
      { path: '/refranes', label: 'Refranes', icon: '💬' },
    ],
  },
  {
    title: 'Aprender',
    items: [
      { path: '/conjugation', label: 'Conjugação', icon: '📖' },
      { path: '/reading', label: 'Leitura', icon: '📄' },
      { path: '/pronunciation', label: 'Pronúncia', icon: '🗣️' },
      { path: '/grammar', label: 'Gramática', icon: '📚' },
      { path: '/gotchas', label: 'Pegadinhas', icon: '⚠️' },
      { path: '/mistakes', label: 'Erros', icon: '✏️' },
    ],
  },
  {
    title: 'Situações',
    items: [
      { path: '/training/mercado', label: 'Supermercado', icon: '🛒' },
      { path: '/training/restaurante', label: 'Restaurante', icon: '🍽️' },
      { path: '/training/medico', label: 'Médico', icon: '🏥' },
      { path: '/training/transporte', label: 'Transporte', icon: '🚌' },
      { path: '/training/trabalho', label: 'Trabalho', icon: '💼' },
      { path: '/training/documentos', label: 'Documentos', icon: '📄' },
      { path: '/training/aluguel', label: 'Aluguel', icon: '🏠' },
      { path: '/training/entrevista', label: 'Entrevista', icon: '🤝' },
    ],
  },
];

export function Header({ title, subtitle, showBack = true }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = `${location.pathname}${location.search}`;

  const handleNavigate = (path: string) => {
    setMenuOpen(false);
    navigate(path);
  };

  const isActive = (path: string) => currentRoute === path || location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-20 bg-gradient-to-r from-spain-red to-red-700 text-white shadow-lg">
        <div className="px-3 py-3 sm:px-4">
          <div className="mx-auto flex max-w-6xl items-center gap-2">
            {showBack ? (
              <button
                onClick={() => navigate(-1)}
                className="rounded-lg bg-white/20 p-2 text-sm transition-colors hover:bg-white/30"
                aria-label="Voltar"
              >
                ←
              </button>
            ) : (
              <Link to="/home" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                <span className="text-xl">🇪🇸</span>
                <span className="hidden font-bold sm:inline">Verbo Básico</span>
              </Link>
            )}

            <div className="min-w-0 flex-1 text-center">
              <h1 className="truncate text-lg font-bold sm:text-xl">{title}</h1>
              {subtitle && <p className="truncate text-xs opacity-80">{subtitle}</p>}
            </div>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="rounded-lg bg-white/20 p-2 transition-colors hover:bg-white/30 lg:hidden"
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? '✕' : '☰'}
            </button>

            <div className="hidden w-10 lg:block" />
          </div>
        </div>

        <nav className="border-t border-white/20 bg-red-800/30">
          <div className="mx-auto max-w-6xl px-3 py-2 sm:px-4">
            {navGroups.map((group) => (
              <div key={group.title} className="mb-2 last:mb-0">
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                    {group.title}
                  </span>
                  <div className="h-px flex-1 bg-white/15" />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible">
                  {group.items.map((item) => {
                    const active = isActive(item.path);
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        aria-current={active ? 'page' : undefined}
                        className={`flex flex-shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                          active
                            ? 'bg-white text-spain-red shadow-sm ring-2 ring-white/30'
                            : 'text-white/85 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 animate-fade-in lg:hidden"
          onClick={() => setMenuOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <nav
            className="absolute left-2 right-2 top-14 mx-auto max-h-[calc(100dvh-4rem)] max-w-lg overflow-y-auto rounded-xl bg-white shadow-2xl animate-slide-up sm:left-4 sm:right-4"
            onClick={(e) => e.stopPropagation()}
            aria-label="Menu de navegação"
          >
            <button
              onClick={() => handleNavigate('/home')}
              className={`flex w-full items-center gap-3 border-b p-4 text-left transition-colors hover:bg-gray-50 ${
                isActive('/home') ? 'border-l-4 border-l-spain-red bg-amber-50' : ''
              }`}
            >
              <span className="text-2xl">🏠</span>
              <span className="font-semibold text-gray-900">Início</span>
            </button>

            {navGroups.map((group) => (
              <div key={group.title}>
                <div className="bg-gray-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                  {group.title}
                </div>
                <div
                  className={
                    group.title === 'Situações'
                      ? 'grid grid-cols-2 gap-1'
                      : 'grid grid-cols-1 sm:grid-cols-2'
                  }
                >
                  {group.items.map((item) => {
                    const active = isActive(item.path);
                    return (
                      <button
                        key={item.path}
                        type="button"
                        onClick={() => handleNavigate(item.path)}
                        className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-gray-50 ${
                          active ? 'border-l-4 border-l-spain-red bg-amber-50' : ''
                        }`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className={active ? 'font-semibold text-spain-red' : 'text-gray-700'}>
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
