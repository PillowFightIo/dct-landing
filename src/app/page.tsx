import Image from "next/image";
import styles from "./page.module.css";
import logotext from '../../public/dct-text.png';
import gridtile from '../../public/hextile.png';
import dragonmask from '../../public/dragon-mask-alpha.png';
import maincave from '../../public/main_cave.png';
import tenacious_explaining from '../../public/tenacious_explaining.gif';
import tarotcards from '../../public/tarot_cards.gif';
import dragonloop from '../../public/dragon-loop-wide.gif';
import dragonsayshi from '../../public/dragon_says_hi.gif';
import { PT_Mono } from "next/font/google";

const ptmono = PT_Mono({ 
  weight: ['400'],
  subsets: ["latin"]
});

export default function Home() {
  return (
    <main className={`${styles.main} ${ptmono.className}`} style={{
      "--gridtile-url": `url(${gridtile.src})`,
      "--dragonmask-url": `url(${dragonmask.src})`,
      "--maincave-url": `url(${maincave.src})`,
    } as React.CSSProperties}>
      <div className={styles.hero}>
        <div className={styles.dragonlogo}>
          <Image 
            src={logotext}
            alt="Dragon Care Tarot" 
            height={logotext.height} 
            width={logotext.width} 
            style={{
              position:'relative',
              zIndex: 1,
              visibility:'visible',
              maxHeight: '500px',
              maxWidth: '95vw',
              width: 'auto',
              height: 'auto'
            }}
          />

        </div>
      </div>
      <div className={styles.content}>
        <h2>Dragon Care Tarot is a virtual pet simulator for dragon-lovers of all ages.<br/><br/>Pet, feed, and polish hand-animated dragons, fly over mysterious islands, and learn your future.</h2>
        <div className={styles.grid}>
          <div
            className={styles.card}
          >
            <Image
              src={tarotcards}
              unoptimized
              alt="A three card tarot spread"
              fill />
          </div>
          <div
            className={styles.card}
          >
            <Image
              src={dragonloop}
              unoptimized
              alt="A dragon in flight, looping majestically"
              fill />
          </div>

          <div
            className={styles.card}
          >
            <Image
              src={dragonsayshi}
              unoptimized
              alt="An adult dragon says hello"
              fill />
          </div>

        </div>
      </div>
    </main>
  );
}
