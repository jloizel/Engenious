"use client"

import React from 'react'
import styles from "./page.module.css"
import NavbarMain2 from '../../../components/navbar/main/navbarMain2'
import { HiMiniArrowLongDown } from "react-icons/hi2";
import { createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import ContactMap from '../../../components/contactMap/contactMap'
import ContactForm from '../../../components/contactForm/contactForm';

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
        <meta name='description' content=''/>
      </Helmet>
      <NavbarMain2/>
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
              If you&apos;d like to get in touch our details are below. Or if you&apos;d rather, put your information in the form and we&apos;ll get right back to you.
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
                  <a href="tel:+447748179242" style={{fontWeight: "500", color: "#008489", textDecoration: 'none'}}> +44(0)7748 179242</a>
                </div>
                <div>
                  <span style={{fontWeight: "500"}}>Drop us an email:</span>
                  <a href="mailto:email@engeniousrecruitment.com" target="_blank" style={{fontWeight: "500", color: "#008489", textDecoration: 'none'}}> email@engeniousrecruitment.com</a>
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

export default Contact