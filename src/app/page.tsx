"use client"

import Image from "next/image";
import styles from "./page.module.css";
import ServicesSlider from "../../components/services/servicesSlider";
import AboutSlider from "../../components/about/aboutSlider";
import { createTheme, useMediaQuery } from "@mui/material";
import Services from "../../components/services/services";
import About from "../../components/about/about";



export default function Home() {

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

  return (
    <div className={styles.app}>
      <section className={styles.banner}>
        <div className={styles.video}>
          <video className={styles.backgroundVideo} autoPlay muted loop>
            <source src="/background3.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoOverlay}></div>
        </div>
        <div className={styles.bannerContent}>
          <div className={styles.title}>
            Talent Services Beyond Expectations.
          </div>
          <div className={styles.buttonContainer}>
            <a href="/jobseekers" className={styles.bannerButton}>I am a jobseeker</a>
            <a href="/employers" className={styles.bannerButton}>I am an employer</a>
          </div>
        </div>
      </section>
      <section className={styles.services}>
        <div className={styles.servicesContent}>
          <div className={styles.header}>
            <span >A full range of </span>
            <span style={{color: "#008489"}}>Talent Services..</span>
          </div>
          <p className={styles.text}>Whether you need new people to scale up your teams, or you&apos;re looking for specific skills to help your business react fast, our full range of talent services<i> will</i> deliver. We Go Beyond to find you the right people.</p>
        </div>
        { isMobile ? <ServicesSlider/> : <Services/> }
      </section>
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <div className={styles.header} style={{display: "flex", flexDirection: "column"}}>
            <span>Investing time in people; </span>
            <span style={{color: "#008489"}}>it&apos;s in our DNA.</span>
          </div>
        </div>
        { isMobile ? <AboutSlider/> : <About/> }
        <div>
          <button className={styles.aboutButton}>
            Learn more about us
          </button>
        </div>
      </section>
      <section className={styles.join}>

      </section>
      <section className={styles.testimonials}>
      </section>
      <section className={styles.locations}>
        
      </section>
    </div>
  );
}
