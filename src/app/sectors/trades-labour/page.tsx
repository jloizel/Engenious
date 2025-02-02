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

const TradesLabour = () => {
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
        <title>Trades & Labour</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour="#00617C"/>
      <Box className={styles.expertise}>
        <div className={styles.expertiseTextContainer}>
          <div className={styles.expertiseHeader}>
            <span style={{color: "#008489"}}>Trades & Labour</span>
            <span> Recruitment. </span>
          </div>
          <div className={styles.expertiseText}>
            We cover a comprehensive range of trades and labour requirements, providing skilled professionals from carpenters and electricians to 360 operatives and general laborers. Whatever your project demands, we have the right workforce to keep your site running smoothly and efficiently.
          </div>
          <div className={styles.hireButtonContainer}>
            <a href="/employers/submit-vacancy" style={{textDecoration: "none"}} className={styles.hireButton}>
              Hire Trades & Labour Talent
            </a>
          </div>
        </div>
        <div className={styles.cardImageContainer}>
          <img src="/sectors/1.jpg" alt="Image" className={styles.cardImage} />
        </div>
      </Box>
      <Box className={styles.hire}>
        <div className={styles.hireLeft}>
          <span>
            Find Your Next Trades & Labour Hire With Us
          </span>
          <span>
            Your trusted partner for skilled trades and labour recruitment, keeping your projects on track.  
          </span>
        </div>
        <div className={styles.hireRight}>
          <span>
            We cover a wide range of trades and labour needs, providing skilled professionals such as carpenters, electricians, 360 operatives, and general labourers.
          </span>
          <span>
            Whatever the scale of your project, our extensive network ensures that you have access to the right workforce to keep your site operating smoothly and efficiently.
          </span>
          <span>
            Whether you need temporary, contract, or permanent staff, we are committed to delivering reliable, experienced individuals to meet your project's demands and maintain productivity on-site.
          </span>
        </div>
      </Box>
      <Box className={styles.listBox}>
        <div className={styles.listHeader}>
          <span>Hire</span>
            <span style={{color: "#008489"}}>Trades & Labour Talent.</span>
        </div>
        <div className={styles.listHeader2}>
          Our recruiters can help you hire across...
        </div>
        <div className={styles.listContainer}>
        <div className={styles.list1}>
            {/* <div className={styles.listSubHeader}>
              Commercial Roles
            </div> */}
            <li>Carpenter</li>
            <li>Excavator Operator</li>
            <li>Electrician</li>
          </div>  
          <div className={styles.list2}>
            {/* <div className={styles.listSubHeader}>
              Trades & Labour
            </div> */}
            <li>Plumber</li>
            <li>General Labourer</li>
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

export default TradesLabour