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
    <div className={styles.aboutContainer}>
        {data.map((about, index) => (
          <div className={styles.container} key={about.id}>
            <div className={styles.content}>
              <div className={styles.title}>{about.title}</div>
              <div className={styles.text}>{about.text}</div>
            </div>
            <div className={styles.buttonContainer}>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Join