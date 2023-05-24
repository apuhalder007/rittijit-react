import { createContext } from "react";
export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
};
