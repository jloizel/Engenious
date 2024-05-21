import React from 'react';
import styles from './step.module.css';

const Step3 = ({ data, handleChange }) => (
  <div className={styles.stepContainer}>
    <div className={styles.inputContainer}>
      <label>Contacting you</label>
      <input
        type="text"
        name="contactInfo"
        value={data.contactInfo}
        onChange={handleChange}
      />
    </div>
  </div>
);

export default Step3;
