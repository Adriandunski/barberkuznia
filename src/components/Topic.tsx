import {motion, useAnimation} from "framer-motion";
import {useEffect, useRef} from "react";
import {useInView} from "react-intersection-observer";

export default function Topic ({hiddenX, children } : {hiddenX: number, children: any}) {

    const [ref, inView] = useInView();
    const controls = useAnimation();
    const variants = {visible: {x: 0, opacity: 1}, hidden: {x: hiddenX, opacity: 0}}

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);


    return (
        <div ref={ref} className={"h-[8rem] overflow-hidden flex justify-center"}>
            <motion.div
                //@ts-ignore
                variants={variants}
                initial={"hidden"}
                transition={{type: "spring", delay: 0.5, duration: 2}}
                animate={controls}
                className={"inline-block text-center"}
            >
                <h2 className={"text-5xl mt-8 font-carter text-neutral-800"}>{children}</h2>
                <div className={"-bottom-6 -z-10"}>
                    <img className={'w-[18rem] h-full'} src={'line.png'}/>
                </div>
            </motion.div>
        </div>

    );
}