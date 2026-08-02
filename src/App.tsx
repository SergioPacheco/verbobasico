import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProgressProvider } from './context';
import { ErrorBoundary, Footer, Spinner } from './components';

// Lazy load all pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const TrainingPage = lazy(() =>
  import('./pages/TrainingPage').then((m) => ({ default: m.TrainingPage }))
);
const FullPage = lazy(() => import('./pages/FullPage').then((m) => ({ default: m.FullPage })));
const MistakesPage = lazy(() =>
  import('./pages/MistakesPage').then((m) => ({ default: m.MistakesPage }))
);
const GotchasPage = lazy(() =>
  import('./pages/GotchasPage').then((m) => ({ default: m.GotchasPage }))
);
const LyricsPage = lazy(() => import('./pages/LyricsPage').then((m) => ({ default: m.LyricsPage })));
const ListeningPage = lazy(() =>
  import('./pages/ListeningPage').then((m) => ({ default: m.ListeningPage }))
);
const SpeedDrillPage = lazy(() =>
  import('./pages/SpeedDrillPage').then((m) => ({ default: m.SpeedDrillPage }))
);
const DialoguePage = lazy(() =>
  import('./pages/DialoguePage').then((m) => ({ default: m.DialoguePage }))
);
const ClozePage = lazy(() => import('./pages/ClozePage').then((m) => ({ default: m.ClozePage })));
const TransformPage = lazy(() =>
  import('./pages/TransformPage').then((m) => ({ default: m.TransformPage }))
);
const ConversationPage = lazy(() =>
  import('./pages/ConversationPage').then((m) => ({ default: m.ConversationPage }))
);
const GrammarPage = lazy(() =>
  import('./pages/GrammarPage').then((m) => ({ default: m.GrammarPage }))
);
const PronunciationPage = lazy(() =>
  import('./pages/PronunciationPage').then((m) => ({ default: m.PronunciationPage }))
);
const ReadingPage = lazy(() =>
  import('./pages/ReadingPage').then((m) => ({ default: m.ReadingPage }))
);
const RefranesPage = lazy(() =>
  import('./pages/RefranesPage').then((m) => ({ default: m.RefranesPage }))
);

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50 flex items-center justify-center">
      <div className="text-center">
        <Spinner size="lg" />
        <p className="mt-4 text-gray-600">Cargando...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ProgressProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Suspense fallback={<PageLoader />}>
              <div className="flex-1">
                <Routes>
                  {/* Main routes */}
                  <Route path="/" element={<Navigate to="/conjugation" replace />} />
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/conjugation" element={<FullPage />} />
                  <Route path="/training" element={<TrainingPage />} />
                  <Route path="/mistakes" element={<MistakesPage />} />

                  {/* Practice modes */}
                  <Route path="/listening" element={<ListeningPage />} />
                  <Route path="/speed" element={<SpeedDrillPage />} />
                  <Route path="/dialogue" element={<DialoguePage />} />
                  <Route path="/cloze" element={<ClozePage />} />
                  <Route path="/transform" element={<TransformPage />} />
                  <Route path="/conversation" element={<ConversationPage />} />

                  {/* Reference pages */}
                  <Route path="/gotchas" element={<GotchasPage />} />
                  <Route path="/lyrics" element={<LyricsPage />} />
                  <Route path="/grammar" element={<GrammarPage />} />
                  <Route path="/pronunciation" element={<PronunciationPage />} />
                  <Route path="/reading" element={<ReadingPage />} />
                  <Route path="/refranes" element={<RefranesPage />} />

                  {/* Redirects for removed pages */}
                  <Route path="/vocabulary" element={<Navigate to="/gotchas" replace />} />
                  <Route path="/idioms" element={<Navigate to="/gotchas" replace />} />

                  {/* Fallback for unknown routes */}
                  <Route path="*" element={<Navigate to="/conjugation" replace />} />
                </Routes>
              </div>
              <Footer />
            </Suspense>
          </div>
        </BrowserRouter>
      </ProgressProvider>
    </ErrorBoundary>
  );
}
