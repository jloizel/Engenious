"use client"

import React, { useState } from 'react'
import styles from "./page.module.css"
import NavbarSub from '../../../../components/navbar/sub/navbarSub'
import { Box, createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Services from '../../../../components/services/services';
import ServicesSlider from '../../../../components/services/servicesSlider';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


const OurWork = () => {
  const pageName = "About"
  const currentPath = location.pathname;
  

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
      url: "/our-story",
    },
    {
      id: 4,
      title: "Our purpose",
      url: "/our-purpose",
    },
    {
      id: 5,
      title: "Join the team",
      url: "/join",
    }
  ]; 

  console.log(links)

  return (
    <div className={styles.aboutContainer}>
      <Helmet>
        <title>Our Work</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath}/>
      <Box className={styles.aboutContent}>
        <Box className={styles.headerContainer}>
          <div className={styles.headerImageContainer}>
            <img src="/aboutPage/1.jpg" alt="Image" className={styles.headerImage} />
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
            <div className={styles.header}>
              <span >A full range of </span>
              <span style={{color: "#008489"}}>Talent Services..</span>
            </div>
            <p className={styles.text}>Whether you need new people to scale up your teams, or you&apos;re looking for specific skills to help your business react fast, our full range of talent services<i> will</i> deliver. We Go Beyond to find you the right people.</p>
          </div>
          { isComputer ? <Services/> : <ServicesSlider/> }
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



        
      </Box>
    </div>
  )
}

export default OurWork