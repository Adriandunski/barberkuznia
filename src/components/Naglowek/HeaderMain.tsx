'use client'

import {useCallback, useEffect, useRef} from "react";
import {useInView} from "react-intersection-observer";
import { motion } from "framer-motion";

export default function HeaderMain() {
    let heightMainView : number;
    const scrollRef = useRef(0);
    const headerRef = useRef<HTMLDivElement>();
    const {ref: inViewRef, inView} = useInView({
        threshold: 0.1
    });

    const setRefs = useCallback(
        (node: HTMLDivElement) => {
            headerRef.current = node;
            inViewRef(node);
        }, [inViewRef]
    )


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
        <>
            <header ref={setRefs} className={`z-50 p-7 fixed top-0 left-0 w-full transition duration-500`}>
                <div className={'flex justify-between items-center'}>
                    <div className={'font-black text-3xl text-white font-lemon flex'}>
                        <img src={"kowadlo.png"} className={"h-10"}/>
                    </div>
                    <div>
                        <div className={'px-3 flex justify-center space-x-10 font-bold bg-white/30 backdrop-blur-lg backdrop-brightness-[0.80] rounded-md'}>
                            <motion.div whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }} className={"py-3 px-4 rounded-lg hover:cursor-pointer"}>
                                <a className={"text-white"}>Strona głowna</a>
                            </motion.div>
                            <div className={"py-3 px-4 rounded-lg"}>
                                <a className={"text-white"}>O nas</a>
                            </div>
                            <div className={"py-3 px-4 rounded-lg"}>
                                <a className={"text-white"}>Usługi</a>
                            </div>
                            <div className={"py-3 px-4 rounded-lg"}>
                                <a className={"text-white"}>Opinie</a>
                            </div>
                        </div>
                    </div>
                    <div className={"py-3 px-4 bg-white/30 backdrop-blur-lg backdrop-brightness-[0.80] rounded-md"}>
                        <a className={"text-white"}>Kontakt</a>
                    </div>
                </div>
            </header>
        </>
    );
}