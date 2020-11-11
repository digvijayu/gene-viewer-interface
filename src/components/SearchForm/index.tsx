import React, { useState } from "react";

import { StyledLabel } from "./../../utils/styledComponents";

type Props = {
  label: string;
  value: string;
  onSearch: (value: string) => void;
};

const Input: React.FunctionComponent<Props> = ({
  label,
  value,
  onSearch,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleOnInputUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const searchKey = () => {
    const trimmedText = inputValue.trim();
    if (trimmedText) onSearch(trimmedText);
    else {
      alert("Please enter stable id of the gene.");
    }
  };

  return (
    <div data-testid="search-form">
      <div>
        <StyledLabel data-testid="search-form_label">{label}</StyledLabel>
      </div>
      <input
        data-testid="search-form_input"
        value={inputValue}
        onChange={handleOnInputUpdate}
      />
      <button data-testid="search-form_button" onClick={searchKey}>
        Search
      </button>
    </div>
  );
};

export default Input;
