import React from "react";
import styled from "styled-components";

import { Exon } from "./../../types";

type Props = {
  scale: (ptValue: number, shouldConsiderPosition: boolean) => number;
  exon: Exon;
  color: string;
};

const ExonComponent = ({ scale, exon, color }: Props) => {
  const left = scale(exon.start, true);
  const length = scale(exon.end - exon.start, false);
  return (
    <StyledExonBox
      data-testid="exon"
      left={left}
      length={length}
      color={color}
    />
  );
};

const StyledExonBox = styled.div<{ left: number; length: number }>`
  position: absolute;
  left: ${({ left }) => left}px;
  width: ${({ length }) => length}px;
  height: 30px;
  background-color: ${({ color }) => color};
  margin: auto 0;
`;

export default ExonComponent;
