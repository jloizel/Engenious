import React, { useEffect, useState } from 'react'
import styles from './page.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { createTheme, useMediaQuery } from '@mui/material';

const Testimonials: React.FC = ({}) => {
  const [data, setData] = useState([
    {
      id: "",
      quote: "",
      quoter: "",
      role: "",
      company: ""
    },
  ]);

  const getData=()=>{
    fetch('/data/testimonials.json',{
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
  
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isComputer = useMediaQuery(theme.breakpoints.up('md'));

  const handleSwiperContainerWidth = () => {
    if (isMobile) {
      return "80%"
    } else if (isTablet) {
      return "60%"
    } else {
      return "650px"
    }
  }

  const handleContainerPaddingL = () => {
    if (isMobile) {
      return "20px"
    } else if (isTablet) {
      return "40px"
    } else {
      return "60px"
    }
  }

  const handleContainerPaddingT = () => {
    if (isMobile) {
      return "30px"
    } else if (isTablet) {
      return "30px"
    } else {
      return "40px"
    }
  }

  const handleContainerPaddingB = () => {
    if (isMobile) {
      return "20px"
    } else if (isTablet) {
      return "20px"
    } else {
      return "30px"
    }
  }

  const handleContainerMargin = () => {
    if (isMobile) {
      return "120px"
    } else if (isTablet) {
      return "140px"
    } else {
      return "140px"
    }
  }

  const handleQuoteFontSize = () => {
    if (isMobile) {
      return "15px"
    } else if (isTablet) {
      return "18px"
    } else {
      return "20px"
    }
  }

  const handleQuoteLineHeight = () => {
    if (isMobile) {
      return "20px"
    } else if (isTablet) {
      return "25px"
    } else {
      return "32px"
    }
  }

  const handleQuoterFontSize = () => {
    if (isMobile) {
      return "15px"
    } else if (isTablet) {
      return "20px"
    } else {
      return "22px"
    }
  }

  const handleQuoterMargin = () => {
    if (isMobile) {
      return "20px"
    } else if (isTablet) {
      return "20px"
    } else {
      return "30px"
    }
  }

  const handleInfoFontSize = () => {
    if (isMobile) {
      return "12px"
    } else if (isTablet) {
      return "16px"
    } else {
      return "18px"
    }
  }

  return (
    <div className={styles.swiperContainer} style={{width: handleSwiperContainerWidth()}}>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        navigation={true}
        initialSlide={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className={styles.swiper}
        style={{marginLeft: "0px"}}
        speed={800}
      >
        {data.map((testimonial, index) => (
          <SwiperSlide key={testimonial.id} className={styles.swiperSlide}>
            <div className={styles.container} 
              style={{
                paddingLeft: handleContainerPaddingL(),
                paddingRight: handleContainerPaddingL(),
                paddingTop: handleContainerPaddingT(),
                paddingBottom: handleContainerPaddingB(),
                marginBottom: handleContainerMargin()
              }}
            >
                <div className={styles.quote} style={{fontSize: handleQuoteFontSize(), lineHeight: handleQuoteLineHeight()}}>{testimonial.quote}</div>
                <div className={styles.quoter} style={{fontSize: handleQuoterFontSize(), marginTop: handleQuoterMargin()}}>{testimonial.quoter}</div>
                <div className={styles.info} style={{fontSize: handleInfoFontSize()}}>{testimonial.role} | {testimonial.company}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonials