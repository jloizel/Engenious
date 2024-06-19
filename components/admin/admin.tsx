"use client"

import React, { useState, useEffect, ChangeEvent } from 'react';
import styles from './page.module.css';
import { createJob, getAllJobs, updateJob, deleteJob, Job } from '../../src/app/API';
import NavbarMain2 from '../navbar/main/navbarMain2';

const AdminPage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobData, setJobData] = useState<Omit<Job, '_id'>>({
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
  const [jobRefresh, setJobRefresh] = useState(false)
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);
  const [filter, setFilter] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Fetch jobs when the component mounts
  useEffect(() => {
    fetchJobs();
  }, [jobRefresh]);

  // Fetch jobs from the database
  const fetchJobs = async () => {
    try {
      const jobs = await getAllJobs();
      console.log('Fetched jobs:', jobs);
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
      setJobRefresh(true)
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
      setJobRefresh(true)
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
    setJobRefresh(true)
      setTimeout(() => {
        setJobRefresh(false); // Reset pageChanged state after a short delay
      }, 500);
  };

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
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
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setFilter(suggestion);
    setShowSuggestions(false);
  };

  const uniquePositions = [...new Set(jobs.map(job => job.position))];

  const filteredJobs = jobs.filter(job => job.position.toLowerCase().includes(filter.toLowerCase()));

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <NavbarMain2/>
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
            <div>For the <span>Responsibilites</span> and <span>Skills & Experience</span> sections, each line of text will appear as its own bullet point.</div>
          </div> 
          <div className={styles.instruction}>
            <li></li>
            <div>To <span>update</span> a job, first find the job you want to update in the job list or by using the filter below, then press the filter button, modify the required sections in the form and then press the update button.</div>
          </div>
        </div>
        
        <div className={styles.form}>
          <h2>{selectedJobId ? 'Update Job' : 'Create Job'}</h2>
          <div className={styles.formLeft}>

          </div>
          <div className={styles.formRight}>

          </div>
          <input type="text" name="position" placeholder="Position" value={jobData.position} onChange={handleChange} />
          <input type="text" name="contractType" placeholder="Contract Type" value={jobData.contractType} onChange={handleChange} />
          <input type="text" name="location" placeholder="Location" value={jobData.location} onChange={handleChange} />
          <input type="text" name="specialisation" placeholder="Specialisation" value={jobData.specialisation} onChange={handleChange} />
          <input type="text" name="salary" placeholder="Salary" value={jobData.salary} onChange={handleChange} />
          <textarea name="jobDescription" placeholder="Job Description" value={jobData.jobDescription} onChange={handleChange} />
          <input type="text" name="duration" placeholder="Duration" value={jobData.duration} onChange={handleChange} />
          <textarea name="responsibilities" placeholder="Responsibilities" value={jobData.responsibilities.join('\n')} onChange={handleArrayChange} />
          <textarea name="skillsExperience" placeholder="Skills Experience" value={jobData.skillsExperience.join('\n')} onChange={handleArrayChange} />
          <button onClick={selectedJobId ? handleUpdateJob : handleCreateJob}>
            {selectedJobId ? 'Update Job' : 'Create Job'}
          </button>
        </div>
        
        <div className={styles.filter}>
          <input
            type="text"
            placeholder="Filter by position"
            value={filter}
            onChange={handleFilterChange}
          />
          {showSuggestions && (
            <ul className={styles.suggestions}>
              {uniquePositions
                .filter(position => position.toLowerCase().includes(filter.toLowerCase()))
                .map((position, index) => (
                  <li key={index} onClick={() => handleSuggestionClick(position)}>
                    {position}
                  </li>
                ))}
            </ul>
          )}
        </div>
        <div className={styles.jobList}>
          <h2>Job List</h2>
          {currentJobs.length > 0 ? (
            currentJobs.map(job => (
              <div key={job._id} className={styles.jobItem} onClick={() => handleSelectJob(job)}>
                <h3>{job.position}</h3>
                <p>{job.location}</p>
                <p>{job.salary}</p>
                <p>{job.jobDescription}</p>
                <div className={styles.jobDetails}>
                  <ul>
                    {job.responsibilities?.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                  <ul>
                    {job.skillsExperience?.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                  <button className={styles.updateButton} onClick={() => handleUpdateJob()}>Update</button>
                  <button className={styles.deleteButton} onClick={() => handleDeleteJob(job._id)}>Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p>No jobs available</p>
          )}
        </div>
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? styles.activePage : ''}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
