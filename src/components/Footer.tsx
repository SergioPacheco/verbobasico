import { Link } from 'react-router-dom';

const quickLinks = [
  { path: '/training', label: 'Treino' },
  { path: '/conjugation', label: 'Conjugação' },
  { path: '/gotchas', label: 'Pegadinhas' },
  { path: '/grammar', label: 'Gramática' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-lg">🇪🇸</span>
            <span className="font-semibold text-gray-400">Verbo Básico</span>
          </div>

          <p>© {currentYear} — Feito com ❤️ para brasileiros na Espanha</p>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
