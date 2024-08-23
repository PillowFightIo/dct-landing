import Image from "next/image";
import styles from "./page.module.css";
import logotext from '../../public/dct-text.png';
import gridtile from '../../public/hextile.png';
import dragonmask from '../../public/dragon-mask-alpha.png';
import maincave from '../../public/main_cave.png';
import tarotcards from '../../public/tarot_cards.gif';
import dragonloop from '../../public/dragon-loop-wide.gif';
import dragonsayshi from '../../public/dragon_says_hi.gif';
import vitamin from '../../public/vitamin_animated.png';
import { PT_Mono } from "next/font/google";
import { PointerEvent } from "react";

const ptmono = PT_Mono({ 
  weight: ['400'],
  subsets: ["latin"]
});

export default function Home() {
  return (
    <main className={styles.main} style={{
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
        <div className={`${styles.descrow} ${ptmono.className}`}>
          <Image
            className="hoverreplay"
            src={vitamin}
            alt="Vitamin, the human form moth simulacrum, says hello and is very happy with you"
            height={vitamin.height/2}
            width={vitamin.width/2}
            />
          <h2 className={styles.description}>
            Dragon Care Tarot is a virtual pet simulator for dragon-lovers of all ages.<br/><br/>
            Pet, feed, and polish hand-animated dragons, fly over mysterious islands, and learn your future.
          </h2>
        </div>
        <div className={styles.screens}>
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
        
        <div className={styles.credits}>
          <div className={styles.creditspack}>
            <div className={styles.creditpack}>
              <div className={styles.credittitle}>Game Design and Production</div>
              <div className={styles.credit}>Jo Kreyling</div>
            </div>

            <div className={styles.creditpack}>
              <div className={styles.credittitle}>Game Development and Coding</div>
              <div className={styles.credit}>Conrad Kreyling</div>
            </div>
            
            <div className={styles.creditpack}>
              <div className={styles.credittitle}>Character and Dragon Design</div>
              <div className={styles.credit}>Yuko Ota</div>
            </div>
            
            <div className={styles.creditpack}>
              <div className={styles.credittitle}>Character Art</div>
              <div className={styles.credit}>Patabot</div>
            </div>

            <div className={styles.creditpack}>
              <div className={styles.credittitle}>Character Animation</div>
              <div className={styles.credit}>Iasmin Omar Ata</div>
            </div>

            <div className={styles.creditpack}>
              <div className={styles.credittitle}>Dragon and Logo Animation</div>
              <div className={styles.credit}>Lindsay Small-Butera</div>
              <div className={styles.credit}>Alex Small-Butera</div>
            </div>
            <div className={styles.creditpack}>
              <div className={styles.credittitle}>UI Design</div>
              <div className={styles.credit}>Kim Nguyen</div>
            </div>
          </div>

          <div className={styles.creditspack}>
            <div className={styles.creditpack}>
              <div className={styles.credittitle}>Tarot Card Design and Art</div>
              <div className={styles.credit}>Lindsay Small-Butera</div>
              <div className={styles.credit}>Alex Small-Butera</div>
              <div className={styles.credit}>Shan Horan</div>
            </div>

            <div className={styles.creditpack}>
              <div className={styles.credittitle}>Concept Art</div>
              <div className={styles.credit}>Yudi Chen</div>
              <div className={styles.credit}>Shel Kahn</div>
            </div>

            <div className={styles.creditpack}>
              <div className={styles.credittitle}>Background Art</div>
              <div className={styles.credit}>Gillian Galang</div>
            </div>

            <div className={styles.creditpack}>
              <div className={styles.credittitle}>Item Art and Colors</div>
              <div className={styles.credit}>Shan Horan</div>
            </div>

            <div className={styles.creditpack}>
              <div className={styles.credittitle}>Additional Art</div>
              <div className={styles.credit}>Zoe Miller</div>
            </div>

            <div className={styles.creditpack}>
              <div className={styles.credittitle}>Original Soundtrack Composition</div>
              <div className={styles.credit}>TV-MA</div>
            </div>
          </div>
          <div className={styles.creditspack}>
            <div className={styles.creditpack}>
              <div className={styles.credittitle}>Sound Effects and Egg Lullaby</div>
              <div className={styles.credit}>2 Mello</div>
            </div>

            <div className={styles.creditpack}>
              <div className={styles.credittitle}>Writing</div>
              <div className={styles.credit}>Jo Kreyling</div>
              <div className={styles.credit}>Damon Reece</div>
            </div>

            <div className={styles.creditpack}>
              <div className={styles.credittitle}>Tarot Consultation</div>
              <div className={styles.credit}>Frater Πλάνης 1°=10□</div>
            </div>
            
            <div className={styles.creditpack}>
              <div className={styles.credittitle}>Math Consultation</div>
              <div className={styles.credit}>George Schaeffer</div>
            </div>

            <div className={styles.creditpack}>
              <div className={styles.credittitle}>Game Design Consultation</div>
              <div className={styles.credit}>Chris Russell</div>
            </div>

            <div className={styles.creditpack}>
              <div className={styles.credittitle}>Marketing Consultation</div>
              <div className={styles.credit}>Zoe Miller</div>
              <div className={styles.credit}>Leanne Bradbury</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
