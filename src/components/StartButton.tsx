import React from 'react';

type props = {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setIsCounting: React.Dispatch<React.SetStateAction<boolean>>;
  isCounting: boolean;
  salary: number;
};
const StartButton: React.FC<props> = ({ setCounter, setIsCounting, isCounting, salary }) => {
  const startCounting = () => {
    setIsCounting(true);
  };
  React.useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isCounting) {
      interval = setInterval(() => {
        setCounter((prev) => prev + salary / 36000);
      }, 100);
      return () => clearInterval(interval);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isCounting]);

  return (
    <div className={`button ${isCounting || !salary ? 'disabledButton' : ''}`}>
      <button onClick={() => startCounting()} disabled={isCounting || !salary}>
        Запуск счетчика
      </button>
    </div>
  );
};

export default StartButton;
