import React from 'react';
import PropTypes from "prop-types";
import useD3 from '../hooks/useD3';

type TranslatorProps = {
  number: number;
}

const Translator = ({ number }: TranslatorProps) => {
  const ref = useD3((svg) => {
    const height: number = 50;
    const width: number = 50;

  }, [[number]]);
  
  return (
    <div>
      <div>Number to translate : { number }</div>
      <div>
        <div>Translation</div>
        <div>
          <svg 
            ref={ref}
            style={{
              height: 150,
              width: 150,
              background: 'red'
            }}
          >
            <g className="g">
              <g className="vline"></g>
              <g className="hline-1"></g>
              <g className="hline-2"></g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

Translator.propTypes = {
  number: PropTypes.number.isRequired,
}

export default Translator;
