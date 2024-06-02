import React, { useEffect, useRef, useState } from 'react';
import styles from "./page.module.css"
import { TbFilterSearch } from "react-icons/tb";
import { LuClock3 } from "react-icons/lu";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineAccountTree } from "react-icons/md";
import { JobCardData } from '../jobSearch/JobSearch';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box } from '@mui/material';


// const contractTypes = [
//   { label: 'All', value: '' },
//   { label: 'Full-time', value: 'Full-time' },
//   { label: 'Permanent', value: 'Permanent' },
// ];

interface FilterProps {
  jobs: JobCardData[];
  contractTypes: string[];
  salaryRanges: string[];
  specialisations: string[];
  contractTypeCounts: { [key: string]: number };
  handleContractTypesCheckboxChange: (event) => void
  selectedContractTypes: string[]
  handleContractTypesReset: () => void
  handleAppliedButton: () => void
  filteredApplied: boolean
}

const Filter: React.FC<FilterProps> = ({ jobs, contractTypes, salaryRanges, specialisations, contractTypeCounts, handleContractTypesCheckboxChange, selectedContractTypes, handleContractTypesReset, handleAppliedButton, filteredApplied}) => {
  // State variables for filter criteria
  const [contractType, setContractType] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [specialisation, setSpecialisation] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isFiltersApplied, setIsFiltersApplied] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false)
  const [appliedContractTypes, setAppliedContractTypes] = useState<string[]>([]);
  const [appliedContractTypesCount, setAppliedContractTypesCount] = useState(0);


  // Filtering logic
  const filteredJobs = jobs.filter(job => {
    // Filter by contract type
    if (contractType && job.contractType !== contractType) {
      return false;
    }
    // Filter by salary range
    if (salaryRange && !isSalaryInRange(job.salary, salaryRange)) {
      return false;
    }
    // Filter by specialisation
    if (specialisation && job.specialisation !== specialisation) {
      return false;
    }
    // All criteria match
    return true;
  });

  // Function to check if salary is within range
  const isSalaryInRange = (salary, range) => {
    const [min, max] = range.split('-').map(val => parseInt(val));
    const jobSalary = parseInt(salary.replace(/[^0-9.-]+/g, ''));
    return jobSalary >= min && jobSalary <= max;
  };

  // Handle filter changes
  const handleSalaryRangeChange = e => {
    setSalaryRange(e.target.value);
  };

  const handleSpecialisationChange = e => {
    setSpecialisation(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleApplyFilters = () => {
    setIsFiltersApplied(true);
    setAppliedContractTypes([...selectedContractTypes]);
    setAppliedContractTypesCount(selectedContractTypes.length);
    setIsOpen(false);
    handleAppliedButton()
    setButtonPressed(true)
  };

  //Contract Type
  const selectedContractTypesCount = selectedContractTypes.length;
  const isContractTypesActive = isFiltersApplied && appliedContractTypes.length > 0;

  return (
    <div className={styles.containerBorder}>
      {/* Filter controls */}
      <div className={styles.container}>
        <div className={styles.filtersHeader}>
          <span>Filters</span>
          <TbFilterSearch className={styles.filterIcon}/>
          <div className={styles.verticalLine}></div>
        </div>
        
        <div className={styles.filtersContainer}>
          <Box className={styles.contractTypeDropdownContainer} ref={dropdownRef}>
            <button className={`${isContractTypesActive ? styles.dropdownButtonActive : styles.dropdownButton}`} onClick={handleDropdownToggle}>
              <LuClock3 className={styles.clockIcon}/>
              <span>Contract Type</span>
              {isContractTypesActive && (<span className={styles.filterCount}>{appliedContractTypesCount}</span>)}
              <KeyboardArrowRightIcon className={`${styles.arrow} ${isOpen ? styles.open : ""}`}/>
            </button>
            {isOpen && (
              <div className={styles.dropdownMenu}>
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
                  <button onClick={handleApplyFilters} className={styles.applyButton}>
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

          <div className={styles.filter}>
            <label>Salary Range:</label>
            <input
              type="text"
              value={salaryRange}
              onChange={handleSalaryRangeChange}
              placeholder="e.g., £30k - £50k"
            />
          </div>
          <div className={styles.filter}>
            <label>Specialisation:</label>
            <select value={specialisation} onChange={handleSpecialisationChange}>
              <option value="">All</option>
              <option value="Project Management">Project Management</option>
              <option value="Civil Engineering">Civil Engineering</option>
              {/* Add other specialisations */}
            </select>
          </div>

          {/* Job listings */}
          
        </div>
      </div>
    </div>
  );
};

export default Filter;
