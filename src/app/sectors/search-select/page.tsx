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

const SearchSelect = () => {
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
        <title>Search & Select</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour="#00617C"/>
      <Box className={styles.expertise}>
        <div className={styles.expertiseTextContainer}>
          <div className={styles.expertiseHeader}>
            <span style={{color: "#008489"}}>Search & Select</span>
            <span> Recruitment Service. </span>
          </div>
          <div className={styles.expertiseText}>
            We specialise in filling hard-to-fill roles that demand a targeted and strategic headhunting approach. Our expertise ensures we identify and deliver the perfect candidate for even the most specialised and high-demand positions.
          </div>
          <div className={styles.hireButtonContainer}>
            <a href="/employers/submit-vacancy" style={{textDecoration: "none"}} className={styles.hireButton}>
              Find Your Expert
            </a>
          </div>
        </div>
        <div className={styles.cardImageContainer}>
          <img src="/sectors/5.jpg" alt="Image" className={styles.cardImage} />
        </div>
      </Box>
      <Box className={styles.hire}>
        <div className={styles.hireLeft}>
          <span>
            Find Your Next Specialist Hire With Us
          </span>
          <span>
            Specialists in targeted recruitment, delivering top-tier talent for hard-to-fill roles.  
          </span>
        </div>
        <div className={styles.hireRight}>
          <span>
            We excel in identifying and securing candidates for roles that require a strategic and focused headhunting approach.
          </span>
          <span>
            With our expertise in the search and select process, we pinpoint and deliver the perfect fit for even the most specialised and high-demand positions.
          </span>
          <span>
            Whether you're looking for senior leadership, niche technical experts, or other hard-to-fill roles, our dedicated approach ensures you get the right talent to drive your business forward.
          </span>
        </div>
      </Box>
      <Box className={styles.listBox}>
        <div className={styles.listHeader}>
          <span>Hire</span>
            <span style={{color: "#008489"}}>Special Talent.</span>
        </div>
        <div className={styles.listHeader2}>
          Our recruiters can help you hire across...
        </div>
        <div className={styles.listContainer}>
          <div className={styles.list1}>
            {/* <div className={styles.listSubHeader}>
              Commercial Roles
            </div> */}
            <li>Senior Project Manager</li>
            <li>Technical Director</li>
            <li>Principal Civil Engineer</li>
          </div>  
          <div className={styles.list2}>
            {/* <div className={styles.listSubHeader}>
              Trades & Labour
            </div> */}
            <li>Head of Planning</li>
            <li>Construction Director</li>
            <li>and many more...</li>
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

export default SearchSelect