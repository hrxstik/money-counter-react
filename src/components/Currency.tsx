import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

type props = {
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
};

const Currency: React.FC<props> = ({ setCurrency }) => {
  return (
    <div className="currency">
      <input
        type="radio"
        id="rubles"
        name="currency"
        value="₽"
        defaultChecked
        onClick={() => setCurrency('₽')}
      />
      <label htmlFor="rubles">&#8381;</label>

      <input type="radio" id="dollars" name="currency" value="$" onClick={() => setCurrency('$')} />
      <label htmlFor="dollars" dangerouslySetInnerHTML={{ __html: '&dollar;' }} />

      <input type="radio" id="euro" name="currency" value="€" onClick={() => setCurrency('€')} />
      <label htmlFor="euro">&euro;</label>
    </div>
  );
};

export default Currency;
