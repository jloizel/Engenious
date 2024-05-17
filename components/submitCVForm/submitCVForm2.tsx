'use client';

import React, { FC, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../../src/app/utils/send-email';
import styles from './page.module.css'

export type FormData = {
  name: string;
  email: string;
  message: string;
  file: {
    name: string;
    content: string;
  };
};

const SubmitCVForm2: FC = () => {
  const form = useRef<any>("");
  const { register, handleSubmit } = useForm<FormData>();
  const [content, setContent] = React.useState<string | null>(null);
  const [filename, setFilename] = React.useState<string>('');
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<Partial<FormData> & { checkbox?: string }>({});

  function onSubmit(data: FormData) {
    const newErrors: Partial<FormData> & { checkbox?: string } = {};

    if (!data.name) newErrors.name = 'Name is required';
    if (!data.email) newErrors.email = 'Email is required';
    if (!data.message) newErrors.message = 'Message is required';
    if (!checkboxChecked) newErrors.checkbox = 'You must accept the privacy policy';

    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
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

    sendEmail(formDataWithFile);
  }
  
  const onAddFileAction = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const files = e.target.files;

    if (files && files[0]) {
      reader.onload = (r) => {
        if (r.target && r.target.result) {
          setContent(r.target.result.toString());
          setFilename(files[0].name);
        }
      };

      reader.readAsDataURL(files[0]);
    }
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxChecked(e.target.checked);
    setFormErrors((prevErrors) => ({ ...prevErrors, checkbox: '' })); // Clear checkbox error when checkbox state changes
  };

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputContainer}>
        <div className={styles.inputTitle}>
          Name
        </div>
        <input
          className={styles.inputBox}
          type="text"
          name="user_name"
          {...register('name', { required: true })}
        />
      </div>
      {formErrors.name && (<span className={styles.errorMessage}>{formErrors.name}</span>)}
      <div className={styles.inputContainer}>
        <div className={styles.inputTitle}>
          Email Address *
        </div>
        <input
          className={styles.inputBox}
          type="text"
          name="user_email"
          {...register('email', { required: true })}
        />
        {formErrors.email && (<span className={styles.errorMessage}>{formErrors.email}</span>)}
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputTitle}>
          Message *
        </div>
        <div className={styles.messageBox}> 
          <input
            id="contactFormMessage"
            className={styles.message}
            type="text"
            name="message"
            {...register('message', { required: true })}
          />
        </div>
        {formErrors.message && (<span className={styles.errorMessage}>{formErrors.message}</span>)}
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputTitle}>
          File *
        </div>
          <input
            type="file"
            name="file"
            onChange={onAddFileAction}
            accept="application/pdf,application/vnd.ms-excel"
          />
        {formErrors.file && (<span className={styles.errorMessage}>{formErrors.file.name}</span>)}
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={checkboxChecked}
          onChange={handleCheckboxChange}
        />
        <div>
          <span style={{fontWeight: "500"}}>By submitting your email address and any other personal information on the website, you consent to it being collected, held, used and disclosed in accordance with our</span><span style={{fontWeight: "500", color: "#008489"}}> Privacy Policy</span><span style={{fontWeight: "500"}}>.</span>
        </div>
      </div>
      {formErrors.checkbox && (<span className={styles.errorMessage}>{formErrors.checkbox}</span>)}
      <button className={styles.button} type="submit">Submit</button>
    </form>
  );
};

export default SubmitCVForm2;

