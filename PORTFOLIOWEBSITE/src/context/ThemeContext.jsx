import { createContext, useState, useEffect } from 'react';

// Create context with default values
export const ThemeContext = createContext({
  darkMode: true,
  setDarkMode: () => {},
});

export default function ThemeProvider({ children }) {
  // Initialize state with localStorage or OS preference
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolioDarkMode');
      if (saved !== null) return JSON.parse(saved);
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Update HTML class
    document.documentElement.classList.toggle('dark', darkMode);

    // Save preference
    localStorage.setItem('portfolioDarkMode', JSON.stringify(darkMode));

    // Update color-scheme
    document.documentElement.style.setProperty(
      'color-scheme',
      darkMode ? 'dark' : 'light'
    );
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
