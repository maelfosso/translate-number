import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../components/Home';
import Translator from '../components/Translator';

const mapDigitLines = {
  "1": 1,
  "2": 1
};

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

  it ('contains the lines from each digits 9254', async () => {
    const number:number = 9254;
    render(<Translator number={number} />);

    const svg = document.querySelector('svg');
    const digits = Array.from(number.toString()).map(Number).reverse();

    expect(svg?.querySelector(`g._${digits[0]}`)).toBeDefined();
    expect(svg?.querySelector(`g._${digits[1]}`)).toBeDefined();
    expect(svg?.querySelector(`g._${digits[2]}`)).toBeDefined();
    expect(svg?.querySelector(`g._${digits[3]}`)).toBeDefined();
  });

  it ('contains the lines from each digits 1876', async () => {
    const number:number = 1876;
    render(<Translator number={number} />);

    const svg = document.querySelector('svg');
    const digits = Array.from(number.toString()).map(Number).reverse();

    expect(svg?.querySelector(`g._${digits[0]}`)).toBeDefined();
    expect(svg?.querySelector(`g._${digits[1]}`)).toBeDefined();
    expect(svg?.querySelector(`g._${digits[2]}`)).toBeDefined();
    expect(svg?.querySelector(`g._${digits[3]}`)).toBeDefined();
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
