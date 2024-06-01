"use client"

import React, { useEffect, useState } from "react";
import Jobs from "../jobCard/jobCardsContainer";
import Header from "../Header";
import { Box } from "@mui/material";
import styles from "./page.module.css";
import JobsBar from "../../navbar/jobs/jobsBar";
import Filter from "../filter/filter";

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
  keyword: string
  locations: string[]
  data: JobCardData[];
  setSearchKeywords: (keywords: string[]) => void;
}

const JobSearch: React.FC<JobSearchProps> = ({keyword, data, setSearchKeywords}) => {
  const [location, setLocation] = useState("")
  const [contractTypes, setContractTypes] = useState<string[]>([]);
  const [salaryRanges, setSalaryRanges] = useState<string[]>([]);
  const [specialisations, setSpecialisations] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [positions, setPositions] = useState<string[]>([]);
  const [contractTypeCounts, setContractTypeCounts] = useState({});


  const filteredData = data.filter(
    (job) =>
      job.position.toLowerCase().includes(keyword.toLowerCase()) &&
      (location ? job.location === location : true)
  );

  const calculateDaysAgo = (postedAt: string) => {
    const postedDate = new Date(postedAt);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - postedDate.getTime();
    return Math.floor(timeDifference / (1000 * 3600 * 24));
  };

  // const daysAgo = calculateDaysAgo(job.postedAt);

  const handleLocationSelection = (location: string) => {
    setLocation(location)
  }

  useEffect(() => {
    const extractedLocations = [...new Set(data.map(job => job.location))];
    setLocations(extractedLocations);
    const extractedPositions = [...new Set(data.map(job => job.position))];
    setPositions(extractedPositions)
    const extractedContractTypes = [...new Set(data.map(job => job.contractType))];
    setContractTypes(extractedContractTypes)
    const extractedSalary = [...new Set(data.map(job => job.salary))];
    setSalaryRanges(extractedSalary)
    const extractedSpecialisations = [...new Set(data.map(job => job.specialisation))];
    setSpecialisations(extractedSpecialisations)
  }, []);

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
  }, []);

  console.log(contractTypeCounts)

  return (
    <div className={styles.container}>
      <JobsBar 
        locations={locations} 
        positions={positions}
        onSelect={handleLocationSelection} 
        setSearchKeywords={setSearchKeywords}
        />
      <div className={styles.filtersContainer} >
        <Filter 
          jobs={data} 
          contractTypes={contractTypes} 
          salaryRanges={salaryRanges} 
          specialisations={specialisations}
          contractTypeCounts={contractTypeCounts}
        />
      {/* <div>
        {filteredData.map((job) => {
          const daysAgo = calculateDaysAgo(job.postedAt);
          return (
            <div key={job.id} className={styles.jobCard}>
              <p>{job.position}</p>
              <p>Posted {daysAgo} days ago</p>
              {daysAgo < 3 && <div className={styles.newBadge}>NEW</div>}
            </div>
          );
        })}
      </div> */}
      </div>
      {/* <p>Keyword: {keyword}</p> */}
    </div>
  );
};

export default JobSearch;
