import React, { useState } from 'react';
import styles from "./step.module.css";
import { FieldErrors } from 'react-hook-form';

interface Step1Props {
  data: {
    company?: string;
    job?: string;
    message?: string;
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
    message?: string;
    name?: string;
    email?: string;
    phoneNumber?: string;
    file?: {
        name?: string;
        content?: string;
    };
  }>;
  getInputClassName: (name: string) => string;
  onAddFileAction: (e: React.ChangeEvent<HTMLInputElement>) => void
  setValue: (name: string, value: any, options?: Record<string, any>) => void;
}

const Step1: React.FC<Step1Props> = ({ data, handleChange, register, errors, getInputClassName, setValue}) => {
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
          setValue('file', {
            name: files[0].name,
            content: r.target.result.toString(),
          });
        }
      };

      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <div className={styles.step}>
      <div className={styles.inputContainer}>
        <div className={styles.label}>Company Name *</div>
        <input
          type="text"
          {...register('company')}
          value={data.company}
          onChange={handleChange}
          className={getInputClassName('company')}
        />
        {errors.company && <p className={styles.errorMessage}>{errors.company.message}</p>}
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.label}>Job Title *</div>
        <input
          type="text"
          {...register('job')}
          value={data.job}
          onChange={handleChange}
          className={getInputClassName('job')}
        />
        {errors.job && <p className={styles.errorMessage}>{errors.job.message}</p>}
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
      <div className={styles.messageInputContainer}>
        <div className={styles.label}>Message</div>
        <textarea
          type="text"
          {...register('message')}
          value={data.message}
          onChange={handleChange}
          className={styles.messageInput}
          placeholder='Any specific details? Urgency of turnaround, position type etc.'
        />
      </div>
    </div>
  );
};

export default Step1;
