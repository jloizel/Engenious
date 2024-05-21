import React from 'react';
import styles from './step.module.css';

const Step1 = ({ data, handleChange }) => (
  <div className={styles.stepContainer}>
    <div className={styles.inputContainer}>
      <label>Type of position you need to fill</label>
      <input
        type="text"
        name="positionType"
        value={data.positionType}
        onChange={handleChange}
      />
    </div>
    <div className={styles.inputContainer}>
      <label>Any specific details? Estimated salary, urgency of turnaround etc.</label>
      <textarea
        name="details"
        value={data.details}
        onChange={handleChange}
      />
    </div>
  </div>
);

export default Step1;
