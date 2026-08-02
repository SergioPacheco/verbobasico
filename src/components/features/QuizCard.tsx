import type { ReactNode } from 'react';
import { Card } from '../ui/Card';

interface QuizCardProps {
  question: ReactNode;
  hint?: string;
  feedback?: {
    type: 'success' | 'error';
    message: string;
    correctAnswer?: string;
  };
  children: ReactNode;
  className?: string;
}

export function QuizCard({ question, hint, feedback, children, className = '' }: QuizCardProps) {
  return (
    <Card
      variant={feedback ? (feedback.type === 'success' ? 'success' : 'error') : 'default'}
      className={`transition-all duration-300 ${className}`}
      animate
    >
      {/* Question */}
      <div className="mb-4">
        <div className="text-lg sm:text-xl text-gray-800 font-medium">{question}</div>
        {hint && <p className="mt-2 text-sm text-gray-500 italic">💡 {hint}</p>}
      </div>

      {/* Input area */}
      <div className="mb-4">{children}</div>

      {/* Feedback */}
      {feedback && (
        <div
          className={`
            p-3 rounded-xl text-center
            ${feedback.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
          `}
          role="alert"
          aria-live="polite"
        >
          <p className="font-medium">{feedback.message}</p>
          {feedback.correctAnswer && (
            <p className="mt-1 text-sm opacity-80">Resposta: {feedback.correctAnswer}</p>
          )}
        </div>
      )}
    </Card>
  );
}
