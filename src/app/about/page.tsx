"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import NavbarSub from '../../../components/navbar/sub/navbarSub'
import { Box, createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Image from 'next/image';
import AboutSlider from '../../../components/about/aboutSlider';
import AboutInfo from '../../../components/about/about';

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
  const isTabletOrBelow = useMediaQuery(theme.breakpoints.down('md'));
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
      title: "Our team",
      url: "/about/our-team",
    },
    // {
    //   id: 4,
    //   title: "Our purpose",
    //   url: "/about/our-purpose",
    // },
    // {
    //   id: 5,
    //   title: "Our team",
    //   url: "/about/our-team",
    // }
  ]; 

  return (
    <div className={styles.aboutContainer}>
      {/* <Helmet>
        <title>About</title>
        <meta name='description' content='' />
      </Helmet> */}
      <NavbarSub links={links} pageName={pageName} currentPath={currentPath} colour="#00617C"/>
      <Box className={styles.aboutContent}>
        <Box className={styles.headerContainer} >
          <div className={styles.headerImageContainer}>
            <img src="./about/header.jpg" alt="Image" className={styles.headerImage}/>
          </div>
          <div className={styles.headerTextContainer} >
            <div className={styles.mainHeader}>
              <span style={{color:'#09B089'}}>About</span>
              <span style={{color:'white'}}> us.</span>
            </div>
            <div className={styles.mainText} >
              We provide expert recruitment services for the Construction and Civil Engineering sectors across the UK, focusing on understanding the needs of both clients and candidates to match the best talent with the right opportunities. With over a decade of experience, we ensure personalized, open, and supportive communication throughout the hiring process.
            </div>
          </div>
        </Box>
        <Box>
          <div className={styles.aboutBox} id="where-we-come-from">
            <div className={styles.headerContainer2}>
              <div className={styles.header}>
                <span>Who are we?</span>
              </div>
              {/* <div className={styles.subHeader}>
                From day one, we&apos;ve had high expectations. High expectations of ourselves, and high expectations for the people we work with.
              </div> */}
            </div>
            <div className={styles.imageContainer1}>
              <img src="/about/4.jpg" alt="Image" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.text1}>
                <span>
                  We’re proud to offer top-tier service to both our clients and candidates in the Construction and Civil Engineering sectors across the UK. With over a decade of experience, we really understand what our clients need and the challenges they face when it comes to attracting and keeping the best talent.
                </span>
                <span>
                  A big part of our success comes from the fantastic candidates we work with. We make sure to take the time to get to know each candidate and understand what they’re looking for, so we can find the perfect role for them. We also believe in keeping communication open and friendly throughout the recruitment process, ensuring our candidates always feel informed and supported.
                </span>
              </div>
            </div>
          </div>
        </Box>
        <section className={styles.about}>
          {/* <div className={styles.aboutContent}>
            <div className={styles.aboutHeader} style={{display: "flex", flexDirection: "column"}}>
              <span>Investing time in people; </span>
              <span style={{color: "#008489"}}>it&apos;s in our DNA.</span>
            </div>
          </div> */}
          { isComputer ? <AboutInfo/> : <AboutSlider/> }
        </section>
        <div className={styles.buttonContainer}>
          <a href="/about/our-work" style={{textDecoration: "none"}} className={styles.button1}>
            More about our work
          </a>
        </div>
        <Box>
          <div className={`${styles.aboutBox} ${styles.reverse}`} style={{background: "#EFF0F0"}}>
            <div className={styles.imageContainer2}>
              <img src="/team/1.jpg" alt="Image" className={styles.image} />
              <span className={styles.subHeader}>Philippa Dickinson</span>
              <span className={styles.imageCaption}>Founder / Managing Director</span>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.header}>
                <span>Meet the</span>
                <span style={{color:'#09B089'}}> Owner.</span>
              </div>
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
                Meet the rest of our team
                </a>
              </div>
            </div>
          </div>
        </Box>
        <Box>
          <div className={styles.aboutBox}>
            <div className={styles.imageContainer1}>
              <img src="/about/1.jpg" alt="Image" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.header}>
                <span>Our</span>
                <span style={{color:'#09B089'}}> work.</span>
              </div>
              <div className={styles.text}>
                Philippa jumped into the recruitment world in 2012, diving headfirst into permanent search and select hires for the civil engineering and construction sectors. By 2021, she decided, "Why not start my own agency?" And thus, Engenious Recruitment was born, where quality and service aren’t just priorities—they’re practically family members at this point.

                When she’s not running the show at work, Philippa’s busy keeping up with her two boys, who keep her on her toes. Her hobbies? Well, she’s basically a superhero—running, weight training, cooking, and staying fit. Oh, and she’s training for her sixth half marathon… because apparently, five just didn’t cut it!
              </div>
              <a href="/about/our-work" style={{textDecoration: "none"}}>
                <button className={styles.button}>
                  More about what we do
                </button>
              </a>
            </div>
          </div>
        </Box>
        <Box>
          <div className={`${styles.aboutBox} ${styles.reverse}`} style={{background: "#EFF0F0"}}>
            <div className={styles.imageContainer1}>
              <img src="/about/2.jpg" alt="Image" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.header}>
                <span>Our</span>
                <span style={{color:'#09B089'}}> team.</span>
              </div>
              <div className={styles.text}>
                Our devotion to go beyond expectations in everything we do has helped us establish a strong reputation over the years.
              </div>
              <a href="/about/our-story" style={{textDecoration: "none"}}>
                <button className={styles.button}>
                  Meet our team
                </button>
              </a>
            </div>
          </div>
        </Box>
        {/* <Box>
          <div className={styles.aboutBox}>
            <div className={styles.imageContainer1}>
              <img src="/about/3.jpg" alt="Image" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.header}>
                <span>Our</span>
                <span style={{color:'#09B089'}}> purpose.</span>
              </div>
              <div className={styles.text}>
                We&apos;re in the business of improving lives. Our dedication to candidates and clients is what keeps us going everyday.
              </div>
              <a href="/about/our-purpose" style={{textDecoration: "none"}}>
                <button className={styles.button}>
                  More about our purpose
                </button>
              </a>
            </div>
          </div>
        </Box>
        <Box>
          <div className={styles.aboutBox} style={{background:'#008489'}}>
            <div className={styles.imageContainer2}>
              <img src="/about/team.jpg" alt="Image" className={styles.image2} />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.header}>
                <span style={{color:'white'}}>Careers</span>
              </div>
              <div className={styles.text2}>
                We put our people first, so our people go further. Why not further your career with us?
              </div>
              <a href="/jobs/cv-upload" style={{textDecoration: "none"}}>
                <button className={styles.button}>
                  Work at Engenious
                </button>
              </a>
            </div>
          </div>
        </Box> */}
      </Box>
    </div>
  )
}

export default About