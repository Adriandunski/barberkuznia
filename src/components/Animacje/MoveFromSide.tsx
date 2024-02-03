import {AnimationControls, motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

export default function MoveFromSide({hiddenX, children} : {hiddenX: number, children: any}) {
    const variants = {visible: {x: 0, opacity: 1}, hidden: {x: hiddenX, opacity: 0}};
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView]);

    return(
        <div ref={ref} className={'h-full w-full'}>
            <motion.div
                variants={variants}
                initial={"hidden"}
                transition={{type: "spring", bounce: 0.5, delay: 0.5, duration: 2}}
                animate={controls}
                className={"w-full h-full flex justify-center items-center"}
            >
                {children}
            </motion.div>
        </div>
    );
}