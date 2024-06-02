"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import * as z from "zod";
import { sendVacancy } from '../../src/app/utils/sendVacancy';
import styles from './page.module.css'
import stepStyles from './step.module.css'
import { createTheme, useMediaQuery } from "@mui/material";

const formSchema = z.object({
  company: z.string().min(1, {
    message: "This field cannot be left blank.",
  }),
  job: z.string().min(1, {
    message: "This field cannot be left blank.",
  }),
  message: z.string(),
  name: z.string().min(1, {
    message: "This field cannot be left blank.",
  }),
  email: z.string().email({
    message: "Email must be in proper format.",
  }),
  phoneNumber: z.string().min(9, {
    message: "Phone number must be in proper format.",
  }).regex(/^\+?[0-9]{1,4}?[-.\s]?[0-9]{1,3}?[-.\s]?[0-9]{3,5}?[-.\s]?[0-9]{4,6}?$/, {
    message: "Phone number must be in proper format.",
  }),
  file: z.object({
    name: z.string().optional(),
    content: z.string().optional(),
  }).optional()
});

export type FormData = z.infer<typeof formSchema>;

const ConsultationForm: FC = () => {
  const form = useRef<any>(null);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    setValue,
    reset,
    trigger,
    clearErrors
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    company: '',
    job: '',
    message: '',
    name: '',
    email: '',
    phoneNumber: '',
    file: { name: '', content: '' }
  });

  const [content, setContent] = useState<string | null>(null);
  const [filename, setFilename] = useState<string>('');
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);
  const [checkboxError, setCheckboxError] = useState<string>('');
  const [messageSent, setMessageSent] = useState<boolean>(false);

  const onSubmit = (data: FormData) => {
    let hasError = false;

    if (!checkboxChecked) {
      setCheckboxError('You must accept the privacy policy');
      hasError = true;
    } else {
      setCheckboxError('');
    }

    if (hasError) {
      return;
    }

    const base64Content = content ? content.split(',')[1] : '';
    const formDataWithFile = {
      ...data,
      file: {
        name: filename,
        content: base64Content,
      },
    };

    sendVacancy(formDataWithFile);
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

  const handleNext = async () => {
    if (currentStep === 1) {
      // Trigger validation for step 1 fields only
      const isStep1Valid = await trigger(['company', 'job']);
      if (isStep1Valid) {
        clearErrors(); // Clear all errors before moving to the next step
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      // Trigger validation for step 2 fields only
      const isStep2Valid = await trigger();
      
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStepNumber1 = () => {
    if (currentStep === 1) {
      return styles.stepNumberActive;
    } else if (currentStep > 1) {
      return styles.stepNumberCompleted;
    } else {
      return styles.stepNumber;
    }
  };

  const handleStepText1 = () => {
    if (currentStep === 1) {
      return styles.stepTextActive;
    } else if (currentStep > 1) {
      return styles.stepTextActive;
    } else {
      return styles.stepText;
    }
  };

  const handleStepNumber2 = () => {
    if (currentStep === 2) {
      return styles.stepNumberActive;
    } else if (currentStep > 2) {
      return styles.stepNumberCompleted;
    } else {
      return styles.stepNumber;
    }
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 767,
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  
  const isTabletOrAbove = useMediaQuery(theme.breakpoints.up('sm'));

  const getInputClassName = (inputName: keyof FormData) => {
    // Check if there is an error for the input
    return errors[inputName] ? styles.inputError : '';
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxChecked(e.target.checked);
    setCheckboxError('');
  };

  return (
    <div className={styles.formContainer}>
      {!messageSent && (
        <div>
      <div className={styles.steps}>
        <div className={styles.stepContainer} >
          <div className={handleStepNumber1()} onClick={() => handleNext()}>
            1
          </div>
          <div className={`${styles.stepConnector} ${currentStep > 1 ? styles.completed : ''}`}></div>
          <div className={handleStepText1()} onClick={() => handleNext()}>
            Role details
          </div>
        </div>
        <div className={styles.stepContainer} >
          <div className={handleStepNumber2()} onClick={() => handleNext()}>
            2
          </div>
          <div className={`${styles.stepConnector} ${currentStep > 1 ? styles.completed : ''}`}></div>
          <div className={ currentStep === 2 ? styles.stepTextActive : styles.stepText} onClick={() => handleNext()}>
            Contacting you
          </div>
        </div>
      </div>
      <form ref={form} onSubmit={handleSubmit(onSubmit)} className={styles.form2}>
        {/* {currentStep === 1 && (
          <Step1 data={formData} handleChange={handleChange} register={register} errors={errors} getInputClassName={getInputClassName} onAddFileAction={onAddFileAction} setValue={setValue}/>
        )} */}
        {currentStep === 1 && (
          <div className={stepStyles.stepContainer}>
            <div className={stepStyles.step}>
              <div className={stepStyles.inputContainer}>
                <div className={stepStyles.label}>Company Name *</div>
                <input
                  type="text"
                  {...register('company')}
                  value={formData.company}
                  onChange={handleChange}
                  className={getInputClassName('company')}
                />
                {errors.company && <p className={stepStyles.errorMessage}>{errors.company.message}</p>}
              </div>
              <div className={stepStyles.inputContainer}>
                <div className={stepStyles.label}>Job Title *</div>
                <input
                  type="text"
                  {...register('job')}
                  value={formData.job}
                  onChange={handleChange}
                  className={getInputClassName('job')}
                />
                {errors.job && <p className={stepStyles.errorMessage}>{errors.job.message}</p>}
              </div>
              <div className={stepStyles.inputContainer}>
                <div className={stepStyles.label}>Upload Job Description</div>
                <div className={stepStyles.fileinputBox}>
                  <label htmlFor="fileInput" className={stepStyles.fileinputLabel}>
                    <span className={stepStyles.fileLabel}>Allowed file types:</span>
                    <span className={stepStyles.fileLabel} style={{ fontStyle: "italic", color: "#008489" }}>pdf, docx, doc</span>
                    {filename && <span className={stepStyles.fileName}>{filename}</span>}
                  </label>
                  <input
                    id="fileInput"
                    className={stepStyles.fileinputButton}
                    type="file"
                    onChange={onAddFileAction}
                    accept="application/pdf,application/vnd.ms-excel,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  />
                </div>
                {/* {errors.file && <p className={styles.errorMessage}>{errors.file.message}</p>} */}
              </div>
              <div className={stepStyles.messageInputContainer}>
                <div className={stepStyles.label}>Message</div>
                <textarea
                  {...register('message')}
                  value={formData.message}
                  onChange={handleChange}
                  className={stepStyles.messageInput}
                  placeholder='Any specific details? Urgency of turnaround, position type etc.'
                />
              </div>
            </div>
          </div>
        )}
        {/* {currentStep === 2 && (
          <Step2 data={formData} handleChange={handleChange} register={register} errors={errors} getInputClassName={getInputClassName} checkboxError={checkboxError}/>
        )} */}
        {currentStep === 2 && (
          <div className={stepStyles.step}>
            <div className={stepStyles.inputContainer}>
              <div className={stepStyles.label}>Full Name *</div>
              <input
                type="text"
                {...register('name')}
                value={formData.name}
                onChange={handleChange}
                className={getInputClassName('name')}
                autoComplete="new-password"
              />
              {errors.name && <p className={stepStyles.errorMessage}>{errors.name.message}</p>}
            </div>
            <div className={stepStyles.inputContainer}>
              <div className={stepStyles.label}>Work Email Address *</div>
              <input
                type="text"
                {...register('email')}
                value={formData.email}
                onChange={handleChange}
                className={getInputClassName('email')}
                autoComplete="new-password"
              />
              {errors.email && <p className={stepStyles.errorMessage}>{errors.email.message}</p>}
            </div>
            <div className={stepStyles.inputContainer}>
              <div className={stepStyles.label}>Phone Number *</div>
              <input
                type="text"
                {...register('phoneNumber')}
                value={formData.phoneNumber}
                onChange={handleChange}
                className={getInputClassName('phoneNumber')}
                autoComplete="new-password"
              />
              {errors.phoneNumber && <p className={stepStyles.errorMessage}>{errors.phoneNumber.message}</p>}
            </div>
            <div className={stepStyles.checkboxContainer}>
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
            <div className={stepStyles.checkboxError}>
              {<p className={stepStyles.errorMessage}>{checkboxError}</p>}
            </div>
          </div>
        )}
        <div className={styles.navigation}>
          {currentStep < 2 && (
            <div className={styles.buttonContainer1}>
              <button type="button" onClick={handleNext} className={styles.button} >
                Next
              </button>
            </div>
          )}
          {currentStep > 1 && (
            <div className={styles.buttonContainer2}>
              <button type="submit" className={styles.button}>
                Send
              </button>
              <button type="button" onClick={handleBack} className={styles.button2}>
                Go Back
              </button>
            </div>
          )}
        </div>
      </form>
      </div>
      )}
      {messageSent && (
        <div className={styles.successMessageContainer}>
          <div className={styles.successMessage}>
            Thank you for your message, we will be in contact as soon as possible.
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultationForm