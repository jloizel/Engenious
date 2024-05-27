import React, { useState } from "react";
import styles from "./search.module.css"
import { IoBriefcase } from "react-icons/io5";

interface SearchProps {
  setSearchKeyword: (keyword: string) => void;
  data: string[]; // Array of job positions from the data file
}

const Search: React.FC<SearchProps> = ({ setSearchKeyword, data }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    setSearchKeyword(inputValue);

    // Filter job positions from data that contain the user's input letters
    const matchedSuggestions = inputValue.length >= 3
      ? data.filter(position =>
          position.toLowerCase().includes(inputValue.toLowerCase())
        )
      : [];

    setSuggestions(matchedSuggestions);
  };

  const handleSuggestionClick = (position: string) => {
    setInput(position);
    setSearchKeyword(position);
    setSuggestions([]);
  };

  return (
    <div className={styles.searchFormContainer}>
      <div className={styles.left}>
        <IoBriefcase className={styles.icon}/>
        <input
          type="text"
          value={input}
          onChange={handleSearch}
          placeholder="Search jobs..."
          className={styles.input}
        />
      </div>
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((position, index) => (
            <li key={index} onClick={() => handleSuggestionClick(position)}>
              {position}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
