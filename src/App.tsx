import { useState } from 'react';
import type { Situation } from './types';
import { useProgress } from './hooks';
import {
  HomePage,
  TrainingPage,
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
  FullPage,
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
  const [page, setPage] = useState<Page>({ type: 'conjugation' });
  const progressHook = useProgress();

  const handleNavigate = (pageId: string) => {
    switch (pageId) {
      case 'home':
        setPage({ type: 'home' });
        break;
      case 'training':
        setPage({ type: 'training' });
        break;
      case 'conjugation':
        setPage({ type: 'conjugation' });
        break;
      case 'listening':
        setPage({ type: 'listening' });
        break;
      case 'speed':
        setPage({ type: 'speed' });
        break;
      case 'dialogue':
        setPage({ type: 'dialogue' });
        break;
      case 'cloze':
        setPage({ type: 'cloze' });
        break;
      case 'transform':
        setPage({ type: 'transform' });
        break;
      case 'idioms':
        setPage({ type: 'idioms' });
        break;
      case 'gotchas':
        setPage({ type: 'gotchas' });
        break;
      case 'lyrics':
        setPage({ type: 'lyrics' });
        break;
      case 'vocabulary':
        setPage({ type: 'vocabulary' });
        break;
      case 'mistakes':
        setPage({ type: 'mistakes' });
        break;
    }
  };

  const goBack = () => setPage({ type: 'conjugation' });

  switch (page.type) {
    case 'training':
      return (
        <TrainingPage
          situation={page.situation}
          phraseIds={page.phraseIds}
          onBack={goBack}
          onNavigate={handleNavigate}
          progressHook={progressHook}
        />
      );
    case 'conjugation':
      return <FullPage onNavigate={handleNavigate} />;
    case 'mistakes':
      return (
        <MistakesPage
          progress={progressHook.progress}
          onBack={goBack}
          onNavigate={handleNavigate}
          onClearMistakes={progressHook.clearMistakes}
          onPracticeMistakes={() => {
            const ids = progressHook.progress.mistakes.map((m) => m.phraseId);
            setPage({ type: 'training', phraseIds: [...new Set(ids)] });
          }}
        />
      );
    case 'gotchas':
      return <GotchasPage onBack={goBack} onNavigate={handleNavigate} />;
    case 'lyrics':
      return <LyricsPage onBack={goBack} onNavigate={handleNavigate} />;
    case 'vocabulary':
      return <VocabularyPage onBack={goBack} onNavigate={handleNavigate} />;
    case 'listening':
      return <ListeningPage onBack={goBack} onNavigate={handleNavigate} />;
    case 'speed':
      return <SpeedDrillPage onBack={goBack} onNavigate={handleNavigate} />;
    case 'dialogue':
      return <DialoguePage onBack={goBack} onNavigate={handleNavigate} />;
    case 'cloze':
      return <ClozePage onBack={goBack} onNavigate={handleNavigate} />;
    case 'transform':
      return <TransformPage onBack={goBack} onNavigate={handleNavigate} />;
    case 'idioms':
      return <IdiomsPage onBack={goBack} onNavigate={handleNavigate} />;
    default:
      return (
        <HomePage
          progress={progressHook.progress}
          onNavigate={handleNavigate}
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
