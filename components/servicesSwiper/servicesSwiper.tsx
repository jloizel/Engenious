import React from 'react';
import styles from './page.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { createTheme, useMediaQuery } from '@mui/material';
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlineArrowLongLeft} from "react-icons/hi2";


const ServicesSwiper: React.FC = () => {
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
              <img src="/employers/ourServices/1.jpg" alt="Image" className={styles.image}/>
              <HiOutlineArrowLongRight className={styles.arrow1}/>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.content}>
                <div className={styles.title}>Permanent Recruitment.</div>
                <div className={styles.text}>On-site, hybrid or remote. One person, or multiple hires. We help you find the right highly-skilled talent for your business and make permanent recruitment stress-free for you.</div>
                <button className={styles.button} onClick={() => scrollToSection('permanent-recruitment')}>
                  Learn more <IoIosArrowForward/>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.container}>
            <div className={styles.imageContainer2}>
              <img src="/employers/ourServices/2.jpg" alt="Image" className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.content}>
                <div className={styles.title}>Contract Recruitment.</div>
                <div className={styles.text}>Faced with a transformation project or talent shortages? You need to strengthen your workforce when it matters most. Whether planning for future growth or dealing with the unexpected, temporary and contract recruitment helps your business thrive, fast.</div>
                <button className={styles.button} onClick={() => scrollToSection('contract-recruitment')}>
                  Learn more <IoIosArrowForward/>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.container}>
            <div className={styles.imageContainer2}>
              <img src="/employers/ourServices/3.jpg" alt="Image" className={styles.image}/>
              <HiOutlineArrowLongLeft className={styles.arrow2}/>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.content}>
                <div className={styles.title}>Search & Select</div>
                <div className={styles.text}>We offer a comprehensive search & select service designed to identify, attract, and source senior-level candidates or those for specifically hard-to-place roles. Our meticulous approach begins with a deep understanding of your organization&apos;s culture, goals, and specific needs for each position.</div>
                <button className={styles.button} onClick={() => scrollToSection('search-select')}>
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

export default ServicesSwiper;
