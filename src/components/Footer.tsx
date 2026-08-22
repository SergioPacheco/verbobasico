import { Link } from 'react-router-dom';

const footerGroups = [
  {
    title: 'Praticar',
    items: [
      { path: '/training', label: 'Treino' },
      { path: '/listening', label: 'Escuta' },
      { path: '/speed', label: 'Speed' },
      { path: '/dialogue', label: 'Diálogos' },
      { path: '/cloze', label: 'Cloze' },
      { path: '/transform', label: 'Transform.' },
      { path: '/conversation', label: 'Conversação' },
      { path: '/lyrics', label: 'Música' },
      { path: '/refranes', label: 'Refranes' },
    ],
  },
  {
    title: 'Aprender',
    items: [
      { path: '/conjugation', label: 'Conjugação' },
      { path: '/reading', label: 'Leitura' },
      { path: '/pronunciation', label: 'Pronúncia' },
      { path: '/grammar', label: 'Gramática' },
      { path: '/gotchas', label: 'Pegadinhas' },
      { path: '/mistakes', label: 'Erros' },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-3 py-6 sm:px-4 sm:py-8">
        <div className="space-y-4">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                  {group.title}
                </span>
                <div className="h-px flex-1 bg-gray-800" />
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="my-5 border-t border-gray-800" />

        <div className="flex flex-col gap-3 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">🇪🇸</span>
            <span className="font-semibold text-gray-400">Verbo Básico</span>
          </div>

          <p className="text-center sm:text-left">© {currentYear} — Feito com ❤️ para brasileiros na Espanha</p>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start transition-colors hover:text-white sm:self-auto"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
