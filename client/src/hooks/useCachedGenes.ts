import { useState } from "react";

import { Gene } from "./../types";

const GENE_STORAGE_KEY = "GENE_STORAGE_KEY";

function useCachedGenes() {
  const [geneData, setGeneData] = useState(() => {
    try {
      const item = window.localStorage.getItem(GENE_STORAGE_KEY);
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  });

  const useAppendNewGeneSearch = (gene: Gene) => {
    try {
      const updatedGenesObject = [...geneData, gene];
      setGeneData(updatedGenesObject);
      window.localStorage.setItem(
        GENE_STORAGE_KEY,
        JSON.stringify(updatedGenesObject)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return [geneData, useAppendNewGeneSearch];
}

export default useCachedGenes;
