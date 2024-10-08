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
import AboutInfo from '../../../../components/about/aboutInfo';
import AboutSlider from '../../../../components/about/aboutSlider';
import SubSectorCards from '../../../../components/subSectorCards/civilengineeringSubSectorCards';

const CivilEngineering = () => {
  const pageName = "Sectors"
  
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
      url: "/sectors",
    },
    {
      id: 2,
      title: "Construction",
      url: "/sectors/construction",
    },
    {
      id: 3,
      title: "House Building",
      url: "/sectors/housebuilding",
    },
    {
      id: 4,
      title: "Maintenance",
      url: "/sectors/maintenance",
    },
    {
      id: 5,
      title: "Civil Engineering",
      url: "/sectors/civilengineering",
    },
    {
      id: 6,
      title: "Trades & Labour",
      url: "/sectors/trades-labour",
    },
    {
      id: 7,
      title: "Search & Select",
      url: "/sectors/search-select",
    }
  ]; 


  return (
    <div className={styles.expertiseContainer}>
      <Helmet>
        <title>Civil Engineering</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour="#00617C"/>
      <Box className={styles.expertise}>
        <div className={styles.expertiseTextContainer}>
          <div className={styles.expertiseHeader}>
            <span style={{color: "#008489"}}>Civil Engineering</span>
            <span> Recruitment. </span>
          </div>
          <div className={styles.expertiseText}>
            Partnering with main contractors and subcontractors to source skilled professionals for a wide range of civil engineering projects. From road and rail infrastructure to marine construction and minor civil works, we provide the expertise needed to support successful project delivery across the sector.
          </div>
          <div className={styles.hireButtonContainer}>
            <a href="/employers/submit-vacancy" style={{textDecoration: "none"}} className={styles.hireButton}>
              Hire Civil Engineering Talent
            </a>
          </div>
        </div>
        <div className={styles.cardImageContainer}>
          <img src="/sectors/3.jpg" alt="Image" className={styles.cardImage} />
        </div>
      </Box>
      <Box className={styles.hire}>
        <div className={styles.hireLeft}>
          <span>
            Find Your Next Civil Engineering Hire With Us
          </span>
          <span>
            Experts in civil engineering recruitment, providing skilled professionals for infrastructure and development projects.  
          </span>
        </div>
        <div className={styles.hireRight}>
          <span>
            Partnering with main contractors and subcontractors, we specialise in sourcing top talent for a wide range of civil engineering projects.
          </span>
          <span>
            Whether you're working on large-scale road and rail infrastructure, marine construction, or smaller civil works, we deliver the expertise and recruitment solutions to ensure project success.
          </span>
          <span>
            From site engineers to project managers, we can help you secure both temporary and permanent staff to support the seamless execution of your projects and drive growth in the civil engineering sector.
          </span>
        </div>
      </Box>
      <SubSectorCards/>
      <section className={styles.about}>
          { isComputer ? <AboutInfo/> : <AboutSlider/> }
        </section>
      <section className={styles.testimonials}>
      <Box className={styles.consultation}>
        <div className={styles.consultationHeader}>
          <span>Not sure where to start?</span>
        </div>
        {/* <div className={styles.consultationText}>
          In recent years, the working world has transformed dramatically. Companies&apos; approaches to recruitment have changed too. Whether you&apos;re looking for contractors or temps who are on-site, hybrid or fully remote, we&apos;ll find the right people for you.
        </div> */}
        <a href="/employers/submit-vacancy" style={{textDecoration: "none"}} className={styles.consultationButtonAnchor}>
            <button className={styles.consultationButton}>
              Hire talent <KeyboardArrowRightIcon/>
            </button>
          </a>
      </Box>
        <div className={styles.testimonialsContent}>
          <div className={styles.header}>
            {/* <span style={{color: "#008489"}}>Talented people </span> */}
            <span>Trusted because we care</span>
          </div>
        </div>
        <Testimonials/>
      </section>
      {/* <section className={styles.services}>
        <div className={styles.servicesContent}>
          <div className={styles.header}>
            <span >A range of </span>
            <span style={{color: "#008489"}}>Talent Services..</span>
          </div>
          <p className={styles.text}>Whether you need new people to scale up your teams, or you&apos;re looking for specific skills to help your business react fast, our full range of talent services<i> will</i> deliver. We go above and beyond to find you the right people.</p>
        </div>
        { isComputer ? <Services/> : <ServicesSlider/> }
      </section> */}
      
      
    </div>
  )
}

export default CivilEngineering