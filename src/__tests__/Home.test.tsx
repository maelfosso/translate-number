import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Home from '../components/Home';

describe('Home', () => {
  test("should display an empty form with input type number", async () => {
    act(() => {
      render(<Home />);
    });

    // const home = await findByTestId("home");
    const homeComponent = screen.getByTestId("home");
    expect(homeComponent).toBeInTheDocument();

    const form = screen.getByTestId("form");
    expect(form).toBeInTheDocument();

    const translator = screen.getByTestId("translator");
    expect(translator).toBeInTheDocument();

    expect(homeComponent.contains(form)).toBeTruthy();
    expect(homeComponent.contains(translator)).toBeTruthy();
  });

  test("should display error if input value is not valid", async () => {
    render(
      <Home />
    );

    const event = {
      target: { value: 23 }
    };

    const input = screen.getByTestId("input-number");
    expect(input).toBeInTheDocument()

    fireEvent.change(input, event);

    let error = document.querySelector('.error');
    expect(error).not.toBeInTheDocument();

    let invalidEvent = {
      target: { value: 19023 }
    }
    fireEvent.change(input, invalidEvent);
    error = screen.getByTestId("home-error");
    expect(error).toBeInTheDocument();

    invalidEvent = {
      target: { value: -1 }
    }
    fireEvent.change(input, invalidEvent);
    error = screen.getByTestId("home-error");
    expect(error).toBeInTheDocument();
  });

});
