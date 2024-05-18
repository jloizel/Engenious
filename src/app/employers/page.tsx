"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import NavbarSub from '../../../components/navbar/sub/navbarSub'
import { Box, createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import Services from '../../../components/services/services';
import ServicesSlider from '../../../components/services/servicesSlider';

const Employers = () => {
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
    <div className={styles.aboutContainer}>
      <Helmet>
        <title>Employers</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour='white'/>    
      <Box className={styles.employersContent}>
        <Box className={styles.headerContainer}>
          <div className={styles.headerImageContainer}>
            <div className={styles.imageOverlay}></div>
            <img src="./employers/3.jpg" alt="Image" className={styles.headerImage} />
          </div>
          <div className={styles.headerTextContainer}>
            <div className={styles.mainHeader}>
              It&apos;s time to find your human edge.
            </div>
            <div className={styles.mainText}>
              We are a global talent services company, offering the full spectrum of solutions to meet your resourcing needs. Each and every one of our employees shares a belief in the power of helping others realise their goals.
            </div>
          </div>
        </Box>
        <Box className={styles.servicesContainer}>
          { isComputer ? <Services/> : <ServicesSlider/> }
        </Box>
      </Box>
    </div>
  )
}

export default Employers
