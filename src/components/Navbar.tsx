// src/components/Navbar.tsx
import { useDarkMode } from '../hooks/useDarkMode';
import { useFontSize } from '../hooks/useFontSize';
import { useTranslation } from 'react-i18next';

export function Navbar() {
  const { isDark, toggle } = useDarkMode();
  const {  fontSize, increase, decrease, reset } = useFontSize();
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav style={styles.nav}>
      {/* Tamni mod */}
      <button onClick={toggle}>
        {isDark ? '🌞 Light' : '🌙 Dark'}
      </button>

      {/* Font dugmići */}
      <div>
        <button onClick={decrease}>A−</button>
        <button onClick={reset}>A</button>
        <button onClick={increase}>A+</button>
        <p style={{ fontSize: '0.85rem' }}>Font: {fontSize}px</p>
      </div>

      {/* Izbor jezika */}
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={i18n.language}
      >
        <option value="en">English</option>
        <option value="sr">Srpski</option>
        <option value="de">Deutsch</option>
      </select>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    borderBottom: '1px solid #ccc',
  } as React.CSSProperties,
}