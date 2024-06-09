"use client"

import React from 'react'
import styles from './page2.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Menu from '../../menu/menu';
import { createTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const links = [
    {
      id: 1,
      title: "Employers",
      url: "/employers",
    },
    {
      id: 2,
      title: "Jobs",
      url: "/jobs",
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

const NavbarMain2 = () => {

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
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.menu1} style={{display: setDisplay()}}>
            <Menu color={"#00617C"}/>
          </div>
          <div className={styles.home}>
            <a href="/">
              <Image className={styles.logo} src="/engenious.png" alt="engenious logo" />
            </a>
            <a href="/" className={styles.titleLink}>
              <div className={styles.companyNameContainer}>
                <div className={styles.companyName1}>ENGENIOUS</div>
                <div className={styles.companyName2}>RECRUITMENT</div>
              </div>
            </a>
          </div>
          <div className={styles.menu2} style={{display: setDisplay2()}}>
            <Menu color={"#00617C"} />
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
        {/* <div className={styles.right}>
          <SearchIcon className={styles.searchIcon} style={{display: setDisplay()}}/>
        </div> */}
        <div className={styles.rightHidden}></div>
      </div>
    </div>
  )
}

export default NavbarMain2