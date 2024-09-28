"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import { Box, createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import ConsultationForm from '../../../../components/consultationForm/consultationForm';
import NavbarSub from '../../../../components/navbar/sub/navbarSub';
import { HiMiniArrowLongDown } from "react-icons/hi2";

const SubmitVacancy = () => {
  const pageName = "Employers"
  
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
        sm: 768,
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
      title: "Overview",
      url: "/employers",
    },
    {
      id: 2,
      title: "Candidate assessments",
      url: "/employers/candidate-assessments",
    },
    // {
    //   id: 3,
    //   title: "Our expertise",
    //   url: "/employers/our-expertise",
    // },
    {
      id: 4,
      title: "Submit a vacancy",
      url: "/employers/submit-vacancy",
    }
  ]; 

  return (
    <div className={styles.employersContainer}>
      <Helmet>
        <title>Submit Vacancy</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour="#00617C"/> 
      <div className={styles.pageHeader}>
        <div className={styles.header}>Submit a vacancy</div>
          <div className={styles.headerText}>
            Feel free to send us a message! We’re always available to chat and explore how we can support your goals.
          </div>
        <HiMiniArrowLongDown className={styles.arrow} />
      </div>   
      <Box className={styles.message}>
          <div className={styles.messageLeft}>
            <span>
              Why not send us a quick message?
            </span>
          </div>
          <div className={styles.messageRight}>
            <span>
              As soon as we hear from you, our team will arrange a convenient time to discuss your hiring objectives in detail. We pride ourselves on delivering exceptional customer service and are always on hand to ensure we fully understand your requirements. Plus, there’s no fee unless you decide to hire one of our candidates, so there’s nothing to lose and everything to gain!
            </span>
            <span>
              Simply share your details below, and the team at Engenious Recruitment will get in touch at a time that suits you. While there’s no obligation to use our service, we’re confident our commitment to being readily available and supporting your hiring goals will make a positive impact.
            </span>
          </div>
        </Box>
      <Box className={styles.employersContent}>
        <ConsultationForm/>
      </Box>
    </div>
  )
}

export default SubmitVacancy
