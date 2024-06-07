import React, { useEffect, useState } from 'react'
import styles from './page.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

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

  return (
    <div className={styles.swiperContainer}>
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
            <div className={styles.container} >
                <div className={styles.quote}>{testimonial.quote}</div>
                <div className={styles.quoter}>{testimonial.quoter}</div>
                <div className={styles.info}>{testimonial.role} | {testimonial.company}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonials