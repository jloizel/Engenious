import React, { useEffect, useState } from 'react'
import styles from './page.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { createTheme, useMediaQuery } from "@mui/material";

const AboutSlider: React.FC = ({}) => {
  const [data, setData] = useState([
    {
      id: "",
      title: "",
      text: ""
    },
  ]);

  const getData=()=>{
    fetch('/data/about.json',{
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

  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTitleFontSize = () => {
    if (isMobile) {
      return "50px"
    } else {
      return "40px"
    }
  }

  const handleTextFontSize = () => {
    if (isMobile) {
      return "18px"
    } else {
      return "20px"
    }
  }


  return (
    <div className={styles.swiperContainer}>
      <Swiper
        slidesPerView={isTablet ? 3 : 2}
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
            <div className={styles.container} style={{alignContent: "center"}}>
              <div className={styles.title} style={{fontSize: handleTitleFontSize()}}>
                {service.title}
              </div>
              <div className={styles.text} style={{fontSize: handleTextFontSize()}}>
                {service.text}
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