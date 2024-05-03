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
import Slider from './slider';

interface SliderContainerProps {
  // text: string
}

const SliderContainer: React.FC<SliderContainerProps> = ({}) => {
  const [data, setData] = useState([
    {
      id: "",
      title: "",
      text: "",
      link: "",
    },
  ]);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((services) => setData(services));
  }, []);

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

    <Swiper
    breakpoints={{
      // when window width is >= 640px
      640: {
        width: 640,
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        width: 768,
        slidesPerView: 2,
      },
      1024: {
        width: 1024,
        slidesPerView: 3,
      }
    }}
      spaceBetween={isMobile ? 0 : 170}
      loop={true}
      navigation={true}
      noSwiping={true} // Disable swiping
      noSwipingClass="swiper-no-swiping" // Class applied to the slides where swiping is disabled
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      // style={{"--swiper-theme-color": "#6C9285"}}
    >
      {data.map((service, index) => (
        <SwiperSlide key={service.id} >
          <Slider 
            id={index}
            title={service.title}
            text={service.text} 
            link={service.link} 
          />
        </SwiperSlide>
      ))}
    </Swiper>
    
  )
}

export default SliderContainer