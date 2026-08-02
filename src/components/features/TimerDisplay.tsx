import { ProgressBar } from '../ui/ProgressBar';

interface TimerDisplayProps {
  timeLeft: number;
  totalTime: number;
  format?: 'seconds' | 'minutes';
  showBar?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function TimerDisplay({
  timeLeft,
  totalTime,
  format = 'seconds',
  showBar = true,
  size = 'md',
}: TimerDisplayProps) {
  const percentage = (timeLeft / totalTime) * 100;

  const getColor = () => {
    if (percentage > 50) return '#22c55e'; // green
    if (percentage > 25) return '#f59e0b'; // amber
    return '#ef4444'; // red
  };

  const formatTime = (seconds: number) => {
    if (format === 'minutes') {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    return `${seconds}s`;
  };

  const sizeStyles = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  return (
    <div className="text-center">
      <div
        className={`${sizeStyles[size]} font-mono font-bold transition-colors duration-300`}
        style={{ color: getColor() }}
        aria-live="polite"
        aria-atomic="true"
      >
        {formatTime(timeLeft)}
      </div>
      {showBar && (
        <div className="mt-2">
          <ProgressBar value={timeLeft} max={totalTime} color={getColor()} size="sm" />
        </div>
      )}
    </div>
  );
}
