import React, { createRef, RefObject, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Selection } from 'd3';

export type RenderFnType = (svg: Selection<SVGSVGElement | null, unknown, null, undefined>) => void;

const useD3 = (renderFn: RenderFnType, dependencies: [number[] | null]) => {
  const ref = useRef<SVGSVGElement | null>(null);

  React.useLayoutEffect(() => {
    renderFn(d3.select(ref.current));
    return () => {};
  }, dependencies);
  
  return ref;
}

export default useD3;
