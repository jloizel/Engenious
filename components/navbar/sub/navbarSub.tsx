"use client"

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Menu from '../../menu/menu';
import { createTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';

interface Link {
  id: number;
  title: string;
  url: string;
}

interface NavbarSubProps {
  links: Link[];
  pageName: string
  currentPath: string
  colour: string
} 

const NavbarSub: React.FC<NavbarSubProps> = ({links, pageName, currentPath, colour}) => {

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
  const isComputer = useMediaQuery(theme.breakpoints.up('md'));

  const handleNavbarDisplay = () => {
    if (isMobile) {
        return 'flex';
    } else {
        return '';
    }
  }; 

  const handleContainerWidth = () => {
    if (isMobile) {
        return '90%';
    } else {
        return '';
    }
  }; 

  const handleContainerMargin = () => {
    if (isTabletOrAbove) {
        return '10px';
    } else {
        return '';
    }
  }; 

  const handleContainerGap = () => {
    if (isTabletOrAbove) {
        return '20px';
    } else {
        return '';
    }
  }; 

  const setDisplay  = () => {
    if (isMobile) {
        return 'none';
    } else {
        return '';
    }
  }; 

  const setDisplay2  = () => {
    if (isMobile) {
        return 'flex';
    } else {
        return 'none';
    }
  }; 

  const handleImageWidth = () => {
    if (isTabletOrBelow) {
      return 60
    } else {
      return 70
   }
  }

  const handleLeftWidth = () => {
    if (isMobile) {
      return "100%"
    } else {
      return ""
   }
  }

  const handleLeftJustify = () => {
    if (isMobile) {
      return "space-between"
    } else {
      return ""
   }
  }

  const handleLinksGap = () => {
    if (isTablet) {
      return "35px"
    } else if (isComputer) {
      return "50px"
   }
  }
  

  return (
    <div className={styles.navbar}>
      <div className={styles.container} >
        <div className={styles.left} >
          <div className={styles.menu1} style={{display: setDisplay()}}>
            <Menu color={colour}/>
          </div>
          <div className={styles.home}>
            <a href="/">
              <Image className={styles.logo} src="/engenious.png" alt="engenious logo" width={handleImageWidth()} height={handleImageWidth()}/>
            </a>
            <a href="/" className={styles.titleLink} style={{color: colour}}>
              <div className={styles.companyNameContainer}>
                <div className={styles.companyName1}>ENGENIOUS</div>
                <div className={styles.companyName2}>RECRUITMENT</div>
              </div>
            </a>
            </div>
            <div className={styles.menu2} style={{display: setDisplay2()}}>
              <Menu color={colour}/>
            </div>
          </div>
        <div className={styles.middle}>
          <div className={styles.pageName} style={{color: colour}}>
            {pageName}
          </div>
          <div className={styles.links} >
            {links && links.map(link => (
              <a 
                key={link.id} 
                href={link.url} 
                className={`${styles.link} ${link.url === currentPath ? styles.active : ''}`}
                style={{color: colour}}
                >{link.title}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.rightHidden}></div>
      </div>
    </div>
  )
}

export default NavbarSub