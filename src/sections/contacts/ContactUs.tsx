import Topic from "@/components/Topic";
import RowHour from "@/sections/contacts/RowHour";
import KafelekKontakt from "@/sections/contacts/KafelekKontakt";
import {useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import MoveFromSide from "@/components/Animacje/MoveFromSide";
import {useMediaQuery} from "react-responsive";
import useWindowWith from "@/components/useWindowWith";

export default function ContactUs() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const isBigScreen = useWindowWith(768);


    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);


    return (
        <section id={'contact_us'}
                 className={"relative flex flex-col gap-7 md:flex-row mt-28 md:mt-32 bg-[url('/mainPage1.jpg')] bg-fixed bg-cover bg-right bg-no-repeat pt-5 md:pt-48 pb-20"}>


            {isBigScreen ? "" : <div className={"absolute -top-32 flex w-full"}>
                <div className={"md:basis-1/2 basis-3/4"}>
                    <Topic hiddenX={-400}>Oferta</Topic>
                </div>
            </div>}

            <div ref={ref}
                 className={"space-y-5 flex-col md:flex-row static md:absolute px-5 flex w-full -top-0 md:-top-36 justify-center md:space-y-0 md:space-x-16 text-[#362C1F]"}>
                <KafelekKontakt>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-14 h-14 fill-[#FAEBDA]">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                    </svg>
                    <p className={"text-3xl font-bold"}>Zadzwoń</p>
                    <a className={"text-lg"}> 723 435 267</a>
                </KafelekKontakt>

                <KafelekKontakt>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-14 h-14 fill-[#FAEBDA]">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                    </svg>

                    <p className={"text-3xl font-bold"}>Napisz</p>
                    <a className={"text-lg"}> adriandunski27@gmail.com</a>
                </KafelekKontakt>

                <KafelekKontakt>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-14 h-14 fill-[#FAEBDA]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                    </svg>

                    <div className={"font-bold flex flex-col items-center justify-center text-center"}>
                        <p className={"text-3xl"}>Odzwiedź</p>
                        <p className={"text-md"}> Barber Shop Kuźnia Męskich Fryzur Częstochowa</p>
                    </div>

                    <div className={"flex flex-col items-center text-lg"}>
                        <p>Jana Kilińskiego 56</p>
                        <p>Częstochowa 42-218</p>
                    </div>
                </KafelekKontakt>
            </div>


            <div
                className={"md:basis-1/2 flex justify-center items-center h-[500px] md:h-auto overflow-hidden"}>
                <MoveFromSide hiddenX={-400}>
                    <div
                        className={"border-2 border-[#FAEBDA] rounded-3xl overflow-hidden w-[85%] h-[85%]"}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.7190200488494!2d19.114398099999995!3d50.8178444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710b5a79736496d%3A0xad1eb95ef192696c!2sBarber%20Shop%20Ku%C5%BAnia%20M%C4%99skich%20Fryzur%20Cz%C4%99stochowa!5e0!3m2!1spl!2spl!4v1706725560515!5m2!1spl!2spl"
                            className={"w-full h-full"} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </MoveFromSide>

            </div>

            <div className={"md:basis-1/2 flex justify-center text-[#362C1F]"}>
                <div
                    className={"bg-white/30 backdrop-blur-lg backdrop-brightness-[0.80] px-5 pb-5 rounded-2xl border-2 border-[#FAEBDA]"}>

                    {isBigScreen ? <div className={"text-[#FAEBDA]"}>
                        <Topic hiddenX={400}>Kontakt</Topic>
                    </div> : ""}

                    <div className={"flex flex-col items-center gap-y-5"}>
                        <h3 className={"mt-5 text-2xl bg-[#FAEBDA] rounded-2xl p-2 font-medium"}>Godziny otawarcia</h3>
                        <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-xl text-[#FAEBDA]">
                            <RowHour day={"Poniedzialek"} hour={"6:00 - 16:00"}/>
                            <RowHour day={"Wtorek"} hour={"6:00 - 16:00"}/>
                            <RowHour day={"Środa"} hour={"6:00 - 16:00"}/>
                            <RowHour day={"Czwartek"} hour={"6:00 - 16:00"}/>
                            <RowHour day={"Piątek"} hour={"6:00 - 16:00"}/>
                            <RowHour day={"Sobota"} hour={"6:00 - 16:00"}/>
                            <RowHour day={"Niedziela"} hour={"Zamknięte"}/>
                        </div>
                        <div
                            className={"flex space-x-5 justify-center fill-[#362C1F] text-[#362C1F] bg-[#FAEBDA] rounded-2xl p-2"}>
                            <svg className={"w-10 h-10 "} viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"/>
                            </svg>
                            <svg className={"w-10 h-10"} viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                                />
                                <path
                                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                                />
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}