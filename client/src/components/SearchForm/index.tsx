import React, { useState } from "react";

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

  const searchKey = () => onSearch(inputValue);

  return (
    <div data-testid="search-form">
      <label data-testid="search-form_label">{label}</label>
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
