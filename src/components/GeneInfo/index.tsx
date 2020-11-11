import React from "react";
import styled from "styled-components";

import { Gene } from "./../../types";
import { StyledLabel } from "./../../utils/styledComponents";

type Props = {
  gene: Gene;
};

const StyledBox = styled.div`
  padding: 0 10px;
`;

const GeneInfo: React.FunctionComponent<Props> = ({ gene }: Props) => {
  return (
    <>
      <StyledBox>
        <StyledLabel>Id</StyledLabel>
        <div>{gene.id}</div>
      </StyledBox>
      <StyledBox>
        <StyledLabel>Display Name</StyledLabel>
        <div>{gene.display_name}</div>
      </StyledBox>
      <StyledBox>
        <StyledLabel>Description</StyledLabel>
        <div>{gene.description}</div>
      </StyledBox>
    </>
  );
};

export default GeneInfo;
