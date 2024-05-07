"use client"

import React from 'react'
import styles from "./page.module.css"
import Navbar2 from '../../../components/navbar/navbar2'
import ContactForm from '../../../components/contactForm/contactForm'
import { HiMiniArrowLongDown } from "react-icons/hi2";
import { createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet'; // Import Helmet

const Contact = () => {

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

  return (
    <div className={styles.contactContainer}>
      <Helmet>
        <title>Contact</title>
        <meta name='description' content='' />
      </Helmet>
      <Navbar2/>
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
        {!isMobile && (
          <div>
        <div className={styles.leftContainer}>
          <div className={styles.title}>
            <span>Thanks for visiting.</span> 
            <span>We&apos;d love to hear from you</span>
          </div>
          <div className={styles.text}>
            If you&apos;d like to get in touch our details are below. Or if you&apos;d rather, put your information in the form below and we&apos;ll get right back to you.
          </div>
          <div className={styles.details}>
            <span>Give us a call:</span>
            <span>+44(0)7748 179242</span>
            <span>Drop us an email:</span>
            <span></span>
          </div>
        </div>
        <div className={styles.rightContainer}>
          </div>
       
        </div>
        )}
        <div className={styles.contactForm}>
          <ContactForm/>
        </div>
      </div>
      
    </div>
  )
}

export default Contact