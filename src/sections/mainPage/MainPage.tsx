'use client'

import {motion} from "framer-motion";
import Lizak from "@/sections/mainPage/Lizak";
import {useEffect} from "react";
export default function MainPage() {

    let mid : number;

    useEffect(() => {
        mid = window.innerHeight;
    }, []);

    return(
        <section className={"bg-[url('/mainPage1.jpg')] bg-fixed bg-cover bg-center bg-no-repeat h-screen relative"}>
            <div className={"flex justify-center items-center w-full h-full"}>
                <img src={'/białe.png'} className={'h-[80%] w-[80%] object-contain'}/>
            </div>
            <div className={"absolute bottom-0 w-full flex justify-center items-center"}>
                <motion.div initial={{y: 200}} animate={{y: 0, transition: {delay: 2, type: "spring"}}}
                            className={"absolute bottom-14"}>
                    <p className={"text-white font-black text-2xl border-2 border-white p-6 rounded-md"}>Umów się przez
                        booksy!</p>
                </motion.div>
            </div>
            <Lizak side={"lewo"}></Lizak>
        </section>
    );
}