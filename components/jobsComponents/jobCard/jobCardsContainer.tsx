import React, { useEffect, useState } from "react";
import JobCard from "./jobCard";
import styles from "./page.module.css";
import { HiSquare3Stack3D } from "react-icons/hi2";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Skeleton } from "@mui/material";

// Define the types for the job data
interface JobCardData {
  id: number;
  company: string;
  contract: string;
  languages: string[];
  level: string;
  location: string;
  salary: string;
  position: string;
  postedAt: string;
  role: string;
  tools: string[];
  new: boolean; // Assuming 'new' is a boolean property in the job data
}

// Define the types for the props
interface JobsProps {
  data: JobCardData[];
  setKeywords: (keyword: string) => void;
  keywords: string[];
  showAllJobs: boolean;
}

const JobCardsContainer: React.FC<JobsProps> = ({ data, setKeywords, keywords, showAllJobs }) => {
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

  useEffect(() => {
    if (!loading) {
      const modifiedData = () => {
        if (keywords.length > 0) {
          const newData = data.filter((d) => {
            return keywords.every((key) => {
              return (
                d.role === key ||
                d.level === key ||
                d.languages.includes(key) ||
                d.tools.includes(key)
              );
            });
          });
          setFilteredData(newData);
        } else {
          setFilteredData(data);
        }
      };

      modifiedData();
    }
  }, [loading, keywords, data]);

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
        <button onClick={handleViewAllJobs} className={styles.viewAllButton}>
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
          visibleJobs.map((d) => (
            <JobCard key={d.id} data={d} setKeywords={setKeywords} />
          ))
        )}
      </div>
    </div>
  );
};

export default JobCardsContainer;