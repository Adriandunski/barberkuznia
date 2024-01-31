'use client'

import {motion} from "framer-motion";
import Lizak from "@/sections/mainPage/Lizak";
import {useEffect} from "react";
export default function MainPage() {

    return(
        <section className={"bg-[url('/mainPage1.jpg')] bg-fixed bg-cover bg-center bg-no-repeat h-screen relative"}>
            <div className={"flex justify-center items-center w-full h-full"}>
                <img src={'/białe.png'} className={'h-[75%] w-[75%] object-contain'}/>
            </div>
            <div className={"absolute bottom-0 w-full flex justify-center items-center"}>
                <motion.div initial={{y: 200, scale: 0}} animate={{y: 0, scale: 1, transition: {delay: 2, type: "spring"}}}
                            className={"absolute bottom-10"}>
                    <p className={"text-white font-black text-2xl border-2 border-white p-6 rounded-md"}>Umów się przez
                        booksy!</p>
                </motion.div>
            </div>
            <Lizak side={"lewo"}></Lizak>
        </section>
    );
}