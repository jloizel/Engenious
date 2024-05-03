import React from 'react'
import styles from './page.module.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface OverviewProps {
  text: string
}

const Overview: React.FC<OverviewProps> = ({text}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>Overview</div>
        <div className={styles.text}>{text}</div>
      </div>
      <KeyboardArrowRightIcon className={styles.arrow}/>
    </div>
  )
}

export default Overview