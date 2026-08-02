import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'highlight' | 'success' | 'error';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  animate?: boolean;
}

const variantStyles = {
  default: 'bg-white border border-gray-100',
  highlight: 'bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200',
  success: 'bg-green-50 border border-green-200',
  error: 'bg-red-50 border border-red-200',
};

const paddingStyles = {
  none: '',
  sm: 'p-3',
  md: 'p-4 sm:p-6',
  lg: 'p-6 sm:p-8',
};

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  animate = false,
  className = '',
  ...props
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl shadow-lg
        ${variantStyles[variant]}
        ${paddingStyles[padding]}
        ${animate ? 'animate-slide-up' : ''}
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
