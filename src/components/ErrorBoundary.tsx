import { Component, type ReactNode, type ErrorInfo } from 'react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log para serviço de monitoramento (ex: Sentry)
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null });
  };

  handleReload = (): void => {
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-amber-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full text-center" animate>
            <div className="text-6xl mb-4">😵</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">¡Ay, algo salió mal!</h1>
            <p className="text-gray-600 mb-4">
              Ocorreu um erro inesperado. Não se preocupe, isso acontece às vezes.
            </p>

            {import.meta.env.DEV && this.state.error && (
              <details className="mb-4 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  Detalhes do erro (desenvolvimento)
                </summary>
                <pre className="mt-2 p-3 bg-gray-100 rounded-lg text-xs text-red-600 overflow-auto max-h-40">
                  {this.state.error.message}
                  {'\n'}
                  {this.state.error.stack}
                </pre>
              </details>
            )}

            <div className="flex gap-3 justify-center">
              <Button variant="secondary" onClick={this.handleReset}>
                Tentar novamente
              </Button>
              <Button onClick={this.handleReload}>Recarregar página</Button>
            </div>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook para usar com functional components que precisam de reset programático
export function useErrorBoundary() {
  const resetErrorBoundary = () => {
    // Força um re-render que reseta o error boundary mais próximo
    window.dispatchEvent(new Event('reset-error-boundary'));
  };

  return { resetErrorBoundary };
}
