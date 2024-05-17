"use client"

import React from 'react'
import styles from "./page.module.css"
import NavbarMain2 from '../../../components/navbar/main/navbarMain2'
import ContactForm from '../../../components/contactForm/contactForm'
import { HiMiniArrowLongDown } from "react-icons/hi2";
import { createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import ContactMap from '../../../components/contactMap/contactMap'
import SubmitCVForm from '../../../components/submitCVForm/submitCVForm'
import SubmitCVForm2 from '../../../components/submitCVForm/submitCVForm2'

const CVUpload = () => {

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
    <div className={styles.submitCVContainer}>
      <Helmet>
        <title>CV upload</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarMain2/>
      <div className={styles.pageHeader}>
        <div className={styles.header}>CV Upload</div>
          <div className={styles.headerText}>If you&apos;d like to send your CV directly to our team, fill out the form below.</div>
        <HiMiniArrowLongDown className={styles.arrow} />
      </div>
      <div className={styles.submissionContainer}>
        {/* {isMobile && (
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
        )} */}
        <div className={styles.topContainer}>
          {/* {!isMobile && (
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
          )} */}
          <div className={styles.submitForm}>
            <SubmitCVForm2 />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CVUpload