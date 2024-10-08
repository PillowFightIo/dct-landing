'use client'
import { useState, useEffect } from 'react';
import Card from './card'
import ReadingText from './readingtext';
import * as suits from '../lib/suits'
import styles from "./reading.module.css";

const LAST_CARD_KEY = 'dct_last_card';
const LAST_PULL_KEY = 'dct_last_pull_time';

export const getRandomInt = (max:number) => Math.floor(Math.random() * max);
export const getRandomEntry = (entries: any[]) => entries[getRandomInt(entries.length)];

const getLocalStore = (key: string) => {
    if(global?.window !== undefined) {
        return localStorage.getItem(key);
    }
    return undefined;
}

const setLocalStore = (key: string, value: string) => {
    if(global?.window !== undefined) {
        localStorage.setItem(key, value);
    }
}

const lastCard = () => {
    const result = getLocalStore(LAST_CARD_KEY);
    if(!result) {
        const newRes = getRandomEntry(suits.AllCards);
        // prime one...
        setLocalStore(LAST_CARD_KEY, newRes);
        return newRes;
    }
    return result;
}
const lastPullTime = () => {
    let val = getLocalStore(LAST_PULL_KEY);
    if(val) {
        return new Date(parseInt(val));
    }
    return null;
}
const canPull = () => {
    let lastTime = lastPullTime();
    let lCard = lastCard();
    if(!lastTime || !lCard) return true;
    const today = new Date();
    return today.getDate() != lastTime.getDate();
}

export default function Reading() {
    const [pullEligible, setPullEligible] = useState(canPull());
    const [card, setCard] = useState(lastCard);
    const [shown, setShown] = useState(false);
    
    // This is a cute little debounce to reveal the card and the reading if you've
    // already gotten one today
    useEffect(() => {
        if(!pullEligible) {
            setTimeout(() => {
                setShown(true);
            }, 500);
        }
    }, []);

    const handleCardClick = () => {
        if(!shown) {
            const newCard = getRandomEntry(suits.AllCards);
            setLocalStore(LAST_CARD_KEY, newCard);
            setLocalStore(LAST_PULL_KEY, ''+(new Date().getTime()))
            setCard(newCard);
            setShown(true);
            setPullEligible(false);
        }
    }

    return (
        <>
            <Card card={card} shown={shown} onClick={handleCardClick}/>
            {pullEligible && <div className={styles.cta}>Tap the card to reveal your fortune.</div>}
            <ReadingText shown={shown} card={card}/>
            {!pullEligible && <div className={styles.cta}>Come back tomorrow for another reading!</div>}
        </>
    )
}