import React from 'react'
import styles from "./page.module.css"

export const metadata = {
  title: 'Contact', //changes name on tab (static page)
  description: 'This is the contact page',
}

const Contact = () => {
  return (
    <div>
      <img src='/engenious.jpeg' className={styles.logo}/>
    </div>
  )
}

export default Contact