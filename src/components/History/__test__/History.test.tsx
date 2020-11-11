import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import History from "../";
import { mockGene } from "./../../../__mock__/gene";

test("renders history elements", async () => {
  act(() => {
    render(<History genes={[mockGene]} onClick={jest.fn()} />);
  });
  expect(screen.getByTestId("history")).toBeInTheDocument();
  expect(screen.getAllByTestId("history-item").length).toBe(1);
});

test("should handle click and return the clicked item", async () => {
  const mockHandler = jest.fn();
  act(() => {
    render(<History genes={[mockGene]} onClick={mockHandler} />);
  });
  expect(screen.getByTestId("history")).toBeInTheDocument();
  expect(screen.getAllByTestId("history-item").length).toBe(1);

  act(() => {
    fireEvent.click(screen.getByTestId("history-item"));
  });

  expect(mockHandler).toHaveBeenCalledTimes(1);
  expect(mockHandler).toHaveBeenCalledWith(mockGene);
});

test("does not render history component where no elements are present", async () => {
  act(() => {
    render(<History genes={[]} onClick={jest.fn()} />);
  });
  expect(screen.queryByTestId("history")).not.toBeInTheDocument();
  expect(screen.queryAllByTestId("history-item").length).toBe(0);
});
