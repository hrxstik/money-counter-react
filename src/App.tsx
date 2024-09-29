import './App.css';
import React, { ReactElement } from 'react';
import Content from './components/Content';
import Toggle from './components/Toggle';

export const ThemeContext = React.createContext({
  theme: 'light',
  setTheme: (theme: string) => {},
});
export const useTheme = () => React.useContext(ThemeContext);

function App(): ReactElement {
  const [theme, setTheme] = React.useState('light');
  return (
    <div className={`App ${theme}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Content />
        <Toggle />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
