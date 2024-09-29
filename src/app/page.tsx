"use client"

import Image from "next/image";
import styles from "./page.module.css";
import ServicesSlider from "../../components/services/servicesSlider";
import AboutSlider from "../../components/about/aboutSlider";
import { createTheme, useMediaQuery } from "@mui/material";
import Services from "../../components/services/services";
import About from "../../components/about/aboutInfo";
import Join from "../../components/join/join";
import Testimonials from "../../components/testimonials/testimonials";
import Location from "../../components/location/location";
import NavbarMain1 from "../../components/navbar/main/navbarMain1";
import { Helmet } from 'react-helmet';
import { JobProvider } from "../../components/jobContext/jobContext";
import SectorsSlider from "../../components/sectors/sectorsSlider";


export default function Home() {

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
  const isComputer = useMediaQuery(theme.breakpoints.up('md'));


  return (
    <JobProvider>
    <div className={styles.app}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Engenious</title>
        <link rel="canonical" href="http://mysite.com/example" />
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
          <div className={styles.title}>
            Building Careers and Shaping Futures
          </div>
          <div className={styles.buttonContainer}>
            <a href="/candidates" className={styles.bannerButton}>I am a jobseeker</a>
            <a href="/employers" className={styles.bannerButton}>I am an employer</a>
          </div>
        </div>
      </section>
      <div className={styles.expertiseContent}>
          <div className={styles.expertiseHeader}>
            <span>Placing the best engineering talent in these </span>
            <span style={{color: "#008489"}}>sectors:</span>
          </div>
          <div className={styles.expertiseText}>
            Our reputation is built on finding you the right people. Talented people who stand out, who make a real difference. With the right people, your business can realise its ambitions and go further than you ever thought possible.
          </div>
        </div>
        <SectorsSlider/>
      {/* <section className={styles.services}>
        <div className={styles.servicesContent}>
          <div className={styles.header} >
            <span >A range of </span>
            <span style={{color: "#008489"}}>Talent Services..</span>
          </div>
          <p className={styles.text}>Whether you need new people to scale up your teams, or you&apos;re looking for specific skills to help your business react fast, our full range of talent services<i> will</i> deliver. We go above and beyond to find you the right people.</p>
        </div>
        { isComputer ? <Services/> : <ServicesSlider/> }
      </section> */}
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <div className={styles.expertiseHeader} style={{display: "flex", flexDirection: "column"}}>
            <span>Helping your business </span>
            <span style={{color: "#008489"}}>evolve through:</span>
          </div>
        </div>
        { isComputer ? <About/> : <AboutSlider/> }
        <a href="/about" style={{textDecoration: "none"}}>
          <button className={styles.aboutButton}>
            Learn more about us
          </button>
        </a>
      </section>
      {/* <section className={styles.join}>
        <Join/>
      </section> */}
      <section className={styles.testimonials}>
        <div className={styles.testimonialsContent}>
          <div className={styles.header} >
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
