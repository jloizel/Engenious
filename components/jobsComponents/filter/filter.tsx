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
  handleAppliedButton: () => void
}

const Filter: React.FC<FilterProps> = ({ jobs, contractTypes, salaryRanges, specialisations, contractTypeCounts, handleContractTypesCheckboxChange, selectedContractTypes, handleAppliedButton}) => {
  // State variables for filter criteria
  const [contractType, setContractType] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [specialisation, setSpecialisation] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isFiltersApplied, setIsFiltersApplied] = useState(false);

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
  const handleContractTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setContractType(e.target.value);
  };

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
        setIsFiltersApplied(false)
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions((prev) => [...prev, value]);
    } else {
      setSelectedOptions((prev) => prev.filter((option) => option !== value));
    }

  };

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleReset= () => {
    setSelectedOptions([]);
  };

  const handleApplyFilters = () => {
    setIsFiltersApplied(true);
    setIsOpen(false);
    handleAppliedButton()
  };

  const handleResetFilters = () => {
    setSelectedOptions([]);
    setContractType('');
    setSalaryRange('');
    setSpecialisation('');
    setIsFiltersApplied(false);
  };


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
          <Box className={styles.dropdownContainer} ref={dropdownRef}>
            <button className={styles.dropdownButton} onClick={handleDropdownToggle}>
              <LuClock3 className={styles.clockIcon}/>
              <span>Contract Type</span>
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
                    <button onClick={handleReset} className={styles.resetButton}>
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
