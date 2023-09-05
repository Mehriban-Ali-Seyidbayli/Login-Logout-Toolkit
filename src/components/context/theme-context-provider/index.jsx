import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export default function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("light");

  const contextValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
}
