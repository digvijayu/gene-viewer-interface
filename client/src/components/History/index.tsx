import React from "react";
import styled from "styled-components";

import { Gene } from "./../../types";

type Props = {
  genes: Gene[];
  onClick: (selectedGene: Gene) => void;
};

const Container = styled.div`
  background-color: gray;
`;

const GeneItem = styled.div`
  background-color: gray;
`;

const GeneId = styled.div`
  color: white;
`;

const GeneName = styled.div`
  font-size: 9px;
`;

const History = ({ genes, onClick }: Props) => {
  if (genes.length < 1) return null;
  return (
    <Container data-testid="history">
      {genes.map((gene) => {
        return (
          <GeneItem
            data-testid="history-item"
            key={gene.id}
            onClick={() => onClick(gene)}
          >
            <GeneId>{gene.id}</GeneId>
            <GeneName>{gene.display_name}</GeneName>
          </GeneItem>
        );
      })}
    </Container>
  );
};

export default History;
