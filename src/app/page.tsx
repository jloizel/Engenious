"use client"

import Image from "next/image";
import styles from "./page2.module.css";
import ServicesSlider from "../../components/services/servicesSlider";
import AboutSlider from "../../components/about/aboutSlider";
import { createTheme, useMediaQuery } from "@mui/material";
import Services from "../../components/services/services";
import About from "../../components/about/about";
import Join from "../../components/join/join";
import Testimonials from "../../components/testimonials/testimonials";
import Location from "../../components/location/location";
import NavbarMain1 from "../../components/navbar/main/navbarMain1";
import { Helmet } from 'react-helmet';
import { JobProvider } from "../../components/jobContext/jobContext";
import { useEffect } from "react";


export default function Home() {

  // const clearCacheData = () => {
  //   caches.keys().then((names) => {
  //       names.forEach((name) => {
  //           caches.delete(name);
  //       });
  //   });
  // };

  // useEffect(() => {
  //   clearCacheData();
  // }, []);

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
  const isComputer = useMediaQuery(theme.breakpoints.up('md'));

  const handleFlexDirection = () => {
    if (isMobile) {
      return "column"
    } else {
      return "row"
    }
  }

  const handleTitleFontSize = () => {
    if (isMobile) {
      return "40px"
    } else if (isTablet) {
      return "50px"
    } else {
      return "70px"
    }
  }

  const handleTitleLineHeight = () => {
    if (isMobile) {
      return "125%"
    } else {
      return "115%"
    }
  }

  const handleTitlePadding = () => {
    if (isMobile) {
      return "60px"
    } else if (isTablet) {
      return "40px"
    } else {
      return "50px"
    }
  }

  const handleHeaderFontSize = () => {
    if (isMobile) {
      return "22px"
    } else if (isTablet) {
      return "30px"
    } else {
      return "45px"
    }
  }

  const handleButtonFontSize = () => {
    if (isMobile) {
      return "16px"
    } else {
      return "18px"
    }
  }

  
  const handleButtonWidth = () => {
    if (isMobile) {
      return "300px"
    } else {
      return "350px"
    }
  }

  

  return (
    <JobProvider>
    <div className={styles.app}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Engenious</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1"/>
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="stylesheet" type="text/css" href="page.module.css"/>
      </Helmet>
      <NavbarMain1/>
      <section className={styles.banner}>
        <div className={styles.video}>
          <video className={styles.backgroundVideo} autoPlay muted loop playsInline>
            <source src="/background3.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoOverlay}></div>
        </div>
        <div className={styles.bannerContent}>
          <div className={styles.title} style={{fontSize: handleTitleFontSize(), lineHeight: handleTitleLineHeight(), paddingBottom: handleTitlePadding()}}>
            Talent Services Beyond Expectations.
          </div>
          <div className={styles.buttonContainer} style={{flexDirection: handleFlexDirection(), gap: "25px"}}>
            <a href="/jobs" className={styles.bannerButton}>I am a jobseeker</a>
            <a href="/employers" className={styles.bannerButton}>I am an employer</a>
          </div>
        </div>
      </section>
      <section className={styles.services}>
        <div className={styles.servicesContent}>
          <div className={styles.header} style={{lineHeight: "125%", marginTop: "40px", marginBottom: "20px", fontSize: handleHeaderFontSize()}}>
            <span >A range of </span>
            <span style={{color: "#008489"}}>Talent Services..</span>
          </div>
          <p className={styles.text}>Whether you need new people to scale up your teams, or you&apos;re looking for specific skills to help your business react fast, our full range of talent services<i> will</i> deliver. We go above and beyond to find you the right people.</p>
        </div>
        { isComputer ? <Services/> : <ServicesSlider/> }
      </section>
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <div className={styles.header} style={{display: "flex", flexDirection: "column", fontSize: handleHeaderFontSize(), lineHeight: "125%", marginTop: "40px", marginBottom: "20px"}}>
            <span>Investing time in people; </span>
            <span style={{color: "#008489"}}>it&apos;s in our DNA.</span>
          </div>
        </div>
        { isComputer ? <About/> : <AboutSlider/> }
        <a href="/about" style={{textDecoration: "none"}}>
          <button className={styles.aboutButton} style={{fontSize: handleButtonFontSize(), width: handleButtonWidth()}}>
            Learn more about us
          </button>
        </a>
      </section>
      <Join/>
      <section className={styles.testimonials}>
        <div className={styles.testimonialsContent}>
          <div className={styles.header} style={{lineHeight: "125%", marginTop: "40px", marginBottom: "20px", fontSize: handleHeaderFontSize()}}>
            <span style={{color: "#008489"}}>Talented people </span>
            <span >are at the centre of everything we do.</span>
          </div>
        </div>
        <Testimonials/>
      </section>
      <section className={styles.locations}>
        <Location/>
      </section>
    </div>
    </JobProvider>
  );
}
