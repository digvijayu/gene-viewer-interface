import React, { useState } from "react";
import styled from "styled-components";

import { Gene } from "./types";
import * as genesApi from "./api/genes";
import GeneViewer from "./components/GeneViewer";
import History from "./components/History";
import SearchForm from "./components/SearchForm";
import SortingOptions, { SortingOption } from "./components/SortingOptions";
import useCachedGenes from "./hooks/useCachedGenes";

const Error = styled.div`
  color: red;
`;

function App() {
  const [genesCache, setAppendNewGeneSearch] = useCachedGenes();
  const [inputValue, setInputValue] = React.useState("");
  const [displayGene, setDisplayGene] = React.useState<Gene | undefined>(
    genesCache.length > 0 ? genesCache[genesCache.length - 1] : undefined
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
    setAppendNewGeneSearch(gene);
    setDisplayGene(gene);
  };

  return (
    <div>
      <SearchForm
        label="enter gene id"
        value={inputValue}
        onSearch={handleOnInputChange}
      />
      <History genes={genesCache} onClick={handleOnHistorySelection} />
      <SortingOptions
        value="longestToShortest"
        onChange={handleOnSortingOptionChange}
      />
      {displayGene && (
        <GeneViewer gene={displayGene} sortingOption={sortingOption} />
      )}
      {displayErrorMessage && (
        <Error data-testid="error">The entered stable id is invalid.</Error>
      )}
    </div>
  );
}

export default App;
