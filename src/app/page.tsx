"use client"

import Image from "next/image";
import styles from "./page.module.css";
import SliderContainer from "../../components/slider/sliderContainer";

export default function Home() {
  return (
    <div>
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
          <p>Whether you need new people to scale up your teams, or you’re looking for specific skills to help your business react fast, our full range of talent services<i> will</i> deliver. We Go Beyond to find you the right people.</p>
        </div>
        <SliderContainer />
      </section>
      <section className={styles.stats}>

      </section>
      <section className={styles.quote}>

      </section>
      <section className={styles.testimonials}>

      </section>
      <section className={styles.locations}>

      </section>
    </div>
  );
}
