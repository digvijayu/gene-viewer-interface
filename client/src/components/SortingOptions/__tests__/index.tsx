import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import SortingOptions from "../";

test("renders sorting form", async () => {
  const changeHandler = jest.fn();
  act(() => {
    render(
      <SortingOptions value="longestToShortest" onChange={changeHandler} />
    );
  });
  expect(screen.getByTestId("sort-form")).toBeInTheDocument();
  expect(
    screen.getByTestId("sort-option_longestToShortest")
  ).toBeInTheDocument();
  expect(
    screen.getByTestId("sort-option_shortestToLongest")
  ).toBeInTheDocument();
  expect(
    (screen.getByTestId("sort-option_longestToShortest") as HTMLInputElement)
      .checked
  ).toBe(true);
  expect(
    (screen.getByTestId("sort-option_shortestToLongest") as HTMLInputElement)
      .checked
  ).toBe(false);
});

test("should return the selected option on change", async () => {
  const changeHandler = jest.fn();
  act(() => {
    render(
      <SortingOptions value="longestToShortest" onChange={changeHandler} />
    );
  });

  expect(
    (screen.getByTestId("sort-option_longestToShortest") as HTMLInputElement)
      .checked
  ).toBe(true);

  expect(
    (screen.getByTestId("sort-option_shortestToLongest") as HTMLInputElement)
      .checked
  ).toBe(false);

  act(() => {
    const input = screen.getByTestId("sort-option_shortestToLongest");
    fireEvent.click(input);
  });

  expect(
    (screen.getByTestId("sort-option_longestToShortest") as HTMLInputElement)
      .checked
  ).toBe(false);

  expect(
    (screen.getByTestId("sort-option_shortestToLongest") as HTMLInputElement)
      .checked
  ).toBe(true);
});
