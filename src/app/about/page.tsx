"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import NavbarSub from '../../../components/navbar/sub/navbarSub'
import { Box, createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Services from '../../../components/services/services';
import ServicesSlider from "../../../components/services/servicesSlider";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import AboutInfo from '../../../components/about/aboutInfo';
import AboutSlider from '../../../components/about/aboutSlider';
import Testimonials from '../../../components/testimonials/testimonials';
import Image from 'next/image';


const About = () => {
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
    <div className={styles.aboutContainer}>
      <Helmet>
        <title>About Us</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour="#00617C"/>
      <Box className={styles.headerContent}>
        <Box className={styles.headerContainer}>
          <div className={styles.headerImageContainer}>
            <img src="/about/1.jpg" alt="Image" className={styles.headerImage} />
          </div>
          <div className={styles.headerTextContainer}>
            <div className={styles.mainHeader}>
              <span style={{color:'#008489'}}>About</span>
              <span style={{color:'white'}}> us.</span>
            </div>
            <div className={styles.mainText}>
              We provide expert recruitment services for the Construction and Civil Engineering sectors across the UK, focusing on understanding the needs of both clients and candidates to match the best talent with the right opportunities. With over a decade of experience, we ensure personalised, open, and supportive communication throughout the hiring process.
            </div>
          </div>
        </Box>
        <Box className={styles.intro}>
          <div className={styles.introContent}>
              <div className={styles.header1}>
                <span>Who are are we?</span>
              </div>
              <div className={styles.textContainer1}>
                <div className={styles.text1}>
                  <span>Our journey began with a simple yet profound belief: every individual possesses untapped potential waiting to be discovered and nurtured. Founded in the heart of innovation, our recruitment company emerged as a beacon of hope for both candidates and employers alike. From humble beginnings, we embarked on a mission to redefine the landscape of talent acquisition, guided by principles of integrity, empathy, and a relentless pursuit of excellence.</span>
                  <span>Driven by a deep understanding of the transformative power of talent, we forged partnerships with organisations seeking not just employees, but visionary leaders, and with individuals yearning not just for jobs, but for opportunities to thrive. Our early days were characterised by perseverance in the face of adversity, as we navigated the complexities of an ever-evolving market, fueled by a passion to connect the right talent with the right opportunities.</span>
                </div>
              </div>
              <div className={styles.imageContainer}>
                <img src="/about/4.jpg" alt="Image" className={styles.image1} />
              </div>
          </div>
        </Box>
        <section className={styles.about}>
          { isComputer ? <AboutInfo/> : <AboutSlider/> }
          <div className={styles.buttonContainer}>
          <a href="/about/our-work" style={{textDecoration: "none"}} className={styles.ourWorkButton}>
            More about our work
          </a>
        </div>
        </section>
        
        {/* <Box>
          <div className={styles.aboutBox}>
            {isMobile && (
              <div className={styles.header1}>
                <span>Meet the</span>
                <span style={{color: "#008489"}}> Owner</span>
              </div>
            )}
            <div className={styles.imageContainer1}>
              <img src="/team/1.jpg" alt="Image" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              {!isMobile && (
                <div className={styles.header1}>
                  <span>Meet the</span>
                  <span style={{color: "#008489"}}> Owner</span>
                </div>
              )}
              <div className={styles.text1}>
                <span>
                  Philippa jumped into the recruitment world in 2012, diving headfirst into permanent search and select hires for the civil engineering and construction sectors. By 2021, she decided, "Why not start my own agency?" And thus, Engenious Recruitment was born, where quality and service aren’t just priorities—they’re practically family members at this point.
                </span>
                <span>
                  When she’s not running the show at work, Philippa’s busy keeping up with her two boys, who keep her on her toes. Her hobbies? Well, she’s basically a superhero—running, weight training, cooking, and staying fit. Oh, and she’s training for her sixth half marathon… because apparently, five just didn’t cut it!
                </span>
              </div>
              <div className={styles.buttonContainer}>
                <a href="/about/our-team" style={{textDecoration: "none"}} className={styles.button}>
                  Meet the rest of the team
                </a>
              </div>
            </div>
          </div>
        </Box> */}

        {/* <Box className={styles.quoteContainer}>
          <div className={styles.textBox}>
            <div className={styles.quote}>
              <div className={styles.quotationMark1}>
                <FaQuoteLeft/>
              </div>
              <div className={styles.quoteBox}>
                <div className={styles.quoteText}>
                  Phillipa is highly skilled in her field. I felt that at times I was her only client and cannot thank her enough for going that extra mile. I would recommend Philipa without any hesitation.
                </div>
              </div>
              <div className={styles.quotationMark2}>
                <FaQuoteRight/>
              </div>
            </div>
          </div>
        </Box> */}
        
        <section className={styles.testimonials}>
          <div className={styles.testimonialsContent}>
            <div className={styles.header2}>
              {/* <span style={{color: "#008489"}}>Talented people </span> */}
              <span>Trusted because we care</span>
            </div>
          </div>
          <Testimonials/>
        </section>
      </Box>
    </div>
  )
}

export default About