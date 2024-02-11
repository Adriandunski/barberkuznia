import Link from "next/link";

export default function Footer() {
    return (
        <footer className={"border-t-2 border-[#362C1F] text-[#362C1F]"}>
            <div className={"bg-[url(/stacked-peaks-haikei.svg)] bg-no-repeat bg-cover flex flex-row px-5 gap-y-10 py-7 justify-around flex-wrap shrink-0"}>
                <div className={"basis-[20rem] flex flex-col items-center justify-center md:border-b-0  border-b-2"}>
                    <img className={'aspect-square w-[7rem]'} src={"/czarnoZlote.png"}/>
                    <div className={"flex-col flex items-center"}>
                        <h3 className={"font-extrabold text-xl inline"}>Barbershop Kuźnia</h3>
                        <h3 className={"font-extrabold text-xl inline"}>Męskich Fryzur</h3>
                    </div>


                </div>
                <div className={"basis-[20rem]"}>
                    <h4 className={"font-extrabold text-xl underline decoration-4 underline-offset-8 decoration-[#FF8960]"}>Usługi</h4>
                    <div className={"flex flex-col gap-y-4 mt-7 font-bold"}>
                        <Link className={"text-lg hover:text-[#FF8960]"} href={'/strzyzenieWlosow'}>Strzyżenie
                            włosów</Link>
                        <Link className={"text-lg hover:text-[#FF8960]"} href={'/stylizacjaWlosow'}>Stylizacja
                            włosów</Link>
                        <Link className={"text-lg hover:text-[#FF8960]"} href={'/trymowanieBrody'}>Trymowanie
                            brody</Link>
                        <Link className={"text-lg hover:text-[#FF8960]"} href={'/combo'}>Combo</Link>
                        <Link className={"text-lg hover:text-[#FF8960]"}
                              href={'/repigmentacjaBrody'}>Repigmentacja</Link>
                    </div>
                </div>
                <div className={"basis-[20rem] font-bold"}>
                    <h4 className={"font-extrabold text-xl underline decoration-4 underline-offset-8 decoration-[#FF8960]"}>Kontakt</h4>
                    <div className={"flex flex-col gap-y-4 mt-7"}>
                        <div className={"flex gap-x-3"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-7 h-7 fill-[#FAEBDA]">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                            </svg>
                            <Link className={"text-lg font-bold hover:text-[#FF8960] hover:cursor-pointer"} href="tel:+4848726270500">726 270 500</Link>
                        </div>

                        <div className={"flex gap-x-3 "}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-7 h-7 fill-[#FAEBDA]">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                            </svg>
                            <Link href="mailto:patrycja.ceglarz@o2.pl " className={"text-lg hover:text-[#FF8960] hover:cursor-pointer"}> patrycja.ceglarz@o2.pl </Link>
                        </div>

                        <div className={"flex gap-x-3"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-7 h-7 fill-[#FAEBDA]">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                            </svg>
                            <div className={"flex flex-col text-lg hover:text-[#FF8960] hover:cursor-pointer"}>
                                <Link className={"hover:text-[#FF8960]"}
                                    href={'https://www.google.pl/maps/place/Barber+Shop+Ku%C5%BAnia+M%C4%99skich+Fryzur+Cz%C4%99stochowa/@50.8178478,19.1118232,17z/data=!3m1!4b1!4m6!3m5!1s0x4710b5a79736496d:0xad1eb95ef192696c!8m2!3d50.8178444!4d19.1143981!16s%2Fg%2F11t4_ft9vw?entry=ttu'}>
                                    <p className={"text-inherit"}>Jana Kilińskiego 56</p>
                                    <p className={"text-inherit"}>Częstochowa 42-218</p>
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={"flex justify-center items-center"}>
                Copyright © 2024 by Adrian Duński, Inc. All rights reserved.
            </div>
        </footer>
    );
}