import * as d3 from 'd3';

const height: number = 150;
const width: number = 150;

export const xAxis = d3.scaleLinear()
  .domain([0, width])
  .range([10, width-10-10])
;
export const yAxis = d3.scaleLinear()
  .domain([0, height])
  .range([10, height-10-10])
;