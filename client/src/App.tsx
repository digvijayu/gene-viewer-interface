import React from "react";

import GeneViewer from "./components/GeneViewer";
import SearchForm from "./components/SearchForm";
import useCachedGenes from "./hooks/useCachedGenes";
import { Gene } from "./types";
import * as genesApi from "./api/genes";

function App() {
  const [genesCache, setAppendNewGeneSearch] = useCachedGenes();
  const [inputValue, setInputValue] = React.useState("");
  const [displayGene, setDisplayGene] = React.useState<Gene | undefined>(
    genesCache.length > 0 ? genesCache[genesCache.length - 1] : undefined
  );

  const handleOnInputChange = async (newVal: string) => {
    setInputValue(newVal);
    const cachedValue = genesCache.find((gene: Gene) => gene.id === newVal);
    if (cachedValue !== undefined) {
      setDisplayGene(cachedValue);
    } else {
      try {
        const geneData = await genesApi.get(newVal);
        setAppendNewGeneSearch(geneData);
        setDisplayGene(geneData);
      } catch (error) {
        setDisplayGene(undefined);
      }
    }
  };

  return (
    <div>
      <SearchForm
        label="enter gene id"
        value={inputValue}
        onSearch={handleOnInputChange}
      />
      {displayGene && <GeneViewer gene={displayGene} />}
    </div>
  );
}

export default App;
