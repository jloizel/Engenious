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
    <div className={styles.employersContainer}>
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
              Find the right people to help your business thrive - today and in the future. We provide a full range of flexible Talent Services, so whatever your workforce needs are, we are well placed to help. It&apos;s time to pioneer through your people.
            </div>
            <button className={styles.button}>
              Hire talent
            </button>
          </div>          
        </Box>
        <Box className={styles.servicesContainer}>
          <div className={styles.servicesTextContainer}>
            <div className={styles.servicesHeader}>
              Adaptable. Impactful. Unmatched.
            </div>
            <div className={styles.servicesText}>
              Whether you need to scale up your teams with new talent or seek specialized skills to quickly adapt your business, our comprehensive talent services deliver results. We go the extra mile to find the perfect fit for you.
            </div>
          </div>
          { isComputer ? <Services/> : <ServicesSlider/> }
        </Box>
        <Box className={styles.stats}>
          <div className={styles.imageContainer}>
            <img src="./employers/5.jpg" alt="Image" className={styles.statsImage} />
            <div className={styles.gradientLine}></div>
          </div>
          <div className={styles.statsHeader}>
            <span>Helping your business </span>
            <span style={{color: "#008489"}}>evolve.</span>
          </div>
          <div className={styles.statsText}>
            <li>Placements with over <span className={styles.statsText2}>100</span> clients</li>
            <li>Over <span className={styles.statsText2}>1000</span> candidates</li>
            <li><span className={styles.statsText2}>10+ </span> years of experience</li>

          </div>
        </Box>
      </Box>
    </div>
  )
}

export default Employers
