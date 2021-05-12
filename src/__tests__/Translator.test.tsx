import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../components/Home';
import Translator from '../components/Translator';

describe('Translator', () => {
  it ('contains some html elements', async () => {
    render(<Translator number={0} />);

    const svg = document.querySelectorAll('svg');
    expect(svg.length).toBe(1);

    const mainSVG = svg[0];
    const lineChildren = mainSVG.querySelectorAll("line")
    expect(lineChildren.length).toBe(1);
    
    const btn = document.querySelectorAll('button');
    expect(btn.length).toBe(1);

    const btnElement = screen.getByText(/Download image/i);
    expect(btnElement).toBeInTheDocument();

    const canvas = document.querySelectorAll('canvas');
    expect(canvas.length).toBe(1);
  });

});

describe('Translator according to Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it ('display a figure if number is valid', async () => {

    const event = {
      target: { value: 23 }
    };

    const input = screen.getByTestId("input-number");
    expect(input).toBeInTheDocument()

    fireEvent.change(input, event);

    let error = document.querySelector('.error');
    expect(error).not.toBeInTheDocument();

    const svg = document.querySelectorAll('svg');
    expect(svg.length).toBe(1);

    const mainSVG = svg[0];
    const lineChildren = mainSVG.querySelectorAll('line');
    expect(lineChildren.length > 1).toBeTruthy();
  });

  
  it ('display a figure of 0 if the number is invalid', async () => {

    const event = {
      target: { value: 14758 }
    };

    const input = screen.getByTestId("input-number");
    expect(input).toBeInTheDocument()

    fireEvent.change(input, event);

    let error = document.querySelector('.error');
    expect(error).toBeInTheDocument();

    const svg = document.querySelectorAll('svg');
    expect(svg.length).toBe(1);

    const mainSVG = svg[0];
    const lineChildren = mainSVG.querySelectorAll('line');
    expect(lineChildren.length > 1).toBeFalsy();
    expect(lineChildren.length).toBe(1);
  });
})
