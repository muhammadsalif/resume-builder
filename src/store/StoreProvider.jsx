import React from 'react';
import { useResumeStore } from './resumeStore';

// Initialize the store
useResumeStore.getState();

export function StoreProvider({ children }) {
  return <>{children}</>;
}