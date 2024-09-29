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

const Maintenance = () => {
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
      title: "Construction & House Building",
      url: "/sectors/construction-housebuilding",
    },
    {
      id: 3,
      title: "Maintenance",
      url: "/sectors/maintenance",
    },
    {
      id: 4,
      title: "Civil Engineering",
      url: "/employers/submit-vacancy",
    },
    {
      id: 5,
      title: "Trades & Labour",
      url: "/employers/submit-vacancy",
    },
    {
      id: 6,
      title: "Search & Select",
      url: "/employers/submit-vacancy",
    }
  ];  


  return (
    <div className={styles.expertiseContainer}>
      <Helmet>
        <title>Maintenance</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour="#00617C"/>
      <Box className={styles.expertise}>
        <div className={styles.expertiseTextContainer}>
          <div className={styles.expertiseHeader}>
            <span style={{color: "#008489"}}>Maintenance</span>
            <span> Recruitment. </span>
          </div>
          <div className={styles.expertiseText}>
            Planned & Reactive maintenance positions, we work on roles for contractors and local authorities when they have a need for operatives through to senior members of staff.
          </div>
          <div className={styles.hireButtonContainer}>
            <a href="/employers/submit-vacancy" style={{textDecoration: "none"}} className={styles.hireButton}>
              Hire Maintenance Talent
            </a>
          </div>
        </div>
        <div className={styles.cardImageContainer}>
          <img src="/sectors/2.jpg" alt="Image" className={styles.cardImage} />
        </div>
      </Box>
      <Box className={styles.hire}>
        <div className={styles.hireLeft}>
          <span>
            Find Your Next Maintenance Hire With Us
          </span>
          <span>
            As a renewable energy engineering recruitment specialist, we have the insight and connections to make an impact.  
            </span>
        </div>
        <div className={styles.hireRight}>
          <span>
            We are uniquely placed to act as an extension of your company, offering industry insight that will allow you to identify, hire and retain the brightest minds in the energy storage sector.
          </span>
          <span>
            We take the time to get to know our clients before offering bespoke solutions that help to bridge their staffing requirements.
          </span>
          <span>
            We can help you to find permanent, contract and temporary team members with our tried-and-tested methods.
          </span>
        </div>
      </Box>
      <Box className={styles.listBox}>
        <div className={styles.listHeader}>
          <span>Hire</span>
            <span style={{color: "#008489"}}>Maintenance Talent.</span>
        </div>
        <div className={styles.listHeader2}>
          Our recruiters can help you hire across...
        </div>
        <div className={styles.listContainer}>
          <div className={styles.list1}>
            {/* <div className={styles.listSubHeader}>
              Commercial Roles
            </div> */}
            <li>Estimators</li>
            <li>Quantity Surveyors</li>
            <li>Senior/ Managing Surveyors</li>
            <li>Commercial Managers</li>
            {/* <div className={styles.listSubHeader}>
              Production Roles
            </div> */}
            <li>Site Managers</li>
            <li>Site Agents</li>
            <li>Site Engineers</li>
          </div>  
          <div className={styles.list2}>
            {/* <div className={styles.listSubHeader}>
              Trades & Labour
            </div> */}
            <li>Labourers</li>
            <li>Groundworkers</li>
            <li>Steel fixers</li>
            <li>Carpenters</li>
            <li>Foreman</li>
            <li>Contracts Managers</li>
            <li>Operations Managers</li>
          </div>
        </div>
        <a href="/employers/submit-vacancy" style={{textDecoration: "none"}} className={styles.buttonContainer}>
          <button className={styles.button}>
            Hire talent
          </button>
        </a>
      </Box>
      <section className={styles.about}>
          { isComputer ? <AboutInfo/> : <AboutSlider/> }
        </section>
      <section className={styles.testimonials}>
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
        <div className={styles.testimonialsContent}>
          <div className={styles.header}>
            {/* <span style={{color: "#008489"}}>Talented people </span> */}
            <span>We are trusted for a reason</span>
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

export default Maintenance