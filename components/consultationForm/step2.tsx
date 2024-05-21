import React from 'react';
import styles from './step.module.css';

const Step2 = ({ data, handleChange }) => (
  <div className={styles.stepContainer}>
    <div className={styles.inputContainer}>
      <label>Role details</label>
      <textarea
        name="roleDetails"
        value={data.roleDetails}
        onChange={handleChange}
      />
    </div>
  </div>
);

export default Step2;
