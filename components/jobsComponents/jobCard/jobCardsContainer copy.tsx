import React, { useEffect, useState, useRef } from "react";
import JobCard from "./jobCard";
import styles from "./page.module.css";
import { HiSquare3Stack3D } from "react-icons/hi2";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, createTheme, useMediaQuery, Skeleton } from "@mui/material";
import { useJobContext } from "../../jobContext/jobContext";


// Define the types for the job data
interface JobCardData {
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
  const sliderRef = useRef<HTMLDivElement>(null);
  const [selectedJobIndex, setSelectedJobIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  useEffect(() => {
    setLoading(true);
    const skeletonTimer = setTimeout(() => {
      setLoading(false);
    }, 200);
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

  const handleDragStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setDragStartX(event.touches[0].clientX);
  };

  const handleDragEnd = () => {
    const threshold = 100; // Adjust this value based on your preference
    if (dragDistance > threshold && selectedJobIndex > 0) {
      setSelectedJobIndex(selectedJobIndex - 1);
    } else if (dragDistance < -threshold && selectedJobIndex < visibleJobs.length - 1) {
      setSelectedJobIndex(selectedJobIndex + 1);
    }
    // Reset dragDistance
    setDragDistance(0);
  };
  
  // Update the handleDragMove function
  const handleDragMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const distance = event.touches[0].clientX - dragStartX;
    setDragDistance(distance);
    // Calculate the selectedJobIndex based on the dragDistance
    const newIndex = Math.round(Math.abs(dragDistance) / sliderRef.current.offsetWidth);
    setSelectedJobIndex(Math.min(newIndex, visibleJobs.length - 1));
  };
  
  // Add a useEffect to update the selectedJobIndex when it changes
  useEffect(() => {
    // Update the selectedJobIndex when it changes
    const handleResize = () => {
      const newIndex = Math.round(sliderRef.current.scrollLeft / sliderRef.current.offsetWidth);
      setSelectedJobIndex(newIndex);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedJobIndex]);

  const handleJobCardClick = (index: number) => {
    setSelectedJobIndex(index);
  };

  return (
    <div className={styles.jobsContainer}>
      <div className={styles.header}>
        <div className={styles.leftContainer}>
          <HiSquare3Stack3D className={styles.leftIcon} />
          <span className={styles.leftText}>Latest job opportunities</span>
        </div>
        {!isMobile && (
          href ? (
            <a href={href} style={{ textDecoration: "none" }}>
              <button onClick={handleButtonClick} className={styles.viewAllButton}>
                {displayedText} <KeyboardArrowRightIcon className={styles.searchIcon} />
              </button>
            </a>
          ) : (
            <button onClick={handleButtonClick} className={styles.viewAllButton}>
              {displayedText} <KeyboardArrowRightIcon className={styles.searchIcon} />
            </button>
          )
        )}
      </div>
      <div className={styles.jobCardsContainer}>
        {loading ? (
          <Box className={styles.skeletonContainer}>
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} variant="rounded" width="60%" height={10} />
            ))}
          </Box>
        ) : (
          isMobile ? (
            <div
              className={styles.slider}
              ref={sliderRef}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              {visibleJobs.map((d, index) => (
                <div
                  className={`${styles.sliderItem} ${
                    selectedJobIndex === index ? styles.selectedJob : ""
                  }`}
                  key={d.id}
                  onClick={() => handleJobCardClick(index)}
                >
                  <JobCard key={d.id} data={d} setKeywords={setKeywords} />
                </div>
              ))}
            </div>
          ) : (
            visibleJobs.map((d, index) => (
              <div
                className={`${styles.sliderItem} ${
                  selectedJobIndex === index ? styles.selectedJob : ""
                }`}
                key={d.id}
                onClick={() => handleJobCardClick(index)}
              >
                <JobCard key={d.id} data={d} setKeywords={setKeywords} />
              </div>
            ))
          )
        )}
      </div>
      <div className={styles.navigation}>
        {visibleJobs.map((_, index) => (
          <div
            key={index}
            className={`${styles.navigationCircle} ${
              selectedJobIndex === index ? styles.selected : ""
            }`}
          />
        ))}
      </div>
      {isMobile && (
        href ? (
          <a href={href} style={{ textDecoration: "none" }}>
            <button onClick={handleButtonClick} className={styles.viewAllButtonMobile}>
              {displayedText} <KeyboardArrowRightIcon className={styles.searchIconMobile} />
            </button>
          </a>
        ) : (
          <button onClick={handleButtonClick} className={styles.viewAllButtonMobile}>
            {displayedText} <KeyboardArrowRightIcon className={styles.searchIconMobile} />
          </button>
        )
      )}
    </div>
  );
};

export default JobCardsContainer;
