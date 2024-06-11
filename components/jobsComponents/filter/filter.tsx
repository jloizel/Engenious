import React, { useEffect, useRef, useState } from 'react';
import styles from "./page.module.css"
import { TbFilterSearch } from "react-icons/tb";
import { LuClock3 } from "react-icons/lu";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineAccountTree } from "react-icons/md";
import { JobCardData } from '../jobSearch/JobSearch';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, createTheme, useMediaQuery } from '@mui/material';
import { GoLocation } from "react-icons/go";


// const contractTypes = [
//   { label: 'All', value: '' },
//   { label: 'Full-time', value: 'Full-time' },
//   { label: 'Permanent', value: 'Permanent' },
// ];

interface FilterProps {
  handleAppliedButton: () => void
  handleResetAllFilters: () => void

  locations: string[];
  locationsCounts: { [key: string]: number };
  handleLocationsCheckboxChange: (event) => void
  selectedLocations: string[]
  handleLocationsReset: () => void

  contractTypes: string[];
  contractTypeCounts: { [key: string]: number };
  handleContractTypesCheckboxChange: (event) => void
  selectedContractTypes: string[]
  handleContractTypesReset: () => void

  salaryRanges: string[];
  salaryRangesCounts: { [key: string]: number };
  selectedSalaryRanges: string[]
  handleSalaryRangesCheckboxChange: (event) => void
  handleSalaryRangesReset: () => void

  specialisations: string[];
  specialisationsCounts: { [key: string]: number };
  selectedSpecialisations: string[]
  handleSpecialisationsCheckboxChange: (event) => void
  handleSpecialisationsReset: () => void
}

