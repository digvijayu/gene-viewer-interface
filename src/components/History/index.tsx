import React from "react";
import styled from "styled-components";

import { StyledLabel } from "./../../utils/styledComponents";
import { Gene } from "./../../types";

type Props = {
  genes: Gene[];
  onClick: (selectedGene: Gene) => void;
};

const Container = styled.div`
  background-color: #eee;
  text-align: center;
  padding: 10px;
`;

const GeneItem = styled.div`
  background-color: #eee;
  cursor: pointer;
  padding: 5px;

  &:hover {
    opacity: 0.7;
  }
`;

const GeneId = styled.div`
  color: #4286f4;
`;

const GeneName = styled.div`
  font-size: 9px;
`;

const StyledH3 = styled.h3`
  margin: 0;
`;

const History = ({ genes, onClick }: Props) => {
  if (genes.length < 1) return null;
  return (
    <Container data-testid="history">
      <StyledH3>History</StyledH3>
      <StyledLabel>(Most recent on top)</StyledLabel>
      {genes.map((gene) => {
        return (
          <GeneItem
            data-testid="history-item"
            key={gene.id}
            onClick={() => onClick(gene)}
          >
            <GeneId data-testid="history-id">{gene.id}</GeneId>
            <GeneName data-testid="history-name">{gene.display_name}</GeneName>
          </GeneItem>
        );
      })}
    </Container>
  );
};

export default History;
