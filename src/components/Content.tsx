import React from 'react';
import Currency from './Currency';
import StartButton from './StartButton';
import StopButton from './StopButton';
import { IntervalProvider } from './IntervalContext';

const Content: React.FC = () => {
  const [inputText, setInputText] = React.useState('');
  const [counter, setCounter] = React.useState(0);
  const [currency, setCurrency] = React.useState('₽');
  const [isCounting, setIsCounting] = React.useState(false);

  const buttonProps = {
    setCounter,
    setIsCounting,
    isCounting,
  };
  const salary: number = !isNaN(Number(inputText)) ? Number(inputText) : 0;

  return (
    <div className="content">
      <h1>Счетчик вашей зарплаты</h1>
      <article>
        <p>Здесь вы можете наглядно увидеть, насколько быстро вы зарабатываете деньги</p>
      </article>

      <input
        id="salary"
        onChange={(event) => setInputText(event.target.value)}
        value={inputText}
        type="text"
        placeholder="Введите оклад в час"
      />

      <p>Выберите валюту</p>
      <Currency setCurrency={setCurrency} />
      <div className="flex gap-3">
        <IntervalProvider>
          <StartButton {...buttonProps} salary={salary} />
          <StopButton {...buttonProps} />
        </IntervalProvider>
      </div>
      {counter !== 0 && (
        <div className="display">
          <p className="money">{`${counter.toFixed(2)} ${currency}`}</p>
        </div>
      )}
    </div>
  );
};

export default Content;
