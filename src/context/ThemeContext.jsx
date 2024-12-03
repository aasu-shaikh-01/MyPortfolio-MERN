// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext();

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");
//   const [open, setOpen] = useState(false);
//   return (
//     <ThemeContext.Provider value={[theme, setTheme, open, setOpen]}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// const useTheme = () => useContext(ThemeContext);
// export { useTheme, ThemeProvider };
import { createContext, useContext, useState } from "react";

// Create Theme Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // States
  const [theme, setTheme] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, open, setOpen }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook
const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
