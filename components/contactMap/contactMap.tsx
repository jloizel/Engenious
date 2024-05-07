import React from 'react'
import styles from './page.module.css'
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const ContactMap: React.FC = ({}) => {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mapContainer}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10058.000071358514!2d-0.2795417!3d50.9329653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487595b07eefa0d5%3A0x7870c90353f96446!2sEngenious%20Recruitment!5e0!3m2!1sen!2suk!4v1714947059531!5m2!1sen!2suk" className={styles.map}>
          </iframe>
        </div>
        <div className={styles.textContainer}> 
          <div className={styles.header}>
            Sussex
          </div>
          <div className={styles.detailsContainer}>
            <div className={styles.details}>
              <PlaceIcon className={styles.icon}/>
              <span className={styles.detail}>Stradella, Upper Station Rd, Henfield BN5 9PH</span>
            </div>
            <div className={styles.details}>
              <CallIcon className={styles.icon}/>
              <span className={styles.detail}>+44(0)7748 179242</span>
            </div>
            <div className={styles.details}>
              <EmailIcon className={styles.icon}/>
              <span className={styles.detail}>email@engeniousrecruitment.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMap