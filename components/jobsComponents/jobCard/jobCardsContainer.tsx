import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './page.module.css';
import { Pagination } from 'swiper/modules';
import { Box, Skeleton, createTheme, useMediaQuery } from '@mui/material';
import { useJobContext } from '../../jobContext/jobContext';
import JobCard from './jobCard';
import { HiSquare3Stack3D } from "react-icons/hi2";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Job, getAllJobs } from '@/app/API';

interface JobCardData {
  _id: string;
  position: string;
  contractType: string;
  location: string;
  specialisation: string;
  salary: string;
  jobDescription: string;
  duration: string;
  responsibilities: string[];
  skillsExperience: string[];
  createdAt: string;
  updatedAt: string;
}

interface JobsProps {
  // data: JobCardData[];
  setKeywords: (keyword: string) => void;
  showAllJobs: boolean;
  handleButtonClick: () => void;
  displayedText: string;
  href: string;
}

const JobCardsContainer: React.FC<JobsProps> = ({ setKeywords, showAllJobs, handleButtonClick, displayedText, href }) => {
  const [visibleJobs, setVisibleJobs] = useState<JobCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const { setId } = useJobContext();
  const [data, setData] = useState<JobCardData[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  

  // Fetch jobs when the component mounts
  useEffect(() => {
    fetchJobs();
  }, []);

  const convertToJobCardData = (job: Job): JobCardData => ({
    _id: job._id,
    position: job.position,
    contractType: job.contractType,
    location: job.location,
    specialisation: job.specialisation,
    salary: job.salary,
    jobDescription: job.jobDescription,
    duration: job.duration,
    responsibilities: job.responsibilities,
    skillsExperience: job.skillsExperience,
    createdAt: job.createdAt,
    updatedAt: job.updatedAt,
  });

  // Fetch jobs from the database
  const fetchJobs = async () => {
    try {
      // setLoading(true); // Set loading to true before fetching
      const jobs = await getAllJobs();

      // Convert jobs array to JobCardData array
      const jobCardDataArray = jobs.map(convertToJobCardData);

      // Set the state with the converted data
      setJobs(jobs);  // Set the raw Job[] fetched from API, if needed
      setData(jobCardDataArray);  // Set the JobCardData[] after conversion

      // Set visible jobs based on showAllJobs flag
      if (showAllJobs) {
        setVisibleJobs(jobCardDataArray);
      } else {
        setVisibleJobs(jobCardDataArray.slice(0, 6)); // Show only the first 6 jobs
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setJobs([]);  // Ensure jobs is set to an empty array on error
      setData([]);  // Ensure data is also set to an empty array on error
    } finally {
      setLoading(false);  // Set loading to false after fetching, whether successful or not
    }
  };

  // useEffect(() => {
  //   const loadData = async () => {
  //     setLoading(true);
  //     const jobs = await fetchJobs();
  //     setData(jobs);
  //     setLoading(false);
  //   };

  //   loadData();
  // }, []);


  // useEffect(() => {
  //   // Show skeleton initially
  //   setLoading(true);
    
  //   // Set timer to hide skeleton after 1000 milliseconds
  //   const skeletonTimer = setTimeout(() => {
  //     setLoading(false);
  //   }, 200);

  //   // Clean up timer when component unmounts or when it is re-rendered
  //   return () => clearTimeout(skeletonTimer);
  // }, []);

  // useEffect(() => {
  //   if (!loading) {
  //     if (showAllJobs) {
  //       setVisibleJobs(data);
  //     } else {
  //       setVisibleJobs(data.slice(0, 6));
  //     }
  //   }
  // }, [loading, showAllJobs, data]);

  const handleViewAllJobs = () => {
    setVisibleJobs(data);
  };

  const handleButtonClickMobile = () => {
    handleButtonClick()
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  }

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
      {loading ? (
        <Box className={styles.skeletonContainer}>
          {[...Array(3)].map((_, index) => (
            <Skeleton key={index} variant="rounded" width="60%" height={10}/>
          ))}
        </Box>
      ) : (
        isMobile ? (
          <Swiper
            slidesPerView={1.2}
            centeredSlides={true}
            spaceBetween={15}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={styles.swiper}
          >
          {visibleJobs.map((d) => (
            <SwiperSlide className={styles.swiperSlider} key={d._id}>
              <JobCard key={d._id} data={d} setKeywords={setKeywords} />
            </SwiperSlide>
          ))}
          </Swiper>
        ) : (
          <div className={styles.jobCardsContainer}>
            {visibleJobs.map((d) => (
              <JobCard key={d._id} data={d} setKeywords={setKeywords} />
            ))}
          </div>
        )
      )}
      {isMobile && (
        href ? (
          <a href={href} style={{textDecoration: "none"}}>
            <button onClick={handleButtonClickMobile} className={styles.viewAllButtonMobile}>
              {displayedText} <KeyboardArrowRightIcon className={styles.searchIconMobile}/>
            </button>
          </a>
        ) : (
          <button onClick={handleButtonClickMobile} className={styles.viewAllButtonMobile}>
            {displayedText} <KeyboardArrowRightIcon className={styles.searchIconMobile}/>
          </button>
        )
      )}
    </div>
  );
}

export default JobCardsContainer;
