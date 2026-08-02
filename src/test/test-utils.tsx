import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProgressProvider } from '../context';

interface WrapperProps {
  children: ReactNode;
}

function AllTheProviders({ children }: WrapperProps) {
  return (
    <BrowserRouter>
      <ProgressProvider>{children}</ProgressProvider>
    </BrowserRouter>
  );
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };
