import axios, { AxiosInstance, AxiosResponse } from 'axios';

const BASE_URL = 'https://engenious-server.vercel.app/'; // Update with your backend server URL

// Create an Axios instance with custom configurations
const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define types for request data and response data
export interface Job {
  _id: string;
  position: string;
  contractType: string;
  location: string;
  specialisation: string;
  salary: string;
  jobDescription: string;
  duration: string;
  responsibilities: string[];
  skillsExperience: string[];
}

// API functions
export const createJob = async (jobData: { position: string, contractType: string, location: string, specialisation: string, salary: string, jobDescription: string, duration: string, responsibilities: string[], skillsExperience: string[] }): Promise<Job> => {
  try {
    const response: AxiosResponse<Job> = await api.post('/jobs/create', jobData);
    return response.data;
  } catch (error) {
    throw error; // Throw the error message from the server
  }
};

export const getJobById = async (jobId: string): Promise<Job | null> => {
  try {
    const response: AxiosResponse<{ job: Job }> = await api.get(`/jobs/get/${jobId}`);
    return response.data.job;
  } catch (error) {
    if (error === 404) {
      return null; 
    }
    throw error; // Throw other errors
  }
};

export const getAllJobs = async (): Promise<Job[]> => {
  try {
    const response: AxiosResponse<{ jobs: Job[] }> = await api.get('/jobs/get');
    return response.data.jobs || [];
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};


export const updateJob = async (jobId: string, jobData: { position: string, contractType: string, location: string, specialisation: string, salary: string, jobDescription: string, duration: string, responsibilities: string[], skillsExperience: string[] }): Promise<Job> => {
  try {
    const response: AxiosResponse<Job> = await api.patch(`/jobs/update/${jobId}`, jobData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteJob = async (jobId: string): Promise<{ message: string }> => {
  try {
    const response: AxiosResponse<{ job: Job; message: string }> = await api.delete(`/jobs/delete/${jobId}`);
    return { message: response.data.message };
  } catch (error) {
    throw error;
  }
};