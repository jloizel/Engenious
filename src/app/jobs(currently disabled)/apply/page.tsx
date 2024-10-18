"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import NavbarMain2 from '../../../../components/navbar/main/navbarMain2'
import { createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import { JobProvider, useJobContext } from '../../../../components/jobContext/jobContext'
import ApplyForm from '../../../../components/applyForm/applyForm'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import JobCardsContainer from '../../../../components/jobsComponents/jobCard/jobCardsContainer'

const Apply: React.FC = () => {
  const pageName = "Apply"
  
  const [currentPath, setCurrentPath] = useState('')
  const [messageSent, setMessageSent] = useState<boolean>(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname)
    }
  }, [])

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTabletOrBelow= useMediaQuery(theme.breakpoints.down('md'));

  const handleSendMessage = () => {
    setMessageSent(true)
  }

  return (
    <JobProvider>
      <div className={styles.submitCVContainer}>
        <Helmet>
          <title>Apply</title>
          <meta name='description' content='' />
        </Helmet>
        <NavbarMain2/>
        {!isTabletOrBelow && !messageSent && (<div className={styles.pageHeader}></div>)}
        {!messageSent && (
          <div className={styles.submissionContainer}>
            <div className={styles.submitForm}>
              <a className={styles.buttonContainer} href="/jobs/details" style={{textDecoration: "none"}}>
                <button className={styles.button}>
                  <KeyboardArrowRightIcon className={styles.icon}/>
                  View job details
                </button>
              </a>
              <ApplyForm handleSendMessage={handleSendMessage} messageSent={messageSent}/>
            </div>
          </div>
        )}
        {messageSent && (
          <div className={styles.successMessageContainer}>
            <div className={styles.successMessage}>
              Thank you for your message, we will be in contact as soon as possible.
            </div>
          </div>
        )}
      </div>
    </JobProvider>
  )
}

export default Apply