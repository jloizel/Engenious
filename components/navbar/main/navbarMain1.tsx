"use client"

import React from 'react'
import styles from './page1.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Menu from '../../menu/menu';
import { createTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const links = [
  {
    id: 1,
    title: "About",
    url: "/about",
  },
  {
    id: 2,
    title: "Sectors",
    url: "/sectors",
  },
  {
    id: 3,
    title: "Employers",
    url: "/employers",
  },
  {
    id: 4,
    title: "Candidates",
    url: "/candidates",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  }
];

const NavbarMain1 = () => {

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isTabletOrAbove = useMediaQuery(theme.breakpoints.up('sm'));
  const isTabletOrBelow = useMediaQuery(theme.breakpoints.down('md'));

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

  const handleImageWidth = () => {
    if (isTabletOrBelow) {
      return 60
    } else {
      return 70
   }
  }

  return (
    <div className={styles.navbar} style={{width: "100%"}}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.menu1} style={{display: setDisplay()}}>
            <Menu color={"white"}/>
          </div>
          <div className={styles.home}>
            <a href="/">
              <Image className={styles.logo} src="/engenious.png" alt="engenious logo" height={handleImageWidth()} width={handleImageWidth()}/>
            </a>
            <a href="/" className={styles.titleLink}>
              <div className={styles.companyNameContainer}>
                <div className={styles.companyName1}>ENGENIOUS</div>
                <div className={styles.companyName2}>RECRUITMENT</div>
              </div>
            </a>
          </div>
          <div className={styles.menu2} style={{display: setDisplay2()}}>
            <Menu color={"white"}/>
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
        {!isMobile && (
          <div className={styles.right}>
            <a className={styles.button}>
              Register a Vacancy
            </a>
          </div>
        )}
        {/* <div className={styles.rightHidden}></div> */}
      </div>
    </div>
  )
}

export default NavbarMain1