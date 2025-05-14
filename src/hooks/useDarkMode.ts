import { useEffect, useState } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    document.body.className = isDark ? 'dark' : '';
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  return {
    isDark,
    toggle: () => setIsDark((prev: boolean) => !prev)
,
  };
}
