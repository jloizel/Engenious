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
  const isComputer = useMediaQuery(theme.breakpoints.up('md'));
  const isTabletOrAbove = useMediaQuery(theme.breakpoints.up('sm'));
  const isTabletOrBelow = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className={styles.navbar}>
      <div className={styles.container} >
        <div className={styles.left} >
          {isComputer && (
            <div className={styles.menu1}>
              <Menu color={"#005773"}/>
            </div>
          )}
          <div className={styles.home}>
            <a href="/">
              <img className={styles.logo} src="/logo.png" alt="engenious logo"/>
            </a>
            {/* <a href="/" className={styles.titleLink} style={{color: colour}}>
              <div className={styles.companyNameContainer}>
                <div className={styles.companyName1}>ENGENIOUS</div>
                <div className={styles.companyName2}>RECRUITMENT</div>
              </div>
            </a> */}
            </div>
            {!isComputer && (
              <div className={styles.menu2}>
                <Menu color={"#005773"}/>
              </div>
            )}
          </div>
        {isComputer && (
        <div className={styles.middle}>
          <div className={styles.pageName} style={{color: "#005773"}}>
            {pageName}
          </div>
          <div className={styles.links} >
            {links && links.map(link => (
              <a 
                key={link.id} 
                href={link.url} 
                className={`${styles.link} ${link.url === currentPath ? styles.active : ''}`}
                style={{color: "#005773"}}
                >{link.title}
              </a>
            ))}
          </div>
        </div>
        )}
        {/* {!isMobile && (
          <div className={styles.right}>
            <a className={styles.button}>
              Register a Vacancy
            </a>
          </div>
        )} */}
        <div className={styles.rightHidden}>

        </div>
      </div>
    </div>
  )
}

export default NavbarSub