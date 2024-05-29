import React, { useState } from "react";
import styles from "./page.module.css"; // Assume this file contains the necessary CSS

interface DropdownButtonProps {
  locations: string[];
  onSelect: (location: string) => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ locations, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLocationClick = (location: string) => {
    setSelectedLocation(location);
    onSelect(location);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button onClick={handleButtonClick} className={styles.dropdownButton}>
        {selectedLocation || "Select Location"}
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
