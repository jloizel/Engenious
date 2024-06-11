import React, { useEffect, useRef, useState } from "react";
import Jobs from "../jobCard/jobCardsContainer";
import { Box, Pagination, PaginationItem, createTheme, useMediaQuery } from "@mui/material";
import styles from "./page.module.css";
import JobsBar from "../../navbar/jobs/jobsBar";
import Filter from "../filter/filter";
import { LuClock3 } from "react-icons/lu";
import { GiMoneyStack } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { LuSearchX } from "react-icons/lu";
import { BrowserRouter, Link } from 'react-router-dom';
import { JobProvider, useJobContext } from "../../jobContext/jobContext";

export interface JobCardData {
  id: number;
  position: string;
  postedAt: string;
  contractType: string;
  location: string;
  specialisation: string;
  salary: string;
  jobDescription: string;
  responsibilities: string[];
  skillsExperience: string[];
}

interface JobSearchProps {
  keyword: string;
  locations: string[];
  data: JobCardData[];
  setSearchKeywords: (keywords: string[]) => void;
}

const JobSearch: React.FC<JobSearchProps> = ({ keyword, data, setSearchKeywords }) => {
  const [filteredApplied, setFilterApplied] = useState(false);
  const [filteredData, setFilteredData] = useState<JobCardData[]>(data);
  const [selectedJobId, setSelectedJobId] = useState(data.length > 0 ? data[0].id : null);

  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState<string[]>([]);
  const [locationsCounts, setLocationsCounts] = useState({});
  const [selectedLocations, setSelectedLocations] = useState([]);

  const [contractTypes, setContractTypes] = useState<string[]>([]);
  const [contractTypeCounts, setContractTypeCounts] = useState({});
  const [selectedContractTypes, setSelectedContractTypes] = useState([]);

  const [salaryRanges, setSalaryRanges] = useState<string[]>([]);
  const [salaryRangesCounts, setSalaryRangesCounts] = useState({});
  const [selectedSalaryRanges, setSelectedSalaryRanges] = useState([]);

  const [specialisations, setSpecialisations] = useState<string[]>([]);
  const [specialisationsCounts, setSpecialisationsCounts] = useState({});
  const [selectedSpecialisations, setSelectedSpecialisations] = useState([]);``

  const [positions, setPositions] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;
  const jobListTopRef = useRef<HTMLDivElement>(null);
  const jobsListRef = useRef<HTMLDivElement>(null);
  const [pageChanged, setPageChanged] = useState(false)
  const [buttonPressed, setButtonPressed] = useState(false)
  const [isMobileJobSelected, setIsMobileJobSelected] = useState(false);
  const [jobApplied, setJobApplied] = useState(false)
  const { setId } = useJobContext();

  const handleJobClick = (jobId: number) => {
    setSelectedJobId(jobId);
    if (window.innerWidth <= 768) {
      setIsMobileJobSelected(true); // Show the right container on mobile when a job is selected
    }
  };

  const handleCloseBar = () => {
    setIsMobileJobSelected(false);
  };

  const handleApplyNowButton = (jobId: number) => {
    setId(jobId);
    setJobApplied(true)
  }

  const handleAppliedButton = () => {
    setFilterApplied(true);
    const filtered = data.filter(
      (job) =>
        job.position.toLowerCase().includes(keyword.toLowerCase()) &&
        (location ? job.location === location : true) &&
        (selectedLocations.length > 0 ? selectedLocations.includes(job.location) : true) &&
        (selectedContractTypes.length > 0 ? selectedContractTypes.includes(job.contractType) : true) &&
        (selectedSalaryRanges.length > 0 ? selectedSalaryRanges.includes(job.salary) : true) && (selectedSpecialisations.length > 0 ? selectedSpecialisations.includes(job.specialisation) : true)
    );
    const sortedFilteredData = filtered.sort((a, b) => extractSalary(a.salary) - extractSalary(b.salary));
    setFilteredData(sortedFilteredData);
    setCurrentPage(1); // Reset to the first page after applying filters
    // Update selectedJobId to the id of the first job in the filtered data
    setSelectedJobId(filtered.length > 0 ? filtered[0].id : null);
  };

  const calculateDaysAgo = (postedAt: string) => {
    const postedDate = new Date(postedAt);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - postedDate.getTime();
    return Math.floor(timeDifference / (1000 * 3600 * 24));
  };

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

  const extractSalary = (salary: string): number => {
    const match = salary.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  const extractSalaryMin = (salary: string): number => {
    const match = salary.match(/£(\d+)k/);
    return match ? parseInt(match[1]) * 1000 : 0;
  };

  const extractSalaryMax = (salary: string): number => {
    const match = salary.match(/- £(\d+)k/);
    return match ? parseInt(match[1]) * 1000 : 0;
  };

  const compareSalaries = (a: string, b: string): number => {
    const minA = extractSalaryMin(a);
    const minB = extractSalaryMin(b);
    if (minA !== minB) {
      return minA - minB;
    }
    return extractSalaryMax(a) - extractSalaryMax(b);
  };

  //Search keywords and locations
  const handleSearchButtonClick = () => {
    setFilterApplied(true);
    const filtered = data.filter(
        (job) =>
            job.position.toLowerCase().includes(keyword.toLowerCase()) &&
            (location ? job.location === location : true) &&
            (selectedContractTypes.length > 0 ? selectedContractTypes.includes(job.contractType) : true)
    );
    const sortedFilteredData = filtered.sort((a, b) => extractSalary(a.salary) - extractSalary(b.salary));
    setFilteredData(sortedFilteredData);
    setCurrentPage(1); // Reset to the first page after applying filters
    if (filtered.length > 0) {
        setSelectedJobId(filtered[0].id); // Set the first job as selected
    }
  };

  const handleLocationSelection = (location: string) => {
    setLocation(location);
  };

  useEffect(() => {
    const extractedLocations = [...new Set(data.map((job) => job.location))];
    setLocations(extractedLocations);
    const extractedPositions = [...new Set(data.map((job) => job.position))];
    setPositions(extractedPositions);
    const extractedContractTypes = [...new Set(data.map((job) => job.contractType))];
    setContractTypes(extractedContractTypes);
    const extractedSalary = [...new Set(data.map((job) => job.salary))].sort(compareSalaries);
    setSalaryRanges(extractedSalary);
    const extractedSpecialisations = [...new Set(data.map((job) => job.specialisation))];
    setSpecialisations(extractedSpecialisations);
  }, [data, compareSalaries]);

  //Locations

  useEffect(() => {
    const locationsCounts = data.reduce((acc, job) => {
      const { location } = job;
      if (acc[location]) {
        acc[location] += 1;
      } else {
        acc[location] = 1;
      }
      return acc;
    }, {});
    setLocationsCounts(locationsCounts);
  }, [data]);

  const handleLocationsCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedLocations((prev) => [...prev, value]);
    } else {
      setSelectedLocations((prev) => prev.filter((option) => option !== value));
    }
  };

  const handleLocationsReset = () => {
    setSelectedLocations([]);
  };

  //Contract Types

  useEffect(() => {
    const contractTypeCounts = data.reduce((acc, job) => {
      const { contractType } = job;
      if (acc[contractType]) {
        acc[contractType] += 1;
      } else {
        acc[contractType] = 1;
      }
      return acc;
    }, {});
    setContractTypeCounts(contractTypeCounts);
  }, [data]);

  const handleContractTypesCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedContractTypes((prev) => [...prev, value]);
    } else {
      setSelectedContractTypes((prev) => prev.filter((option) => option !== value));
    }
  };

  const handleContractTypesReset = () => {
    setSelectedContractTypes([]);
  };

  //Salary Range

  useEffect(() => {
    const salaryRangesTypeCounts = data.reduce((acc, job) => {
      const { salary } = job;
      if (acc[salary]) {
        acc[salary] += 1;
      } else {
        acc[salary] = 1;
      }
      return acc;
    }, {});
    setSalaryRangesCounts(salaryRangesTypeCounts);
  }, [data]);

  const handleSalaryRangesCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedSalaryRanges((prev) => [...prev, value]);
    } else {
      setSelectedSalaryRanges((prev) => prev.filter((option) => option !== value));
    }
  };

  const handleSalaryRangesReset = () => {
    setSelectedSalaryRanges([]);
  };

  //Specialisations

  useEffect(() => {
    const specialisationsTypeCounts = data.reduce((acc, job) => {
      const { specialisation } = job;
      if (acc[specialisation]) {
        acc[specialisation] += 1;
      } else {
        acc[specialisation] = 1;
      }
      return acc;
    }, {});
    setSpecialisationsCounts(specialisationsTypeCounts);
  }, [data]);

  const handleSpecialisationsCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedSpecialisations((prev) => [...prev, value]);
    } else {
      setSelectedSpecialisations((prev) => prev.filter((option) => option !== value));
    }
  };

  const handleSpecialisationsReset = () => {
    setSelectedSpecialisations([]);
  };


  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / jobsPerPage);
  const startIdx = (currentPage - 1) * jobsPerPage;
  const endIdx = startIdx + jobsPerPage;
  const currentJobs = filteredData.slice(startIdx, endIdx);

  const handlePageChange = (event, value) => {
    setPageChanged(true);
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
    jobsListRef.current?.scrollTo({ top: 0, behavior: "smooth" }); // Scroll the job list container to the top
    setTimeout(() => {
      setPageChanged(false); // Reset pageChanged state after a short delay
    }, 500);
  };

  useEffect(() => {
    // Update selectedJobId to the id of the first job on the new page
    if (pageChanged) {
      setSelectedJobId(currentJobs.length > 0 ? currentJobs[0].id : null);
    }
  }, [currentPage, currentJobs, pageChanged]);

  useEffect(() => {
    if (isMobileJobSelected) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
  }, [isMobileJobSelected]);

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

  const handleResetAllFilters = () => {
    setSelectedLocations([]);
    setSelectedContractTypes([]);
    setSelectedSalaryRanges([]);
    setSelectedSpecialisations([]);
    setLocation("");
    setFilteredData(data); // Reset filtered data to the original data
    setCurrentPage(1); // Reset to the first page
    setSelectedJobId(data.length > 0 ? data[0].id : null); // Reset selected job
  };

  return (
    <JobProvider>
    <div className={styles.container} ref={jobListTopRef}>
      <JobsBar
        locations={locations}
        positions={positions}
        onSelect={handleLocationSelection}
        setSearchKeywords={setSearchKeywords}
        onSearchButtonClick={handleSearchButtonClick}
      />
      <Filter
        handleAppliedButton={handleAppliedButton}
        locations={locations}
        handleLocationsCheckboxChange={handleLocationsCheckboxChange}
        selectedLocations={selectedLocations}
        locationsCounts={locationsCounts}
        handleLocationsReset={handleLocationsReset}
        contractTypes={contractTypes}
        handleContractTypesCheckboxChange={handleContractTypesCheckboxChange}
        selectedContractTypes={selectedContractTypes}
        contractTypeCounts={contractTypeCounts}
        handleContractTypesReset={handleContractTypesReset}
        salaryRanges={salaryRanges}
        salaryRangesCounts={salaryRangesCounts}
        selectedSalaryRanges={selectedSalaryRanges}
        handleSalaryRangesCheckboxChange={handleSalaryRangesCheckboxChange}
        handleSalaryRangesReset={handleSalaryRangesReset}
        specialisations={specialisations}
        specialisationsCounts={specialisationsCounts}
        selectedSpecialisations={selectedSpecialisations}
        handleSpecialisationsCheckboxChange={handleSpecialisationsCheckboxChange}
        handleSpecialisationsReset={handleSpecialisationsReset}
        handleResetAllFilters={handleResetAllFilters}
      />
      <div className={styles.filteredJobsContainer}>
        <div className={styles.left}>
          <div className={styles.jobsListTop}>
            {filteredApplied && filteredData.length < data.length ? (
              <div className={styles.jobsListTopInfo}>
                <div>Filtered Results</div>
                <span>{filteredData.length} jobs found</span>
              </div>
            ) : (
              <div className={styles.jobsListTopInfo} >
                <div>All Jobs</div>
                <span>{data.length} jobs found</span>
              </div>
            )}
            <span></span>
          </div>
          {filteredData.length === 0 ? (
            <div className={styles.noJobsFound}>
              <div>Can&apos;t find what you are looking for</div>
              <span>If you can&apos;t find the job you are looking for then send us your CV and we will get back to you.</span>
              <a href="/jobs/cv-upload">Send CV</a>
            </div>
          ) : (
          <div className={styles.jobsList} ref={jobsListRef}>
            {currentJobs.map((job) => {
              const daysAgo = calculateDaysAgo(job.postedAt);
              return (
                <div
                  key={job.id}
                  className={`${selectedJobId === job.id ? styles.jobCardContainerHighlighted : styles.jobCardContainer}`}
                  onClick={() => handleJobClick(job.id)}
                >
                  <div className={styles.jobCard}>
                    <span className={styles.jobPosition}>{job.position}</span>
                    <div className={`${selectedJobId === job.id ? styles.jobInfoHighlighted : styles.jobInfo}`}>
                      <span><GoLocation className={styles.icon}/>{job.location}</span>
                      <span><LuClock3 className={styles.icon}/>{job.contractType}</span>
                      <span><GiMoneyStack className={styles.icon}/>{job.salary}</span>
                    </div>
                    <div className={styles.bottomInfo}>
                      {daysAgo <= 3 && <span className={`${selectedJobId === job.id ? styles.newHighlighted : styles.new}`}>new</span>}
                      {daysAgo > 3 && <span className={`${selectedJobId === job.id ? styles.newHiddenHighlighted : styles.newHidden}`}>.</span>}
                      <span className={styles.postedDate}>
                        {daysAgo > 7 ? calculateDate(job.postedAt) : `${daysAgo} days ago`}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className={styles.paginationContainer}>
              <div className={styles.pagination}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  siblingCount={0}
                  boundaryCount={2}
                  onChange={handlePageChange}
                  color="primary"
                  variant="text"
                  shape="rounded"
                  renderItem={(item) => (
                    <PaginationItem
                      {...item}
                      sx={{
                        '&.Mui-selected': {
                          backgroundColor: '#09B089',
                          color: 'white',
                          borderRadius: "10px"
                        },
                        '&.Mui-selected:hover': {
                          backgroundColor: '#09B089'
                        },
                        fontFamily: "Poppins, sans-serif",
                        '&.MuiPaginationItem-root': {
                          borderRadius: "10px"
                        }
                      }}
                    />
                  )}
                />
              </div>
            </div>
          </div>
          )}
        </div>
        {isMobileJobSelected && isMobile && <div className={styles.overlay} onClick={handleCloseBar}></div>}
        <div className={`${isMobile ? styles.mobileRightContainer : styles.right} ${isMobileJobSelected ? styles.slideUp : ''}`}>
          {isMobile && (<div className={styles.dropdownClose} onClick={handleCloseBar}></div>)}
          {filteredData.length === 0 ? (
            <div className={styles.noSelectedJobFound}>
              <LuSearchX className={styles.noSearchIcon}/>
              <div>No jobs found</div>
              <span>No results were found for the applied filters, please try changing them or the search term.</span>
            </div>
          ) : (
          <div className={`${isMobile ? styles.selectedJobMobileContainer : styles.selectedJobInfoContainer}`}>
            {selectedJobId && (
              <div className={styles.selectedJobInfoContainer}>
                {filteredData.find((job) => job.id === selectedJobId) && (
                  <>
                    {filteredData.map((job) => {
                      if (job.id === selectedJobId) {
                        const daysAgo = calculateDaysAgo(job.postedAt);
                        return (
                          <div key={job.id} className={styles.selectedJobInfo}>
                            <span className={styles.postedDate}>
                              {daysAgo > 7 ? calculateDate(job.postedAt) : `${daysAgo} days ago`}
                            </span>
                            <span className={styles.selectedPosition}>{job.position}</span>
                            <div className={styles.jobInfo}>
                              <span><GoLocation className={styles.icon}/>{job.location}</span>
                              <span><LuClock3 className={styles.icon}/>{job.contractType}</span>
                              <span><GiMoneyStack className={styles.icon}/>{job.salary}</span>
                            </div>
                            {!isMobile && (
                              <a className={styles.buttonContainer} href='/jobs/apply'>
                                <button className={styles.button} onClick={() => handleApplyNowButton(job.id)}>
                                  Apply Now
                                </button>
                                {/* <BrowserRouter>
                                    <Link 
                                      to="/jobs/cv-upload" state={{ position: job.position }}
                                      >Apply Now</Link>

                                </BrowserRouter> */}
                              </a>
                            )}
                            <div className={styles.selectedJobData}>
                              <span className={styles.selectedJobDataHeader}>Job Description</span>
                              <span className={styles.selectedJobDataDescription}>{job.jobDescription}</span>
                              <span className={styles.selectedJobDataHeader}>Main Responsibilities</span>
                              <ul>
                                {job.responsibilities.map((responsibilities, index) => (
                                  <li key={index}>{responsibilities}</li>
                                ))}
                              </ul>
                              <span className={styles.selectedJobDataHeader}>Skills and experience required:</span>
                              <ul>
                                {job.skillsExperience.map((skillsExperience, index) => (
                                  <li key={index}>{skillsExperience}</li>
                                ))}
                              </ul>
                              <div className={styles.jobBottomInfo}>
                                <span>Engenious is acting as an Employment Agency and references to pay rates are indicative.</span>
                                <div>BY APPLYING FOR THIS ROLE YOU ARE AGREEING TO OUR <a href="#" style={{textDecoration: "none"}}>PRIVACY POLICY</a> WHICH GOVERNS YOUR USE OF ENGENIOUS SERVICES.</div>
                              </div>
                              
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </>
                )}
              </div>
            )}
          </div>
          )}
          {isMobile && (
            <a className={`${styles.mobileButtonContainer} ${isMobileJobSelected ? styles.slideUp : ''}`}>
              <button className={styles.button}>
                Apply Now
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
    </JobProvider>
  );
};

export default JobSearch;