'use client'

import {useCallback, useEffect, useRef, useState} from "react";
import {useInView} from "react-intersection-observer";
import {AnimatePresence, motion, useAnimation} from "framer-motion";
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
    const uslugiRef = useRef<HTMLDivElement>(null);
    const isBigScreen = useWindowWith(768);
    const [hiddenMenu, setHiddenMenu] = useState(true);
    const [testHide, setTestHide] = useState(false);
    // const variants = {hidden: {scale: 0, y: -50, x: -25}, visible: {scale: 1, y: 0, x: 0}}
    // const control = useAnimation();

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

    function handleClikHideUslugi() {
        uslugiRef.current?.classList.toggle("subMenuHidden");
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

    const controls = useAnimation();
    const container = {
        hidden: {opacity: 1, height: 0, transition: {when: "afterChildren", staggerChildren: 0.02, staggerDirection: -1}},
        visible: {
            y: 0,
            height: "auto",
            opacity: 1,
            transition: {
                type: "spring",
                delayChildren: 0.2,
                staggerChildren: 0.2,
            }
        }
    };
    const itemVariant = {hidden: {x: 20, opacity: 0, transition: {duration: 0.05}}, visible: {x: 0, opacity: 1}};

    function handleSubMenu() {
        if (testHide) {
            controls.start("hidden");
            setTestHide(false);
        } else {
            controls.start("visible");
            setTestHide(true);
        }
    }

    function bigScreenSubEnter() {
        if (isBigScreen) {
            controls.start("visible");
            setTestHide(true);
        }
    }

    function bigScreenSubLeave() {
        if (isBigScreen) {
            controls.start("hidden");
            setTestHide(false);
        }
    }




    return (

        <header ref={setRefs}
                className={`z-10 fixed top-0 left-0 w-full transition duration-500 text-[#362C1F] font-bold md:p-7 md:h-auto`}>
            <nav className={'flex w-full md:justify-between md:items-stretch'}>
                <div ref={logoKowadlo}
                     className={'toHide transition duration-500 absolute z-50 top-5 left-5 md:flex md:items-center md:static bg-[#362C1F] border-2 border-[#FAEBDA] p-2 rounded-2xl'}>
                    <img alt={'zdjecie kowadla'} src={"kowadlo.png"} className={"h-10"}/>
                </div>
                <div ref={hiddenRef}
                     className={'absolute text-xl md:text-lg border-2 border-[#362C1F] top-0 h-screen transition duration-500 flex flex-col items-center py-28 justify-around w-full bg-[#FAEBDA] md:flex-row md:px-8 md:py-0 md:basis-3/5 md:justify-around md:static md:h-auto  md:rounded-md toHide'}>


                    <motion.div  layout whileHover={{scale: 1.05}} className={"hover:text-[#FF8960] transition"}>
                        <Link onClick={hideMenu} href={"/#main_page"}>Strona Główna</Link>
                    </motion.div>

                    <motion.div layout whileHover={{scale: 1.05}} className={"hover:text-[#FF8960] transition"}>
                        <Link onClick={hideMenu} href={"/#about_us"}>O nas</Link>
                    </motion.div>

                    <div  className={"flex flex-col relative w-full md:w-auto"} onClick={handleSubMenu} onMouseEnter={bigScreenSubEnter} onMouseLeave={bigScreenSubLeave}>
                        <motion.div layout className={"flex flex-row gap-x-1 cursor-pointer justify-center hover:text-[#FF8960] transition"} whileHover={{scale: 1.05}} >
                            <Link href={""}>Oferta</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="2.5"
                                 stroke="currentColor" className="h-5 w-5 self-center">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                            </svg>
                        </motion.div>
                        <AnimatePresence >
                            {testHide && <motion.div className={"left-0 top-0 mt-7 px-5 gap-y-3 md:bg-[#FAEBDA] w-full md:w-[15rem] rounded-2xl flex flex-col md:absolute self-center text-center"}
                                                     initial={"hidden"}
                                        variants={container}
                                                     whileInView={"visible"}
                                                     exit={"hidden"}>

                                <motion.div className={"text-base hover:bg-[#FF8960] bg-[#362C1F] text-[#FAEBDA] px-4 py-2 rounded-lg md:px-2 md:py-1 mt-4"} variants={itemVariant}><Link onClick={hideMenu} className={"w-full h-full block"} href={"/strzyzenieWlosow"}>Strzyżenie włosów</Link></motion.div>
                                <motion.div className={"text-base hover:bg-[#FF8960] bg-[#362C1F] text-[#FAEBDA] px-4 py-2 rounded-lg md:px-2 md:py-1"} variants={itemVariant}><Link onClick={hideMenu} className={"w-full h-full block"} href={"/stylizacjaWlosow"}>Stylizacja włosów</Link></motion.div>
                                <motion.div className={"text-base hover:bg-[#FF8960] bg-[#362C1F] text-[#FAEBDA] px-4 py-2 rounded-lg md:px-2 md:py-1"} variants={itemVariant}><Link onClick={hideMenu} className={"w-full h-full block"} href={"/trymowanieBrody"}>Trymowanie brody</Link></motion.div>
                                <motion.div className={"text-base hover:bg-[#FF8960] bg-[#362C1F] text-[#FAEBDA] px-4 py-2 rounded-lg md:px-2 md:py-1"} variants={itemVariant}><Link onClick={hideMenu} className={"w-full h-full block"} href={"/combo"}>Combo</Link></motion.div>
                                <motion.div className={"text-base hover:bg-[#FF8960] bg-[#362C1F] text-[#FAEBDA] px-4 py-2 rounded-lg md:px-2 md:py-1 mb-4"} variants={itemVariant}><Link onClick={hideMenu} className={"w-full h-full block"} href={"/repigmentacjaBrody"}>Repigmentacja</Link></motion.div>

                            </motion.div>}
                        </AnimatePresence>

                    </div>



                    <motion.div layout whileHover={{scale: 1.05}} className={"hover:text-[#FF8960] transition"}>
                        <Link onClick={hideMenu} href={"/#opinions"}>Opinie</Link>
                    </motion.div>


                    {!isBigScreen && <motion.div layout onClick={handleClikHideMenu} className={"hover:text-[#FF8960] transition"}>
                        <Link onClick={hideMenu} href={"#kafelek_kontakt"}>Kontakt</Link>
                    </motion.div>}


                </div>

                {isBigScreen ? <motion.button whileHover={{scale: 1.2, transition: {type: "spring", bounce:0.5, duration: 0.6}}}
                    className={"hover:text-[#FF8960] py-3 px-4 bg-[#FAEBDA] border-2 border-[#362C1F] rounded-md flex justify-center items-center toHide"}>
                    <Link href={'#kafelek_kontakt'} className={""}>Kontakt</Link>
                </motion.button> : ""}
            </nav>

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
    // <Link className={"bg-[#362C1F] text-[#FAEBDA] p-3 rounded-lg"} href={""}>Trymowanie Brody</Link>
    // <Link className={"bg-[#362C1F] text-[#FAEBDA] p-3 rounded-lg"} href={""}>Combo</Link>
    // <Link className={"bg-[#362C1F] text-[#FAEBDA] p-3 rounded-lg"} href={""}>Repigmentacja Włosów / Brody</Link>
    )
        ;
}

// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//      strokeWidth="2.5"
//      stroke="currentColor" className="h-5 w-5 self-center">
//     <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
// </svg>