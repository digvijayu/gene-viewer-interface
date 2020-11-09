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
    <div>
      <label>{label}</label>
      <input value={inputValue} onChange={handleOnInputUpdate} />
      <button onClick={searchKey}>Search</button>
    </div>
  );
};

export default Input;
