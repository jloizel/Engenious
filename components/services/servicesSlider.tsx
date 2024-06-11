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

interface ServicesSliderProps {
  // text: string
}

const ServicesSlider: React.FC<ServicesSliderProps> = ({}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [buttonClass, setButtonClass] = useState<string | null>(null);
  const [data, setData] = useState([
    {
      id: "",
      title: "",
      text: "",
      link: "",
    },
  ]);

  const getData=()=>{
    fetch('/data/services.json',{
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

  useEffect(()=>{
    if (hoveredItem) {
      setButtonClass("buttonActive")
    } else {
      setButtonClass ("button")
    }
  },[hoveredItem])
  

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

  const handleContainerPadding = () => {
    if (isMobile || isTablet) {
      return "25px 25px"
    } else {
      return "40px 25px"
    }
  }

  const handleTitleFontSize = () => {
    if (isMobile) {
      return "24px"
    } else {
      return "26px"
    }
  }

  const handleTextFontSize = () => {
    if (isMobile) {
      return "14px"
    } else if (isTablet) {
      return "15px"
    } else {
      return "16px"
    }
  }

  const handleButtonFontSize = () => {
    if (isMobile || isTablet) {
      return "14px"
    } else {
      return "16px"
    }
  }

  return (
    <div className={styles.swiperContainer}>
    <Swiper
      slidesPerView={isTablet ? 3 : 2}
      centeredSlides={true}
      spaceBetween={80}
      loop={false}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className={styles.swiper}
    >
      {data.map((service, index) => (
        <SwiperSlide key={service.id} className={styles.swiperSlide}>
          <div 
            className={styles.container}
            onMouseEnter={() => setHoveredItem(service.id)}
            onMouseLeave={() => setHoveredItem(null)}
            id={service.id}
            style={{padding: handleContainerPadding()}}>
            <div className={styles.content}>
              <div className={styles.title} style={{fontSize: handleTitleFontSize()}}>{service.title}</div>
              <div className={styles.text} style={{fontSize: handleTextFontSize()}}>{service.text}</div>
            </div>
            <div className={styles.buttonContainer} style={{textDecoration: "none"}}>
              <button 
                className={`${styles.button} ${hoveredItem === service.id ? styles.buttonActive : ''}`}
                id={service.id}
                style={{fontSize: handleButtonFontSize()}}
                >
                Learn More <KeyboardArrowRightIcon className={styles.arrow}/>
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
     
    </Swiper>
    </div>
  )
}

export default ServicesSlider