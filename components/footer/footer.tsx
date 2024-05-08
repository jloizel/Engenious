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
  
  const isTabletOrBelow = useMediaQuery(theme.breakpoints.down('md'));
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
      {isTabletOrBelow ? (
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
          </div>
          <div className={styles.pagesContainer}>
            <div className={styles.page}>Employers</div>
            <div className={styles.page}>Jobs</div>
            <div className={styles.page}>About</div>
            <div className={styles.page}>Contact</div>
            <div className={styles.privacy}>Privacy Policy</div>
            <div className={styles.copyright}>© Engenious Recruitment</div>
          </div>
        </div>
      ) : (
        <div className={styles.bottomContainerComputer}>
          <div className={styles.logosComputer}>
            <div className={styles.logoContainerComputer}>
              <a href="/">
                <img className={styles.logo} src="/engenious.png" alt="engenious logo" />
              </a>
              <a href="/" className={styles.link}>
                <div className={styles.companyNameContainerComputer}>
                  <div className={styles.companyName1}>ENGENIOUS</div>
                  <div className={styles.companyName2}>RECRUITMENT</div>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.pagesContainerComputer}>
            <div className={styles.pagesComputer}>
              <div className={styles.page}>Employers</div>
              
            </div>
            <div className={styles.pagesComputer}>
              <div className={styles.page}>Jobs</div>
            </div>
            <div className={styles.pagesComputer}>
              <div className={styles.page}>About</div>
            </div>
            <div className={styles.pagesComputer}>
              <a href="/contact" className={styles.page}>Contact</a>
            </div>
          </div>
          <div className={styles.copyrightContainerComputer}>
            <div className={styles.privacy}>Privacy Policy</div>
            <div className={styles.copyright}>© Engenious Recruitment</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
