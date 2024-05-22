"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import * as z from "zod";
import { sendVacancy } from '../../src/app/utils/sendVacancy';
import styles from './page.module.css'
import Step1 from "./step1";
import Step2 from "./step2";

const formSchema = z.object({
  company: z.string().min(2, {
    message: "This field cannot be left blank.",
  }),
  job: z.string().min(2, {
    message: "This field cannot be left blank.",
  }),
  message: z.string().optional(),
  name: z.string().min(2, {
    message: "This field cannot be left blank.",
  }),
  email: z.string().email({
    message: "Email must be in proper format.",
  }),
  phoneNumber: z.string().min(2, {
    message: "Phone number must be in proper format.",
  }),
  file: z.object({
    name: z.string().optional(),
    content: z.string().optional(),
  }).optional()
});

export type FormData = z.infer<typeof formSchema>;

const ConsultationForm: FC = () => {
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

    const base64Content = content.split(',')[1];

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
      if (isStep2Valid) {
        setCurrentStep(3); // Move to next step or handle submit if final step
      }
    }
  };

  console.log(Object.keys(errors))

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

  const getInputClassName = (inputName: keyof FormData) => {
    // Check if there is an error for the input
    return errors[inputName] ? styles.inputError : '';
  };

  return (
    <div className={styles.formContainer}>
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
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form2}>
        {currentStep === 1 && (
          <Step1 data={formData} handleChange={handleChange} register={register} errors={errors} getInputClassName={getInputClassName} onAddFileAction={onAddFileAction} setValue={setValue}/>
        )}
        {currentStep === 2 && (
          <Step2 data={formData} handleChange={handleChange} register={register} errors={errors} getInputClassName={getInputClassName} checkboxError={checkboxError}/>
        )}
        <div className={styles.navigation}>
          {currentStep < 2 && (
            <div className={styles.buttonContainer}>
              <button type="button" onClick={handleNext} className={styles.button}>
                Next
              </button>
            </div>
          )}
          {currentStep > 1 && (
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.button}>
                Send
              </button>
            </div>
          )}
          {currentStep > 1 && (
            <div className={styles.buttonContainer}>
              <button type="button" onClick={handleBack} className={styles.button2}>
                Go Back
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ConsultationForm