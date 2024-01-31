import CardOpinion from "@/sections/opinions/CardOpinion";
import {motion, useAnimation} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {useInView} from "react-intersection-observer";
import {hidden} from "next/dist/lib/picocolors";
import Topic from "@/components/Topic";

export default function Opinions() {
    const opinionsCarsd = opinions.map(op => {
        return <CardOpinion key={op.id} urlImageFace={op.urlImageFace} urlImageItem={op.urlImageItem}/>
    });

    const refComp = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    const [ref, inView] = useInView();
    const controls = useAnimation();
    const variants = {visible: {opacity: 1, scale: 1, y: 0}, hidden: {opacity: 0, scale: 0, y: 20}}

    useEffect(() => {
        const withOfComp = refComp.current?.scrollWidth ?? 0
        const withOfWindows = window.innerWidth;

        const newWith = 0 - (withOfComp - withOfWindows) - 20;

        setWidth(newWith)
    }, []);

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <section  className={"pb-10 overflow-hidden"}>
            <div className={"flex"}>
                <div className={"basis-1/2"}>
                    <Topic hiddenX={-400}>Opinie</Topic>
                </div>
            </div>
            <motion.div ref={refComp} drag="x" dragConstraints={{left: width, right: 0}} className={'flex p-5 space-x-3 mt-10'}>
                {opinionsCarsd}
            </motion.div>
            <div ref={ref} className={"w-full flex justify-center items-center mt-3"}>
                <motion.button
                    variants={variants}
                    initial={"hidden"}
                    transition={{type: "spring", delay: 0.5}}
                    animate={controls}
                    className={"border-2 border-black rounded-2xl py-3 px-5"}>
                    Zobacz wszystkie
                </motion.button>
            </div>
        </section>
    );
}

const opinions = [
    {id: 0, urlImageFace:"/faces/face1.png", urlImageItem:"/items/Item1.png"},
    {id: 1, urlImageFace:"/faces/face2.png", urlImageItem:"/items/Item2.png"},
    {id: 2, urlImageFace:"/faces/face3.png", urlImageItem:"/items/Item3.png"},
    {id: 3, urlImageFace:"/faces/face4.png", urlImageItem:"/items/Item4.png"},
    {id: 4, urlImageFace:"/faces/face5.png", urlImageItem:"/items/Item5.png"},
    {id: 5, urlImageFace:"/faces/face5.png", urlImageItem:"/items/Item5.png"},
    {id: 6, urlImageFace:"/faces/face5.png", urlImageItem:"/items/Item5.png"},
    {id: 7, urlImageFace:"/faces/face5.png", urlImageItem:"/items/Item5.png"},
]