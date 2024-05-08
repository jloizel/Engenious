"use client"

import React from 'react'
import styles from "./page.module.css"
import NavbarSub from '../../../components/navbar/sub/navbarSub'
import ContactForm from '../../../components/contactForm/contactForm'
import { HiMiniArrowLongDown } from "react-icons/hi2";
import { createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet'; // Import Helmet
import ContactMap from '../../../components/contactMap/contactMap'

const About = () => {

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 767,
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const links = [
    {
      id: 1,
      title: "Our work",
      url: "/our-work",
    },
    {
      id: 2,
      title: "Our story",
      url: "/our-story",
    },
    {
      id: 3,
      title: "Our purpose",
      url: "/our-purpose",
    },
    {
      id: 4,
      title: "Our work",
      url: "/our-commitments",
    }
  ];

  return (
    <div className={styles.contactContainer}>
      <Helmet>
        <title>Contact</title>
        <meta name='description' content='' />
      </Helmet>
      {/* <NavbarSub links={links}/> */}
      <div className={styles.pageHeader}>
        <div className={styles.header}>Get in touch</div>
        <HiMiniArrowLongDown className={styles.arrow} />
      </div>
      <div className={styles.formContainer}>
        {isMobile && (
          <div className={styles.mobileContainer}>
            <div className={styles.title}>
              <span>Thanks for visiting. We&apos;d love to hear from you</span>
            </div>
            <div className={styles.text}>
              If you&apos;d like to get in touch our details are below. Or if you&apos;d rather, put your information in the form below and we&apos;ll get right back to you.
            </div>
            <div className={styles.details}>
              <div>
                <span style={{fontWeight: "500"}}>Give us a call: </span>
                <span style={{fontWeight: "500", color: "#008489"}}>+44(0)7748 179242</span>
              </div>
              <div>
                <span style={{fontWeight: "500"}}>Drop us an email: </span>
                <span style={{fontWeight: "500", color: "#008489"}}>email@engeniousrecruitment.com</span>
              </div>
            </div>
          </div>
        )}
        <div className={styles.topContainer}>
          {!isMobile && (
            <div className={styles.textContainer}>
              <div className={styles.title}>
                <span>Thanks for visiting. We&apos;d love to hear from you</span>
              </div>
              <div className={styles.text}>
                If you&apos;d like to get in touch our details are below. Or if you&apos;d rather, put your information in the form below and we&apos;ll get right back to you.
              </div>
              <div className={styles.details}>
                <div>
                  <span style={{fontWeight: "500"}}>Give us a call:</span>
                  <span style={{fontWeight: "500", color: "#008489"}}> +44(0)7748 179242</span>
                </div>
                <div>
                  <span style={{fontWeight: "500"}}>Drop us an email:</span>
                  <span style={{fontWeight: "500", color: "#008489"}}> email@engeniousrecruitment.com</span>
                </div>
              </div>
            </div>
          )}
          <div className={styles.contactForm}>
            <ContactForm/>
          </div>
        </div>
        <div className={styles.contactMap}>
          <ContactMap/>
        </div>
      </div>
      
    </div>
  )
}

export default About