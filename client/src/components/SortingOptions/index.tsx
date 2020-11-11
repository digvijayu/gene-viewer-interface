import React, { useState } from "react";

import { StyledLabel } from "./../../utils/styledComponents";

export type SortingOption = "longestToShortest" | "shortestToLongest";

type Props = {
  value: SortingOption;
  onChange: (val: SortingOption) => void;
};

const SortingOptions: React.FunctionComponent<Props> = ({
  value,
  onChange,
}: Props) => {
  const [selectedOption, setSelectedOption] = useState(value);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOptionValue =
      event.target.value === "longestToShortest"
        ? "longestToShortest"
        : "shortestToLongest";
    setSelectedOption(selectedOptionValue);
    onChange(selectedOptionValue);
  };
  return (
    <div data-testid="sort-form">
      <div>
        <StyledLabel>Sort By:</StyledLabel>
      </div>
      <input
        type="radio"
        name="longestToShortest"
        value="longestToShortest"
        checked={selectedOption === "longestToShortest"}
        onChange={handleOnChange}
        data-testid="sort-option_longestToShortest"
      />
      Longest To Shortest
      <input
        type="radio"
        name="shortestToLongest"
        value="shortestToLongest"
        checked={selectedOption === "shortestToLongest"}
        onChange={handleOnChange}
        data-testid="sort-option_shortestToLongest"
      />
      Shortest To Longest
    </div>
  );
};

export default SortingOptions;
