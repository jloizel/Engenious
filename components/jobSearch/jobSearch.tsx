"use client"

import data from "./jobs.json";
import { useState } from "react";
import Jobs from "./Jobs";
import Header from "./Header";

const JobSearch: React.FC = () => {
  const [filterKeywords, setFilterKeywords] = useState<string[]>([]);

  // const setSearchKeyword = (data: string) => {
  //   setFilterKeywords(data);
  // };

  const addFilterKeywords = (data: string) => {
    if (!filterKeywords.includes(data)) {
      setFilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteKeyword = (data: string) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setFilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setFilterKeywords([]);
  };

  return (
    <div>
      <div className="header"></div>

      {/* <Search setSearchKeyword={setSearchKeyword} /> */}

      {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
          clearAll={clearAll}
        />
      )}

      <Jobs
        keywords={filterKeywords}
        data={data}
        setKeywords={addFilterKeywords}
      />
    </div>
  );
};

export default JobSearch;
