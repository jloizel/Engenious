"use client"

import React from 'react'
import styles from './page.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createTheme, useMediaQuery } from '@mui/material';

const Footer: React.FC = ({}) => {

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
  
  const isComputer = useMediaQuery(theme.breakpoints.up('md'));
  
  return (
    <div className={styles.container}>
      <div className={styles.box}>
      {!isComputer && (
        <div className={styles.header}>
          <span>Rise above</span>
          <span>all limitations.</span>
        </div>
      )}
      {isComputer && (
        <div className={styles.header}>
          Rise above all limitations.
        </div>
      )}
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            Find a Job
          </button>
          <button className={styles.button}>
            Find Talent
          </button>
        </div>
      </div>
      <hr className={styles.line}></hr>
      <div className={styles.bottomContainer}>
        <div className={styles.logos}>
          <div className={styles.logoContainer}>
            <a href="/">
              <img className={styles.logo} src="/engenious.png" alt="engenious logo" />
            </a>
            <a href="/" className={styles.link}>
              <div className={styles.companyNameContainer}>
                <div className={styles.companyName1}>ENGENIOUS</div>
                <div className={styles.companyName2}>RECRUITMENT</div>
              </div>
            </a>
          </div>
          {/* <div className={styles.linkedInContainer}>
            <LinkedInIcon className={styles.linkedIn}/>
          </div> */}
        </div>
          {!isComputer && (
            <div className={styles.pagesContainer}>
              <div className={styles.page}>About Us</div>
              <div className={styles.page}>Join Us</div>
              <div className={styles.page}>Contact Us</div>
              <div className={styles.page}>Upload CV</div>
              <div className={styles.page}>Submit Job</div>
              <div className={styles.page}>Privacy Policy</div>
              <div className={styles.copyright}>© Engenious Recruitment</div>
            </div>
          )}
          {isComputer && (
            <div className={styles.pagesContainer}>
              <div>
                <div className={styles.page}>About Us</div>
                <div className={styles.page}>Join Us</div>
                <div className={styles.page}>Contact Us</div>
              </div>
              <div>
              <div className={styles.page}>Upload CV</div>
                <div className={styles.page}>Submit Job</div>
                <div className={styles.page}>Privacy Policy</div>

              </div>
            </div>
          )}
        </div>
        {isComputer && (
        <div className={styles.copyrightContainer}>
          <div className={styles.copyright}>© Engenious Recruitment</div>
        </div>
        )}
      </div>
  );
}

export default Footer;
