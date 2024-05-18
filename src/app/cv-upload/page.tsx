"use client"

import React from 'react'
import styles from "./page.module.css"
import NavbarMain2 from '../../../components/navbar/main/navbarMain2'
import ContactForm from '../../../components/contactForm/contactForm'
import { HiMiniArrowLongDown } from "react-icons/hi2";
import { createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import ContactMap from '../../../components/contactMap/contactMap'
import SubmitCVForm from '../../../components/submitCVForm/submitCVForm'

const CVUpload = () => {

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

  return (
    <div className={styles.submitCVContainer}>
      <Helmet>
        <title>CV upload</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarMain2/>
      <div className={styles.pageHeader}>
        <div className={styles.header}>CV Upload</div>
          <div className={styles.headerText}>If you&apos;d like to send your CV directly to our team, fill out the form below.</div>
        <HiMiniArrowLongDown className={styles.arrow} />
      </div>
      <div className={styles.submissionContainer}>
        <div className={styles.topContainer}>
          <div className={styles.submitForm}>
            <SubmitCVForm />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CVUpload