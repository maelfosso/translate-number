import { render } from '@testing-library/react';
import React, { useState } from 'react';

const Home = () => {
  const [number, setNumber] = useState<number>();

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
      <div>
        Number to convert: { number }
      </div>
    </div>
  );
}

export default Home;
