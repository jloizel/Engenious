import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Join: React.FC = ({}) => {

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/pics.png" alt="Images" className={styles.image}/>
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
        <a href="about/our-team" style={{textDecoration: "none"}}>
          <button className={styles.button}>Meet the team</button>
        </a>
      </div>
    </div>
  )
}

export default Join