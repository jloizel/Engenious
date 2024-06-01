import React, { useEffect, useState } from "react";
import Jobs from "../jobCard/jobCardsContainer";
import Header from "../Header";
import { Box, Pagination, PaginationItem } from "@mui/material";
import styles from "./page.module.css";
import JobsBar from "../../navbar/jobs/jobsBar";
import Filter from "../filter/filter";
import { LuClock3 } from "react-icons/lu";
import { GiMoneyStack } from "react-icons/gi";
import { GoLocation } from "react-icons/go";

export interface JobCardData {
  id: number;
  position: string;
  postedAt: string;
  contractType: string;
  location: string;
  specialisation: string;
  salary: string;
}

interface JobSearchProps {
  keyword: string;
  locations: string[];
  data: JobCardData[];
  setSearchKeywords: (keywords: string[]) => void;
}

const JobSearch: React.FC<JobSearchProps> = ({ keyword, data, setSearchKeywords }) => {
  const [filteredApplied, setFilterApplied] = useState(false);
  const [filteredData, setFilteredData] = useState<JobCardData[]>(data);

  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState<string[]>([]);

  const [contractTypes, setContractTypes] = useState<string[]>([]);
  const [contractTypeCounts, setContractTypeCounts] = useState({});
  const [selectedContractTypes, setSelectedContractTypes] = useState([]);

  const [salaryRanges, setSalaryRanges] = useState<string[]>([]);
  const [specialisations, setSpecialisations] = useState<string[]>([]);

  const [positions, setPositions] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  const handleAppliedButton = () => {
    setFilterApplied(true);
    const filtered = data.filter(
      (job) =>
        job.position.toLowerCase().includes(keyword.toLowerCase()) &&
        (location ? job.location === location : true) &&
        (selectedContractTypes.length > 0 ? selectedContractTypes.includes(job.contractType) : true)
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to the first page after applying filters
  };

  const calculateDaysAgo = (postedAt: string) => {
    const postedDate = new Date(postedAt);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - postedDate.getTime();
    return Math.floor(timeDifference / (1000 * 3600 * 24));
  };

  const handleLocationSelection = (location: string) => {
    setLocation(location);
  };

  useEffect(() => {
    const extractedLocations = [...new Set(data.map((job) => job.location))];
    setLocations(extractedLocations);
    const extractedPositions = [...new Set(data.map((job) => job.position))];
    setPositions(extractedPositions);
    const extractedContractTypes = [...new Set(data.map((job) => job.contractType))];
    setContractTypes(extractedContractTypes);
    const extractedSalary = [...new Set(data.map((job) => job.salary))];
    setSalaryRanges(extractedSalary);
    const extractedSpecialisations = [...new Set(data.map((job) => job.specialisation))];
    setSpecialisations(extractedSpecialisations);
  }, [data]);

  //Contract Types

  useEffect(() => {
    const contractTypeCounts = data.reduce((acc, job) => {
      const { contractType } = job;
      if (acc[contractType]) {
        acc[contractType] += 1;
      } else {
        acc[contractType] = 1;
      }
      return acc;
    }, {});
    setContractTypeCounts(contractTypeCounts);
  }, [data]);

  const handleContractTypesCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedContractTypes((prev) => [...prev, value]);
    } else {
      setSelectedContractTypes((prev) => prev.filter((option) => option !== value));
    }
  };

  const handleContractTypesReset = () => {
    setSelectedContractTypes([]);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / jobsPerPage);
  const startIdx = (currentPage - 1) * jobsPerPage;
  const endIdx = startIdx + jobsPerPage;
  const currentJobs = filteredData.slice(startIdx, endIdx);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className={styles.container}>
      <JobsBar
        locations={locations}
        positions={positions}
        onSelect={handleLocationSelection}
        setSearchKeywords={setSearchKeywords}
      />
      <div className={styles.filtersContainer}>
        <Filter
          jobs={data}
          contractTypes={contractTypes}
          salaryRanges={salaryRanges}
          specialisations={specialisations}
          contractTypeCounts={contractTypeCounts}
          handleContractTypesCheckboxChange={handleContractTypesCheckboxChange}
          selectedContractTypes={selectedContractTypes}
          handleContractTypesReset={handleContractTypesReset}
          handleAppliedButton={handleAppliedButton}
          filteredApplied={filteredApplied}
        />
      </div>
      <div className={styles.filteredJobsContainer}>
        <div className={styles.left}>
          <div className={styles.jobsList}>
            {currentJobs.map((job) => {
              const daysAgo = calculateDaysAgo(job.postedAt);
              return (
                <div className={styles.jobCardContainer}>
                  <div key={job.id} className={styles.jobCard}>
                    <p className={styles.jobPosition}>{job.position}</p>
                    <p>{job.location}</p>
                    <p>Posted {daysAgo} days ago</p>
                    <div className={styles.jobInfo}>
                      <span><GoLocation className={styles.icon}/>{job.location}</span>
                      <span><LuClock3 className={styles.icon}/>{job.contractType}</span>
                      <span><GiMoneyStack className={styles.icon}/>{job.salary}</span>
                    </div>
                    {daysAgo < 3 && <div className={styles.newBadge}>NEW</div>}
                  </div>
                </div>
              );
            })}
            <div className={styles.pagination}>
              <Pagination
                count={totalPages}
                page={currentPage}
                siblingCount={0}
                boundaryCount={2}
                onChange={handlePageChange}
                color="primary"
                variant="outlined"
                shape="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
