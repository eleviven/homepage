import { useEffect, useState, createContext, useContext } from "react";

const ThemeContext = createContext(null);

export const Modes = {
  dark: "dark",
  light: "light",
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(null);

  const toggleTheme = () => {
    if (theme === Modes.dark) {
      setMode(Modes.light);
    } else {
      setMode(Modes.dark);
    }
  };

  const setMode = (mode) => {
    document.documentElement.classList = mode;
    if (mode === Modes.light) {
      document.documentElement.removeAttribute("class");
    }
    localStorage.setItem("mode", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    setMode(mode || Modes.dark);
  }, []);
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
