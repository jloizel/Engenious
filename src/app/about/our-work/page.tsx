"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import NavbarSub from '../../../../components/navbar/sub/navbarSub'
import { Box, createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Services from '../../../../components/services/services';
import ServicesSlider from "../../../../components/services/servicesSlider";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import About from '../../../../components/about/about';
import AboutSlider from '../../../../components/about/aboutSlider';
import Testimonials from '../../../../components/testimonials/testimonials';


const OurWork = () => {
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
    <div className={styles.workContainer}>
      <Helmet>
        <title>Our Work</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath}/>
      <Box className={styles.headerContent}>
        <Box className={styles.headerContainer}>
          <div className={styles.headerImageContainer}>
            <img src="/about/1.jpg" alt="Image" className={styles.headerImage} />
          </div>
          <div className={styles.headerTextContainer}>
            <div className={styles.mainHeader}>
              <span style={{color:'#09B089'}}>Our</span>
              <span style={{color:'white'}}> work.</span>
            </div>
            <div className={styles.mainText}>
            Helping businesses evolve through their people. Helping professionals evolve through their careers. We&apos;re relentlessly committed. We&apos;re endlessly ambitious. We empower you to push yourself further. 
            </div>
          </div>
        </Box>
        <Box className={styles.services}>
          <div className={styles.servicesContent}>
              <div className={styles.header1}>
                <span >A full range of </span>
                <span style={{color: "#008489"}}>Talent Services..</span>
              </div>
              <p className={styles.text}>Whether you need new people to scale up your teams, or you&apos;re looking for specific skills to help your business react fast, our full range of talent services<i> will</i> deliver. We Go Beyond to find you the right people.</p>
          </div>
        </Box>
        <div className={styles.services}>
          { isComputer ? <Services/> : <ServicesSlider/> }
        </div>
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
        <Box>
          <div className={styles.aboutBox}>
            <div className={styles.imageContainer1}>
              <img src="/about/ourWork/1.jpg" alt="Image" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.header2}>
                <span>The best opportunities, taking your career further.</span>
              </div>
              <div className={styles.text2}>
                From providing insightful advice and expert guidance on your next career move, to matching you with the right role and organisation where you can realise your ambitions.  
              </div>
              <button className={styles.button}>
                Search for a job
              </button>
            </div>
          </div>
        </Box>
        <section className={styles.about}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutHeader} style={{display: "flex", flexDirection: "column"}}>
              <span>Investing time in people; </span>
              <span style={{color: "#008489"}}>it&apos;s in our DNA.</span>
            </div>
          </div>
          { isComputer ? <About/> : <AboutSlider/> }
        </section>
        <Box>
          <div className={styles.aboutBox}>
            <div className={styles.imageContainer2}>
              <img src="/about/ourWork/2.jpg" alt="Image" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.header2}>
                <span>Become part of our journey.</span>
              </div>
              <div className={styles.text2}>
                From providing insightful advice and expert guidance on your next career move, to matching you with the right role and organisation where you can realise your ambitions.  
              </div>
              <a href="/jobs/cv-upload" style={{textDecoration: "none"}}>
                <button className={styles.button}>
                  Work at Engenious
                </button>
              </a>
            </div>
          </div>
        </Box>
        <section className={styles.testimonials}>
        <div className={styles.testimonialsContent}>
          <div className={styles.header1}>
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

export default OurWork