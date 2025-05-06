"use client";

import Image from "next/image";
import styles from "./page.module.css";
import logo from "../../public/logo2.png";

export default function WIP() {
  return (
    <div className={styles.wipContainer}>
      <div className={styles.wipLogoWrapper}>
        <Image src={logo} alt="Logo"  height={50} />
      </div>

      <div className={styles.wipTextContainer}>
        <div className={styles.wipHeader}>
          BUILDING CAREERS AND SHAPING COMPANIES
        </div>
        <div className={styles.wipText}>
          Our new website is coming soon.
        </div>
      </div>
    </div>
  );
}
