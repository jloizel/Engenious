"use client"

import data from "./jobs.json";
import { useState } from "react";
import Jobs from "./Jobs";
import Header from "./Header";
import Search from "./Search";
import { Box } from "@mui/material";
import styles from "./page.module.css"

const JobSearch: React.FC = () => {
  const [filterKeywords, setFilterKeywords] = useState<string[]>([]);
  const [jobs, setJobs] = useState(data);

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

  return (
    <div>
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
        />
      </Box>

      {/* {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
          clearAll={clearAll}
        />
      )} */}
      

      <Jobs
        keywords={filterKeywords}
        data={sortedJobs}
        setKeywords={addFilterKeywords}
      />
      {/* <Search/> */}
    </div>
  );
};

export default JobSearch;
