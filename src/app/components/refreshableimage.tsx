'use client'
import { useRef, PointerEvent } from 'react'
import Image, { ImageProps } from 'next/image'

type ImageWithStateProps = ImageProps

export default function RefreshableImage(props:ImageWithStateProps) {
    function redo(e: PointerEvent<HTMLSpanElement>) {
        let el = e.target as HTMLImageElement;
        let src = el.getAttribute('src');
        if(src) el.src = src;
    }

    return (
        <span 
            onPointerEnter={redo}
            onPointerDown={redo}
            className={props.className}
        >
            <Image {...props} className=''/>
        </span>
    )
}
