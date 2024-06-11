import React, { useEffect, useState } from "react";
import JobCard from "./jobCard";
import styles from "./page.module.css";
import { HiSquare3Stack3D } from "react-icons/hi2";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Skeleton, createTheme, useMediaQuery } from "@mui/material";
import JobCardsSlider from "./jobCardsSlider";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { useJobContext } from "../../jobContext/jobContext";

// Define the types for the job data
interface JobCardData {
  // languages: string[];
  // tools: string[];
  id: number;
  position: string;
  postedAt: string;
  contractType: string;
  location: string;
  specialisation: string;
  salary: string;
}

// Define the types for the props
interface JobsProps {
  data: JobCardData[];
  setKeywords: (keyword: string) => void;
  showAllJobs: boolean;
  handleButtonClick: () => void;
  displayedText: string;
  href: string;
}

const JobCardsContainer: React.FC<JobsProps> = ({ data, setKeywords, showAllJobs, handleButtonClick, displayedText, href }) => {
  const [visibleJobs, setVisibleJobs] = useState<JobCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const { setId } = useJobContext();

  useEffect(() => {
    // Show skeleton initially
    setLoading(true);
    
    // Set timer to hide skeleton after 1000 milliseconds
    const skeletonTimer = setTimeout(() => {
      setLoading(false);
    }, 200);

    // Clean up timer when component unmounts or when it is re-rendered
    return () => clearTimeout(skeletonTimer);
  }, []);

  useEffect(() => {
    if (!loading) {
      if (showAllJobs) {
        setVisibleJobs(data);
      } else {
        setVisibleJobs(data.slice(0, 6));
      }
    }
  }, [loading, showAllJobs, data]);

  const handleViewAllJobs = () => {
    setVisibleJobs(data);
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

  return (
    <div className={styles.jobsContainer}>
      <div className={styles.header}>
        <div className={styles.leftContainer}>
          <HiSquare3Stack3D className={styles.leftIcon}/> 
          <span className={styles.leftText}>Latest job opportunities</span>
        </div>
        {!isMobile && (
          href ? (
            <a href={href} style={{textDecoration: "none"}}>
              <button onClick={handleButtonClick} className={styles.viewAllButton}>
                {displayedText} <KeyboardArrowRightIcon className={styles.searchIcon}/>
              </button>
            </a>
          ) : (
            <button onClick={handleButtonClick} className={styles.viewAllButton}>
              {displayedText} <KeyboardArrowRightIcon className={styles.searchIcon}/>
            </button>
          )
        )}
      </div>
      <div className={styles.jobCardsContainer}>
        {loading ? (
          <Box className={styles.skeletonContainer}>
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} variant="rounded" width="60%" height={10}/>
            ))}
          </Box>
        ) : (
          isMobile ? (
            <Swiper
              slidesPerView={2}
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
          {visibleJobs.map((d) => (
            <SwiperSlide className={styles.swiperSlider} key={d.id}>
              <JobCard key={d.id} data={d} setKeywords={setKeywords} />
            </SwiperSlide>
          ))}
          </Swiper>
          ) : (
            visibleJobs.map((d) => (
              <JobCard key={d.id} data={d} setKeywords={setKeywords} />
            ))
          )
        )}
        {isMobile && (
          href ? (
            <a href={href} style={{textDecoration: "none"}}>
              <button onClick={handleButtonClick} className={styles.viewAllButtonMobile}>
                {displayedText} <KeyboardArrowRightIcon className={styles.searchIconMobile}/>
              </button>
            </a>
          ) : (
            <button onClick={handleButtonClick} className={styles.viewAllButtonMobile}>
              {displayedText} <KeyboardArrowRightIcon className={styles.searchIconMobile}/>
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default JobCardsContainer;
