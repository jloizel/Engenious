'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { sendCV } from '../../src/app/utils/sendCV';
import styles from './page2.module.css';
import { JobProvider, useJobContext } from '../jobContext/jobContext';
import data from "../jobsComponents/jobs.json";

// Define the schema using zod
const formSchema = z.object({
  name: z.string().min(2, { message: "This field cannot be left blank." }),
  email: z.string().email({ message: "Email must be in proper format." }),
  message: z.string(),
  file: z.object({
    name: z.string().nonempty({ message: "File name is required" }),
    content: z.string().nonempty({ message: "File content is required" }),
  }),
});

export type FormData = z.infer<typeof formSchema>;


const ApplyForm: FC = () => {
  const form = useRef<any>(null);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [content, setContent] = useState<string | null>(null);
  const [filename, setFilename] = useState<string>('');
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);
  const [checkboxError, setCheckboxError] = useState<string>('');
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [jobDetails, setJobDetails] = useState<any>(null);

  const { id } = useJobContext();

  useEffect(() => {
    const job = data.find((job) => job.id === id);
    setJobDetails(job);
  }, [id]);

  const onSubmit = (data: FormData) => {
    let hasError = false;

    if (!checkboxChecked) {
      setCheckboxError('You must accept the privacy policy');
      hasError = true;
    } else {
      setCheckboxError('');
    }

    if (!content || !filename) {
      setError('file', { type: 'manual', message: 'File is required.' });
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const base64Content = content.split(',')[1];

    const formDataWithFile = {
      ...data,
      file: {
        name: filename,
        content: base64Content,
      },
    };

    sendCV(formDataWithFile);
    setMessageSent(true);
    reset();
  };

  const onAddFileAction = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const files = e.target.files;

    if (files && files[0]) {
      reader.onload = (r) => {
        if (r.target && r.target.result) {
          setContent(r.target.result.toString());
          setFilename(files[0].name);
          setValue('file', {
            name: files[0].name,
            content: r.target.result.toString(),
          });
        }
      };

      reader.readAsDataURL(files[0]);
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
          {jobDetails && (
              <div className={styles.jobDetails}>
                <h2>{jobDetails.position}</h2>
                <p>Location: {jobDetails.location}</p>
                <p>Salary: {jobDetails.salary}</p>
              </div>
            )}
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
            <div className={styles.inputTitle}>Message</div>
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
              <span>Upload CV *</span>
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
            <div>
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

export default ApplyForm;
