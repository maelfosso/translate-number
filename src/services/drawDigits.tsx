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
      case 5:
        drawFive(g, index);

        break;
      case 6:
        drawSix(g, index);

        break;
      case 7:
        drawSeven(g, index);

        break;
      case 8:
        drawHeight(g, index);

        break;
      case 9:
        drawNine(g, index);

        break;
      default:
        break;
    }
  })
}

const drawOne = (svg: Selection<SVGGElement, unknown, null, undefined>, position: number) => {
  let g;
  g = svg
    .append('g')
    .attr('class', '_1')
  ;

  switch (position) {
    case 0:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(0))
      ;

      break;
    case 1:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(0))
      ;
      
      break;
    case 2:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(150))
      ;
      break;
    case 3:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(150))
      ;
      break;
    default:
      break;
  }
}

const drawTwo = (svg: Selection<SVGGElement, unknown, null, undefined>, position: number) => {
  let g;
  g = svg
    .append('g')
    .attr('class', '_2')
  ;

  switch (position) {
    case 0:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(50))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(50))
      
      break;
    case 1:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(50))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(50))
      
      break;
    case 2:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(100))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(100))
      
      break;
    case 3:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
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
  let g;
  g = svg
    .append('g')
    .attr('class', '_3')
  ;

  switch (position) {
    case 0:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(50))
      
      break;
    case 1:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(50))
      
      break;
    case 2:
      g
        .append('line')
        
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(100))
      
      break;
    case 3:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
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
  let g;
  g = svg
    .append('g')
    .attr('class', '_4')
  ;

  switch (position) {
    case 0:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(50))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(0))
      
      break;
    case 1:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(50))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(0))
      
      break;
    case 2:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(100))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(150))
      
      break;
    case 3:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(100))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(150))
      
      break;
    default:
      break;
  }
}

const drawFive = (svg: Selection<SVGGElement, unknown, null, undefined>, position: number) => {
  let g;
  g = svg
      .append('g')
      .attr('class', '_5')
    ;
  switch (position) {
    case 0:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(50))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(0))
      ;

      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(0))
      ;

      break;
    case 1:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(50))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(0))
      ;      

      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(0))
      ;
      
      break;
    case 2:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(100))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(150))
      ;            

      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(150))
      ;
      break;
    case 3:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(100))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(150))
      ;

      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(150))
      ;
      break;
    default:
      break;
  }
}

const drawSix = (svg: Selection<SVGGElement, unknown, null, undefined>, position: number) => {
  let g;
  g = svg
    .append('g')
    .attr('class', '_6')
  ;

  switch (position) {
    case 0:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(100))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(50))
      
      break;
    case 1:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(50))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(50))
      
      break;
    case 2:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(100))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(100))
      
      break;
    case 3:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(50))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(100))
      
      break;
    default:
      break;
  }
}

const drawSeven = (svg: Selection<SVGGElement, unknown, null, undefined>, position: number) => {
  let g;
  g = svg
    .append('g')
    .attr('class', '_7')
  ;

  switch (position) {
    case 0:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(100))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(50))
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(0))
      ;
      break;
    case 1:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(50))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(50))
      ;
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(0))
      ;
      break;
    case 2:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(100))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(100))
      ;            

      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(150))
      ;
      break;
    case 3:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(50))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(100))
      ;
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(150))
      ;
      break;
    default:
      break;
  }
}

const drawHeight = (svg: Selection<SVGGElement, unknown, null, undefined>, position: number) => {
  let g;
  g = svg
      .append('g')
      .attr('class', '_8')
    ;
  switch (position) {
    case 0:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(50))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(50))
      ;
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(100))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(50))
      break;
    case 1:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(50))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(50))
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(50))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(50))
      break;
    case 2:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(100))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(100))
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(100))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(100))
      break;
    case 3:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(100))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(100))
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(50))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(100))
      break;
    default:
      break;
  }
}

const drawNine = (svg: Selection<SVGGElement, unknown, null, undefined>, position: number) => {
  let g;
  g = svg
      .append('g')
      .attr('class', '_9')
    ;
  switch (position) {
    case 0:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(50))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(50))
      ;
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(100))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(50))
      g
        .append('line')
        .attr('class', 'line')
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(0))
      ;
      break;
    case 1:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(50))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(50))
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(50))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(50))
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(0))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(0))
      ;
      break;
    case 2:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(100))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(100))
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(100))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(100))           
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(100))
        .attr('y2', yAxis(150))
      ;
      break;
    case 3:
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(100))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(100))
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(50))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(100))
      g
        .append('line')
        .attr('stroke', `black`)
        .attr('stroke-width', 2)
        .attr('x1', xAxis(75))
        .attr('y1', yAxis(150))
        .attr('x2', xAxis(50))
        .attr('y2', yAxis(150))
      ;
      break;
    default:
      break;
  }
}
