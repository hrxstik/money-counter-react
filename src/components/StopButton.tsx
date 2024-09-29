import React from 'react';

type props = {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setIsCounting: React.Dispatch<React.SetStateAction<boolean>>;
  isCounting: boolean;
};

const StopButton: React.FC<props> = ({ setCounter, setIsCounting, isCounting }) => {
  const stopCounting = () => {
    setCounter(0);
    setIsCounting(false);
  };
  return (
    <div className={`button ${!isCounting ? 'disabledButton' : ''}`}>
      <button onClick={() => stopCounting()} disabled={!isCounting}>
        Остановить счетчик
      </button>
    </div>
  );
};

export default StopButton;
