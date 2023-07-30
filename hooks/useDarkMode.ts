// hooks/useDarkMode.ts
import { useState } from 'react';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark((prevState) => !prevState);
  };

  return { isDark, toggleDarkMode };
};
