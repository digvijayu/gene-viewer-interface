import React from "react";
import { render, screen, fireEvent, createEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { Gene } from "./types";
import * as geneApis from "./api/genes";
import App from "./App";
import { mockGene } from "./__mock__/gene";

test("renders the initial screen", () => {
  render(<App />);
  expect(screen.getByTestId("search-form")).toBeInTheDocument();
  expect(screen.queryByTestId("app-gene-viewer")).toBeFalsy();
});

test("renders app gene viewer when element is searched", async () => {
  jest.spyOn(geneApis, "get").mockImplementation(
    (_id: string): Promise<Gene> => {
      return Promise.resolve(mockGene);
    }
  );

  act(() => {
    render(<App />);
  });

  const input = screen.getByTestId("search-form_input");
  act(() => {
    fireEvent.change(
      input,
      createEvent("input", input, {
        target: { value: "ENSG00000133597" },
      })
    );
  });

  expect((input as HTMLInputElement).value).toEqual("ENSG00000133597");

  act(() => {
    fireEvent.click(screen.getByTestId("search-form_button"));
  });

  // screen.debug([screen.queryByTestId("app-gene-viewer")]);
  const geneViewer = await screen.findByTestId("app-gene-viewer");
  expect(geneViewer).toBeTruthy();
});
