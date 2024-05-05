import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRouter } from 'next/router';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { createTheme, useMediaQuery } from "@mui/material";


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

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="/pics.png" alt="Images" className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.quote}>
          &apos;Enter some kind of quote here.&apos;
        </div>
        <div className={styles.quoter}>
          - Poppy Dickinson, CEO of Engenious Recruitment
        </div>
        <div className={styles.text}>
          At Engenious Recruitment, our priority is our people, enabling them to excel and reach new heights. Join our team, and together, we&apos;ll surpass expectations and redefine success
        </div>
        <button className={styles.button}>Join the team</button>
      </div>
        
    </div>
  )
}

export default Join