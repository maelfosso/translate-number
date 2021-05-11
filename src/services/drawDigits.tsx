import { Selection } from 'd3';
import { xAxis, yAxis } from '../components/d3-settings';

export const drawDigits = (svg: Selection<SVGGElement, unknown, null, undefined>, digits:number[]) => {
  const g = svg.append('g')
    .attr('class', 'digits');

  digits.forEach((d, index) => {
    switch (d) {
      case 0:
        
        break;
      case 1:
        drawOne(g, index);

        break;
      default:
        break;
    }
  })
}

const drawOne = (svg: Selection<SVGGElement, unknown, null, undefined>, position: number) => {
  const l = svg
    .append('line')
    .attr('class', `line one position-${position}`)
    .attr('x1', xAxis(75))
    .attr('y1', yAxis(0))
    .attr('x2', xAxis(75))
    .attr('y2', yAxis(25))
}