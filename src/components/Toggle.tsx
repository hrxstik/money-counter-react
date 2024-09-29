import React, { Dispatch, SetStateAction } from 'react';
import { useTheme } from '../App';

const Toggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <button className="button" onClick={() => toggleTheme()}>
        Свет
      </button>
    </div>
  );
};

export default Toggle;
