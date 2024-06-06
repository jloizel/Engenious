"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import NavbarMain2 from '../../../../components/navbar/main/navbarMain2'
import { createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import { JobProvider, useJobContext } from '../../../../components/jobContext/jobContext'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import data from '../../../../components/jobsComponents/jobs.json'
import JobDetails from '../../../../components/jobsComponents/jobDetails/jobDetails'
import JobCardsContainer from '../../../../components/jobsComponents/jobCard/jobCardsContainer';

const Details = () => {  
  const [currentPath, setCurrentPath] = useState('')
  const [filterKeywords, setFilterKeywords] = useState<string[]>([]);
  const [showAllJobs, setShowAllJobs] = useState(false)
  const [jobs, setJobs] = useState(data);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false)

  const pageName = "Details"  

  const setSearchKeywords = (keywords: string[]) => {
    setFilterKeywords(keywords);
  };

  const addFilterKeywords = (data: string) => {
    if (!filterKeywords.includes(data)) {
      setFilterKeywords([...filterKeywords, data]);
    }
  };

  const sortedJobs = [...jobs].sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime());

  const handleButtonClick = () => {
    // setShowAllJobs(true)
    setSearchButtonClicked(true)
  }


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname)
    }
  }, [])

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 767,
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTabletOrBelow= useMediaQuery(theme.breakpoints.down('md'));  

  return (
    <JobProvider>
      <div className={styles.submitCVContainer}>
        <Helmet>
          <title>Apply</title>
          <meta name='description' content='' />
        </Helmet>
        <NavbarMain2/>
        {!isTabletOrBelow && (<div className={styles.pageHeader}></div>)}
        <div className={styles.submissionContainer}>
          <div className={styles.submitForm}>
            <a className={styles.buttonContainer} href="/jobs" style={{textDecoration: "none"}}>
              <button className={styles.button}>
                <KeyboardArrowRightIcon className={styles.icon}/>
                Back to job search
              </button>
            </a>
            <JobDetails />
            
          </div>
          <div className={styles.jobsMainContainer}>
            <div className={styles.jobsContainer}>
              <JobCardsContainer
                data={sortedJobs}
                setKeywords={addFilterKeywords}
                showAllJobs={showAllJobs}
                handleButtonClick={handleButtonClick}
              />
            </div>
          </div>
        </div>
      </div>
    </JobProvider>
  )
}

export default Details