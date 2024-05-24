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

const OurServices = () => {
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
      url: "/about",
    },
    {
      id: 2,
      title: "Our work",
      url: "/about/our-work",
    },
    {
      id: 3,
      title: "Our story",
      url: "/about/our-story",
    },
    {
      id: 4,
      title: "Our purpose",
      url: "/about/our-purpose",
    },
    {
      id: 5,
      title: "Our team",
      url: "/about/our-team",
    }
  ]; 


  return (
    <div className={styles.storyContainer}>
      <Helmet>
        <title>Our Story</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour="#00617C"/>
      <ContractSlider/>
      <Box className={styles.expertise}>
        <div className={styles.expertiseHeader}>
          <span style={{color: "#008489"}}>Helping your business</span>
          <span> evolve across: </span>
        </div>
        {/* <div className={styles.expertiseText}>
          Our reputation is built on finding you the right people. Talented people who stand out, who make a real difference. With the right people, your business can realise its ambitions and go further than you ever thought possible.
        </div> */}
        <a href="/employers/expertise" className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardImageContainer}>
              <img src="/employers/6.jpg" alt="Image" className={styles.cardImage} />
            </div>
            <div className={styles.cardText}>
              Construction Recruitment
            </div>
          </div>
        </a>
      </Box>
      <Box className={styles.service} id="permanent-recruitment">
        <div className={styles.serviceHeader}>
        <span>Our permanent recruitment process: </span>
          <span style={{color: "#008489"}}>Recruit. Develop. Succeed.</span>
        </div>
        <div className={styles.serviceText}>
          Our consultants take a consultative approach to your hiring, taking the time to establish exactly what your business is looking to achieve. They become your talent advisors, partnering with you to get it right. Every time.
        </div>
        <div className={styles.serviceText}>
          We find you talented people to take your business beyond expectations. But we also look at things more holistically, mapping the skills you need and the salaries to pay. We have all the market intelligence to help you build a compelling attraction strategy.
          <a href="/employers/submit-vacancy" style={{textDecoration: "none"}}>
            <button className={styles.button}>
              Hire talent
            </button>
          </a>
        </div>
      </Box>
      <Box className={styles.service} id="contract-recruitment">
        <div className={styles.serviceHeader}>
        <span>Our contract recruitment process: </span>
          <span style={{color: "#8CD87A"}}>Right skills, right time.</span>
        </div>
        <div className={styles.serviceText}>
          We &apos;ve been helping companies like yours hire contract and temporary staff for over 10 years. We &apos;re always on top of regulatory changes and know what works best, so you don&apos;t have to worry.
        </div>
        <div className={styles.serviceText}>
          Our dedicated team provides a responsive, personalised service - taking the stress and risk away from you and your teams.
          <a href="/employers/submit-vacancy" style={{textDecoration: "none"}}>
            <button className={styles.button}>
              Hire talent
            </button>
          </a>
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
        <a href="/consultation" style={{textDecoration: "none"}} className={styles.consultationButtonAnchor}>
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

export default OurServices