import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './page.module.css'

const ContactForm = () => {
  const form = useRef<any>("");
  const [formErrors, setFormErrors] = useState<any>({});
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValue = form.current.user_email.value.trim();
    const isEmailValid = emailRegex.test(emailValue);
  
    // Message validation
    const messageValue = form.current.message.value.trim();
  
    // Checkbox validation
    const isCheckboxChecked = checkboxChecked;
  
    // Check if email is empty or invalid
    if (!emailValue || !isEmailValid) {
      setFormErrors({ email: 'Please enter a valid email.' });
    } else {
      setFormErrors((prevErrors: any) => ({ ...prevErrors, email: '' }));
    }
  
    // Check if message is empty
    if (!messageValue) {
      setFormErrors((prevErrors: any) => ({ ...prevErrors, message: 'Please enter a message.' }));
    } else {
      setFormErrors((prevErrors: any) => ({ ...prevErrors, message: '' }));
    }
  
    // Check if checkbox is unchecked
    if (!isCheckboxChecked) {
      setFormErrors((prevErrors: any) => ({ ...prevErrors, checkbox: 'Please check the checkbox.' }));
    } else {
      setFormErrors((prevErrors: any) => ({ ...prevErrors, checkbox: '' }));
    }
  
    // If any field has an error, return without sending email
    if (!emailValue || !isEmailValid || !messageValue || !isCheckboxChecked) {
      return;
    }
  
    // Reset any previous form errors
    setFormErrors({});

    emailjs.sendForm(
      'GoFetch',
      'GoFetchTemplate1',
      form.current,
      'a-Dwrmb6In4hNJHnw'
    ).then(
      (result) => {
        console.log(result.text);
        // Redirect to the "Received" page after successful submission
        window.location.href = '/received';
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxChecked(e.target.checked);
    setFormErrors({}); // Clear checkbox error when checkbox state changes
  };

  return (
    <form className={styles.form} ref={form} onSubmit={sendEmail}>
      <div className={styles.inputContainer}>
        <div className={styles.inputTitle}>
          Full Name
        </div>
        <input
          className={styles.inputBox}
          type="text"
          name="user_name"
        />
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputTitle}>
          Email Address *
        </div>
        <input
          className={styles.inputBox}
          type="text"
          name="user_email"
        />
        {formErrors.email && (<span className={styles.errorMessage}>{formErrors.email}</span>)}
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputTitle}>
          Message *
        </div>
        <input
          id="contactFormMessage"
          className={styles.messageBox}
          type="text"
          name="message"
        />
        {formErrors.message && (<span className={styles.errorMessage}>{formErrors.message}</span>)}
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

export default ContactForm;
