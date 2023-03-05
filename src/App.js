import { createContext, useState } from "react";

import Switch from "react-switch";

import { Header } from "./assets/components/Header";
import { Meme } from "./assets/components/Meme";

export const ThemeContext = createContext(null);

function App() {
  const [theme, seTheme] = useState("light");

  const toggleTheme = () => {
    seTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="container" id={theme}>
        <Header />
        <Meme />
        <div className="switch">
          <Switch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
