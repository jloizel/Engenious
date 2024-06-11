"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import NavbarSub from '../../../../components/navbar/sub/navbarSub'
import { Box, createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


const OurPurpose = () => {
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
    <div className={styles.purposeContainer}>
      <Helmet>
        <title>Our Purpose</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour="#00617C"/>
      <Box className={styles.headerContent}>
        <Box className={styles.headerContainer}>
          <div className={styles.headerImageContainer}>
            <img src="/about/ourPurpose/2.jpg" alt="Image" className={styles.headerImage} />
          </div>
          <div className={styles.headerTextContainer}>
            <div className={styles.mainHeader}>
              <span style={{color:'#09B089'}}>Our</span>
              <span style={{color:'white'}}> purpose.</span>
            </div>
            <div className={styles.mainText}>
              We&apos;re in the business of improving lives. Our dedication to candidates and clients is what keeps us going everyday.
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
        <Box>
          <div className={styles.aboutBox}>
            <div className={styles.imageContainer1}>
              <img src="/about/ourPurpose/1.jpg" alt="Image" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.header}>
                <span>Empowering Success: Our Vision, Values, and Mission</span>
              </div>
              <div className={styles.text}>
                <span>Welcome to Engenious, where talent meets opportunity and dreams find their wings! We are more than just a recruitment company; we are your strategic partner in navigating the dynamic landscape of the job market.</span> 
                <span>At Engenious, our core values are the guiding stars that illuminate our path forward. We believe in integrity, transparency, and a relentless commitment to excellence. These values form the bedrock of our operations, shaping every interaction and decision we make.</span> 
                <span>Our aim is simple: to connect exceptional talent with outstanding opportunities, fostering mutually beneficial relationships that drive success for both candidates and clients. Whether you&apos;re a skilled professional seeking your next career adventure or a company in pursuit of top-tier talent, we&apos;re here to make the perfect match.</span> 
                <span>We understand that every individual and organization is unique, which is why we take a personalized approach to recruitment. By truly understanding the needs, goals, and aspirations of our clients and candidates, we ensure that every match is not just a transaction, but a transformative partnership.</span> 
                <span>At Engenious, success is not measured solely by placements made, but by the lasting impact we have on the lives and careers of those we serve. We are dedicated to empowering individuals to reach their full potential and helping businesses thrive by building high-performing teams.</span> 
                <span>Join us on this journey as we redefine recruitment, one exceptional match at a time. Together, let&apos;s turn aspirations into achievements and dreams into reality.</span>  
              </div>
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
                At Engenious Recruitment, our priority is our people, enabling them to excel and reach new heights. Join our team, and together, we&apos;ll surpass expectations and redefine success
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
            <div className={styles.imageContainer2}>
              <img src="/about/ourPurpose/3.jpg" alt="Image" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.header}>
                <span>Become part of our journey.</span>
              </div>
              <div className={styles.text}>
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
      </Box>
    </div>
  )
}

export default OurPurpose