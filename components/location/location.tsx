import React from 'react'
import styles from './page.module.css'

const Location: React.FC = ({}) => {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.header}>
          Our Locations
        </div>
        <div className={styles.subHeader}>
          Henfield
        </div>
      </div>
      <div className={styles.imageContainer}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10058.000071358514!2d-0.2795417!3d50.9329653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487595b07eefa0d5%3A0x7870c90353f96446!2sEngenious%20Recruitment!5e0!3m2!1sen!2suk!4v1714947059531!5m2!1sen!2suk" className={styles.map}>
        </iframe>
      </div>
    </div>
  )
}

export default Location