"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import NavbarMain2 from '../../../../components/navbar/main/navbarMain2'
import ContactForm from '../../../../components/contactForm/ContactForm'
import { HiMiniArrowLongDown } from "react-icons/hi2";
import { createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import ContactMap from '../../../../components/contactMap/contactMap'
import SubmitCVForm from '../../../../components/submitCVForm/submitCVForm'
import NavbarSub from '../../../../components/navbar/sub/navbarSub'
import { useLocation } from 'react-router-dom'
import { JobProvider, useJobContext } from '../../../../components/jobContext/jobContext'

const CVUpload = () => {
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
    <JobProvider>
      <div className={styles.submitCVContainer}>
        <Helmet>
          <title>CV Upload</title>
          <meta name='description' content='' />
        </Helmet>
        <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour="#00617C"/>
        <div className={styles.pageHeader}>
          <div className={styles.header}>CV Upload</div>
            <div className={styles.headerText}>If you&apos;d like to send your CV directly to our team, fill out the form below.</div>
          <HiMiniArrowLongDown className={styles.arrow} />
        </div>
        <div className={styles.submissionContainer}>
          <div className={styles.submitForm}>
            <SubmitCVForm />
          </div>
        </div>
      </div>
    </JobProvider>
  )
}

export default CVUpload