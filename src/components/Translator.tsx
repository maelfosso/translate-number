import React from 'react';
import PropTypes from "prop-types";
import * as d3 from 'd3';
import useD3 from '../hooks/useD3';
import { drawDigits } from '../services/drawDigits';
import { xAxis, yAxis } from './d3-settings';

type TranslatorProps = {
  number: number,
}

const Translator = ({ number }: TranslatorProps) => {
  const numberToDigits = (n: number) => Array.from(n.toString()).map(Number).reverse();

  const digits = numberToDigits(number);

  const ref = useD3((svg) => {
    console.log(digits);

    svg.selectAll("*").remove();

    const g = svg
      .append('g')
      .attr('transform', `translate(10, 10)`);
    ;

    g
      .append('g')
      .attr('class', '.vline')
      .append('line')
      .attr('x1', xAxis(75))
      .attr('y1', yAxis(0))
      .attr('x2', xAxis(75))
      .attr('y2', yAxis(150))
      .attr('class', 'line main-vline');

    drawDigits(g, digits);

  }, [digits]);
  
  
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
