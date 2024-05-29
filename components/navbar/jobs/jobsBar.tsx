"use client"

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Menu from '../../menu/menu';
import { createTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IoSearchSharp } from "react-icons/io5";

const JobsBar: React.FC = () => {

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
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.menu1} style={{display: setDisplay()}}>
            <Menu color="#00617C"/>
          </div>
          <div className={styles.home}>
            <a href="/">
              <img className={styles.logo} src="/engenious.png" alt="engenious logo" />
            </a>
            <a href="/" className={styles.titleLink} style={{color: "#00617C"}}>
              <div className={styles.companyNameContainer}>
                <div className={styles.companyName1}>ENGENIOUS</div>
                <div className={styles.companyName2}>RECRUITMENT</div>
              </div>
            </a>
            </div>
            <div className={styles.menu2} style={{display: setDisplay2()}}>
              <Menu color="#00617C"/>
            </div>
          </div>
          <div className={styles.searchContainer}>
            <div className={styles.searchInputContainer}>
              <span>Job Title</span>
              <input
                type="text"
                // value={input}
                // onChange={handleSearch}
                placeholder="Search by title, skill or keyword"
                className={styles.input}
              />
            </div>
            <div className={styles.searchDropdownContainer}>
            {/* <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  // label="Age"
                  // onChange={handleChange}
                  sx={{border: "none"}}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box> */}
            </div>
            <div className={styles.searchIconContainer}>
              <IoSearchSharp className={styles.searchIcon}/>
            </div>
          </div>
      </div>
  )
}

export default JobsBar