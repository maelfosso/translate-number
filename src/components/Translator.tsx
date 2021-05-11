import React from 'react';
import PropTypes from "prop-types";
import * as d3 from 'd3';
import useD3 from '../hooks/useD3';
import { drawDigits } from '../services/drawDigits';

type TranslatorProps = {
  number: number,
}

const Translator = ({ number }: TranslatorProps) => {
  const numberToDigits = (n: number) => Array.from(n.toString()).map(Number);

  const digits = numberToDigits(number);

  const ref = useD3((svg) => {
    const height: number = 150;
    const width: number = 150;

    const xAxis = d3.scaleLinear()
      .domain([0, width])
      .range([0, width])
    ;
    const yAxis = d3.scaleLinear()
      .domain([0, height])
      .range([0, height])
    ;

    svg
      .select('.vline')
      .append('line')
      .attr('x1', xAxis(74))
      .attr('y1', yAxis(0))
      .attr('x2', xAxis(76))
      .attr('y2', yAxis(150))
      .attr('class', 'line main-vline');

    drawDigits(svg, digits);

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
