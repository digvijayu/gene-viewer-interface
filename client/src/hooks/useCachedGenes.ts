import { useState } from "react";

import { Gene } from "./../types";

const GENE_STORAGE_KEY = "GENE_STORAGE_KEY";
const MAX_NO_OF_ITEMS_IN_HISTORY = 5;

const getUpdatedCache = (cachedGenes: Gene[], newGene: Gene): Gene[] => {
  const indexOfNewGene = cachedGenes.findIndex(
    (gene: Gene) => gene.id === newGene.id
  );

  if (indexOfNewGene === -1) {
    const updatedCache = [newGene, ...cachedGenes];
    if (updatedCache.length > MAX_NO_OF_ITEMS_IN_HISTORY) {
      updatedCache.splice(
        MAX_NO_OF_ITEMS_IN_HISTORY,
        updatedCache.length - MAX_NO_OF_ITEMS_IN_HISTORY
      );
    }
    return updatedCache;
  } else {
    cachedGenes.splice(indexOfNewGene, 1);
    return [newGene, ...cachedGenes];
  }
};

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
      const updatedGenesObject = getUpdatedCache(geneData, gene);
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
