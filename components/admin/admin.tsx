"use client"

import React, { useState, useEffect, ChangeEvent } from 'react';
import styles from './page.module.css';
import { createJob, getAllJobs, updateJob, deleteJob, Job } from '../../src/app/API';

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
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  // Fetch jobs when the component mounts
  useEffect(() => {
    fetchJobs();
  }, []);

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
  };

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  // Handle changes for array fields
  const handleArrayChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value.split(',') });
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

  // Logging the jobData and jobs state for debugging
  console.log('Current jobData:', jobData);
  console.log('Current jobs state:', jobs);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Admin Page</h1>
        <div className={styles.form}>
          <h2>{selectedJobId ? 'Update Job' : 'Create Job'}</h2>
          <input type="text" name="position" placeholder="Position" value={jobData.position} onChange={handleChange} />
          <input type="text" name="contractType" placeholder="Contract Type" value={jobData.contractType} onChange={handleChange} />
          <input type="text" name="location" placeholder="Location" value={jobData.location} onChange={handleChange} />
          <input type="text" name="specialisation" placeholder="Specialisation" value={jobData.specialisation} onChange={handleChange} />
          <input type="text" name="salary" placeholder="Salary" value={jobData.salary} onChange={handleChange} />
          <textarea name="jobDescription" placeholder="Job Description" value={jobData.jobDescription} onChange={handleChange} />
          <input type="text" name="duration" placeholder="Duration" value={jobData.duration} onChange={handleChange} />
          <textarea name="responsibilities" placeholder="Responsibilities" value={jobData.responsibilities.join(',')} onChange={handleArrayChange} />
          <textarea name="skillsExperience" placeholder="Skills Experience" value={jobData.skillsExperience.join(',')} onChange={handleArrayChange} />
          <button onClick={selectedJobId ? handleUpdateJob : handleCreateJob}>
            {selectedJobId ? 'Update Job' : 'Create Job'}
          </button>
        </div>
      </div>
      <div className={styles.jobList}>
        <h2>Job List</h2>
        {jobs.length > 0 ? (
          jobs.map(job => (
            <div key={job._id} className={styles.jobItem} onClick={() => handleSelectJob(job)}>
              <h3>{job.position}</h3>
              <p>{job.location}</p>
              <p>{job.salary}</p>
              <p>{job.jobDescription}</p>
              <div className={styles.jobDetails}>
                <ul>
                  {job.responsibilities?.map((responsibility, index) => (
                    <li key={`${job._id}-responsibility-${index}`}>{responsibility}</li>
                  ))}
                </ul>
                <ul>
                  {job.skillsExperience?.map((skill, index) => (
                    <li key={`${job._id}-skill-${index}`}>{skill}</li>
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
    </div>
  );
};

export default AdminPage;
