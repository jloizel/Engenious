"use client"

import React, { useState } from "react";
import Jobs from "../jobCard/jobCardsContainer";
import Header from "../Header";
import { Box } from "@mui/material";
import styles from "./page.module.css";
import JobsBar from "../../navbar/jobs/jobsBar";

interface JobSearchProps {
  keyword: string
  locations: string[]
}

const JobSearch: React.FC<JobSearchProps> = ({keyword, locations}) => {
  const [location, setLocation] = useState("")
  
  console.log(location)

  const handleLocationSelection = (location: string) => {
    setLocation(location)
  }

  return (
    <div className={styles.container}>
      <JobsBar locations={locations} onSelect={handleLocationSelection}/>
      <p>Keyword: {keyword}</p>
    </div>
  );
};

export default JobSearch;
