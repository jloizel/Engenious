"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import NavbarSub from '../../../../components/navbar/sub/navbarSub'
import { Box, createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Testimonials from '../../../../components/testimonials/testimonials';
import ContractSlider from '../../../../components/contractSlider/contractSlider';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const OurExpertise = () => {
  const pageName = "About"
  
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
    <div className={styles.storyContainer}>
      <Helmet>
        <title>Our Story</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour="#00617C"/>
      <Box className={styles.expertise}>
        <div className={styles.expertiseTextContainer}>
          <div className={styles.expertiseHeader}>
            <span style={{color: "#008489"}}>Construction</span>
            <span> Recruitment. </span>
          </div>
          <div className={styles.expertiseText}>
            Our Construction Recruitment service specializes in finding top-tier professionals for the construction industry. Whether you need project managers, engineers, or skilled tradespeople, we ensure every candidate is the right fit for your project. We are committed to helping you build a capable team that delivers on time and within budget.
          </div>
          <a href="/employers/submit-vacancy" style={{textDecoration: "none"}} className={styles.consultationButtonAnchor1}>
            <button className={styles.button}>
              Hire talent
            </button>
          </a>
        </div>
        <div className={styles.cardImageContainer}>
          <img src="/employers/6.jpg" alt="Image" className={styles.cardImage} />
        </div>
      </Box>
      <Box className={styles.listContainer}>
        <div className={styles.listHeader}>
          Our recruiters can help you hire across...
          <div className={styles.list}>
            <div className={styles.listSubHeader}>
              Commercial Roles
            </div>
            <li>Estimators</li>
            <li>Quantity Surveyors</li>
            <li>Senior/ Managing Surveyors</li>
            <li>Commercial Managers</li>
          </div>
          <div className={styles.list}>
            <div className={styles.listSubHeader}>
              Production Roles
            </div>
            <li>Site Managers</li>
            <li>Site Agents</li>
            <li>Site Engineers</li>
            <li>Foreman</li>
            <li>Contracts Managers</li>
            <li>Operations Managers</li>
          </div>  
          <div className={styles.list}>
            <div className={styles.listSubHeader}>
              Trades & Labour
            </div>
            <li>Labourers</li>
            <li>Groundworkers</li>
            <li>Steel fixers</li>
            <li>Carpenters</li>
            And many more
          </div>  
        </div>
      </Box>
      
      <Box className={styles.quoteContainer}>
        <div className={styles.textBox}>
          <div className={styles.quote}>
            <div className={styles.quotationMark1}>
              <FaQuoteLeft/>
            </div>
            <div className={styles.quoteBox}>
              <div className={styles.quoteText}>
                Be the unicorn in a sea of donkeys; sprinkle your magic dust of innovation and sparkle your way to the rainbow of profits!
              </div>
              <div className={styles.quoter}>
                - Philippa Dickinson, CEO
              </div>
            </div>
            <div className={styles.quotationMark2}>
              <FaQuoteRight/>
            </div>
          </div>
        </div>
      </Box>
      <Box className={styles.consultation}>
        <div className={styles.consultationHeader}>
          <span>Not sure where to start?</span>
        </div>
        <div className={styles.consultationText}>
          In recent years, the working world has transformed dramatically. Companies&apos; approaches to recruitment have changed too. Whether you&apos;re looking for contractors or temps who are on-site, hybrid or fully remote, we&apos;ll find the right people for you.
        </div>
        <a href="/consultation" style={{textDecoration: "none"}} className={styles.consultationButtonAnchor2}>
            <button className={styles.consultationButton}>
              Hire talent <KeyboardArrowRightIcon/>
            </button>
          </a>
      </Box>
      <section className={styles.testimonials}>
        <div className={styles.testimonialsContent}>
          <div className={styles.header}>
            <span style={{color: "#008489"}}>Talented people </span>
            <span >are at the centre of everything we do.</span>
          </div>
        </div>
        <Testimonials/>
      </section>
    </div>
  )
}

export default OurExpertise