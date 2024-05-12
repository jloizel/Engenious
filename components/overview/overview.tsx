import React from 'react'
import styles from './page.module.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface OverviewProps {
  text: string
  href: string
}

const Overview: React.FC<OverviewProps> = ({text, href}) => {

  const handleOnClick = () => {
    // Redirect to the specified URL
    window.location.href = href;
  };
  
  return (
    <button className={styles.container} onClick={handleOnClick}>
      <div className={styles.content}>
        <div className={styles.title}>Overview</div>
        <div className={styles.text}>{text}</div>
      </div>
      <KeyboardArrowRightIcon className={styles.arrow}/>
    </button>
  )
}

export default Overview