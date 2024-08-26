import styles from './readingtext.module.css'
import * as suits from '../lib/suits'
import { PT_Mono } from "next/font/google";

const ptmono = PT_Mono({ 
  weight: ['400'],
  subsets: ["latin"]
});

interface CardProps {
  shown: boolean;
  card: string;
}
export default function ReadingText({shown, card}: CardProps) {
  return (
    <div className={[styles.readingbox, ptmono.className, shown ? styles.shown : ''].join(' ')}>
      <div className={styles.rb_contents}>
        <div className={styles.cardname}>{suits.CardNames[card]}</div>
        <div>{suits.ReadingText[card]}</div>
      </div>
    </div>
  );
}