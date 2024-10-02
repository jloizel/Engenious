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
import About from '../../../../components/about/aboutInfo';
import AboutSlider from '../../../../components/about/aboutSlider';
import Testimonials from '../../../../components/testimonials/testimonials';
import Team from '../../../../components/team/team';
import Image from 'next/image';


const OurTeam = () => {
  const pageName = "Our Team"
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
    // {
    //   id: 3,
    //   title: "Our story",
    //   url: "/about/our-story",
    // },
    // {
    //   id: 4,
    //   title: "Our purpose",
    //   url: "/about/our-purpose",
    // },
    {
      id: 5,
      title: "Our team",
      url: "/about/our-team",
    }
  ];  

  return (
    <div className={styles.teamContainer}>
      <Helmet>
        <title>Our Team</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour="#00617C"/>
      <Box className={styles.headerContent}>
        <Box className={styles.headerContainer}>
          <div className={styles.headerImageContainer}>
            <img src="/about/ourTeam/1.jpg" alt="Image" className={styles.headerImage} />
          </div>
          <div className={styles.headerTextContainer}>
            <div className={styles.mainHeader}>
              <span style={{color:'#008489'}}>Our</span>
              <span style={{color:'white'}}> team.</span>
            </div>
            <div className={styles.mainText}>
              Meet the driving force behind Engenious Recruitment. Our team is composed of passionate and experienced recruiters who are dedicated to excellence. Led by our founder with over 12 years of industry experience, we bring a wealth of knowledge and a personal touch to every recruitment process. Our energetic and dynamic team thrives on delighting our clients and candidates alike. Get to know the people who make Engenious Recruitment a trusted partner in the construction industry.
            </div>
          </div>
        </Box>
        <Team/>
        <Box className={styles.quoteContainer}>
          <div className={styles.textBox}>
            <div className={styles.quote}>
              <div className={styles.quotationMark1}>
                <FaQuoteLeft/>
              </div>
              <div className={styles.quoteBox}>
                <div className={styles.quoteText}>
                  Philippa has helped me with resourcing/recruitment over the last couple of years. I have found her approach to assessing our needs accurate, the service we received was exceptional and I would have no hesitation in recommending her to others.
                </div>
                {/* <div className={styles.quoter}>
                  - Philippa Dickinson, CEO
                </div> */}
              </div>
              <div className={styles.quotationMark2}>
                <FaQuoteRight/>
              </div>
            </div>
          </div>
        </Box>
        <Box>
          <div className={styles.aboutBox}>
            {/* <div className={styles.imageContainer}>
              <Image src="/about/ourWork/2.jpg" alt="Image" className={styles.image} />
            </div> */}
            <div className={styles.textContainer}>
              <div className={styles.header}>
                <span>Become part of our journey.</span>
              </div>
              <div className={styles.text}>
                Think you have what it takes to make a difference? We&apos;re always on the lookout for exceptional talent to join our team! Upload your CV below, and if we believe you&apos;re the right fit for our journey, we&apos;ll be in touch. Your next career adventure awaits – seize the opportunity and let&apos;s make magic together!
              </div>
              <div className={styles.buttonContainer}>
                <a href="/jobs/cv-upload" style={{textDecoration: "none"}} className={styles.button}>
                  Send us your CV
                </a>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  )
}

export default OurTeam