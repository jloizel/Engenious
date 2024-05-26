import React from "react";

// Define the types for the props
interface SearchProps {
  setSearchKeyword: (keyword: string) => void;
}

const Search: React.FC<SearchProps> = ({ setSearchKeyword }) => {
  return (
    <div className="header-container">
      <ul>
        <input
          type="text"
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </ul>
    </div>
  );
};

export default Search;
