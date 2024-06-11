"use client"

import React from 'react'
import styles from './page.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const Footer: React.FC = ({}) => {

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

  const handleImageWidth = () => {
    if (isMobile) {
      return 60
    } else if (isComputer) {
      return 70
    } else {
      return 90
   }
  }

  const handleContainerJustify = () => {
    if (isMobile) {
      return "center"
    } else {
      return ""
   }
  }

  const handleBoxFD = () => {
    if (isMobile) {
      return "column"
    } else {
      return "row"
   }
  }

  const handleHeaderFS = () => {
    if (isMobile) {
      return "25px"
    } else if (isTablet) {
      return "30px"
    } else {
      return "40px"
   }
  }

  const handleHeaderMargin = () => {
    if (isMobile) {
      return "40px"
    } else {
      return ""
   }
  }
  
  const handleHeaderPadding = () => {
    if (isMobile) {
      return ""
    } else {
      return "30px 30px"
    }
  }

  const handleButtonContainerGap = () => {
    if (isMobile) {
      return "20px"
    } else if (isTablet) {
      return "30px"
    } else {
      return "40px"
   }
  }

  const handleButtonContainerPadding = () => {
    if (isMobile) {
      return ""
    } else {
      return "0 30px"
   }
  }

  const handleButtonFS = () => {
    if (isMobile) {
      return "16px"
    } else if (isTablet) {
      return "16px"
    } else {
      return "20px"
   }
  }

  const handleButtonPadding = () => {
    if (isMobile) {
      return "0 30px"
    } else if (isTablet) {
      return "0 40px"
    } else {
      return "0 80px"
    }
  }

  const handleCNContainerLH = () => {
    if (isMobile) {
      return "18px"
    } else {
      return "35px"
   }
  }

  const handleCNFS= () => {
    if (isMobile) {
      return "16px"
    } else {
      return "20px"
   }
  }

  const handleCNLH= () => {
    if (isTablet) {
      return "25px"
    } else {
      return ""
   }
  }

  const handlePGGap= () => {
    if (isMobile) {
      return "5px"
    } else if (isTablet) {
      return "15px"
   }
  }

  const handlePGPadding= () => {
    if (isTablet) {
      return "20px"
    } else {
      return ""
   }
  }

  const handlePageFS = () => {
    if (isMobile) {
      return "14px"
    } else if (isTablet) {
      return "22px"
    } else {
      return "18px"
    }
  }

  const handlePrivacyFS = () => {
    if (isMobile) {
      return "12px"
    } else if (isTablet) {
      return "16px"
    } else {
      return "14px"
    }
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.box} >
        {!isComputer && (
          <div className={styles.header}>
            <span>Rise above</span>
            <span>all limitations.</span>
          </div>
        )}
        {isComputer && (
          <div className={styles.header} >
            Rise above all limitations.
          </div>
        )}
        <div className={styles.buttonContainer} >
          <a href="/jobs" style={{textDecoration: "none"}}>
            <button className={styles.button} >
              Find a Job
            </button>
          </a>
          <a href="/employers/submit-vacancy" style={{textDecoration: "none"}} >
            <button className={styles.button} >
              Find Talent
            </button>
          </a>
        </div>
      </div>
      <hr className={styles.line}></hr>
      {isTabletOrBelow ? (
        <div className={styles.bottomContainer}>
          <div className={styles.logos}>
            <div className={styles.logoContainer}>
              <a href="/">
                <Image className={styles.logo} src="/engenious.png" alt="engenious logo" width={handleImageWidth()} height={handleImageWidth()}/>
              </a>
              <a href="/" className={styles.link}>
                <div className={styles.companyNameContainer} >
                  <div className={styles.companyName1} >ENGENIOUS</div>
                  <div className={styles.companyName2} >RECRUITMENT</div>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.pagesContainer} >
            <a href="/employers" style={{textDecoration: "none"}} className={styles.page}>Employers</a>
            <a href="/jobs" style={{textDecoration: "none"}} className={styles.page}>Jobs</a>
            <a href="/about" style={{textDecoration: "none"}} className={styles.page}>About</a>
            <a href="/contact" style={{textDecoration: "none"}} className={styles.page}>Contact</a>
            <a href="/privacy-policy" style={{textDecoration: "none"}} className={styles.privacy}>Privacy Policy</a>
            <div className={styles.copyright} >© Engenious Recruitment</div>
          </div>
        </div>
      ) : (
        <div className={styles.bottomContainerComputer}>
          <div className={styles.logosComputer}>
            <div className={styles.logoContainerComputer}>
              <a href="/">
                <Image className={styles.logo} src="/engenious.png" alt="engenious logo" width={handleImageWidth()} height={handleImageWidth()}/>
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
            <a href="/employers" className={styles.pagesComputer} style={{textDecoration: "none"}}>
              <div className={styles.page}>Employers</div>
            </a>
            <a href="/jobs" style={{textDecoration: "none"}} className={styles.pagesComputer}>
              <div className={styles.page}>Jobs</div>
            </a>
            <a href="/about" style={{textDecoration: "none"}} className={styles.pagesComputer}>
              <div className={styles.page}>About</div>
            </a>
            <a href="contact" style={{textDecoration: "none"}} className={styles.pagesComputer}>
              <div className={styles.page}>Contact</div>
            </a>
          </div>
          <div className={styles.copyrightContainerComputer}>
            <a href="/privacy-policy" className={styles.privacy} style={{textDecoration: "none"}}>Privacy Policy</a>
            <div className={styles.copyright}>© Engenious Recruitment</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
