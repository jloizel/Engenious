import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { createTheme, useMediaQuery } from '@mui/material';

const Join: React.FC = ({}) => {

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
  
  const isMobile = useMediaQuery+(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isTabletOrBelow = useMediaQuery(theme.breakpoints.down('md'));
  const isComputer = useMediaQuery(theme.breakpoints.up('md'));

  const handleImageWidth = () => {
    if (isTabletOrBelow) {
      return 400
    } else {
      return 600
    }
  }

  const handleQuoteFontSize = () => {
    if (isMobile) {
      return "24px"
    } else if (isTablet) {
      return "26px"
    } else {
      return "35px"
    }
  }

  const handleButtonFontSize = () => {
    if (isMobile) {
      return "16px"
    } else {
      return "18px"
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/pics.png" alt="Images" className={styles.image} width={handleImageWidth()} height={handleImageWidth()}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.quote} style={{fontSize: handleQuoteFontSize()}}>
          &apos;Enter some kind of quote here.&apos;
        </div>
        <div className={styles.quoter}>
          - Phlippa Dickinson, CEO of Engenious Recruitment
        </div>
        <div className={styles.text}>
          At Engenious Recruitment, our priority is our people, enabling them to excel and reach new heights. Join our team, and together, we&apos;ll surpass expectations and redefine success
        </div>
        <a href="about/our-team" style={{textDecoration: "none"}}>
          <button className={styles.button} style={{fontSize: handleButtonFontSize()}}>Meet the team</button>
        </a>
      </div>
    </div>
  )
}

export default Join