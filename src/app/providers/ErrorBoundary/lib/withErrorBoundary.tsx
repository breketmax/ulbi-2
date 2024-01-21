import React from 'react';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

export const withErrorBoundary = (children: React.ReactNode) => (
  <ErrorBoundary>
    {children}
  </ErrorBoundary>
);
