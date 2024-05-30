"use client"

import React, { useState } from "react";
import Jobs from "../jobCard/jobCardsContainer";
import Header from "../Header";
import { Box } from "@mui/material";
import styles from "./page.module.css";
import JobsBar from "../../navbar/jobs/jobsBar";
import Filter from "../filter/filter";

interface JobCardData {
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
}

const JobSearch: React.FC<JobSearchProps> = ({keyword, locations, data}) => {
  const [location, setLocation] = useState("")
  const [contractType, setContractType] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [specialisation, setSpecialisation] = useState('');
  
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

  return (
    <div className={styles.container}>
      <JobsBar locations={locations} onSelect={handleLocationSelection}/>
      <div className={styles.filtersContainer}>
        <Filter jobs={data}/>
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
