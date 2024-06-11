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
              <span style={{color:'#09B089'}}>Our</span>
              <span style={{color:'white'}}> team.</span>
            </div>
            <div className={styles.mainText}>
              Our team are at the heart of everything we do. Below you&apos;ll find out a little bit more about who you&apos;re dealing with and prove that we&apos;re not just a voice at the end of the phone.
            </div>
          </div>
        </Box>
        <Team/>
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
              <a href="/jobs/cv-upload" style={{textDecoration: "none"}} className={styles.buttonContainer}>
                <button className={styles.button}>
                  Send us your CV
                </button>
              </a>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  )
}

export default OurTeam