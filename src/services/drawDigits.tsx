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
      case 2:
        drawTwo(g, index);

        break;
      case 3:
        drawThree(g, index);

        break;
      case 4:
        drawFour(g, index);

        break;
      default:
        break;
    }
  })
}

const drawOne = (svg: Selection<SVGGElement, unknown, null, undefined>, position: number) => {
  svg
    .append('line')
    .attr('class', `line one position-${position}`)
    .attr('x1', xAxis(75))
    .attr('y1', yAxis(0))
    .attr('x2', xAxis(75))
    .attr('y2', yAxis(25))
}

const drawTwo = (svg: Selection<SVGGElement, unknown, null, undefined>, position: number) => {
  switch (position) {
    case 0:
      svg
        .append('line')
        .attr('class', `line two position-${position}`)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(50))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(50))
      
      break;
    case 1:
      svg
        .append('line')
        .attr('class', `line two position-${position}`)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(50))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(50))
      
      break;
    case 2:
      svg
        .append('line')
        .attr('class', `line two position-${position}`)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(100))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(100))
      
      break;
    case 3:
      svg
        .append('line')
        .attr('class', `line two position-${position}`)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(100))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(100))
      
      break;
    default:
      break;
  }
}

const drawThree = (svg: Selection<SVGGElement, unknown, null, undefined>, position: number) => {
  switch (position) {
    case 0:
      svg
        .append('line')
        .attr('class', `line two position-${position}`)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(50))
      
      break;
    case 1:
      svg
        .append('line')
        .attr('class', `line two position-${position}`)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(50))
      
      break;
    case 2:
      svg
        .append('line')
        .attr('class', `line two position-${position}`)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(100))
      
      break;
    case 3:
      svg
        .append('line')
        .attr('class', `line two position-${position}`)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(100))
      
      break;
    default:
      break;
  }
}

const drawFour = (svg: Selection<SVGGElement, unknown, null, undefined>, position: number) => {
  switch (position) {
    case 0:
      svg
        .append('line')
        .attr('class', `line two position-${position}`)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(50))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(0))
      
      break;
    case 1:
      svg
        .append('line')
        .attr('class', `line two position-${position}`)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(50))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(0))
      
      break;
    case 2:
      svg
        .append('line')
        .attr('class', `line two position-${position}`)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(100))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(150))
      
      break;
    case 3:
      svg
        .append('line')
        .attr('class', `line two position-${position}`)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(100))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(150))
      
      break;
    default:
      break;
  }
}