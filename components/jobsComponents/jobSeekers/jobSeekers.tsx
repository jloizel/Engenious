"use client"

import data from "../jobs.json";
import { useEffect, useState } from "react";
import JobCardsContainer from "../jobCard/jobCardsContainer";
import Search from "../search/Search";
import { Box } from "@mui/material";
import styles from "./page.module.css"
import JobSearch from "../jobSearch/JobSearch";
import NavbarSub from "../../navbar/sub/navbarSub";
import { JobProvider } from "../../jobContext/jobContext";
import { Job, getAllJobs } from "@/app/API";

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
  // const [jobs, setJobs] = useState(data);
  const [jobs, setJobs] = useState<Job[]>([]);
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

  const sortedJobs = [...jobs].sort((a, b) => {
    const dateA = new Date(a.updatedAt).getTime() || new Date(a.createdAt).getTime();
    const dateB = new Date(b.updatedAt).getTime() || new Date(b.createdAt).getTime();
    return dateB - dateA;
  });

  const handleButtonClick = () => {
    // setShowAllJobs(true)
    setSearchButtonClicked(true)
  }

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsData = await getAllJobs();
        setJobs(jobsData);
        const extractedLocations = [...new Set(jobsData.map(job => job.location))];
        setLocations(extractedLocations);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const extractedLocations = [...new Set(data.map(job => job.location))];
    setLocations(extractedLocations);
  }, []);

  

  if (searchButtonClicked) {
    return <JobSearch keyword={keyword} locations={locations} data={sortedJobs} setSearchKeywords={setSearchKeywords}/>;
  }

  return (
    <JobProvider>
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
      <div className={styles.jobsMainContainer}>
        <JobCardsContainer
          // data={sortedJobs}
          setKeywords={addFilterKeywords}
          showAllJobs={showAllJobs}
          handleButtonClick={handleButtonClick}
          displayedText="View all jobs"
          href=""
        />
      </div>
    </div>
    </JobProvider>
  );
};

export default JobSeekers;
