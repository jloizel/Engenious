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
import { FaCircleChevronRight } from "react-icons/fa6";
import SubSectorCards from '../../../../components/subSectorCards/constructionSubSectorCards';


const Construction = () => {
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
        <title>Construction</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour="#00617C"/>
      <Box className={styles.expertise}>
        <div className={styles.expertiseTextContainer}>
          <div className={styles.expertiseHeader}>
            <span style={{color: "#008489"}}>Construction</span>
            <span> Recruitment. </span>
          </div>
          <div className={styles.expertiseText}>
            Partnering with main contractors to fulfill critical white-collar roles across diverse construction projects. From commercial developments to large-scale infrastructure, we connect you with the professionals needed to drive success.
          </div>
          <div className={styles.hireButtonContainer}>
            <a href="/employers/submit-vacancy" style={{textDecoration: "none"}} className={styles.hireButton}>
              Hire Construction Talent
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
            Find Your Next Construction Hire With Us
          </span>
          <span>
            As a construction recruitment specialist, we have the expertise and industry connections to deliver top talent.
          </span>
        </div>
        <div className={styles.hireRight}>
          <span>
            We are uniquely positioned to act as an extension of your business, providing valuable insight and recruitment expertise to help you identify, hire, and retain the best professionals in the construction sector.
          </span>
          <span>
            By taking the time to understand your company’s specific needs and challenges, we offer customised recruitment solutions that align with your staffing goals.
          </span>
          <span>
            Whether you're looking for permanent, contract, or temporary team members, our proven methods ensure you have access to the right talent to build your team.
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

export default Construction