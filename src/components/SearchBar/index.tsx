import { useState } from "react";

import "./styles.css";

type MyFunction = (arg1: string) => void;

type Props = {
  onSearch: MyFunction;
};

const SearchBar = ({ onSearch }: Props) => {
  const [text, setText] = useState("");

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSearch(text);
  };

  const handleResetClick = () => {
    setText("");
    onSearch(text);
  };

  return (
    <form className="dsc-search-bar" onSubmit={handleSubmit}>
      <button type="submit">🔎︎</button>
      <input
        value={text}
        type="text"
        placeholder="Nome do produto"
        onChange={handleChange}
      />
      <button onClick={handleResetClick}>🗙</button>
    </form>
  );
};

export default SearchBar;
