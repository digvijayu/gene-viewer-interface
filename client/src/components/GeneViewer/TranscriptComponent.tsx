import React from "react";
import styled from "styled-components";

import { Transcript } from "./../../types";
import ExonComponent from "./ExonComponent";
import ExonLink from "./ExonLink";

type Props = {
  scale: (ptValue: number, shouldConsiderPosition: boolean) => number;
  transcript: Transcript;
};

const StyledTranscript = styled.div`
  height: 35px;
  position: relative;
`;

const TranscriptComponent = ({ scale, transcript }: Props) => {
  return (
    <StyledTranscript data-testid="transcript">
      {transcript.Exon.map((exon, index) => {
        const nextItem = transcript.Exon[index + 1];
        return (
          <React.Fragment key={exon.id}>
            <ExonComponent exon={exon} scale={scale} />
            {nextItem && (
              <ExonLink scale={scale} start={exon.end} end={nextItem.start} />
            )}
          </React.Fragment>
        );
      })}
    </StyledTranscript>
  );
};

export default TranscriptComponent;
