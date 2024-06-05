"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import NavbarMain2 from '../../../../components/navbar/main/navbarMain2'
import ContactForm from '../../../../components/contactForm/contactForm'
import { HiMiniArrowLongDown } from "react-icons/hi2";
import { createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import ContactMap from '../../../../components/contactMap/contactMap'
import SubmitCVForm from '../../../../components/submitCVForm/submitCVForm'
import NavbarSub from '../../../../components/navbar/sub/navbarSub'
import { useLocation } from 'react-router-dom'
import { JobProvider, useJobContext } from '../../../../components/jobContext/jobContext'
import ApplyForm from '../../../../components/submitCVForm/applyCVForm'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { LuClock3 } from "react-icons/lu";
import { GiMoneyStack } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import data from '../../../../components/jobsComponents/jobs.json'
import JobDetails from '../../../../components/jobsComponents/jobDetails/jobDetails'

const Details = () => {
  const pageName = "Details"  
  
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
        </div>
      </div>
    </JobProvider>
  )
}

export default Details