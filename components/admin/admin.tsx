import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import styles from './page.module.css';
import { createJob, getAllJobs, updateJob, deleteJob, Job } from '../../src/app/API';
import NavbarMain2 from '../navbar/main/navbarMain2';
import { IoClose } from 'react-icons/io5';
import { Pagination, PaginationItem } from '@mui/material';
import { HiSquare3Stack3D } from 'react-icons/hi2';
import { formatDistanceToNow } from 'date-fns';

const AdminPage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobData, setJobData] = useState<Omit<Job, '_id' | 'createdAt' | 'updatedAt'>>({
    position: '',
    contractType: '',
    location: '',
    specialisation: '',
    salary: '',
    jobDescription: '',
    duration: '',
    responsibilities: [],
    skillsExperience: []
  });
  const [jobRefresh, setJobRefresh] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(6);
  const [filter, setFilter] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [textTyped, setTextTyped] = useState(false);
  const [input, setInput] = useState("");
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const jobsListRef = useRef<HTMLDivElement>(null);

  // Fetch jobs when the component mounts
  useEffect(() => {
    fetchJobs();
  }, [jobRefresh]);

  // Fetch jobs from the database
  const fetchJobs = async () => {
    try {
      const jobs = await getAllJobs();
      setJobs(jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setJobs([]);  // Ensure jobs is set to an empty array on error
    }
  };

  // Create a new job
  const handleCreateJob = async () => {
    try {
      const newJob = await createJob(jobData);
      setJobs([...jobs, newJob]);
      resetForm();
      setJobRefresh(true);
      setTimeout(() => {
        setJobRefresh(false); // Reset pageChanged state after a short delay
      }, 500);
    } catch (error) {
      console.error('Error creating job:', error);
    }
  };

  // Update an existing job
  const handleUpdateJob = async () => {
    if (!selectedJobId) return;

    try {
      const updatedJob = await updateJob(selectedJobId, jobData);
      setJobs(jobs.map(job => job._id === selectedJobId ? updatedJob : job));
      resetForm();
      setJobRefresh(true);
      setTimeout(() => {
        setJobRefresh(false); // Reset pageChanged state after a short delay
      }, 500);
    } catch (error) {
      console.error('Error updating job:', error);
    }
    
  };

  // Delete a job
  const handleDeleteJob = async (jobId: string) => {
    try {
      await deleteJob(jobId);
      setJobs(jobs.filter(job => job._id !== jobId));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
    setJobRefresh(true);
    setTimeout(() => {
      setJobRefresh(false); // Reset pageChanged state after a short delay
    }, 500);
  };

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
    setTextTyped(true);
  };

  // Handle changes for array fields
  const handleArrayChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value.split('\n') });
  };

  // Handle job selection
  const handleSelectJob = (job: Job) => {
    setSelectedJobId(job._id);
    setJobData({
      position: job.position,
      contractType: job.contractType,
      location: job.location,
      specialisation: job.specialisation,
      salary: job.salary,
      jobDescription: job.jobDescription,
      duration: job.duration,
      responsibilities: job.responsibilities,
      skillsExperience: job.skillsExperience
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle filter change
  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setFilter(inputValue);
    setShowSuggestions(true);
    setInput(inputValue);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setFilter(suggestion);
    setShowSuggestions(false);
  };

  // Reset form fields
  const resetForm = () => {
    setSelectedJobId(null);
    setJobData({
      position: '',
      contractType: '',
      location: '',
      specialisation: '',
      salary: '',
      jobDescription: '',
      duration: '',
      responsibilities: [],
      skillsExperience: []
    });
  };

  const uniquePositions = [...new Set(jobs.map(job => job.position))];

  const filteredJobs = jobs.filter(job => job.position?.toLowerCase().includes(filter.toLowerCase()));

  const clearInput = () => {
    setInput("");
    setFilter("");
    setShowSuggestions(false);
  };

  // Highlight text function
  const getHighlightedText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? <strong key={i}>{part}</strong> : part
        )}
      </span>
    );
  };

  // Handle click outside suggestion box
  const handleClickOutside = (event: MouseEvent) => {
    if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
      setShowSuggestions(false);
    }
  };

  // Attach click outside event listener
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const calculateDaysAgo = (createdAt: string) => {
    const postedDate = new Date(createdAt);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - postedDate.getTime();
    const daysAgo = Math.floor(timeDifference / (1000 * 3600 * 24));
    return `${daysAgo} days ago`;
  };

  const getMostRecentDate = (createdAt: string, updatedAt: string) => {
    const createdDate = new Date(createdAt);
    const updatedDate = new Date(updatedAt);
    return createdDate > updatedDate ? calculateDaysAgo(createdAt) : calculateDaysAgo(updatedAt);
  };

  const getMostRecentDateLabel = (createdAt: string, updatedAt: string) => {
    const createdDate = new Date(createdAt);
    const updatedDate = new Date(updatedAt);
    return createdDate > updatedDate ? "Created" : "Updated";
  };

  useEffect(() => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
    jobsListRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
    jobsListRef.current?.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  return (
    <div>
      <NavbarMain2 />
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <div className={styles.header}>Job Handling</div>
          <div className={styles.instruction}>
            <li></li>
            <div>On this page you will be able to <span>create</span>, <span>update</span> and <span>delete</span> jobs to display on the website.</div>
          </div>
          <div className={styles.instruction}>
            <li></li>
            <div>Use the form below to create a job by filling out each section.</div>
          </div>
          <div className={styles.instruction}>
            <li></li>
            <div>For the <span>Responsibilities</span> and <span>Skills & Experience</span> sections, each line of text will appear as its own bullet point.</div>
          </div>
          <div className={styles.instruction}>
            <li></li>
            <div>To <span>update</span> a job, first find the job you want to update in the job list or by using the filter below, then press the filter button, modify the required sections in the form and then press the update button.</div>
          </div>
        </div>

        <div className={styles.form} ref={formRef}>
          <div className={styles.formInputs}>
            <div className={styles.formInputsLeft}>
              <span>Position</span>
              <input type="text" name="position" value={jobData.position} onChange={handleChange} />
              <span>Contract Type</span>
              <input type="text" name="contractType" value={jobData.contractType} onChange={handleChange} />
              <span>Location</span>
              <input type="text" name="location" value={jobData.location} onChange={handleChange} />
              <span>Specialisation</span>
              <input type="text" name="specialisation" value={jobData.specialisation} onChange={handleChange} />
              <span>Salary</span>
              <input type="text" name="salary" value={jobData.salary} onChange={handleChange} />
              <span>Duration</span>
              <input type="text" name="duration" value={jobData.duration} onChange={handleChange} />
            </div>
            <div className={styles.formInputsRight}>
              <span>Job Description</span>
              <textarea name="jobDescription" value={jobData.jobDescription} onChange={handleChange} />
              <span>Responsibilities</span>
              <textarea name="responsibilities" value={jobData.responsibilities.join('\n')} onChange={handleArrayChange} />
              <span>Skills Experience</span>
              <textarea name="skillsExperience" value={jobData.skillsExperience.join('\n')} onChange={handleArrayChange} />
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          {selectedJobId ? (
            <>
              <button onClick={handleUpdateJob} className={styles.button}>
                Update Job
              </button>
              <button onClick={resetForm} className={styles.resetButton}>
                Reset Form
              </button>
            </>
          ) : (
            <button onClick={handleCreateJob} className={styles.button}>
              Create Job
            </button>
          )}
        </div>

        <div >
          <div className={styles.header2} >
            <HiSquare3Stack3D className={styles.leftIcon} /> Current Job List
          </div>
          <div className={styles.filter}>
            <div className={styles.filterInputContainer}>
              <input
                type="text"
                placeholder="Filter by position"
                value={filter}
                onChange={handleFilterChange}
              />
              {input && (
                <IoClose className={styles.clearIcon} onClick={clearInput} />
              )}
            </div>

            {showSuggestions && (
              <div className={styles.suggestions} ref={suggestionsRef}>
                {uniquePositions
                  .filter(position => position.toLowerCase().includes(filter.toLowerCase()))
                  .map((position, index) => (
                    <span key={index} onClick={() => handleSuggestionClick(position)}>
                      {getHighlightedText(position, input)}
                    </span>
                  ))}
              </div>
            )}
          </div>

          <div className={styles.jobList} ref={jobsListRef}>
            {currentJobs.length > 0 ? (
              <div className={styles.jobPairContainer}>
                {currentJobs.map(job => (
                  <div key={job._id} className={styles.jobItem}>
                    <div className={styles.jobHeader}>{job.position}</div>
                    <span>{job.location}</span>
                    <span>{job.contractType}</span>
                    <span>{job.salary}</span>
                    <div className={styles.infoHeader}>Job Description:</div>
                    <div className={styles.jobDescription}>{job.jobDescription}</div>
                    <div className={styles.jobDetails}>
                      <div className={styles.infoHeader}>Responsibilities:</div>
                      <ul>
                        {job.responsibilities?.map((responsibility, index) => (
                          <li key={index}>{responsibility}</li>
                        ))}
                      </ul>
                      <div className={styles.infoHeader}>Skills & Experience:</div>
                      <ul>
                        {job.skillsExperience?.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                      {/* <div className={styles.infoHeader}>Created At:</div>
                      <div>{calculateDaysAgo(job.createdAt)}</div>
                      <div className={styles.infoHeader}>Updated At:</div>
                      <div>{calculateDaysAgo(job.updatedAt)}</div> */}
                      <div className={styles.infoHeader}>
                        {getMostRecentDateLabel(job.createdAt, job.updatedAt)}
                        <div>{getMostRecentDate(job.createdAt, job.updatedAt)}</div>
                      </div>
                      <button className={styles.updateButton} onClick={() => handleSelectJob(job)}>Update</button>
                      <button className={styles.deleteButton} onClick={() => handleDeleteJob(job._id)}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No jobs found</p>
            )}
          </div>

          <div className={styles.paginationContainer}>
            <div className={styles.pagination}>
              <Pagination
                count={Math.ceil(jobs.length / jobsPerPage)}
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
      </div>
    </div>
  );
};

export default AdminPage;
