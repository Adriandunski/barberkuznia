'use client'

import {useCallback, useEffect, useRef, useState} from "react";
import {useInView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";
import "./headerMain.css"
import Link from "next/link";

export default function HeaderMain() {
    const isBigScreen = useMediaQuery({query: '(min-width: 768px)'})


    return (
        <header>
            <Link href={'#'}>Strona Główna</Link>

        </header>
    );
}

//
// {isBigScreen ? "" : <button onClick={hideMenu}
//                             className={"absolute top-5 right-5 py-3 px-3 bg-white/30 backdrop-blur-lg backdrop-brightness-[0.80] rounded-full flex justify-center items-center"}>
//     {hiddenMenu ?
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
//              stroke="currentColor" className="w-8 h-8">
//             <path strokeLinecap="round" strokeLinejoin="round"
//                   d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
//         </svg> :
//
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
//              stroke="currentColor" className="w-8 h-8">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
//         </svg>
//     }
// </button>