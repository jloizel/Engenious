import React from "react";
import Jobs from "../jobCard/jobCardsContainer";
import Header from "../Header";
import { Box } from "@mui/material";
import styles from "./page.module.css";
import JobsBar from "../../navbar/jobs/jobsBar";

interface JobSearchProps {
  keyword: string
}

const JobSearch: React.FC<JobSearchProps> = ({keyword}) => {

  console.log(keyword)

  return (
    <div className={styles.container}>
      <JobsBar/>
      <p>Keyword: {keyword}</p>
    </div>
  );
};

export default JobSearch;
