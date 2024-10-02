import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'

interface ContentHeaderProps {
  header: string
  text: string
  source: string
  imageHeight: string
  imageWidth: string
} 

const ContentHeader: React.FC<ContentHeaderProps> = ({ header, text, source, imageHeight, imageWidth }) => {

  const words = header.split(' ');
  const firstWord = words[0];
  const lastWord = words[words.length - 1];

  return (
    <div className={styles.headerContainer}>
      <div className={styles.imageContainer}>
        <Image src={source} alt="Image" className={styles.image} style={{height: imageHeight, width: imageWidth}}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.header}>
          <span style={{color:'#005773'}}>{firstWord}</span>
          <span style={{color:'white'}}> {lastWord}</span>
        </div>
        <div className={styles.text}>
          {text}
        </div>
      </div>
    </div>
  )
}

export default ContentHeader