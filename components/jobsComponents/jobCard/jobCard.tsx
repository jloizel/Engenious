"use client"

import React, { useEffect, useState } from "react";
import styles from "./page.module.css"
import { GoLocation } from "react-icons/go";
import { LuClock3 } from "react-icons/lu";
import { GiMoneyStack } from "react-icons/gi";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Define the types for the job data
interface JobData {
  company: string;
  contract: string;
  id: number;
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
interface JobProps {
  data: JobData;
  setKeywords: (keyword: string) => void;
}

const JobCard: React.FC<JobProps> = (props) => {
  const {
    company,
    contract,
    languages,
    level,
    location,
    salary,
    position,
    postedAt,
    role,
    tools,
  } = props.data;

  let keywords = [role, level, ...languages, ...tools];

  const [icon, setIcon] = useState<string>("");
  const [newJob, setNewJob] = useState(false)

  const calculateDaysAgo = (postedAt: string) => {
    const postedDate = new Date(postedAt);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - postedDate.getTime();
    return Math.floor(timeDifference / (1000 * 3600 * 24));
  };

  const daysAgo = calculateDaysAgo(postedAt);

  // const importSvgs = () => {
  //   import(`${logo}`).then((d) => {
  //     setIcon(d.default);
  //   });
  // };

  // useEffect(() => {
  //   importSvgs();
  // }, [logo]);

  const handleCardClick = () => {
    // Redirect to the desired URL
    window.location.href = "/job-details"; // Replace with your actual URL
  };

  return (
    <div className={styles.container} onClick={handleCardClick}>
      {/* <div className="logo">
        <img src={icon} alt="" />
      </div> */}
      <div className={styles.position}>{position}</div>
      <div className={styles.jobInfo}>
        <span><GoLocation className={styles.icon}/> {location}</span>
        <span><LuClock3 className={styles.icon}/>{contract}</span>
        <span><GiMoneyStack className={styles.icon}/>{salary}</span>
      </div>
      <div className={styles.bottomInfo}>
        <div className={styles.bottomInfoLeft}>
          {/* {props.data.new && <span className={styles.new}>new</span>} */}
          {daysAgo < 3 && <span className={styles.new}>new</span>}
          <span className={styles.postedDate}>{daysAgo} days ago</span>
        </div>
        <a className={styles.buttonContainer}>
          <button className={styles.button}>
            View <KeyboardArrowRightIcon/>
          </button>
        </a>
      </div>

      {/* <div className={styles.tags}>
        {keywords.map((key, id) => (
          <span onClick={() => props.setkeywords(key)} key={id} className={styles.tag}>
            {key}
          </span>
        ))}
      </div> */}
    </div>
  );
};

export default JobCard;
