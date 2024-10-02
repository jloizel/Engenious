"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import * as z from "zod";
import styles from './page.module.css'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Email must be in proper format.",
  }),
  // phone: z.string().min(2, {
  //   message: "Phone number must be at least 2 characters.",
  // }),
  message: z.string().min(2, {
    message: "Content must be at least 2 characters.",
  }),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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

    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        emailAddress: values.email,
        // phoneNumber: values.phone,
        message: values.message,
      }),
    });

    // Set message sent flag to true
    setMessageSent(true);

    // Clear form inputs
    reset();
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxChecked(e.target.checked);
    // setFormErrors({}); // Clear checkbox error when checkbox state changes
    setCheckboxError('');
  };

  return (
    <form className={styles.form} ref={form} onSubmit={handleSubmit(onSubmit)}>
      {!messageSent && (
        <div>
          <div className={styles.inputContainer}>
            <div className={styles.inputTitle}>
              Name
            </div>
            <div className={styles.inputBox}>
              <input
                className={styles.input}
                type="text"
                id="user_name"
                {...register("name")}
              />
            </div>
            {errors?.name && (
              <p className={styles.errorMessage}>
                {errors.name.message}
              </p>
            )}
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputTitle}>
              Email
            </div>
            <div className={styles.inputBox}>
              <input
                className={styles.input}
                type="email"
                id="email"
                {...register("email")}
              />
            </div>
            {errors?.email && (
              <p className={styles.errorMessage}>
                {errors.email.message}
              </p>
            )}
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputTitle}>
              Message
            </div>
            <div className={styles.messageBox}>
              <textarea
                id="contactFormMessage"
                className={styles.message}
                // name="message"
                {...register("message", { required: true })}
              />
            </div>
            {errors?.message && (
              <div className={styles.errorMessage}>
                {errors.message.message}
              </div>
            )}
          </div>
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
            />
            <div className={styles.privacyPolicy}>
              <span>By submitting your email address and any other personal information on the website, you consent to it being collected, held, used and disclosed in accordance with our</span><span style={{color: "#005773", cursor: "pointer"}}> Privacy Policy</span><span >.</span>
            </div>
          </div>
          {checkboxError && (
              <p className={styles.errorMessage}>
                {checkboxError}
              </p>
            )}
          <div className={styles.buttonContainer}>
            <button
              className={styles.button} type="submit"
            >
              Send Message
            </button>
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
  );
}