"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import NavbarSub from '../../../../components/navbar/sub/navbarSub'
import { Box, createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Testimonials from '../../../../components/testimonials/testimonials';
import ContractSlider from '../../../../components/servicesSwiper/servicesSwiper';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Services from '../../../../components/services/services';
import ServicesSlider from '../../../../components/services/servicesSlider';
import Image from 'next/image';
import SectorsSlider from '../../../../components/sectors/sectorsSlider';

const CandidateAssessments = () => {
  const pageName = "Employers"
  
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
      url: "/employers",
    },
    {
      id: 2,
      title: "Candidate assessments",
      url: "/employers/candidate-assessments",
    },
    // {
    //   id: 3,
    //   title: "Our expertise",
    //   url: "/employers/our-expertise",
    // },
    {
      id: 4,
      title: "Submit a vacancy",
      url: "/employers/submit-vacancy",
    }
  ]; 


  return (
    <div className={styles.expertiseContainer}>
      <Helmet>
        <title>Candidate Assessments</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour="#00617C"/>
      <Box className={styles.expertise}>
        <div className={styles.expertiseTextContainer}>
          <div className={styles.mainHeader}>
            <span style={{color: "#008489"}}>Candidate</span>
            <span> Assessments. </span>
          </div>
          <div className={styles.mainText}>
            At Engenious Recruitment, we can offer psychometric testing to deliver a personalised and detailed candidate evaluation service. Alongside our thorough interview and screening process, this enables you to accurately assess a candidate’s ability to thrive in their role. Don’t hesitate to contact us if you’d like more information. We're here to support you in finding the perfect fit with confidence.
          </div>
          <div className={styles.buttonContainer}>
            <a href="/about/our-work" style={{textDecoration: "none"}} className={styles.ourWorkButton}>
              More about our work
            </a>
          </div>
        </div>
        <div className={styles.cardImageContainer}>
          <img src="/employers/6.jpg" alt="Image" className={styles.cardImage} />
        </div>
      </Box>
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
          <div className={styles.header}>
            {/* <span style={{color: "#008489"}}>Talented people </span> */}
            <span >We Are Trusted For A Reason</span>
          </div>
        </div>
        <Testimonials/>
      </section>
      <section className={styles.services}>
        <div className={styles.servicesContent}>
          <div className={styles.header}>
            <span>Why work with </span>
            <span style={{color: "#008489"}}>Engenious Recruitment</span>
            <span>?</span>
          </div>
          <p className={styles.text}>Whether you need new people to scale up your teams, or you&apos;re looking for specific skills to help your business react fast, our full range of talent services<i> will</i> deliver. We go above and beyond to find you the right people.</p>
        </div>
        { isComputer ? <Services/> : <ServicesSlider/> }
      </section>
      <Box className={styles.consultation}>
        <div className={styles.consultationHeader}>
          <span>Not sure where to start?</span>
        </div>
        <div className={styles.consultationText}>
          In recent years, the working world has transformed dramatically. Companies&apos; approaches to recruitment have changed too. Whether you&apos;re looking for contractors or temps who are on-site, hybrid or fully remote, we&apos;ll find the right people for you.
        </div>
        <a href="/employers/submit-vacancy" style={{textDecoration: "none"}} className={styles.consultationButtonAnchor2}>
            <button className={styles.consultationButton}>
              Hire talent <KeyboardArrowRightIcon/>
            </button>
          </a>
      </Box>
    </div>
  )
}

export default CandidateAssessments