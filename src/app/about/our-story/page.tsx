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
import StorySlider from '../../../../components/storySlider/storySlider';


const OurStory = () => {
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
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath}/>
      <StorySlider/>
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
        <div className={styles.aboutBox} id="where-we-come-from">
          <div className={styles.headerContainer}>
            <div className={styles.header}>
              <span>Where we&apos;ve come from.</span>
            </div>
            {/* <div className={styles.subHeader}>
              From day one, we&apos;ve had high expectations. High expectations of ourselves, and high expectations for the people we work with.
            </div> */}
          </div>
          <div className={styles.imageContainer1}>
            <img src="/about/ourStory/4.jpg" alt="Image" className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.text1}>
              <span>Our journey began with a simple yet profound belief: every individual possesses untapped potential waiting to be discovered and nurtured. Founded in the heart of innovation, our recruitment company emerged as a beacon of hope for both candidates and employers alike. From humble beginnings, we embarked on a mission to redefine the landscape of talent acquisition, guided by principles of integrity, empathy, and a relentless pursuit of excellence.</span>
              <span>Driven by a deep understanding of the transformative power of talent, we forged partnerships with organizations seeking not just employees, but visionary leaders, and with individuals yearning not just for jobs, but for opportunities to thrive. Our early days were characterized by perseverance in the face of adversity, as we navigated the complexities of an ever-evolving market, fueled by a passion to connect the right talent with the right opportunities.</span>
            </div>
          </div>
        </div>
      </Box>
      <Box>
        <div className={styles.aboutBox2} id="where-we-are-today">
          <div className={styles.textContainer}>
            <div className={styles.header}>
              <span>Where we are today.</span>
            </div>
            {/* <div className={styles.subHeader}>
              We are not a company that sits still. Our goal has always been to best serve our customers.
            </div> */}
            <div className={styles.text2}>
              <span>Today, we stand as a testament to the enduring power of resilience and innovation. With years of experience under our belt, our recruitment company has evolved into a trusted partner for companies navigating the complexities of talent acquisition in a rapidly changing world. Our commitment to excellence remains unwavering, as we continue to leverage cutting-edge technology and industry insights to deliver unparalleled solutions to our clients and candidates.</span>
              <span>Driven by a spirit of adaptability and a forward-thinking mindset, we have expanded our reach beyond borders, serving clients across industries and geographies. Our success lies not just in the numbers, but in the lives we&apos;ve touched and the futures we&apos;ve shaped. As we look to the horizon, we remain steadfast in our dedication to empowering individuals and organizations to unlock their full potential, propelling us towards a future defined by limitless possibilities.</span>
            </div>
          </div>
          <div className={styles.imageContainer2}>
            <img src="/about/ourStory/2.jpg" alt="Image" className={styles.image} />
          </div>
        </div>
      </Box>
    </div>
  )
}

export default OurStory