"use client"

import React, { useState } from 'react'
import styles from './page1.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Menu from '../../menu/menu';
import { createTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

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
    sublinks: [
      { id: 21, title: "Construction", url: "/sectors/construction" },
      { id: 22, title: "House Building", url: "/sectors/housebuilding" },
      { id: 23, title: "Maintenance", url: "/sectors/maintenance" },
      { id: 24, title: "Civil Engineering", url: "/sectors/civilengineering" },
      { id: 25, title: "Trades & Labour", url: "/sectors/trades-labour" },
      { id: 26, title: "Search & Select", url: "/sectors/search-select" }
    ]
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

interface NavbarProps {
  currentPath?: string
} 

const NavbarMain1: React.FC<NavbarProps> = ({currentPath}) => {
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);

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
    <div className={styles.navbar} style={{width: "100%"}}>
      <div className={styles.container}>
        <div className={styles.left}>
          {isComputer && (
            <div className={styles.menu1}>
              <Menu color={"#005773"}/>
            </div>
          )}
          <div className={styles.home}>
            <a href="/">
              <img className={styles.logo} src="/logo.png" alt="engenious logo"/>
            </a>
            {/* <a href="/" className={styles.titleLink}>
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
            <div className={styles.links}>
              {links.map(link => (
                <div
                key={link.id}
                className={styles.linkContainer}
                onMouseEnter={() => link.sublinks ? setIsSectorsOpen(true) : null}
                onMouseLeave={() => link.sublinks ? setIsSectorsOpen(false) : null}
              >
                <a key={link.id} href={link.url} className={`${styles.link} ${link.url === currentPath ? styles.active : ''}`}>
                    {link.title}
                    {/* Show arrow icon only for "Sectors" */}
                    {link.sublinks && (
                      <MdKeyboardArrowRight className={`${styles.arrowIcon} ${isSectorsOpen ? styles.rotateArrow : ''}`} />
                    )}
                  </a>
                {/* Dropdown for "Sectors" */}
                {link.sublinks && isSectorsOpen && (
                  <div className={styles.dropdown}>
                    {link.sublinks && isSectorsOpen && isComputer && (
                    <div className={styles.dropdown}>
                      {link.sublinks.map((sublink) => (
                        <a key={sublink.id} href={sublink.url} className={styles.sublink}>
                          {sublink.title} <MdKeyboardArrowRight className={styles.rightIcon}/>
                        </a>
                      ))}
                    </div>
                  )}
                  </div>
                )}
              </div>
              ))}
            </div>
          </div>
        )}
        {isComputer && (
          <div className={styles.right}>
            <a className={styles.button}>
              Submit a Vacancy
            </a>
          </div>
        )}
        {/* <div className={styles.rightHidden}></div> */}
      </div>
    </div>
  )
}

export default NavbarMain1