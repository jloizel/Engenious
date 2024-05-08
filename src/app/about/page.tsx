"use client"

import React from 'react'
import styles from "./page.module.css"
import NavbarSub from '../../../components/navbar/sub/navbarSub'
import ContactForm from '../../../components/contactForm/contactForm'
import { HiMiniArrowLongDown } from "react-icons/hi2";
import { createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import ContactMap from '../../../components/contactMap/contactMap'

const About = () => {

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

  const links = [
    {
      id: 1,
      title: "Our work",
      url: "/our-work",
    },
    {
      id: 2,
      title: "Our story",
      url: "/our-story",
    },
    {
      id: 3,
      title: "Our purpose",
      url: "/our-purpose",
    },
    {
      id: 4,
      title: "Our work",
      url: "/our-commitments",
    }
  ];

  return (
    <div className={styles.aboutContainer}>
      <Helmet>
        <title>About</title>
        <meta name='description' content='' />
      </Helmet>
      <NavbarSub links={links}/>
      <div className={styles.aboutContent}>
        text
      </div>
    </div>
  )
}

export default About