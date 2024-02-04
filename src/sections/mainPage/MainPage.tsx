'use client'

import {motion} from "framer-motion";
export default function MainPage() {

    return(
        <section id={"main_page"} className={"bg-fixed bg-cover bg-right bg-no-repeat h-screen relative"}>
            <img src={'/mainPage1.jpg'} className={"w-full h-full -z-10 absolute object-right object-cover"}/>
            <div className={"flex justify-center items-center w-full h-full"}>
                <img alt={'logo'} src={'/białe.png'} className={'h-[95%] w-[95%] md:h-[75%] md:w-[75%] object-contain'}/>
            </div>
            <div className={"absolute bottom-0 w-full flex justify-center items-center"}>
                <motion.div initial={{y: 200, scale: 0}} animate={{y: 0, scale: 1, transition: {delay: 2, type: "spring"}}}
                            className={"absolute bottom-10"}>
                    <p className={"text-white font-black text-2xl border-2 border-white p-6 rounded-md"}>Umów się przez
                        booksy!</p>
                </motion.div>
            </div>
        </section>
    );
}