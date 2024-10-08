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
import SectorsSlider from '../../../components/sectors/sectorsSlider';


const Candidates = () => {
  const pageName = "Candidates"

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
      url: "/candidates",
    },
    {
      id: 2,
      title: "Upload your CV",
      url: "/candidates/cv-upload",
    }
  ];  

  return (
    <div className={styles.candidatesContainer}>
      <Helmet>
        <title>Candidates</title>
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
              <span style={{color:'white'}}> Candidates</span>
              <span style={{color:'#008489'}}>.</span>
            </div>
            <div className={styles.mainText}>
              Unlock your potential and find your dream job with our expert guidance and opportunities.
            </div>
            <div className={styles.headerButtonContainer}>
              <a href="/candidates/cv-upload" style={{textDecoration: "none"}} className={styles.headerButton}>
                Register Your Details
              </a>
            </div>
          </div>
        </Box>
        <Box className={styles.hire}>
          <div className={styles.hireLeft}>
            <span>
              Why use Engenious Recruitment for your next career move?
            </span>
          </div>
          <div className={styles.hireRight}>
            <span>
              We know finding the perfect job can feel like navigating a maze, which is why we’re here to make it easier. We take the time to truly listen and understand your career goals, ensuring your next move isn’t just another job—it’s the right fit for you.
            </span>
            <span>
              We get it, changing jobs can feel a bit like diving into the deep end, so we’re here with personalised support to make sure you feel confident, comfortable, and maybe even excited along the way. Our goal? To connect top talent with our clients and create long term partnerships that benefit everyone.
            </span>
            <span>
              Ready to chat? Give us a ring for a confidential conversation at 07748 179242 or 07402 904 738. Let’s make your next move a great one!
            </span>
            <div className={styles.buttonContainer}>
              <a href="/candidates/cv-upload" style={{textDecoration: "none"}} className={styles.headerButton}>
                Register Your Details
              </a>
            </div>
          </div>
        </Box>
        <section className={styles.about}>
          { isComputer ? <AboutInfo/> : <AboutSlider/> }
        </section>
        <div className={styles.expertiseContent}>
          <div className={styles.expertiseHeader}>
            <span>Our recruitment </span>
            <span style={{color: "#008489"}}>expertise.</span>
          </div>
          <div className={styles.expertiseText}>
            Our reputation is built on finding you the right people. Talented people who stand out, who make a real difference. With the right people, your business can realise its ambitions and go further than you ever thought possible.
          </div>
        </div>
        <SectorsSlider/>
        <div className={styles.sectorsButtonContainer}>
          <a href="/sectors" style={{textDecoration: "none"}} className={styles.ourWorkButton}>
            More about what sectors we cover
          </a>
        </div>
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

export default Candidates