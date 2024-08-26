import Image from "next/image";
import Link from 'next/link'
import * as suits from './lib/suits';
import styles from "./page.module.css";
import Reading from './components/reading';

export default function ReadingPage() {
    return (
        <>
            <header className={styles.head}><Link href='/'>← Back to Home</Link></header>
            <main className={styles.main}>
                <Reading/>
            </main>
        </>
    )
}

