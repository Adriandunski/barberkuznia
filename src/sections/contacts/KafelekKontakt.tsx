'use client'

import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {useAnimation} from "framer-motion";
import {motion} from "framer-motion";

export default function KafelekKontakt({children}: { children: any[]}) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);


    const container = {
        hidden: {opacity: 1, scale: 0},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                delayChildren: 0.3,
                staggerChildren: 0.5
            }
        }
    };
    const itemVariant = {hidden: {y: 20, opacity: 0}, visible: {y: 0, opacity: 1}};

    return (
        <div ref={ref} className={"basis-[12rem] md:basis-[18rem] flex flex-col items-center bg-[#C5B7A6]  p-5 rounded-2xl shadow-2xl border-2 border-[#FAEBDA] text-[#362C1F]"}>
            <motion.div id={'kafelek_kontakt'} variants={container} initial={"hidden"} animate={controls}
                        className={"flex flex-col justify-center items-center space-y-5"}>
                <motion.div variants={itemVariant} className={"animate-bounce"}>
                    {children[0]}
                </motion.div>
                <motion.div variants={itemVariant}>
                    {children[1]}
                </motion.div>
                <motion.div variants={itemVariant}>
                    {children[2]}
                </motion.div>

            </motion.div>
        </div>
    );
}