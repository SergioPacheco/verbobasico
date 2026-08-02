import type { ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface LayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  showBack?: boolean;
  showFooter?: boolean;
  gradient?: 'default' | 'amber' | 'green' | 'blue' | 'purple';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const gradientStyles = {
  default: 'bg-gradient-to-br from-amber-50 via-white to-red-50',
  amber: 'bg-gradient-to-br from-amber-50 via-white to-orange-50',
  green: 'bg-gradient-to-br from-green-50 via-white to-emerald-50',
  blue: 'bg-gradient-to-br from-blue-50 via-white to-indigo-50',
  purple: 'bg-gradient-to-br from-purple-50 via-white to-pink-50',
};

const maxWidthStyles = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl',
};

const paddingStyles = {
  none: '',
  sm: 'px-3 py-4',
  md: 'px-4 py-6',
  lg: 'px-4 py-8',
};

export function Layout({
  children,
  title,
  subtitle,
  showBack = true,
  showFooter = true,
  gradient = 'default',
  maxWidth = '2xl',
  padding = 'md',
}: LayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${gradientStyles[gradient]}`}>
      <Header title={title} subtitle={subtitle} showBack={showBack} />
      <main className={`flex-1 ${maxWidthStyles[maxWidth]} mx-auto w-full ${paddingStyles[padding]}`}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
