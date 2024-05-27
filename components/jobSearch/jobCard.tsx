import React, { useEffect, useState } from "react";
import cardStyles from "./card.module.css"
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
  setkeywords: (keyword: string) => void;
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

  // const importSvgs = () => {
  //   import(`${logo}`).then((d) => {
  //     setIcon(d.default);
  //   });
  // };

  // useEffect(() => {
  //   importSvgs();
  // }, [logo]);

  return (
    <div className={cardStyles.container}>
      {/* <div className="logo">
        <img src={icon} alt="" />
      </div> */}
      <div className={cardStyles.position}>{position}</div>
      <div className={cardStyles.jobInfo}>
        <span><GoLocation className={cardStyles.icon}/> {location}</span>
        <span><LuClock3 className={cardStyles.icon}/>{contract}</span>
        <span><GiMoneyStack className={cardStyles.icon}/>{salary}</span>
      </div>
      <div className={cardStyles.bottomInfo}>
        <div className={cardStyles.bottomInfoLeft}>
          {props.data.new && <span className={cardStyles.new}>new</span>}
          <span className={cardStyles.postedDate}>{postedAt}</span>
        </div>
        <a className={cardStyles.buttonContainer}>
          <button className={cardStyles.button}>
            View <KeyboardArrowRightIcon/>
          </button>
        </a>
      </div>

      <div className={cardStyles.tags}>
        {keywords.map((key, id) => (
          <span onClick={() => props.setkeywords(key)} key={id} className={cardStyles.tag}>
            {key}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
