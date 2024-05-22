import React, { useState } from 'react';
import styles from "./step.module.css";
import { FieldErrors } from 'react-hook-form';

interface Step2Props {
  data: {
    name: string;
    email: string;
    phone: string;
    positionType: string;
    details: string;
    roleDetails: string;
    contactInfo: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register: any;
  errors: FieldErrors<{
    name: string;
    email: string;
    phone: string;
    message: string;
  }>;
  getInputClassName: (name: string) => string;
}

const Step2: React.FC<Step2Props> = ({ data, handleChange, register, errors, getInputClassName }) => {
  const [content, setContent] = useState<string | null>(null);
  const [filename, setFilename] = useState<string>('');
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);
  const [checkboxError, setCheckboxError] = useState<string>('');

  const onAddFileAction = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const files = e.target.files;

    if (files && files[0]) {
      reader.onload = (r) => {
        if (r.target && r.target.result) {
          setContent(r.target.result.toString());
          setFilename(files[0].name);
          // setValue('file', {
          //   name: files[0].name,
          //   content: r.target.result.toString(),
          // });
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
    <div className={styles.step}>
      <div className={styles.inputContainer}>
        <div className={styles.label}>Full Name</div>
        <input
          type="text"
          {...register('name')}
          value={data.name}
          onChange={handleChange}
          className={getInputClassName('name')}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.label}>Work Email Address</div>
        <input
          type="text"
          {...register('positionType')}
          value={data.positionType}
          onChange={handleChange}
          className={getInputClassName('positionType')}
        />
        {/* {errors.positionType && <p>{errors.positionType.message}</p>} */}
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.label}>Phone Number</div>
        <input
          type="text"
          {...register('positionType')}
          value={data.positionType}
          onChange={handleChange}
          className={getInputClassName('positionType')}
        />
        {/* {errors.positionType && <p>{errors.positionType.message}</p>} */}
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
      {/* <div>
        <input
          type="text"
          placeholder="Email"
          {...register('email')}
          value={data.email}
          onChange={handleChange}
          className={getInputClassName('email')}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <input
          type="text"
          placeholder="Phone"
          {...register('phone')}
          value={data.phone}
          onChange={handleChange}
          className={getInputClassName('phone')}
        />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div> */}
    </div>
  );
};

export default Step2;
