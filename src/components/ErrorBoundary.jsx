import React from 'react';
import ErrorFallback from '../pages/ErrorFallbackPage';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(_error, _errorInfo) {
    // You can also log the error to an error reporting service
    // Might expose sensitive information!
    console.error("Caught an error in Error Boundary: error, errorInfo");
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
