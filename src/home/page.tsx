"use client"

import Image from "next/image";
import styles from "./page.module.css";
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
  const isComputer = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div className={styles.app}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <NavbarMain1/>
      <section className={styles.banner}>
        <div className={styles.video}>
          <video className={styles.backgroundVideo} autoPlay muted loop playsInline controlsList="nodownload">
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
            <span >A range of </span>
            <span style={{color: "#008489"}}>Talent Services..</span>
          </div>
          <p className={styles.text}>Whether you need new people to scale up your teams, or you&apos;re looking for specific skills to help your business react fast, our full range of talent services<i> will</i> deliver. We go above and beyond to find you the right people.</p>
        </div>
        { isComputer ? <Services/> : <ServicesSlider/> }
      </section>
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <div className={styles.header} style={{display: "flex", flexDirection: "column"}}>
            <span>Investing time in people; </span>
            <span style={{color: "#008489"}}>it&apos;s in our DNA.</span>
          </div>
        </div>
        { isComputer ? <About/> : <AboutSlider/> }
        <div>
          <button className={styles.aboutButton}>
            Learn more about us
          </button>
        </div>
      </section>
      <section className={styles.join}>
        <Join/>
      </section>
      <section className={styles.testimonials}>
        <div className={styles.testimonialsContent}>
          <div className={styles.header}>
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
  );
}
