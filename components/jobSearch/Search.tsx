import React, { useState } from "react";

interface SearchProps {
  setSearchKeyword: (keyword: string) => void;
}

const Search: React.FC<SearchProps> = ({ setSearchKeyword }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setSearchKeyword(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleSearch}
        placeholder="Search jobs..."
      />
    </div>
  );
};

export default Search;
