'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
// import { sendCV } from '../../src/app/utils/sendCV';
import styles from './page.module.css';
import { JobProvider, useJobContext } from '../jobContext/jobContext';
import data from "../jobsComponents/jobs.json";
import { Job, getJobById, sendCV } from '@/app/API';

// Define the schema using zod
// const formSchema = z.object({
//   name: z.string().min(2, { message: "This field cannot be left blank." }),
//   email: z.string().email({ message: "Email must be in proper format." }),
//   message: z.string().min(2, { message: "This field cannot be left blank." }),
//   file: z.instanceof(File).optional(), 
// });

// export type FormData = z.infer<typeof formSchema>;


interface FormData {
  name: string;
  email: string;
  message: string;
  file?: File; 
}

const SubmitCVForm: FC = () => {
  const form = useRef<any>(null);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormData>();

  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);
  const [checkboxError, setCheckboxError] = useState<string>('');
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [jobDetails, setJobDetails] = useState<Job | null>(null);
  const [filename, setFilename] = useState<string>('');

  const { id } = useJobContext();

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        if (!id) {
          throw new Error('No job ID provided');
        }

        const jobData = await getJobById(id);
        
        if (jobData) {
          setJobDetails(jobData);
        } else {
          setJobDetails(null);
        }
      } catch (error) {
        console.error('Error fetching job details:', error);
        setJobDetails(null);
      }
    };

    fetchJobDetails();
  }, [id]);

  const onSubmit = async (data: FormData) => {
    let hasError = false;

    // Validate name
    if (data.name.length < 2) {
      setError('name', { type: 'manual', message: 'This field cannot be left blank.' });
      hasError = true;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailPattern.test(data.email)) {
      setError('email', { type: 'manual', message: 'Email must be in proper format.' });
      hasError = true;
    }

    // Validate message
    if (data.message.length < 2) {
      setError('message', { type: 'manual', message: 'This field cannot be left blank.' });
      hasError = true;
    }

    // Validate file if needed
    if (!data.file) {
      setError('file', { type: 'manual', message: 'Please upload a file.' });
      hasError = true;
    }

    // Validate checkbox
    if (!checkboxChecked) {
      setCheckboxError('You must accept the privacy policy');
      hasError = true;
    } else {
      setCheckboxError('');
    }

    if (hasError) {
      return;
    }

    // Create a new FormData instance
    const formDataWithFile = new FormData();
    formDataWithFile.append('name', data.name);
    formDataWithFile.append('email', data.email);
    formDataWithFile.append('message', data.message);

    if (data.file) {
      formDataWithFile.append('file', data.file);
      console.log('File appended to FormData:', data.file); 
    }

    if (jobDetails) {
      formDataWithFile.append('jobPosition', jobDetails.position);
      formDataWithFile.append('salary', jobDetails.salary);
      formDataWithFile.append('location', jobDetails.location);
      formDataWithFile.append('contractType', jobDetails.contractType);
    }

    try {
      await sendCV(formDataWithFile);
      setMessageSent(true);
      reset(); 
      setFilename(''); 
    } catch (error) {
      console.error('Error sending CV:', error);
    }
  };

  const onAddFileAction = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files[0]) {
      const file = files[0];
      setValue('file', file); 
      setFilename(file.name); 
      console.log('File selected:', file.name); 
    } else {
      setFilename(''); 
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxChecked(e.target.checked);
    setCheckboxError('');
  };

  return (
    <JobProvider>
    <form ref={form} onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {!messageSent && (
        <div>
          <div className={styles.topContainer}>
            <div className={styles.inputContainer}>
              <div className={styles.inputTitle}>Name *</div>
              <div className={styles.inputBox}>
                <input
                  className={styles.input}
                  type="text"
                  {...register('name')}
                />
              </div>
              {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
            </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputTitle}>Email Address *</div>
            <div className={styles.inputBox}>
              <input
                className={styles.input}
                type="text"
                {...register('email')}
              />
            </div>
            {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
          </div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputTitle}>Message *</div>
            <div className={styles.messageBox}>
              <textarea
                className={styles.message}
                {...register('message')}
              />
            </div>
            {errors.message && <p className={styles.errorMessage}>{errors.message.message}</p>}
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputTitle}>
              <span>CV Upload  *</span>
            </div>
            <div className={styles.fileinputBox}>
              <label htmlFor="fileInput" className={styles.fileinputLabel}>
                <span className={styles.fileLabel}>Allowed file types:</span>
                <span className={styles.fileLabel} style={{fontStyle: "italic", color: "#008489"}}>pdf, docx, doc</span>
                {filename && <span className={styles.fileName}>{filename}</span>}
              </label>
              <input
                id="fileInput"
                className={styles.fileinputButton}
                type="file"
                onChange={onAddFileAction}
                accept="application/pdf,application/vnd.ms-excel,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              />
            </div>
            {errors.file && <p className={styles.errorMessage}>{errors.file.message}</p>}
          </div>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
            />
            <div className={styles.privacyPolicy}>
              <span style={{ fontWeight: "500" }}>By submitting your email address and any other personal information on the website, you consent to it being collected, held, used and disclosed in accordance with our</span>
              <span style={{ fontWeight: "500", color: "#008489" }}> Privacy Policy</span>
              <span style={{ fontWeight: "500" }}>.</span>
            </div>
          </div>
          {checkboxError && <p className={styles.errorMessage}>{checkboxError}</p>}
          <div className={styles.buttonContainer}>
            <button className={styles.button} type="submit">Submit</button>
          </div>
        </div>
      )}
      {messageSent && (
        <div className={styles.successMessageContainer}>
          <div className={styles.successMessage}>
            Thank you for your message, we will be in contact as soon as possible.
          </div>
        </div>
      )}
    </form>
    </JobProvider>
  );
};

export default SubmitCVForm;
