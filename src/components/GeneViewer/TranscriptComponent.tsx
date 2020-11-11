import React from "react";
import styled from "styled-components";

import { Transcript, Exon } from "./../../types";
import ExonComponent from "./ExonComponent";
import ExonLink from "./ExonLink";

type Props = {
  scale: (ptValue: number, shouldConsiderPosition: boolean) => number;
  transcript: Transcript;
  color: string;
};

const StyledTranscript = styled.div`
  height: 35px;
  position: relative;
`;

const exonSortingFn = (exonA: Exon, exonB: Exon): number =>
  exonA.start - exonB.start;

const TranscriptComponent = ({ scale, transcript, color }: Props) => {
  return (
    <StyledTranscript
      data-testid="transcript"
      data-id={transcript.id}
      title={transcript.display_name}
    >
      {transcript.Exon.sort(exonSortingFn).map((exon, index) => {
        const nextItem = transcript.Exon[index + 1];
        return (
          <React.Fragment key={exon.id}>
            <ExonComponent exon={exon} scale={scale} color={color} />
            {nextItem && (
              <ExonLink
                scale={scale}
                start={exon.end}
                end={nextItem.start}
                color={color}
              />
            )}
          </React.Fragment>
        );
      })}
    </StyledTranscript>
  );
};

export default TranscriptComponent;
