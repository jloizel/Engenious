import React from 'react'
import styles from './page.module.css'

const Footer: React.FC = ({}) => {
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Rise Above</span>
        <span>all limitations.</span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          Find a Job
        </button>
        <button className={styles.button}>
          Find Talent
        </button>
      </div>
      <hr className={styles.line}></hr>
      <div className={styles.logoContainer}>
        <a href="/">
          <img className={styles.logo} src="/engenious.png" alt="engenious logo" />
        </a>
        <a href="/" className={styles.link}>
          <div className={styles.companyNameContainer}>
            <div className={styles.companyName1}>ENGENIOUS</div>
            <div className={styles.companyName2}>RECRUITMENT</div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Footer