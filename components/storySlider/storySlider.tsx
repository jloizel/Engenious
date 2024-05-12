import React from 'react';
import styles from './page.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { createTheme, useMediaQuery } from '@mui/material';
import { IoIosArrowForward } from "react-icons/io";


const StorySlider: React.FC = () => {
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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        initialSlide={0}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className={styles.container}>
            <div className={styles.imageContainer}>
            <img src="/about/ourStory/1.jpg" alt="Image" className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.content}>
                <div className={styles.page}>OUR STORY.</div>
                <div className={styles.title}>Where we&apos;ve come from.</div>
                <div className={styles.text}>From day one, we&apos;ve had high expectations. High expectations of ourselves, and high expectations for the people we work with.</div>
                <button className={styles.button} onClick={() => scrollToSection('where-we-come-from')}>
                  Learn more <IoIosArrowForward/>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.container}>
            <div className={styles.imageContainer2}>
            <img src="/about/ourStory/2.jpg" alt="Image" className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.content}>
                <div className={styles.page}>OUR STORY.</div>
                <div className={styles.title}>Where we are today.</div>
                <div className={styles.text}>We are not a company that sits still. Our goal has always been to best serve our customers.</div>
                <button className={styles.button} onClick={() => scrollToSection('where-we-are-today')}>
                  Learn more <IoIosArrowForward/>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default StorySlider;
