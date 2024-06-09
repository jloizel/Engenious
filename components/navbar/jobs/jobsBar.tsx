"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '../../menu/menu';
import { createTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IoSearchSharp, IoClose } from "react-icons/io5";
import DropdownButton from '../../dropdown/dropdown';
import Image from 'next/image';

interface JobsBarProps {
  locations: string[];
  positions: string[];
  onSelect: (location: string) => void;
  setSearchKeywords: (keywords: string[]) => void;
  onSearchButtonClick: () => void;
}

const JobsBar: React.FC<JobsBarProps> = ({ locations, positions, onSelect, setSearchKeywords, onSearchButtonClick }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [filterKeywords, setFilterKeywords] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    setFilterKeywords([inputValue]);
    setSearchKeywords([inputValue]);
    setIsOpen(true);

    const matchedSuggestions = inputValue.length >= 3
      ? positions.filter(position =>
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

  // Filter locations based on whether they are associated with any of the positions containing the entered keyword
  const filteredLocations = locations.filter(location =>
    positions.some(position =>
      position.toLowerCase().includes(input.toLowerCase()) &&
      positions.indexOf(position) === locations.indexOf(location)
    )
  );

  const clearInput = () => {
    setInput("");
    setSuggestions([]);
    setFilterKeywords([]);
    setSearchKeywords([]);
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 767,
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isTabletOrAbove = useMediaQuery(theme.breakpoints.up('sm'));
  const isTabletOrBelow = useMediaQuery(theme.breakpoints.down('md'));


  const setDisplay = () => {
    return isMobile ? 'none' : '';
  };

  const setDisplay2 = () => {
    return isTabletOrAbove ? 'none' : '';
  };

  const handleImageWidth = () => {
    if (isTabletOrBelow) {
      return 60
    } else {
      return 70
   }
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.menu1} style={{ display: setDisplay() }}>
          <Menu color="#00617C" />
        </div>
        <div className={styles.home}>
          <a href="/">
            <Image className={styles.logo} src="/engenious.png" alt="engenious logo" height={handleImageWidth()} width={handleImageWidth()}/>
          </a>
          <a href="/" className={styles.titleLink} style={{ color: "#00617C" }}>
            <div className={styles.companyNameContainer}>
              <div className={styles.companyName1}>ENGENIOUS</div>
              <div className={styles.companyName2}>RECRUITMENT</div>
            </div>
          </a>
        </div>
        <div className={styles.menu2} style={{ display: setDisplay2() }}>
          <Menu color="#00617C" />
        </div>
      </div>
      <div className={styles.searchMainContainer}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInputContainer}>
            {isTabletOrAbove && (<span>Job Title</span>)}
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
          {isTabletOrAbove && (
            <div className={styles.locationsContainer}>
              <span className={styles.verticalLine}></span>
              <div className={styles.searchDropdownContainer}>
                <DropdownButton locations={filteredLocations} onSelect={onSelect} />
              </div>
            </div>
          )}
          <div className={styles.searchIconContainer} onClick={onSearchButtonClick}>
            <IoSearchSharp className={styles.searchIcon} />
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
      </div>
    </div>
  );
};

export default JobsBar;
