'use client'

import {useCallback, useEffect, useRef, useState} from "react";
import {useInView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";
import "./headerMain.css"

export default function HeaderMain() {
    let heightMainView: number;
    const scrollRef = useRef(0);
    const headerRef = useRef<HTMLDivElement>();
    const {ref: inViewRef, inView} = useInView({
        threshold: 0.1
    });
    const hiddenRef = useRef<HTMLDivElement>(null);
    const isBigScreen = useMediaQuery({query: '(min-width: 768px)'})
    const [hiddenMenu, setHiddenMenu] = useState(true);

    const setRefs = useCallback(
        (node: HTMLDivElement) => {
            headerRef.current = node;
            inViewRef(node);
        }, [inViewRef]
    )

    function hideMenu() {
        if (!isBigScreen) {
            hiddenRef.current?.classList.toggle("toHide");
        }
        setHiddenMenu(!hiddenMenu);
    }


    useEffect(() => {
        heightMainView = window.innerHeight;
        const handleScroll = () => {
            if (isBigScreen) {
                const scrollValue = window.scrollY;

                if (scrollValue > heightMainView && inView && scrollValue > scrollRef.current) {
                    headerRef.current?.classList.remove('animate-headerShow');
                    headerRef.current?.classList.add('animate-headerHide');
                    headerRef.current?.classList.add('-translate-y-28');
                } else if ((scrollValue < heightMainView && !inView) || (scrollRef.current > scrollValue && !inView)) {
                    headerRef.current?.classList.remove('animate-headerHide');
                    headerRef.current?.classList.add('animate-headerShow');
                    headerRef.current?.classList.remove('-translate-y-28');
                }

                scrollRef.current = scrollValue;
            }


        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    },);

    return (

        <header ref={setRefs}
                className={`h-full z-10 fixed top-0 left-0 w-full transition duration-500 text-white font-bold md:p-7 md:h-auto`}>
            <div className={'flex h-full w-full md:justify-between md:items-stretch'}>
                <div className={'absolute z-50 top-5 left-5 md:flex md:items-center md:static'}>
                    <img src={"kowadlo.png"} className={"h-10"}/>
                </div>
                <div ref={hiddenRef}
                     className={'flex flex-col items-center py-28 justify-around w-full bg-white/30 backdrop-blur-lg backdrop-brightness-[0.80] md:flex-row md:px-8 md:py-4 md:basis-3/5 md:justify-around  md:rounded-md toHide'}>
                    <a className={""}>Strona Główna</a>
                    <a className={""}>O nas</a>
                    <a className={""}>Usługi</a>
                    <a className={""}>Opinie</a>

                    {!isBigScreen ? <a className={""}>Kontakt</a> : ""}

                </div>
                <button
                    className={"py-3 px-4 bg-white/30 backdrop-blur-lg backdrop-brightness-[0.80] rounded-md flex justify-center items-center toHide"}>
                    <a className={"text-white"}>Kontakt</a>
                </button>
            </div>

            {isBigScreen ? "" : <button onClick={hideMenu}
                                        className={"absolute top-5 right-5 py-3 px-3 bg-white/30 backdrop-blur-lg backdrop-brightness-[0.80] rounded-full flex justify-center items-center"}>
                {hiddenMenu ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg> :

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                    </svg>
                }


            </button>
            }
        </header>

    )
        ;
}