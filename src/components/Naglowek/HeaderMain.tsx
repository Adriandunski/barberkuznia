'use client'

import {useCallback, useEffect, useRef} from "react";
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
    }


    useEffect(() => {
        heightMainView = window.innerHeight;
        const handleScroll = () => {
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

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    },);

    return (

        <header ref={setRefs}
                className={`z-50 p-7 fixed top-0 left-0 w-full transition duration-500 text-white font-bold`}>
            <div className={'flex justify-between items-stretch'}>
                <div className={'flex items-center'}>
                    <img src={"kowadlo.png"} className={"h-10"}/>
                </div>
                <div ref={hiddenRef}
                     className={'px-8 py-4 flex basis-3/5 justify-around bg-white/30 backdrop-blur-lg backdrop-brightness-[0.80] rounded-md toHide'}>
                    <div className={""}>
                        <a className={""}>Strona Główna</a>
                    </div>
                    <div className={""}>
                        <a className={""}>O nas</a>
                    </div>
                    <div className={""}>
                        <a className={""}>Usługi</a>
                    </div>
                    <div className={""}>
                        <a className={""}>Opinie</a>
                    </div>

                </div>
                <button
                    className={"py-3 px-4 bg-white/30 backdrop-blur-lg backdrop-brightness-[0.80] rounded-md flex justify-center items-center toHide"}>
                    <a className={"text-white"}>Kontakt</a>
                </button>

                {isBigScreen ? "" : <button onClick={hideMenu}
                                            className={"py-3 px-4 bg-white/30 backdrop-blur-lg backdrop-brightness-[0.80] rounded-full flex justify-center items-center"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </button>
                }


            </div>
        </header>

    )
        ;
}