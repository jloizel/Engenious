import React from 'react'
import styles from "./page.module.css"
import Navbar2 from '../../../components/navbar/navbar2'

export const metadata = {
  title: 'Contact', //changes name on tab (static page)
  description: 'This is the contact page',
}

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div>
        <Navbar2/>
      </div>
      <div>
        text
      </div>
      <div>
        text
      </div>
      <div>
        text
      </div>
    </div>
  )
}

export default Contact