import React, { useEffect, useState } from "react";
import JobCard from "./jobCard";
import styles from "./page.module.css"
import { BiSolidCarousel } from "react-icons/bi";
import { HiSquare3Stack3D } from "react-icons/hi2";




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
}

const Jobs: React.FC<JobsProps> = ({ data, setKeywords, keywords }) => {
  const [filteredData, setFilteredData] = useState<JobCardData[]>([]);
  const [visibleJobs, setVisibleJobs] = useState<JobCardData[]>([]);

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

  useEffect(() => {
    setVisibleJobs(data.slice(0, 6));
  }, [data]);

  useEffect(() => {
    modifiedData();
  }, [keywords, data]);
  
  const handleViewAllJobs = () => {
    // Show all jobs
    setVisibleJobs(data);
  };

  return (
    <div>
    <div>
      <HiSquare3Stack3D/>
        Latest job opportunities
        <button onClick={handleViewAllJobs} className={styles.viewAllButton}>
          View all jobs
        </button>
      </div>
    <div className={styles.jobsContainer}>
      

      {visibleJobs.map((d) => (
        <JobCard key={d.id} data={d} setkeywords={setKeywords} />
      ))}
      
    </div>
    </div>
  );
};

export default Jobs;
