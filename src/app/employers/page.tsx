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
import AboutInfo from '../../../components/about/aboutInfo';
import AboutSlider from '../../../components/about/aboutSlider';


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
        <title>Employers</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour='white'/>    
      <Box className={styles.employersContent}>
        <Box className={styles.headerContainer}>
          <div className={styles.headerImageContainer}>
            <div className={styles.imageOverlay}></div>
            <img src="./employers/header.jpg" alt="Image" className={styles.headerImage} />
          </div>
          <div className={styles.headerTextContainer}>
            <div className={styles.mainHeader}>
              Find the talent your business needs.
            </div>
            <div className={styles.mainText}>
              We help you connect with skilled professionals who can make an immediate impact. Whether you're filling short-term gaps or building long-term teams, our talent solutions are designed to meet your specific needs.
            </div>
            <a href="/employers/submit-vacancy" style={{textDecoration: "none"}}>
              <button className={styles.button}>
                Hire talent
              </button>
            </a>
          </div>          
        </Box>
        {/* <Box className={styles.servicesContainer}>
          <div className={styles.servicesTextContainer}>
            <div className={styles.servicesHeader}>
              Adaptable. Impactful. Unmatched.
            </div>
            <div className={styles.servicesText}>
              Whether you need to scale up your teams with new talent or seek specialised skills to quickly adapt your business, our comprehensive talent services deliver results. We go the extra mile to find the perfect fit for you.
            </div>
          </div>
          { isComputer ? <Services/> : <ServicesSlider/> }
        </Box> */}
        <Box className={styles.stats}>
            {/* <div className={styles.imageContainer}>
              <img src="./sectors/header.jpg" alt="Image" className={styles.statsImage} />
              <div className={styles.gradientLine}></div>
            </div> */}
            <div className={styles.statsTextContainer}>
              <div className={styles.statsHeader}>
                <span>Helping your business </span>
                <span style={{color: "#008489"}}>evolve.</span>
              </div>
              {/* <div className={styles.statsText}>
                <li>Placements with over <span className={styles.statsText2}>100</span> clients</li>
                <li>Over <span className={styles.statsText2}>1000</span> candidates</li>
                <li><span className={styles.statsText2}>15+ </span> years of coexperience</li>
              </div> */}
              <section className={styles.about}>
                { isComputer ? <AboutInfo/> : <AboutSlider/> }
              </section>
            </div>
        </Box>
        <Box className={styles.expertise}>
          <div className={styles.expertiseHeader}>
            <span>Confident candidate </span>
            <span style={{color: "#008489"}}>evaluation.</span>
          </div>
          <div className={styles.expertiseText}>
            At Engenious Recruitment, we offer psychometric testing and a detailed candidate evaluation alongside our thorough screening process, helping you confidently assess a candidate’s suitability for their role. Click below to find out more.
          </div>
          <a href="/employers/candidate-assessments" className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.cardImageContainer}>
                <img src="./employers/6.jpg" alt="Image" className={styles.cardImage} />
              </div>
              <div className={styles.cardText}>
                Candidate Assessments
              </div>
            </div>
          </a>
        </Box>
        <Box className={styles.consultation}>
          <div className={styles.consultationHeader}>
            <span>Not sure where to start?</span>
            <span>Reach out.</span>
          </div>
          <a href="/contact" style={{textDecoration: "none"}}>
            <button className={styles.consultationButton}>
              Arrange free consultation <KeyboardArrowRightIcon/>
            </button>
          </a>
        </Box>
        <section className={styles.testimonials}>
          <div className={styles.testimonialsContent}>
            <div className={styles.testimonialsHeader}>
              <span style={{color: "#008489"}}>Talented people </span>
              <span >are at the centre of everything we do.</span>
            </div>
          </div>
          <Testimonials/>
        </section>
      </Box>
    </div>
  )
}

export default Employers
