"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import * as z from "zod";
import styles from './page.module.css'
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Email must be in proper format.",
  }),
  phone: z.string().min(2, {
    message: "Phone number must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Content must be in proper format.",
  }),
});

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  positionType: string;
  details: string;
  roleDetails: string;
  contactInfo: string;
}

export default function ConsultationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    positionType: '',
    details: '',
    roleDetails: '',
    contactInfo: '',
  });

  const form = useRef<any>("");
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);
  const [checkboxError, setCheckboxError] = useState<string>("");
  const [messageSent, setMessageSent] = useState<boolean>(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!checkboxChecked) {
      // Set the checkbox error
      setCheckboxError('You must accept the privacy policy');
      return;
    } else {
      // Clear any existing checkbox error
      setCheckboxError('');
    }

    await fetch("/api/send2", {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        emailAddress: values.email,
        phoneNumber: values.phone,
        message: values.message,
      }),
    });

    setMessageSent(true);
    reset();
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxChecked(e.target.checked);
    setCheckboxError('');
  };

  const handleNext = async () => {
    // Check if there are errors in the form inputs
    const isValid = await trigger();

    // If there are errors, prevent navigating to the next step
    if (!isValid) return;

    setCurrentStep(prev => prev + 1);
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
        <div className={styles.stepContainer}>
          <div className={handleStepNumber1()} >
            1
          </div>
          <div className={`${styles.stepConnector} ${currentStep > 1 ? styles.completed : ''}`}></div>
          <div className={ currentStep === 1 ? styles.stepTextActive : styles.stepText} onClick={() => setCurrentStep(1)}>
            Type of hire
          </div>
        </div>
        <div className={styles.stepContainer}>
          <div className={handleStepNumber2()} >
            2
          </div>
          <div className={`${styles.stepConnector} ${currentStep > 2 ? styles.completed : ''}`}></div>
          <div className={ currentStep === 2 ? styles.stepTextActive : styles.stepText} onClick={() => setCurrentStep(2)}>
            Role details
          </div>
        </div>
        <div className={styles.stepContainer}>
          <div className={ currentStep === 3 ? styles.stepNumberActive : styles.stepNumber} >
            3
          </div>
          <div className={ currentStep === 3 ? styles.stepTextActive : styles.stepText} onClick={() => setCurrentStep(3)}>
            Contacting you
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 1 && (
          <Step1 data={formData} handleChange={handleChange} register={register} errors={errors} getInputClassName={getInputClassName}/>
        )}
        {currentStep === 2 && (
          <Step2 data={formData} handleChange={handleChange} register={register} errors={errors} getInputClassName={getInputClassName}/>
        )}
        {currentStep === 3 && (
          <Step3 data={formData} handleChange={handleChange} register={register} errors={errors} getInputClassName={getInputClassName}/>
        )}
        <div className={styles.navigation}>
          {currentStep > 1 && (
            <button type="button" onClick={handleBack}>
              Back
            </button>
          )}
          {currentStep < 3 && (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          )}
          {currentStep === 3 && (
            <button type="submit">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};