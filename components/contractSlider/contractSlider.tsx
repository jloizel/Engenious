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


const ContractSlider: React.FC = () => {
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
              <HiOutlineArrowLongLeft className={styles.arrow2}/>
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
      </Swiper>
    </div>
  )
}

export default ContractSlider;