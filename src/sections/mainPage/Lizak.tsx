import {useEffect, useRef, useState} from "react";
import {motion, MotionValue, useScroll, useTransform, useViewportScroll} from "framer-motion";

export default function Lizak({side}: { side: string }) {

    const [topValue, setTopValue] = useState(100);
    const refLizak = useRef<HTMLDivElement>(document.createElement("div"));

    const updatePosition = () => {
        if (side === 'lewo') {
            refLizak.current.style.left = '5rem';
        } else {
            refLizak.current.style.right = '5rem';
        }
    }

    const variants = {left: {scale: 0, rotate: 120}, right: {scale: 0, rotate: -120}};

    useEffect(() => {
        updatePosition();
    }, []);

    return (
        <motion.div initial={side === "lewo" ? "left" : "right"} animate={{
            scale: 1, rotate: 0,
            transition: {type: "spring", delay: 1}
        }} variants={variants} ref={refLizak} className={'absolute'} style={{top: topValue}}>
            <img src={'/lizak.png'} className={'w-[50px]'}/>
        </motion.div>
    );
}