'use client'
import Image, { getImageProps, ImageLoaderProps } from 'next/image'
import { useState } from 'react'
import * as suits from '../lib/suits'
import card_back_baked from '../../../../public/card-back-baked.png'
import styles from "./card.module.css"

export const getRandomInt = (max:number) => Math.floor(Math.random() * max);
export const getRandomEntry = (entries: any[]) => entries[getRandomInt(entries.length)];


export default function Card() {
  const keys = Object.keys(suits.ImageMappings);
  const [selected, setSelected] = useState("");
  const [flipped, setFlipped] = useState(false);
  if(!selected) {
    setSelected(getRandomEntry(keys));
  }

  return (
    <div 
      className={[styles.card, flipped ? styles.flipped : styles.unflipped].join(' ')}
      onClick={e => setFlipped(!flipped)}
    >
      <div className={styles.inner}>
        <Image
          className={`${styles.radius} ${styles.back}`}
          src={card_back_baked}
          fill
          alt=""/>
        <Image
          className={`${styles.radius} ${styles.face}`}
          src={suits.ImageMappings[selected]}
          alt=""
          fill/>
      </div>
      <div className={styles.innerborder}></div>
    </div>
  );
}
