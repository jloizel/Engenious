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

interface AboutSliderProps {
  // text: string
}

const AboutSlider: React.FC<AboutSliderProps> = ({}) => {
  const [data, setData] = useState([
    {
      id: "",
      title: "",
      text: ""
    },
  ]);

  const getData=()=>{
    fetch('data/about.json',{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      });
    }

     useEffect(()=>{
       getData()
     },[])

     console.log(data)

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
    <div className={styles.swiperContainer}>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        initialSlide={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.swiper}
        style={{marginLeft: "0px"}}
      >
        {data.map((service, index) => (
          <SwiperSlide key={service.id} className={styles.swiperSlide}>
            <div className={styles.container} >
              <div className={styles.content}>
                <div className={styles.title}>{service.title}</div>
                <div className={styles.text}>{service.text}</div>
              </div>
              <div className={styles.buttonContainer}>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default AboutSlider