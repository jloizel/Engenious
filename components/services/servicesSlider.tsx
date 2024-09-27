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
      name: "",
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

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };  

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
          key={service.id}
        >
          <div className={styles.content}>
            <div className={styles.title}>{service.title}</div>
            <div className={styles.text}>{service.text}</div>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.button} ${
                hoveredItem === service.id ? styles.buttonActive : ''
              }`}
              onClick={() => scrollToSection(service.id)} // Scroll to section on click
            >
              Learn More <KeyboardArrowRightIcon className={styles.arrow} />
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