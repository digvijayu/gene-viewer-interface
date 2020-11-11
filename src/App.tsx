import React, { useState } from "react";
import styled from "styled-components";

import { Gene } from "./types";
import * as genesApi from "./api/genes";
import GeneViewer from "./components/GeneViewer";
import GeneInfo from "./components/GeneInfo";
import History from "./components/History";
import SearchForm from "./components/SearchForm";
import SortingOptions, { SortingOption } from "./components/SortingOptions";
import useCachedGenes from "./hooks/useCachedGenes";
import { SpacerY } from "./utils/styledComponents";

const Error = styled.div`
  color: red;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

function App() {
  const [genesCache, setAppendNewGeneSearch] = useCachedGenes();
  const [inputValue, setInputValue] = React.useState("");
  const [displayGene, setDisplayGene] = React.useState<Gene | undefined>(
    genesCache.length > 0 ? genesCache[0] : undefined
  );
  const [sortingOption, setSortingOption] = useState<SortingOption>(
    "longestToShortest"
  );
  const [displayErrorMessage, setDisplayErrorMessage] = useState<boolean>(
    false
  );

  const handleOnInputChange = async (newVal: string) => {
    setDisplayErrorMessage(false);
    setInputValue(newVal);
    const cachedValue = genesCache.find((gene: Gene) => gene.id === newVal);
    if (cachedValue !== undefined) {
      setDisplayGene(cachedValue);
      setAppendNewGeneSearch(cachedValue);
    } else {
      try {
        const geneData = await genesApi.get(newVal);
        setAppendNewGeneSearch(geneData);
        setDisplayGene(geneData);
      } catch (error) {
        setDisplayErrorMessage(true);
        setDisplayGene(undefined);
      }
    }
  };

  const handleOnSortingOptionChange = (sortingOption: SortingOption) => {
    setSortingOption(sortingOption);
  };

  const handleOnHistorySelection = (gene: Gene) => {
    setDisplayErrorMessage(false);
    setAppendNewGeneSearch(gene);
    setDisplayGene(gene);
  };

  return (
    <div>
      <Row>
        <SearchForm
          label="Enter stable id of the Gene"
          value={inputValue}
          onSearch={handleOnInputChange}
        />
        <SpacerY />
        <SortingOptions
          value="longestToShortest"
          onChange={handleOnSortingOptionChange}
        />
      </Row>

      {displayGene && (
        <Row>
          <GeneInfo gene={displayGene} />
        </Row>
      )}

      <Row>
        <History genes={genesCache} onClick={handleOnHistorySelection} />
        <SpacerY />
        {displayGene && (
          <GeneViewer gene={displayGene} sortingOption={sortingOption} />
        )}
        {displayErrorMessage && (
          <Error data-testid="error">The entered stable id is invalid.</Error>
        )}
      </Row>
    </div>
  );
}

export default App;
