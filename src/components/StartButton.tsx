import React from 'react';

type props = {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setIsCounting: React.Dispatch<React.SetStateAction<boolean>>;
  isCounting: boolean;
  salary: number;
};
const StartButton: React.FC<props> = ({ setCounter, setIsCounting, isCounting, salary }) => {
  const startCounting = () => {
    setInterval(addMoney, 100);
    setIsCounting(true);
    function addMoney() {
      setCounter((prev) => prev + salary / 36000);
    }
  };

  return (
    <div className={`button ${isCounting ? 'disabledButton' : ''}`}>
      <button onClick={() => startCounting()} disabled={isCounting}>
        Запуск счетчика
      </button>
    </div>
  );
};

export default StartButton;
