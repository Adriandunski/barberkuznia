'use client'

import {useCallback, useEffect, useRef, useState} from "react";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";
import "./headerMain.css"
import Link from "next/link";
import useWindowWith from "@/components/useWindowWith";

export default function HeaderMain() {
    let heightMainView: number;
    const scrollRef = useRef(0);
    const headerRef = useRef<HTMLDivElement>();
    const {ref: inViewRef, inView} = useInView({
        threshold: 0.1
    });
    const hiddenRef = useRef<HTMLDivElement>(null);
    const logoKowadlo = useRef<HTMLDivElement>(null);
    const isBigScreen = useWindowWith(768);
    const [hiddenMenu, setHiddenMenu] = useState(true);
    const variants = {hidden: {scale: 0, y: -50, x: -25}, visible: {scale: 1, y: 0, x: 0}}
    const control = useAnimation();

    function mouseEnter() {
        control.start("visible");
    }

    function mouseLeave() {
        control.start("hidden");
    }

    const setRefs = useCallback(
        (node: HTMLDivElement) => {
            headerRef.current = node;
            inViewRef(node);
        }, [inViewRef]
    )

    function hideMenu() {
        if (!isBigScreen) {
            hiddenRef.current?.classList.toggle("toHide");
            logoKowadlo.current?.classList.toggle("toHide");
        }
        setHiddenMenu(!hiddenMenu);
    }

    function handleClikHideMenu() {
        if (!hiddenMenu) {
            setHiddenMenu(!hiddenMenu);
            hiddenRef.current?.classList.toggle("toHide");
        }
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
            } else {
                headerRef.current?.classList.remove('-translate-y-28');
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    },);

    return (

        <header ref={setRefs}
                className={`z-10 fixed top-0 left-0 w-full transition duration-500 text-[#362C1F] font-bold md:p-7 md:h-auto`}>
            <div className={'flex w-full md:justify-between md:items-stretch'}>
                <div ref={logoKowadlo}
                     className={'toHide transition duration-500 absolute z-50 top-5 left-5 md:flex md:items-center md:static bg-[#FAEBDA] p-2 rounded-2xl'}>
                    <img alt={'zdjecie kowadla'} src={"kowadlo.png"} className={"h-10"}/>
                </div>
                <div ref={hiddenRef}
                     className={'absolute border-2 border-[#362C1F] top-0 h-screen transition duration-500 flex flex-col items-center py-28 justify-around w-full bg-[#FAEBDA] md:flex-row md:px-8 md:py-0 md:basis-3/5 md:justify-around md:static md:h-auto  md:rounded-md toHide'}>
                    <Link href={"/#main_page"} onClick={handleClikHideMenu} className={""}>Strona Główna</Link>
                    <Link href={"/#about_us"} onClick={handleClikHideMenu} className={""}>O nas</Link>
                    <div className={"relative flex items-center justify-center h-auto md:h-full"} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        <div className={"relative"}><Link href={"#services"} onClick={handleClikHideMenu}
                                                         className={""}>Usługi</Link>
                            <motion.ul variants={variants} initial={"hidden"} animate={control} className={"absolute top-7 -left-2 bg-[#FAEBDA] w-[10rem] rounded-b-md"}>
                                <li className={"p-2 cursor-pointer"}><Link href={'/Cutting'}>Strzyżenie włosów</Link></li>
                                <li className={"p-2"}>Stylizacja włosów</li>
                                <li className={"p-2"}>Trymowanie brody</li>
                            </motion.ul>

                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5"
                             stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                        </svg>
                    </div>
                    <Link href={"/#opinions"} onClick={handleClikHideMenu} className={""}>Opinie</Link>

                    {!isBigScreen ?
                        <Link href={'#kafelek_kontakt'} onClick={handleClikHideMenu} className={""}>Kontakt</Link> : ""}

                </div>

                {isBigScreen ? <button
                    className={"py-3 px-4 bg-[#FAEBDA] rounded-md flex justify-center items-center toHide"}>
                    <Link href={'#kafelek_kontakt'} className={""}>Kontakt</Link>
                </button> : ""}
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