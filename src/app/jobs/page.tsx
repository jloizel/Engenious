"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import NavbarSub from '../../../components/navbar/sub/navbarSub'
import { Box, createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import JobSeekers from '../../../components/jobsComponents/jobSeekers/jobSeekers';

const Jobs = () => {
  const pageName = "Jobs"
  const [currentPath, setCurrentPath] = useState('')

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
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isComputer = useMediaQuery(theme.breakpoints.up('md'));

  const links = [
    {
      id: 1,
      title: "Search jobs",
      url: "/jobs",
    },
    {
      id: 2,
      title: "Upload your CV",
      url: "/jobs/cv-upload",
    }
  ]; 

  return (
    <div className={styles.jobsContainer}>
      <Helmet>
        <title>Jobs</title>
        <meta name='description' content='' />
      </Helmet>

      <Box className={styles.jobSearchContainer}>
        <JobSeekers links={links} currentPath={currentPath} pageName={pageName}/>
      </Box>
    </div>
  )
}

export default Jobs