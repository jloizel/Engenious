"use client"

import data from "./jobs.json";
import { useState } from "react";
import Jobs from "./Jobs";
import Header from "./Header";
import Search from "./Search";

const JobSearch: React.FC = () => {
  const [filterKeywords, setFilterKeywords] = useState<string[]>([]);

  const setSearchKeyword = (data: string) => {
    setFilterKeywords([data]);
  };

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

      <Search setSearchKeyword={(keyword: string) => setSearchKeyword(keyword)} />

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
      {/* <Search/> */}
    </div>
  );
};

export default JobSearch;
