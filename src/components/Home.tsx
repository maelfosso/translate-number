import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Translator from './Translator';

const Home = () => {
  const [number, setNumber] = useState<number>(0);
  const [error, setError] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (0 <= +value && +value < 10000) {
      setNumber(+value);
      setError("");
    } else {
      setError("Please, a number between 0 and 9999")
      setNumber(0);
    }
  }

  return (
    <div>
      <nav>
        <h1>Number Translator</h1>
      </nav>
      <div>
        <h2>Input</h2>
        <form>
          <div>
            <label htmlFor="number">Enter the number</label>
            <input id="number" type="text" onChange={onChange}/>
            {error && <div className="error">{error}</div> }
          </div>
        </form>

      </div>
      <Translator number={number} />
    </div>
  );
}

export default Home;
