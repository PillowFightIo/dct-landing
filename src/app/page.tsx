import Image from "next/image";
import styles from "./page.module.css";
import logotext from '../../public/dct-text.png';
import gridtile from '../../public/hextile.png';
import dragonmask from '../../public/dragon-mask-alpha.png';
import maincave from '../../public/main_cave.png';
import tenacious_explaining from '../../public/tenacious_explaining.gif';
import trimmed_loop from '../../public/trimmed-loop.gif';
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
              src={trimmed_loop}
              alt="A dragon in flight, looping majestically"
              fill />
          </div>

          <div
            className={styles.card}
          >
            <Image
              src={tenacious_explaining}
              alt="The mysterious human-form moth daemon Tenacious, who is happily smiling at you"
              fill />
          </div>

        </div>
      </div>
    </main>
  );
}
