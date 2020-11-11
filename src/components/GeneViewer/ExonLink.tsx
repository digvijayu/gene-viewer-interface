import React from "react";
import styled from "styled-components";

type Props = {
  scale: (ptValue: number, shouldConsiderPosition: boolean) => number;
  start: number;
  end: number;
  color: string;
};

const ExonLink = ({ scale, start, end, color }: Props) => {
  const left = scale(start, true);
  const length = scale(end - start, false);
  return (
    <StyledLink
      data-testid="exon-link"
      left={left}
      length={length}
      color={color}
    />
  );
};

const StyledLink = styled.div<{ left: number; length: number }>`
  position: absolute;
  top: 15px;
  left: ${({ left }) => left}px;
  width: ${({ length }) => length}px;
  border-top: 1px solid ${({ color }) => color};
`;

export default ExonLink;
