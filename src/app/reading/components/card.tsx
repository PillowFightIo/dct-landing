'use client'
import Image, { getImageProps, ImageLoaderProps } from 'next/image'
import { useState } from 'react'
import * as suits from '../lib/suits'
import styles from "./card.module.css"

export const getRandomInt = (max:number) => Math.floor(Math.random() * max);
export const getRandomEntry = (entries: any[]) => entries[getRandomInt(entries.length)];


export default function Card() {
  const keys = Object.keys(suits.ImageMappings);
  const [selected, setSelected] = useState("");
  if(!selected) {
    setSelected(getRandomEntry(keys));
  }

  return (
    <div className={
      `${styles.card} 
       ${styles.unflipped}`}>
      <div className={styles.inner}>
        <div className={styles.back}></div>
        <div className={styles.face}>
        <Image
          className={styles.radius}
          src={suits.ImageMappings[selected]}
          alt=""
          fill/>

        </div>
      </div>
      <div className={styles.innerborder}></div>
    </div>
  );
}
