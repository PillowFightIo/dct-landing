'use client'
import Image, { getImageProps, ImageLoaderProps } from 'next/image'
import { useEffect, useState } from 'react'
import * as suits from '../lib/suits'
import card_back_baked from '../../../../public/card-back-baked.png'
import styles from "./card.module.css"

interface CardProps {
  shown: boolean;
  card: string;
  onClick: () => void;
}

export default function Card({shown, card, onClick}: CardProps) {
  return (
    <div 
      className={[styles.card, shown ? styles.flipped : styles.unflipped].join(' ')}
      onClick={e => {onClick && onClick()}}
    >
      <div className={styles.inner}>
        <Image
          className={`${styles.radius} ${styles.back}`}
          src={card_back_baked}
          fill
          alt=""/>
        <Image
          className={`${styles.radius} ${styles.face}`}
          src={card ? suits.ImageMappings[card] : ''}
          alt=""
          fill/>
      </div>
      <div className={styles.innerborder}></div>
    </div>
  );
}
