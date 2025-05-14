// src/hooks/useFontSize.ts
import { useState, useEffect } from 'react';

export function useFontSize() {
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('fontSize');
    return saved ? parseInt(saved) : 16; // default: 16px
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--base-font-size', `${fontSize}px`);
    localStorage.setItem('fontSize', fontSize.toString());
  }, [fontSize]);

  return {
    fontSize,
    increase: () => setFontSize(prev => Math.min(prev + 2, 32)),
    decrease: () => setFontSize(prev => Math.max(prev - 2, 12)),
    reset: () => setFontSize(16),
  };
}
