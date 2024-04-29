import React from 'react'
import styles from './page.module.css'

interface OverviewProps {
  text: string
}

const Overview: React.FC<OverviewProps> = ({text}) => {
  return (
    <div className={styles.overview}>
      {text}
    </div>
  )
}

export default Overview