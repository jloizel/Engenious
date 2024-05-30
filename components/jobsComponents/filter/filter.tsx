import React, { useState } from 'react';
import styles from "./page.module.css"
import { TbFilterSearch } from "react-icons/tb";


const Filter = ({ jobs }) => {
  // State variables for filter criteria
  const [contractType, setContractType] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [specialisation, setSpecialisation] = useState('');

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

  return (
    <div className={styles.filtersContainer}>
      {/* Filter controls */}
      <div >
        <div className={styles.filtersHeader}>
          <span>Filters</span>
          <TbFilterSearch className={styles.filterIcon}/>
        </div>
        <label>Contract Type:</label>
        <select value={contractType} onChange={handleContractTypeChange}>
          <option value="">All</option>
          <option value="Full-time">Full-time</option>
          <option value="Permanent">Permanent</option>
          {/* Add other contract types */}
        </select>
      </div>
      <div>
        <label>Salary Range:</label>
        <input
          type="text"
          value={salaryRange}
          onChange={handleSalaryRangeChange}
          placeholder="e.g., £30k - £50k"
        />
      </div>
      <div>
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
    </div>
  );
};

export default Filter;
