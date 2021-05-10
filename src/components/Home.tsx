import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Translator from './Translator';

const Home = () => {
  const [number, setNumber] = useState<number>(0);

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setNumber(+event.currentTarget.value);
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="number">Enter the number</label>
          <input id="number" type="text" onChange={onChange}/>
        </div>
      </form>
      <Translator number={number} />
    </div>
  );
}

export default Home;
