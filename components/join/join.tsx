import React from 'react'
import styles from './page.module.css'

const Join: React.FC = ({}) => {

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="/pics.png" alt="Images" className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.quote}>
          &apos;Enter some kind of quote here.&apos;
        </div>
        <div className={styles.quoter}>
          - Phlippa Dickinson, CEO of Engenious Recruitment
        </div>
        <div className={styles.text}>
          At Engenious Recruitment, our priority is our people, enabling them to excel and reach new heights. Join our team, and together, we&apos;ll surpass expectations and redefine success
        </div>
        <button className={styles.button}>Join the team</button>
      </div>
        
    </div>
  )
}

export default Join