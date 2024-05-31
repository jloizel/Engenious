import React, { useEffect, useState } from "react";
import JobCard from "./jobCard";
import styles from "./page.module.css";
import { HiSquare3Stack3D } from "react-icons/hi2";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Skeleton } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

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
  keywords: string[];
  showAllJobs: boolean;
  handleButtonClick: () => void
}

const JobCardsSlider: React.FC<JobsProps> = ({ data, setKeywords, keywords, showAllJobs, handleButtonClick }) => {
  const [filteredData, setFilteredData] = useState<JobCardData[]>([]);
  const [visibleJobs, setVisibleJobs] = useState<JobCardData[]>([]);
  const [loading, setLoading] = useState(true);

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

  // useEffect(() => {
  //   if (!loading) {
  //     const modifiedData = () => {
  //       if (keywords.length > 0) {
  //         const newData = data.filter((d) => {
  //           return keywords.every((key) => {
  //             return (
  //               d.role === key ||
  //               d.level === key ||
  //               d.languages.includes(key) ||
  //               d.tools.includes(key)
  //             );
  //           });
  //         });
  //         setFilteredData(newData);
  //       } else {
  //         setFilteredData(data);
  //       }
  //     };

  //     modifiedData();
  //   }
  // }, [loading, keywords, data]);

  const handleViewAllJobs = () => {
    setVisibleJobs(data);
  };



  return (
    <div className={styles.jobsContainer}>
      <div className={styles.header}>
        <div className={styles.leftContainer}>
          <HiSquare3Stack3D className={styles.leftIcon}/> 
          <span className={styles.leftText}>Latest job opportunities</span>
        </div>
        <button onClick={handleButtonClick} className={styles.viewAllButton}>
          View all jobs <KeyboardArrowRightIcon className={styles.searchIcon}/>
        </button>
      </div>
      <div className={styles.jobCardsContainer}>
        {loading ? (
          <Box className={styles.skeletonContainer}>
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} variant="rounded" width="60%" height={10}/>
            ))}
          </Box>
        ) : (
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
          {visibleJobs.map((d) => (
            <SwiperSlide>
              <JobCard key={d.id} data={d} setKeywords={setKeywords} />
            </SwiperSlide>
          ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default JobCardsSlider;
