"use client"

import data from "../jobs.json";
import { useEffect, useState } from "react";
import Jobs from "../jobCard/jobCardsContainer";
import Search from "../search/Search";
import { Box } from "@mui/material";
import styles from "./page.module.css"
import JobSearch from "../jobSearch/JobSearch";
import NavbarSub from "../../navbar/sub/navbarSub";

interface Link {
  id: number;
  title: string;
  url: string;
}

interface JobSeekersProps {
  links: Link[];
  pageName: string;
  currentPath: string;
}
const JobSeekers: React.FC<JobSeekersProps> = ({links, pageName, currentPath}) => {
  const [filterKeywords, setFilterKeywords] = useState<string[]>([]);
  const [jobs, setJobs] = useState(data);
  const [showAllJobs, setShowAllJobs] = useState(false)
  const [searchButtonClicked, setSearchButtonClicked] = useState(false)
  const [keyword, setKeyword] = useState<string>("");
  const [locations, setLocations] = useState<string[]>([]);

  const setSearchKeywords = (keywords: string[]) => {
    setFilterKeywords(keywords);
    setKeyword(keywords.join(', '));
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
    setSearchButtonClicked(true)
  }

  useEffect(() => {
    const extractedLocations = [...new Set(data.map(job => job.location))];
    setLocations(extractedLocations);
  }, []);

  if (searchButtonClicked) {
    return <JobSearch keyword={keyword} locations={locations}/>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour="#00617C"/>
      </div>
      <Box className={styles.pageHeader}>
        <div className={styles.headerTitle}>
          Find your dream job!
        </div>
        <div className={styles.headerText}>
          We offer a wide range of job opportunities across various industries. Apply now and take the first step towards your dream career.
        </div>
        <Search 
          setSearchKeywords={setSearchKeywords}
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

export default JobSeekers;