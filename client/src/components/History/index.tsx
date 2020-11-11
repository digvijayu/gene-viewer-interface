import React from "react";
import styled from "styled-components";

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

const History = ({ genes, onClick }: Props) => {
  if (genes.length < 1) return null;
  return (
    <Container data-testid="history">
      <h3>History</h3>
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
