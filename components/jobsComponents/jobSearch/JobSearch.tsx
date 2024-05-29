"use client"

import data from "../jobs.json";
import { useState } from "react";
import Jobs from "../jobCard/jobCardsContainer";
import Header from "../Header";
import Search from "../search/Search";
import { Box } from "@mui/material";
import styles from "./page.module.css"

const JobSearch: React.FC = () => {
  const [filterKeywords, setFilterKeywords] = useState<string[]>([]);
  const [jobs, setJobs] = useState(data);
  const [showAllJobs, setShowAllJobs] = useState(false)

  const setSearchKeyword = (data: string) => {
    setFilterKeywords([data]);
  };

  const addFilterKeywords = (data: string) => {
    if (!filterKeywords.includes(data)) {
      setFilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteKeyword = (data: string) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setFilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setFilterKeywords([]);
  };

  const sortedJobs = [...jobs].sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime());

  const handleButtonClick = () => {
    setShowAllJobs(true)
  }

  return (
    <div className={styles.container}>
      <Box className={styles.pageHeader}>
        <div className={styles.headerTitle}>
          Find your dream job!
        </div>
        <div className={styles.headerText}>
          We offer a wide range of job opportunities across various industries. Apply now and take the first step towards your dream career.
        </div>
        <Search 
          setSearchKeyword={(keyword: string) => setSearchKeyword(keyword)}
          data={jobs.map(job => job.position)}
          handleButtonClick={handleButtonClick}
        />
      </Box>

      {/* {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
          clearAll={clearAll}
        />
      )} */}
      
      <div className={styles.jobsMainContainer}>
        <Jobs
          keywords={filterKeywords}
          data={sortedJobs}
          setKeywords={addFilterKeywords}
          showAllJobs={showAllJobs}
        />
      </div>
    </div>
  );
};

export default JobSearch;
