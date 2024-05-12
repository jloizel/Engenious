"use client"

import React, { useState } from 'react'
import styles from "./page.module.css"
import NavbarSub from '../../../components/navbar/sub/navbarSub'
import { Box, createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const About = () => {
  const pageName = "About"
  // const location = useLocation();
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
      url: "/about/our-story",
    },
    {
      id: 4,
      title: "Our purpose",
      url: "/about/our-purpose",
    },
    {
      id: 5,
      title: "Join the team",
      url: "/about/join",
    }
  ]; 

  return (
    <div className={styles.aboutContainer}>
      <Helmet>
        <title>About</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath}/>
      <Box className={styles.aboutContent}>
        <Box className={styles.headerContainer}>
          <div className={styles.headerImageContainer}>
            <img src="./about/header.jpg" alt="Image" className={styles.headerImage} />
          </div>
          <div className={styles.headerTextContainer}>
            <div className={styles.mainHeader}>
              <span style={{color:'#09B089'}}>About</span>
              <span style={{color:'white'}}> us.</span>
            </div>
            <div className={styles.mainText}>
              We are a global talent services company, offering the full spectrum of solutions to meet your resourcing needs. Each and every one of our employees shares a belief in the power of helping others realise their goals.
            </div>
          </div>
        </Box>
        <Box>
          <div className={styles.aboutBox}>
            <div className={styles.imageContainer1}>
              <img src="/about/1.jpg" alt="Image" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.header}>
                <span>Our</span>
                <span style={{color:'#09B089'}}> work.</span>
              </div>
              <div className={styles.text}>
                Our world revolves around talented people. Company shapers. Relationship builders. People who make a difference.
              </div>
              <button className={styles.button}>
              More about what we do
            </button>
            </div>
          </div>
        </Box>
        <Box>
          <div className={styles.aboutBox} style={{background: "#EFF0F0"}}>
            <div className={styles.imageContainer}>
              <img src="/about/2.jpg" alt="Image" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.header}>
                <span>Our</span>
                <span style={{color:'#09B089'}}> story.</span>
              </div>
              <div className={styles.text}>
                Our devotion to go beyond expectations in everything we do has helped us establish a strong reputation over the years.
              </div>
              <button className={styles.button}>
                More about our story
              </button>
            </div>
          </div>
        </Box>
        <Box>
          <div className={styles.aboutBox}>
            <div className={styles.imageContainer1}>
              <img src="/about/3.jpg" alt="Image" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.header}>
                <span>Our</span>
                <span style={{color:'#09B089'}}> purpose.</span>
              </div>
              <div className={styles.text}>
                We&apos;re in the business of improving lives. Our dedication to candidates and clients is what keeps us going everyday.
              </div>
              <button className={styles.button}>
                More about our purpose
              </button>
            </div>
          </div>
        </Box>
        <Box>
          <div className={styles.aboutBox} style={{background:'#008489'}}>
            <div className={styles.imageContainer2}>
              <img src="/about/team.jpg" alt="Image" className={styles.image2} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.header}>
                <span style={{color:'white'}}>Careers</span>
              </div>
              <div className={styles.text2}>
                We put our people first, so our people go further. Why not further your career with us?
              </div>
              <button className={styles.button}>
                Work at Engenious
              </button>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  )
}

export default About