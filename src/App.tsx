import { useState } from 'react';
import type { Situation } from './types';
import { useProgress } from './hooks';
import {
  HomePage,
  TrainingPage,
  ConjugationPage,
  MistakesPage,
  GotchasPage,
  LyricsPage,
  VocabularyPage,
  ListeningPage,
  SpeedDrillPage,
  DialoguePage,
  ClozePage,
  TransformPage,
  IdiomsPage,
} from './pages';

type Page =
  | { type: 'home' }
  | { type: 'training'; situation?: Situation; phraseIds?: string[] }
  | { type: 'conjugation' }
  | { type: 'mistakes' }
  | { type: 'gotchas' }
  | { type: 'lyrics' }
  | { type: 'vocabulary' }
  | { type: 'listening' }
  | { type: 'speed' }
  | { type: 'dialogue' }
  | { type: 'cloze' }
  | { type: 'transform' }
  | { type: 'idioms' };

export default function App() {
  const [page, setPage] = useState<Page>({ type: 'home' });
  const progressHook = useProgress();

  const goHome = () => setPage({ type: 'home' });

  switch (page.type) {
    case 'training':
      return (
        <TrainingPage
          situation={page.situation}
          phraseIds={page.phraseIds}
          onBack={goHome}
          progressHook={progressHook}
        />
      );
    case 'conjugation':
      return <ConjugationPage onBack={goHome} />;
    case 'mistakes':
      return (
        <MistakesPage
          progress={progressHook.progress}
          onBack={goHome}
          onClearMistakes={progressHook.clearMistakes}
          onPracticeMistakes={() => {
            const ids = progressHook.progress.mistakes.map((m) => m.phraseId);
            setPage({ type: 'training', phraseIds: [...new Set(ids)] });
          }}
        />
      );
    case 'gotchas':
      return <GotchasPage onBack={goHome} />;
    case 'lyrics':
      return <LyricsPage onBack={goHome} />;
    case 'vocabulary':
      return <VocabularyPage onBack={goHome} />;
    case 'listening':
      return <ListeningPage onBack={goHome} />;
    case 'speed':
      return <SpeedDrillPage onBack={goHome} />;
    case 'dialogue':
      return <DialoguePage onBack={goHome} />;
    case 'cloze':
      return <ClozePage onBack={goHome} />;
    case 'transform':
      return <TransformPage onBack={goHome} />;
    case 'idioms':
      return <IdiomsPage onBack={goHome} />;
    default:
      return (
        <HomePage
          progress={progressHook.progress}
          onStartDaily={() => setPage({ type: 'training' })}
          onStartSituation={(situation) => setPage({ type: 'training', situation })}
          onViewGotchas={() => setPage({ type: 'gotchas' })}
          onViewConjugation={() => setPage({ type: 'conjugation' })}
          onViewLyrics={() => setPage({ type: 'lyrics' })}
          onViewVocabulary={() => setPage({ type: 'vocabulary' })}
          onViewListening={() => setPage({ type: 'listening' })}
          onViewSpeed={() => setPage({ type: 'speed' })}
          onViewDialogue={() => setPage({ type: 'dialogue' })}
          onViewCloze={() => setPage({ type: 'cloze' })}
          onViewTransform={() => setPage({ type: 'transform' })}
          onViewIdioms={() => setPage({ type: 'idioms' })}
        />
      );
  }
}
