import {AnimationControls, motion, useAnimation} from "framer-motion";

export default function KafelekKontakt({children, controls}: { children: any[], controls: AnimationControls }) {

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
        <motion.div id={'kafelek_kontakt'} variants={container} initial={"hidden"} animate={controls}
            className={"basis-[18rem] flex flex-col items-center bg-[#C5B7A6] space-y-5 p-5 rounded-2xl shadow-2xl border-2 border-[#FAEBDA] text-[#362C1F]"}>
            <motion.div variants={itemVariant} className={"animate-bounce"}>
                {children[0]}
            </motion.div>
            <motion.div variants={itemVariant}>
                {children[1]}
            </motion.div>
            <motion.div variants={itemVariant}>
                {children[2]}
            </motion.div>

        </motion.div>);
}