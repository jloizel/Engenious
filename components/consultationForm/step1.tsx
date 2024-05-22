import React, { useState } from 'react';
import styles from "./step.module.css";
import { FieldErrors } from 'react-hook-form';

interface Step1Props {
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

const Step1: React.FC<Step1Props> = ({ data, handleChange, register, errors, getInputClassName }) => {
  const [content, setContent] = useState<string | null>(null);
  const [filename, setFilename] = useState<string>('');

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

  return (
    <div className={styles.step}>
      <div className={styles.inputContainer}>
        <div className={styles.label}>Company Name</div>
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
        <div className={styles.label}>Job Title</div>
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
        <div className={styles.label}>Upload Job Description</div>
        <div className={styles.fileinputBox}>
          <label htmlFor="fileInput" className={styles.fileinputLabel}>
            <span className={styles.fileLabel}>Allowed file types:</span>
            <span className={styles.fileLabel} style={{ fontStyle: "italic", color: "#008489" }}>pdf, docx, doc</span>
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
        {/* {errors.file && <p className={styles.errorMessage}>{errors.file.message}</p>} */}
      </div>
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

export default Step1;
