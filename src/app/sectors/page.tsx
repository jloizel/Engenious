"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import NavbarSub from '../../../components/navbar/sub/navbarSub'
import { Box, createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import Services from '../../../components/services/services';
import ServicesSlider from '../../../components/services/servicesSlider';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Testimonials from '../../../components/testimonials/testimonials';
import Image from 'next/image';
import SectorsSlider from '../../../components/sectors/sectorsSlider';
import Values from '../../../components/values/values';


const Sectors = () => {
  const pageName = "Sectors"
  
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
      url: "/sectors",
    },
    {
      id: 2,
      title: "Construction & House Building",
      url: "/sectors/construction-housebuilding",
    },
    {
      id: 3,
      title: "Maintenance",
      url: "/employers/our-expertise",
    },
    {
      id: 4,
      title: "Civil Engineering",
      url: "/employers/submit-vacancy",
    },
    {
      id: 5,
      title: "Trades & Labour",
      url: "/employers/submit-vacancy",
    },
    {
      id: 6,
      title: "Search & Select",
      url: "/employers/submit-vacancy",
    }
  ]; 

  return (
    <div className={styles.sectorsContainer}>
      <Helmet>
        <title>Sectors</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour='white'/>    
      <Box className={styles.sectorsContent}>
        <Box className={styles.headerContainer}>
          <div className={styles.headerImageContainer}>
            <div className={styles.imageOverlay}></div>
            <img src="./sectors/header.jpg" alt="Image" className={styles.headerImage} />
          </div>
          <div className={styles.headerTextContainer}>
            <div className={styles.mainHeader}>
              Industry-Specific Talent Solutions
            </div>
            <div className={styles.mainText}>
              Discover the skilled professionals who will drive your business forward. We specialize in recruiting for a range of sectors, ensuring you have the right people to meet your industry's unique demands, today and in the future. Let us help you build a workforce that leads the way.
            </div>
            <a href="/employers/submit-vacancy" style={{textDecoration: "none"}}>
              <button className={styles.button}>
                Hire talent
              </button>
            </a>
          </div>          
        </Box>
        <div className={styles.expertiseContent}>
          <div className={styles.expertiseHeader}>
            <span>Our recruitment </span>
            <span style={{color: "#008489"}}>expertise.</span>
          </div>
          <div className={styles.expertiseText}>
            Our reputation is built on finding you the right people. Talented people who stand out, who make a real difference. With the right people, your business can realise its ambitions and go further than you ever thought possible.
          </div>
        </div>
        <SectorsSlider/>
        <Box className={styles.consultation}>
          <div className={styles.consultationHeader}>
            <span>Not sure where to start? Reach out.</span>
          </div>
          <a href="/contact" style={{textDecoration: "none"}}>
            <button className={styles.consultationButton}>
              Arrange a consultation <KeyboardArrowRightIcon/>
            </button>
          </a>
        </Box>
        <Values/>
        <section className={styles.testimonials}>
          <div className={styles.testimonialsContent}>
            <div className={styles.testimonialsHeader}>
              {/* <span style={{color: "#008489"}}>Talented people </span> */}
              <span >We Are Trusted For A Reason</span>
            </div>
          </div>
          <Testimonials/>
        </section>
      </Box>
    </div>
  )
}

export default Sectors
