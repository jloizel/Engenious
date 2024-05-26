import React, { useEffect, useState } from "react";
import Job from "./Job";

// Define the types for the job data
interface JobData {
  id: number;
  company: string;
  contract: string;
  featured: boolean;
  languages: string[];
  level: string;
  location: string;
  logo: string;
  position: string;
  postedAt: string;
  role: string;
  tools: string[];
  new: boolean; // Assuming 'new' is a boolean property in the job data
}

// Define the types for the props
interface JobsProps {
  data: JobData[];
  setKeywords: (keyword: string) => void;
  keywords: string[];
}

const Jobs: React.FC<JobsProps> = ({ data, setKeywords, keywords }) => {
  const [filteredData, setFilteredData] = useState<JobData[]>([]);

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
    modifiedData();
  }, [keywords, data]);

  return (
    <div className="jobs">
      {filteredData.map((d) => (
        <Job key={d.id} data={d} setkeywords={setKeywords} />
      ))}
    </div>
  );
};

export default Jobs;
