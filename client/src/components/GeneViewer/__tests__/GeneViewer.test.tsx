import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import GeneViewer from "../";
import { mockGene } from "./../../../__mock__/gene";

test("renders gene viewer elements", async () => {
  act(() => {
    render(<GeneViewer gene={mockGene} />);
  });
  expect(screen.getByTestId("app-gene-viewer")).toBeInTheDocument();
  expect(screen.getAllByTestId("transcript").length).toBe(2);
  expect(screen.getAllByTestId("exon").length).toBe(39);
});
