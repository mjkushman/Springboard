import React from "react";
import CounterReadOnly from "./CounterReadOnly";
import CounterReadWrite from "./CounterReadWrite";
import ThemeContext from "./ThemeContext";

function App() {
  
  const [themeColor, setThemeColor] = useState('purple')
  const toggleTheme =() => {
    setThemeColor(color => (color === 'purple' ? 'teal' : 'purple'))
  }
  return (
    <ThemeContext.Provider value='magenta'>
      <div>
        <CounterReadOnly />
        <button onClick={toggleTheme}>Change the theme</button>
        {/* <CounterReadWrite /> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
