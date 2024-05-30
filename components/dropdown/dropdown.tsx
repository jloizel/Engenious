import React, { useState, useEffect, useRef } from "react";
import styles from "./page.module.css"; // Assume this file contains the necessary CSS
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


interface DropdownButtonProps {
  locations: string[];
  onSelect: (location: string) => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ locations, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLocationClick = (location: string) => {
    setSelectedLocation(location);
    onSelect(location);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <span>Job Location</span>
      <button onClick={handleButtonClick} className={styles.dropdownButton}>
        {selectedLocation || "Select Location"}
        <KeyboardArrowRightIcon className={`${styles.arrow} ${isOpen ? styles.open : ""}`}/>
      </button>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {locations.map((location, index) => (
            <li
              key={index}
              className={styles.dropdownItem}
              onClick={() => handleLocationClick(location)}
            >
              {location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
