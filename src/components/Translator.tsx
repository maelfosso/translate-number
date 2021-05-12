import React, { useRef } from 'react';
import PropTypes, { func } from "prop-types";
import Canvg from 'canvg';
import useD3 from '../hooks/useD3';
import { drawDigits } from '../services/drawDigits';
import { xAxis, yAxis } from './d3-settings';

type TranslatorProps = {
  number: number,
}

const Translator = ({ number }: TranslatorProps) => {
  const numberToDigits = (n: number) => Array.from(n.toString()).map(Number).reverse();

  const digits = numberToDigits(number);
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const ref = useD3((svg) => {
    console.log(digits);

    svg.selectAll("*").remove();

    const g = svg
      .append('g')
      .attr('transform', `translate(10, 10)`);
    ;

    g
      .append('g')
      .attr('class', '0')
      .append('line')
      .attr('stroke', `black`)
      .attr('stroke-width', 2)
      .attr('x1', xAxis(75))
      .attr('y1', yAxis(0))
      .attr('x2', xAxis(75))
      .attr('y2', yAxis(150));

    drawDigits(g, digits);

  }, [digits]);
  
  const downloadImage = async () => {
    console.log('downloadImage');

    let canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const data = (new XMLSerializer()).serializeToString(ref.current as SVGSVGElement);
    console.log(data);
    const domURL = window.URL || window.webkitURL || window;

    const image = new Image();

    const svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
    const url = domURL.createObjectURL(svgBlob);

    image.onload = function () {
      ctx?.drawImage(image, 0, 0);
      domURL.revokeObjectURL(url);
  
      const imageURI = canvas?.toDataURL('image/png')
          .replace('image/png', 'image/octet-stream');
      
      console.log('image.onload ', imageURI);

      const evt = new MouseEvent('click', {
        view: window,
        bubbles: false,
        cancelable: true
      });
    
      const a = document.createElement('a');
      a.setAttribute('download', `${number.toString()}.png`);
      a.setAttribute('href', imageURI as string);
      a.setAttribute('target', '_blank');
    
      a.dispatchEvent(evt);
    
    };
    image.src = url;

  }

  return (
    <div data-testid="translator">
      <h2>Translation</h2>
      <div>
        <strong>Number to translate</strong> : { number }
      </div>
      <div>
        <div>
          <svg 
            ref={ref}
            style={{
              height: 150,
              width: 150,
              background: "white"
            }}
          >
          </svg>
          <canvas id="canvas" ref={canvasRef} style={{ display: 'none'}}></canvas>
        </div>
        <div>
          <button type="button" onClick={downloadImage}>Download image</button>
        </div>
      </div>
    </div>
  )
}

Translator.propTypes = {
  number: PropTypes.number.isRequired,
}

export default Translator;
