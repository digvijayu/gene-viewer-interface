import React from "react";
import styled from "styled-components";

import TranscriptComponent from "./TranscriptComponent";
import { Gene, Transcript } from "./../../types";
import { SortingOption } from "./../SortingOptions";
import { getRandomColor } from "./../../utils/color";

type Props = {
  gene: Gene;
  sortingOption: SortingOption;
};

const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 700;

const Canvass = styled.div`
  position: relative;
  height: ${CANVAS_HEIGHT}px;
  width: ${CANVAS_WIDTH}px;
`;

const GeneViewer: React.FunctionComponent<Props> = ({
  gene,
  sortingOption,
}: Props) => {
  const scale = (ptValue: number, shouldConsiderPosition: boolean): number =>
    (CANVAS_WIDTH / (gene.end - gene.start)) *
    (shouldConsiderPosition ? ptValue - gene.start : ptValue);

  const sortingFunction = (a: Transcript, b: Transcript) =>
    sortingOption === "longestToShortest"
      ? b.end - b.start - (a.end - a.start)
      : a.end - a.start - (b.end - b.start);

  return (
    <Canvass data-testid="app-gene-viewer">
      {gene.Transcript.sort(sortingFunction).map(
        (transcript: Transcript, index: number) => {
          const props = {
            scale,
            transcript,
            color: getRandomColor(index),
          };
          return <TranscriptComponent key={transcript.id} {...props} />;
        }
      )}
    </Canvass>
  );
};

export default GeneViewer;
