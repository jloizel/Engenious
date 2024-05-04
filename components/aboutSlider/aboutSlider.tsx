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
      spaceBetween={20}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      // style={{"--swiper-theme-color": "#00617C"}}
      className={styles.swiper}
      // style={{width: "100%"}}
    >
      {data.map((service, index) => (
        <SwiperSlide key={service.id} className={styles.swiperSlide}>
          {/* <Slider 
            id={index}
            title={service.title}
            text={service.text} 
            link={service.link}
          /> */}
          <div className={styles.container} >
            <div className={styles.content}>
              <div className={styles.title}>{service.title}</div>
              <div className={styles.text}>{service.text}</div>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.button}>Learn More <KeyboardArrowRightIcon className={styles.arrow}/></button>
            </div>
          </div>
        </SwiperSlide>
      ))}
     
    </Swiper>
    </div>
  )
}

export default AboutSlider