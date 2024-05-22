import React, { useState } from 'react';
import styles from "./step.module.css";
import { FieldErrors } from 'react-hook-form';

interface Step2Props {
  data: {
    company?: string;
    job?: string;
    name?: string;
    email?: string;
    phoneNumber?: string;
    file?: ({
      name?: string,
      content?: string,
    })
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register: any;
  errors: FieldErrors<{
    company?: string;
    job?: string;
    name?: string;
    email?: string;
    phoneNumber?: string;
    file?: {
        name?: string;
        content?: string;
    };
  }>;
  getInputClassName: (name: string) => string;
  checkboxError: string
}

const Step2: React.FC<Step2Props> = ({ data, handleChange, register, errors, getInputClassName }) => {
  const [content, setContent] = useState<string | null>(null);
  const [filename, setFilename] = useState<string>('');
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);
  const [checkboxError, setCheckboxError] = useState<string>('');

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxChecked(e.target.checked);
    setCheckboxError('');
  };

  return (
    <div className={styles.step}>
      <div className={styles.inputContainer}>
        <div className={styles.label}>Full Name *</div>
        <input
          type="text"
          {...register('name')}
          value={data.name}
          onChange={handleChange}
          className={getInputClassName('name')}
        />
        {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.label}>Work Email Address *</div>
        <input
          type="text"
          {...register('email')}
          value={data.email}
          onChange={handleChange}
          className={getInputClassName('email')}
        />
        {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.label}>Phone Number *</div>
        <input
          type="text"
          {...register('phoneNumber')}
          value={data.phoneNumber}
          onChange={handleChange}
          className={getInputClassName('phoneNumber')}
        />
        {errors.phoneNumber && <p className={styles.errorMessage}>{errors.phoneNumber.message}</p>}
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
      {<p className={styles.errorMessage}>{checkboxError}</p>}
    </div>
  );
};

export default Step2;
