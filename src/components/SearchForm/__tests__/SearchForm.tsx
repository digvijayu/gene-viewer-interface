import React from "react";
import { render, screen, fireEvent, createEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import SearchForm from "../";

test("renders search form", async () => {
  const searchHandler = jest.fn();
  act(() => {
    render(<SearchForm label="mock label" value="" onSearch={searchHandler} />);
  });
  expect(screen.getByTestId("search-form")).toBeInTheDocument();
  expect(screen.getByTestId("search-form_input")).toBeInTheDocument();
  expect(screen.getByTestId("search-form_label").textContent).toBe(
    "mock label"
  );
});

test("should return the search id on search click", async () => {
  const searchHandler = jest.fn();
  act(() => {
    render(<SearchForm label="mock label" value="" onSearch={searchHandler} />);
  });

  act(() => {
    const input = screen.getByTestId("search-form_input");
    fireEvent.change(
      input,
      createEvent("input", input, {
        target: { value: "ENSG00000133597" },
      })
    );
  });

  act(() => {
    fireEvent.click(screen.getByTestId("search-form_button"));
  });

  expect(searchHandler).toHaveBeenCalledTimes(1);
  expect(searchHandler).toHaveBeenCalledWith("ENSG00000133597");
});