const Filter: React.FC<FilterProps> = ({ handleAppliedButton, handleResetAllFilters, locations, locationsCounts, handleLocationsCheckboxChange, selectedLocations, handleLocationsReset, contractTypes, contractTypeCounts, handleContractTypesCheckboxChange, selectedContractTypes, handleContractTypesReset, salaryRanges, salaryRangesCounts, selectedSalaryRanges, handleSalaryRangesCheckboxChange, handleSalaryRangesReset, specialisations, specialisationsCounts, selectedSpecialisations, handleSpecialisationsCheckboxChange, handleSpecialisationsReset }) => {
  // State variables for filter criteria
  
  const dropdownRef = useRef(null);
  const [isFiltersApplied, setIsFiltersApplied] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false)

  const [appliedLocations, setAppliedLocations] = useState<string[]>([]);
  const [appliedLocationsCount, setAppliedLocationsCount] = useState(0);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  const [appliedContractTypes, setAppliedContractTypes] = useState<string[]>([]);
  const [appliedContractTypesCount, setAppliedContractTypesCount] = useState(0);
  const [isContractTypesOpen, setIsContractTypesOpen] = useState(false);

  const [appliedSalaryRanges, setAppliedSalaryRanges] = useState<string[]>([]);
  const [appliedSalaryRangesCount, setAppliedSalaryRangesCount] = useState(0);
  const [isSalaryRangesOpen, setIsSalaryRangesOpen] = useState(false);

  const [appliedSpecialisations, setAppliedSpecialisations] = useState<string[]>([]);
  const [appliedSpecialisationsCount, setAppliedSpecialisationsCount] = useState(0);
  const [isSpecialisationsOpen, setIsSpecialisationsOpen] = useState(false);


  const handleCloseBar = () => {
    setIsLocationsOpen(false)
    setIsContractTypesOpen(false)
    setIsSalaryRangesOpen(false)
    setIsSpecialisationsOpen(false)
  };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsContractTypesOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  //Locations
  const selectedLocationsCount = selectedLocations.length;
  const isLocationsActive = isFiltersApplied && appliedLocations.length > 0;

  const handleLocationsDropdownToggle = () => {
    setIsLocationsOpen((prev) => !prev);
  };

  const handleApplyLocationsFilters = () => {
    setIsFiltersApplied(true);
    setAppliedLocations([...selectedLocations]);
    setAppliedLocationsCount(selectedLocations.length);
    setIsLocationsOpen(false);
    handleAppliedButton()
    setButtonPressed(true)
  };

  //Contract Type
  const selectedContractTypesCount = selectedContractTypes.length;
  const isContractTypesActive = isFiltersApplied && appliedContractTypes.length > 0;

  const handleContractTypesDropdownToggle = () => {
    setIsContractTypesOpen((prev) => !prev);
  };

  const handleApplyContractTypesFilters = () => {
    setIsFiltersApplied(true);
    setAppliedContractTypes([...selectedContractTypes]);
    setAppliedContractTypesCount(selectedContractTypes.length);
    setIsContractTypesOpen(false);
    handleAppliedButton()
    setButtonPressed(true)
  };

  //Salary range
  const isSalaryRangesActive = isFiltersApplied && appliedSalaryRanges.length > 0;

  const handleSalaryRangesDropdownToggle = () => {
    setIsSalaryRangesOpen((prev) => !prev);
  };

  const handleApplySalaryRangesFilters = () => {
    setIsFiltersApplied(true);
    setAppliedSalaryRanges([...selectedSalaryRanges]);
    setAppliedSalaryRangesCount(selectedSalaryRanges.length);
    setIsSalaryRangesOpen(false);
    handleAppliedButton()
    setButtonPressed(true)
  };

  //Specialisation
  const isSpecialisationsActive = isFiltersApplied && appliedSpecialisations.length > 0;

  const handleSpecialisationsDropdownToggle = () => {
    setIsSpecialisationsOpen((prev) => !prev);
  };

  const handleApplySpecialisationsFilters = () => {
    setIsFiltersApplied(true);
    setAppliedSpecialisations([...selectedSpecialisations]);
    setAppliedSpecialisationsCount(selectedSpecialisations.length);
    setIsSpecialisationsOpen(false);
    handleAppliedButton()
    setButtonPressed(true)
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isTabletOrAbove = useMediaQuery(theme.breakpoints.up('sm'));

  const isAnyDropdownOpen = isLocationsOpen || isContractTypesOpen || isSalaryRangesOpen || isSpecialisationsOpen;

  const isAnyFilterApplied = appliedLocationsCount > 0 || appliedContractTypesCount > 0 || appliedSalaryRangesCount > 0 || appliedSpecialisationsCount > 0;

  useEffect(() => {
    if (isAnyDropdownOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
  }, [isAnyDropdownOpen]);

  const resetAllFilters = () => {
    handleResetAllFilters()
    setIsFiltersApplied(false);
    setAppliedLocations([]);
    setAppliedContractTypes([]);
    setAppliedSalaryRanges([]);
    setAppliedSpecialisations([]);
    setAppliedLocationsCount(0);
    setAppliedContractTypesCount(0);
    setAppliedSalaryRangesCount(0);
    setAppliedSpecialisationsCount(0);
  }


  return (
    <div className={styles.containerBorder}>
      {isAnyDropdownOpen && isMobile && <div className={styles.overlay} onClick={handleCloseBar}></div>}
      {/* Filter controls */}
      <div className={styles.container}>
        <div className={styles.filtersHeader}>
          {isTabletOrAbove && (<span>Filters</span>)}
          <TbFilterSearch className={styles.filterIcon}/>
          <div className={styles.verticalLine}></div>
        </div>
        <div className={styles.filtersContainer}>
          {isMobile && (
            <Box className={styles.contractTypeDropdownContainer} ref={dropdownRef}>
              <button className={`${isLocationsActive ? styles.dropdownButtonActive : styles.dropdownButton}`} onClick={handleLocationsDropdownToggle}>
                <GoLocation className={styles.clockIcon}/>
                <span>Locations</span>
                {isLocationsActive && (<span className={styles.filterCount}>{appliedLocationsCount}</span>)}
                <KeyboardArrowRightIcon className={`${styles.arrow} ${isLocationsOpen ? styles.open : ""}`}/>
              </button>
              {isLocationsOpen && (
                <div className={`${styles.salaryRangeDropdownMenu} ${isMobile ? styles.slideUp : ''}`}>
                  {isMobile && (<div className={styles.dropdownClose} onClick={handleCloseBar}></div>)}
                  <div className={styles.salaryRangeDropdownMenuTop}>
                    {locations.map((type, index) => (
                      <label key={index} className={styles.dropdownItem}>
                        <input
                          type="checkbox"
                          value={type}
                          checked={selectedLocations.includes(type)}
                          onChange={handleLocationsCheckboxChange}
                        />
                        {type} <span>{locationsCounts[type] || 0}</span>
                      </label>
                    ))}
                  </div>
                  <div className={styles.salaryRangeDropdownMenuBot}>
                    <div className={styles.salaryRangeDropdownActions}>
                      <button onClick={handleApplyLocationsFilters} className={styles.applyButton}>
                        Apply
                      </button>
                      {isFiltersApplied && (
                        <button onClick={handleLocationsReset} className={styles.resetButton}>
                          Reset
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </Box>
          )}
          <Box className={styles.contractTypeDropdownContainer} ref={dropdownRef}>
            <button className={`${isContractTypesActive ? styles.dropdownButtonActive : styles.dropdownButton}`} onClick={handleContractTypesDropdownToggle}>
              <LuClock3 className={styles.clockIcon}/>
              <span>Contract Type</span>
              {isContractTypesActive && (<span className={styles.filterCount}>{appliedContractTypesCount}</span>)}
              <KeyboardArrowRightIcon className={`${styles.arrow} ${isContractTypesOpen ? styles.open : ""}`}/>
            </button>
            {isContractTypesOpen && (
              <div className={`${styles.dropdownMenu} ${isMobile ? styles.slideUp : ''}`}>
                {isMobile && (<div className={styles.dropdownClose} onClick={handleCloseBar}></div>)}
                {contractTypes.map((type, index) => (
                  <label key={index} className={styles.dropdownItem}>
                    <input
                      type="checkbox"
                      value={type}
                      checked={selectedContractTypes.includes(type)}
                      onChange={handleContractTypesCheckboxChange}
                    />
                    {type} <span>{contractTypeCounts[type] || 0}</span>
                  </label>
                ))}
                 <div className={styles.dropdownActions}>
                  <button onClick={handleApplyContractTypesFilters} className={styles.applyButton}>
                    Apply
                  </button>
                  {isFiltersApplied && (
                    <button onClick={handleContractTypesReset} className={styles.resetButton}>
                      Reset
                    </button>
                  )}
                </div>
              </div>
              
            )}
          </Box>
          <Box className={styles.contractTypeDropdownContainer} ref={dropdownRef}>
            <button className={`${isSalaryRangesActive ? styles.dropdownButtonActive : styles.dropdownButton}`} onClick={handleSalaryRangesDropdownToggle}>
              <GiMoneyStack className={styles.clockIcon}/>
              <span>Salary Range</span>
              {isSalaryRangesActive && (<span className={styles.filterCount}>{appliedSalaryRangesCount}</span>)}
              <KeyboardArrowRightIcon className={`${styles.arrow} ${isSalaryRangesOpen ? styles.open : ""}`}/>
            </button>
            {isSalaryRangesOpen && (
              <div className={`${styles.salaryRangeDropdownMenu} ${isMobile ? styles.slideUp : ''}`}>
                {isMobile && (<div className={styles.dropdownClose} onClick={handleCloseBar}></div>)}
                <div className={styles.salaryRangeDropdownMenuTop}>
                  {salaryRanges.map((type, index) => (
                    <label key={index} className={styles.dropdownItem}>
                      <input
                        type="checkbox"
                        value={type}
                        checked={selectedSalaryRanges.includes(type)}
                        onChange={handleSalaryRangesCheckboxChange}
                      />
                      {type} <span>{salaryRangesCounts[type] || 0}</span>
                    </label>
                  ))}
                </div>
                <div className={styles.salaryRangeDropdownMenuBot}>
                  <div className={styles.salaryRangeDropdownActions}>
                    <button onClick={handleApplySalaryRangesFilters} className={styles.applyButton}>
                      Apply
                    </button>
                    {isFiltersApplied && (
                      <button onClick={handleSalaryRangesReset} className={styles.resetButton}>
                        Reset
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </Box>
          <Box className={styles.contractTypeDropdownContainer} ref={dropdownRef}>
            <button className={`${isSpecialisationsActive ? styles.dropdownButtonActive : styles.dropdownButton}`} onClick={handleSpecialisationsDropdownToggle}>
              <MdOutlineAccountTree className={styles.clockIcon}/>
              <span>Specialisation</span>
              {isSpecialisationsActive && (<span className={styles.filterCount}>{appliedSpecialisationsCount}</span>)}
              <KeyboardArrowRightIcon className={`${styles.arrow} ${isSpecialisationsOpen ? styles.open : ""}`}/>
            </button>
            {isSpecialisationsOpen && (
              <div className={`${styles.salaryRangeDropdownMenu} ${isMobile ? styles.slideUp : ''}`}>
                {isMobile && (<div className={styles.dropdownClose} onClick={handleCloseBar}></div>)}
                <div className={styles.salaryRangeDropdownMenuTop}>
                  {specialisations.map((type, index) => (
                    <label key={index} className={styles.dropdownItem}>
                      <input
                        type="checkbox"
                        value={type}
                        checked={selectedSpecialisations.includes(type)}
                        onChange={handleSpecialisationsCheckboxChange}
                      />
                      {type} <span>{specialisationsCounts[type] || 0}</span>
                    </label>
                  ))}
                </div>
                <div className={styles.salaryRangeDropdownMenuBot}>
                  <div className={styles.salaryRangeDropdownActions}>
                    <button onClick={handleApplySpecialisationsFilters} className={styles.applyButton}>
                      Apply
                    </button>
                    {isFiltersApplied && (
                      <button onClick={handleSpecialisationsReset} className={styles.resetButton}>
                        Reset Filters
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </Box>
          {isAnyFilterApplied && (
            <div className={styles.resetContainer}>
              <div className={styles.verticalLine2}></div>
              <button onClick={resetAllFilters} >
                Reset Filters 
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
