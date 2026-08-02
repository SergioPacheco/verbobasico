interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

const sizeStyles = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-3',
  lg: 'w-12 h-12 border-4',
};

export function Spinner({ size = 'md', color = 'border-spain-red', className = '' }: SpinnerProps) {
  return (
    <div
      className={`
        ${sizeStyles[size]}
        ${color}
        border-t-transparent
        rounded-full animate-spin
        ${className}
      `.trim()}
      role="status"
      aria-label="Carregando"
    >
      <span className="sr-only">Carregando...</span>
    </div>
  );
}
