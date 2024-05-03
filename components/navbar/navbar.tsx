"use client"

import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import Menu from '../menu/menu';
import { createTheme, useMediaQuery } from '@mui/material';

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

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 767,
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isTabletOrAbove = useMediaQuery(theme.breakpoints.up('md'));

  const setDisplay  = () => {
    if (isMobile) {
        return 'none';
    } else {
        return '';
    }
  }; 

  const setDisplay2  = () => {
    if (isTabletOrAbove) {
        return 'none';
    } else {
        return '';
    }
  }; 

  return (
    <div className={styles.navbar}>
      {/* {(isTabletOrAbove || isTablet) && ( */}
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.menu1} style={{display: setDisplay()}}>
            <Menu />
          </div>
          <a href="/">
            <img className={styles.logo} src="/engenious.png" alt="engenious logo" />
          </a>
          <a href="/" className={styles.link}>
            <div className={styles.companyNameContainer}>
              <div className={styles.companyName1}>ENGENIOUS</div>
              <div className={styles.companyName2}>RECRUITMENT</div>
            </div>
          </a>
          <div className={styles.menu2} style={{display: setDisplay2()}}>
            <Menu />
          </div>
        </div>
        <div className={styles.middle} style={{display: setDisplay()}}>
          <div className={styles.links}>
              {links.map(link => (
                <a key={link.id} href={link.url} className={styles.link}>
                    {link.title}
                </a>
              ))}
          </div>
        </div>
        <div className={styles.right}>
          <SearchIcon className={styles.searchIcon} style={{display: setDisplay()}}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar