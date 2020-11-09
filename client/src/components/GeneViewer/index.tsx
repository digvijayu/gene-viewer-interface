import React from "react";

import { Gene } from "./../../types";

type Props = {
  gene: Gene;
};

const GeneViewer: React.FunctionComponent<Props> = ({ gene }: Props) => {
  return <div>{gene.id}</div>;
};

export default GeneViewer;
