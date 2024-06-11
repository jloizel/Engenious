"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import { Box, createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import ConsultationForm from '../../../../components/consultationForm/consultationForm';
import NavbarSub from '../../../../components/navbar/sub/navbarSub';
import { HiMiniArrowLongDown } from "react-icons/hi2";

const SubmitVacancy = () => {
  const pageName = "Submit Vacancy"
  
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
      title: "Our services",
      url: "/employers/our-services",
    },
    {
      id: 3,
      title: "Our expertise",
      url: "/employers/our-expertise",
    },
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
          <div className={styles.headerText}>We go above and beyond to find you the right skills and people.</div>
        <HiMiniArrowLongDown className={styles.arrow} />
      </div>   
      <Box className={styles.employersContent}>
        <ConsultationForm/>
      </Box>
    </div>
  )
}

export default SubmitVacancy
