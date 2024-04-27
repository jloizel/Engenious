"use client"

import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';

const links = [
    {
      id: 1,
      title: "Jobs",
      url: "/jobs",
    },
    {
      id: 2,
      title: "Submit a vacancy",
      url: "/submit-vacancy",
    },
    {
      id: 3,
      title: "About",
      url: "/about",
    },
    {
      id: 4,
      title: "Contact",
      url: "/contact",
    }
  ];

const Navbar = () => {

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.left}>
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
        <div className={styles.middle}>
          <div className={styles.links}>
              {links.map(link => (
                <a key={link.id} href={link.url} className={styles.link}>
                    {link.title}
                </a>
              ))}
          </div>
        </div>
        <div className={styles.right}>
          <SearchIcon style={{color: "white"}}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar