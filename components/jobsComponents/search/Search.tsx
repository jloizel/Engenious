// Search.tsx
import React, { useEffect, useRef, useState } from "react";
import styles from "./search.module.css";
import { IoBriefcase } from "react-icons/io5";
import SearchIcon from '@mui/icons-material/Search';
import { IoSearchOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { IoSearchSharp, IoClose  } from "react-icons/io5";

interface SearchProps {
  setSearchKeywords: (keywords: string[]) => void;
  data: string[]; // Array of job positions from the data file
  handleButtonClick: () => void;
}

const Search: React.FC<SearchProps> = ({ data, handleButtonClick, setSearchKeywords }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [filterKeywords, setFilterKeywords] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    setFilterKeywords([inputValue])
    setSearchKeywords([inputValue]);
    setIsOpen(true)
    // Filter job positions from data that contain the user's input letters
    const matchedSuggestions = inputValue.length >= 3
      ? data.filter(position =>
          position.toLowerCase().includes(inputValue.toLowerCase())
        )
      : [];

    setSuggestions(matchedSuggestions);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSuggestionClick = (position: string) => {
    setInput(position);
    setIsOpen(false);
    setSearchKeywords([position]);
  };

  const getHighlightedText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === highlight.toLowerCase() ? <strong key={i}>{part}</strong> : part
        )}
      </span>
    );
  };


  const clearInput = () => {
    setInput("");
    setSuggestions([]);
    setFilterKeywords([]);
    setSearchKeywords([]);
  };

  return (
    <div className={styles.searchFormContainer}>
      <div className={styles.form}>
        <div className={styles.left}>
          <IoBriefcase className={styles.icon}/>
          <input
            type="text"
            value={input}
            onChange={handleSearch}
            placeholder="Search by title, skill or keyword"
            className={styles.input}
          />
          {input && (
            <IoClose className={styles.clearIcon} onClick={clearInput} />
          )}
        </div>
        <div className={styles.buttonContainer} onClick={handleButtonClick}>
          {/* <a href="/jobs"> */}
            <button  className={styles.button}>
              Search
              <IoSearchSharp className={styles.searchIcon}/>
            </button>
          {/* </a> */}
        </div>
      </div>
      {isOpen && (
        <div className={styles.suggestionsContainer} ref={suggestionsRef}>
          {input.length >= 3 && suggestions.length === 0 && (
            <div className={styles.noDataFound}>No Data Found</div>
          )}
          {suggestions.length > 0 && (
            <ul>
              {suggestions.map((position, index) => (
                <li key={index} onClick={() => handleSuggestionClick(position)}>
                  {getHighlightedText(position, input)}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
