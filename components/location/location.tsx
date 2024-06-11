import React from 'react'
import styles from './page.module.css'
import { createTheme, useMediaQuery } from '@mui/material';

const Location: React.FC = ({}) => {

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
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const handleGap = () => {
    if (isMobile) {
      return "30px"
    } else if (isTablet) {
      return "80px"
    } else {
      return "100px"
    }
  }

  const handleHeaderFontSize = () => {
    if (isMobile) {
      return "25px"
    } else if (isTablet) {
      return "35px"
    } else {
      return "40px"
    }
  }

  const handleSubHeaderFontSize = () => {
    if (isMobile) {
      return "16px"
    } else {
      return "22px"
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer} >
        <div className={styles.header} >
          Our Locations
        </div>
        <div className={styles.subHeader} >
          Sussex
        </div>
      </div>
      <div className={styles.imageContainer}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10058.000071358514!2d-0.2795417!3d50.9329653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487595b07eefa0d5%3A0x7870c90353f96446!2sEngenious%20Recruitment!5e0!3m2!1sen!2suk!4v1714947059531!5m2!1sen!2suk" className={styles.map}>
        </iframe>
      </div>
    </div>
  )
}

export default Location