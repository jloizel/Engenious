'use client';

import React, { FC, useEffect, useRef, useState } from 'react';

import styles from './page.module.css';
import { JobProvider, useJobContext } from '../../jobContext/jobContext';
import { LuClock3 } from "react-icons/lu";
import { GiMoneyStack } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import data from "../../jobsComponents/jobs.json";
import { createTheme, useMediaQuery } from '@mui/material';
import { Job, getJobById } from '@/app/API';

const JobDetails: FC = () => {
  const { id, setId } = useJobContext();
  const [jobDetails, setJobDetails] = useState<Job | null>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  console.log(id)

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        if (!id) {
          throw new Error('No job ID provided');
        }

        console.log('Fetching job details for ID:', id);

        const jobData = await getJobById(id); // Ensure id is string
        console.log('Fetched job data:', jobData);
        
        if (jobData) {
          setJobDetails(jobData);
        } else {
          console.log('Job details not found');
          setJobDetails(null); // Handle case where jobData is null
        }
      } catch (error) {
        console.error('Error fetching job details:', error);
        setJobDetails(null); // Handle error state accordingly
      }
    };

    fetchJobDetails();
  }, [id]);
  
  const calculateDaysAgo = (postedAt: string) => {
    const postedDate = new Date(postedAt);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - postedDate.getTime();
    return Math.floor(timeDifference / (1000 * 3600 * 24));
  };

  const daysAgo = jobDetails ? calculateDaysAgo(jobDetails.createdAt) : null;

  const calculateDate = (postedAt: string) => {
    const postedDate = new Date(postedAt);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - postedDate.getTime();
    const daysAgo = Math.floor(timeDifference / (1000 * 3600 * 24));
  
    if (daysAgo > 7) {
      // If more than 7 days ago, return the formatted date
      const options = { month: "short", day: "numeric" };
      return postedDate.toLocaleDateString(undefined, { month: "short", day: "numeric" });
    } else {
      // Otherwise, return the number of days ago
      return `${daysAgo} days ago`;
    }
  };

  const handleApplyNowButton = (jobId: string) => {
    const jobIdNumber = parseInt(jobId);
    setId(jobId);
  }

  const renderApplyButton = () => {
    if (!jobDetails) {
      return null; // or loading indicator if jobDetails is not yet fetched
    }

    return (
      <button className={styles.button} onClick={() => handleApplyNowButton(jobDetails._id)}>
        Apply Now
      </button>
    );
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
    <JobProvider>
    <div className={styles.form}>
      <div className={styles.selectedJobInfoContainer}>
        {jobDetails && (
          <div className={styles.selectedJobInfo}>
            <span className={styles.postedDate}>
              {daysAgo !== null && daysAgo > 7 ? calculateDate(jobDetails.createdAt) : `${daysAgo} days ago`}
            </span>
            <div className={styles.selectedPosition}>{jobDetails.position}</div>
            <div className={styles.jobInfo}>
              <span><GoLocation className={styles.icon} />{jobDetails.location}</span>
              <span><LuClock3 className={styles.icon} />{jobDetails.contractType}</span>
              <span><GiMoneyStack className={styles.icon} />{jobDetails.salary}</span>
            </div>
            {!isMobile && (
              <a className={styles.buttonContainer} href='/jobs/apply' style={{textDecoration: "none"}}>
                <button className={styles.button} onClick={() => handleApplyNowButton(jobDetails._id)}>
                  Apply Now
                </button>
              </a>
            )}
            <div className={styles.selectedJobData}>
              <span className={styles.selectedJobDataHeader}>Job Description</span>
              <span className={styles.selectedJobDataDescription}>{jobDetails.jobDescription}</span>
              <span className={styles.selectedJobDataHeader}>Main Responsibilities</span>
                <ul>
                  {jobDetails.responsibilities?.map((responsibilities: string, index: number) => (
                    <li key={index}>{responsibilities}</li>
                  ))}
                </ul>
              <span className={styles.selectedJobDataHeader}>Skills and experience required:</span>
                <ul>
                  {jobDetails.skillsExperience?.map((skill: string, index: number) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              <div className={styles.jobBottomInfo}>
                <span>Engenious is acting as an Employment Agency and references to pay rates are indicative.</span>
                <div>BY APPLYING FOR THIS ROLE YOU ARE AGREEING TO OUR <a href="#" style={{textDecoration: "none"}}>PRIVACY POLICY</a> WHICH GOVERNS YOUR USE OF ENGENIOUS SERVICES.</div>
              </div>
            </div>
          </div>
        )}
        
      </div>
      {isMobile && (
          <a className={styles.mobileButtonContainer} href='/jobs/apply' style={{textDecoration: "none"}}>
            {renderApplyButton()}
          </a>
        )}
    </div>
    </JobProvider>
  );
};

export default JobDetails;
