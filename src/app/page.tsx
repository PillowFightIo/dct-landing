import Image from "next/image";
import styles from "./page.module.css";
import logotext from '../../public/dct-text.png';
import gridtile from '../../public/hextile.png';
import dragonmask from '../../public/dragon-mask-alpha.png';
import maincave from '../../public/main_cave.png';

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
      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
