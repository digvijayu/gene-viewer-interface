import axios, { AxiosResponse } from "axios";

import * as utils from "./../utils/constants";
import { Gene } from "./../types";

export const get = async (id: string): Promise<Gene> => {
  const response: AxiosResponse<Gene> = await axios.get(
    `${utils.ENSEML_URL}/lookup/id/${id}?content-type=application/json;expand=1`
  );
  return response.data;
};
