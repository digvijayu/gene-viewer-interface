import React from "react";
import styled from "styled-components";

type Props = {
  scale: (ptValue: number, shouldConsiderPosition: boolean) => number;
  start: number;
  end: number;
};

const ExonLink = ({ scale, start, end }: Props) => {
  const left = scale(start, true);
  const length = scale(end - start, false);
  return <StyledLink data-testid="exon-link" left={left} length={length} />;
};

const StyledLink = styled.div<{ left: number; length: number }>`
  position: absolute;
  top: 15px;
  left: ${({ left }) => left}px;
  width: ${({ length }) => length}px;
  border-top: 1px solid blue;
`;

export default ExonLink;
