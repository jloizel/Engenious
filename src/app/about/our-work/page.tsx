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
import Image from 'next/image';
import { TiTick } from "react-icons/ti";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Values from '../../../../components/values/values';


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
    <div className={styles.workContainer}>
      <Helmet>
        <title>About</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour="#00617C"/>
      <Box className={styles.headerContent}>
        <Box className={styles.headerContainer}>
          <div className={styles.headerImageContainer}>
            <img src="/about/5.jpg" alt="Image" className={styles.headerImage} />
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
                <span>Why work with </span>
                <span style={{color: "#008489"}}>Engenious Recruitment</span>
                <span>?</span>
              </div>
              <p className={styles.text}>Whether you need new people to scale up your teams, or you&apos;re looking for specific skills to help your business react fast, our full range of talent services<i> will</i> deliver. We Go Beyond to find you the right people.</p>
          </div>
        </Box>
        <div className={styles.services2}>
          { isComputer ? <Services pageName="ourWork"/> : <ServicesSlider pageName="ourWork"/> }
        </div>
        <Box className={styles.quoteContainer}>
          <div className={styles.textBox}>
            <div className={styles.quote}>
              <div className={styles.quotationMark1}>
                <FaQuoteLeft/>
              </div>
              <div className={styles.quoteBox}>
                <div className={styles.quoteText}>
                  Philippa is the best recruitment consultant. Incredibly talented, never misses a follow-up call, and a genuine pleasure to work with. She ensured I was kept informed every step of the way and gave me all information required. An absolute credit to the profession.
                </div>
                {/* <div className={styles.quoter}>
                  - Anna Solarek
                </div> */}
              </div>
              <div className={styles.quotationMark2}>
                <FaQuoteRight/>
              </div>
            </div>
          </div>
        </Box>
        <Values/>
        <Box className={styles.consultation}>
          <div className={styles.consultationHeader}>
            <span>Not sure where to start?</span>
          </div>
          <div className={styles.consultationText}>
            In recent years, the working world has transformed dramatically. Companies&apos; approaches to recruitment have changed too. Whether you&apos;re looking for contractors or temps who are on-site, hybrid or fully remote, we&apos;ll find the right people for you.
          </div>
          <a href="/employers/submit-vacancy" style={{textDecoration: "none"}} className={styles.consultationButtonAnchor}>
              <button className={styles.consultationButton}>
                Hire talent <KeyboardArrowRightIcon/>
              </button>
            </a>
        </Box>
        {/* <section className={styles.about}>
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
      </section> */}
      </Box>
    </div>
  )
}

export default OurWork