import React, { useEffect, useRef, useState } from 'react';
import styles from "./page.module.css"
import { TbFilterSearch } from "react-icons/tb";
import { LuClock3 } from "react-icons/lu";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineAccountTree } from "react-icons/md";

const contractTypes = [
  { label: 'All', value: '' },
  { label: 'Full-time', value: 'Full-time' },
  { label: 'Permanent', value: 'Permanent' },
  // Add other contract types
];

const Filter = ({ jobs }) => {
  // State variables for filter criteria
  const [contractType, setContractType] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [specialisation, setSpecialisation] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

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
  const handleContractTypeChange = e => {
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


  return (
    <div className={styles.filtersContainer}>
      {/* Filter controls */}
        <div className={styles.filtersHeader}>
          <span>Filters</span>
          <TbFilterSearch className={styles.filterIcon}/>
          <div className={styles.verticalLine}></div>
        </div>
        
        <div className={styles.filter}>
          {/* <label>Contract Type:</label> */}
          <select value={contractType} onChange={handleContractTypeChange}>
            <option value="">All</option>
            <option value="Full-time">Full-time</option>
            <option value="Permanent">Permanent</option>
            {/* Add other contract types */}
          </select>
        </div>
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
      {/* <ul>
        {filteredJobs.map(job => (
          <li key={job.id}>
            <div>Position: {job.position}</div>
            <div>Contract Type: {job.contractType}</div>
            <div>Salary: {job.salary}</div>
            <div>Specialisation: {job.specialisation}</div>
          </li>
        ))}
      </ul> */}
      <div className={styles.dropdownContainer} ref={dropdownRef}>
      <button className={styles.dropdownButton} onClick={handleDropdownToggle}>
        {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Select Contract Type'}
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {contractTypes.map((type) => (
            <label key={type.value} className={styles.dropdownItem}>
              <input
                type="checkbox"
                value={type.value}
                checked={selectedOptions.includes(type.value)}
                onChange={handleCheckboxChange}
              />
              {type.label}
            </label>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Filter;
