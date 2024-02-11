import Topic from "@/components/Topic";
import Link from "next/link";

export default function Services() {
    return (
        <section id={'services'}>
            <div className={"flex"}>
                <div className={"md:basis-1/2 basis-full"}>
                    <Topic hiddenX={-400}>Oferta</Topic>
                </div>
            </div>
            <div className={"flex mx-2 flex-col space-y-7 lg:mx-10"}>
                <div
                    className={"flex-col flex lg:flex-row justify-center space-x-0 lg:space-x-7 space-y-7 lg:space-y-0"}>
                    <div
                        className={"relative lg:basis-[35rem] border-2 border-[#C5B7A6] min-h-[13rem] rounded-l-md rounded-tr-xl rounded-br-3xl bg-[#FAEBDA] flex"}>
                        <div className={"basis-1/3 bg-amber-300"}>
                            <img alt={'usluga Strzyzenia'} className={"w-full h-full object-cover"}
                                 src={'/strzyżenie.jpg'}/>
                        </div>
                        <div className={"basis-2/3 p-7 flex flex-col justify-center items-center"}>
                            <p className={"text-center"}>Nasz doświadczony zespół oferuje profesjonalne strzyżenie
                                włosów, dostosowane do Twojego stylu i preferencji. Zanurz się w atmosferze męskiego
                                salonu, gdzie każde strzyżenie to wyjątkowe doświadczenie.</p>

                            <Link href={"/strzyzenieWlosow"} className={"mt-5 text-center text-lg font-bold border-2 border-[#362C1F] transition rounded-2xl px-4 py-2 hover:text-[#FF8960] hover:cursor-pointer hover:border-[#FF8960]"}>Dowiedz się więcej</Link>
                        </div>
                        <p className={"lg:-rotate-6 absolute -top-5 -left-1 lg:-top-3 lg:-left-10 border-2 border-[#362C1F] py-2 px-4 rounded-md bg-[#362C1F] text-white font-bold text-xl"}>Strzyżenie
                            włosów</p>
                    </div>

                    <div
                        className={"relative lg:basis-[35rem] border-2 border-[#C5B7A6] min-h-[13rem] rounded-l-md rounded-tr-xl rounded-br-3xl bg-[#FAEBDA] flex"}>
                        <div className={"basis-1/3 bg-amber-300"}>
                            <img alt={'usluga stylizacji'} className={"w-full h-full object-cover"}
                                 src={'/stylizacja.jpg'}/>
                        </div>
                        <div className={"basis-2/3 p-7 flex flex-col justify-center items-center"}>
                            <p className={"text-center"}>Przekształć swoją fryzurę w naszym barber shopie. Oferujemy
                                różnorodne usługi stylizacji włosów, pomagając Ci osiągnąć pożądany look. Zaufaj naszym
                                specjalistom do zadbania o Twój wygląd.</p>
                            <Link href={"/stylizacjaWlosow"} className={"mt-5 text-center text-lg font-bold border-2 border-[#362C1F] transition rounded-2xl px-4 py-2 hover:text-[#FF8960] hover:cursor-pointer hover:border-[#FF8960]"}>Dowiedz się więcej</Link>
                        </div>

                        <p className={"lg:-rotate-6 absolute -top-5 -left-1 lg:-top-3 lg:-left-10 border-2 border-[#362C1F] py-2 px-4 rounded-md bg-[#362C1F] text-white font-bold text-xl"}>Stylizacja
                            włosów</p>
                    </div>
                </div>

                <div
                    className={"flex-col flex lg:flex-row justify-center space-x-0 lg:space-x-7 space-y-7 lg:space-y-0"}>
                    <div
                        className={"relative lg:basis-[35rem] border-2 border-[#C5B7A6] min-h-[13rem] rounded-l-md rounded-tr-xl rounded-br-3xl bg-[#FAEBDA] flex"}>
                        <div className={"basis-1/3 bg-amber-300"}>
                            <img alt={'usluga trymowania'} className={"w-full h-full object-cover"}
                                 src={'/trymowanie.jpg'}/>
                        </div>
                        <div className={"basis-2/3 p-7 flex flex-col justify-center items-center"}>
                            <p className={"text-center"}>Dla miłośników brody! Nasze usługi trymowania brody obejmują
                                precyzyjne cięcie, modelowanie i pielęgnację. Odkryj, jak nasz barber shop może
                                podkreślić charakter Twojej brody, sprawiając, że będziesz wyglądał zawsze zadbany.</p>
                            <Link href={"/trymowanieBrody"} className={"mt-5 text-center text-lg font-bold border-2 border-[#362C1F] transition rounded-2xl px-4 py-2 hover:text-[#FF8960] hover:cursor-pointer hover:border-[#FF8960]"}>Dowiedz się więcej</Link>

                        </div>
                        <p className={"lg:-rotate-6 absolute -top-5 -left-1 lg:-top-3 lg:-left-10 border-2 border-[#362C1F] py-2 px-4 rounded-md bg-[#362C1F] text-white font-bold text-xl"}>Trymowanie
                            brody</p>
                    </div>

                    <div
                        className={"relative lg:basis-[35rem] border-2 border-[#C5B7A6] min-h-[13rem] rounded-l-md rounded-tr-xl rounded-br-3xl bg-[#FAEBDA] flex"}>
                        <div className={"basis-1/3 bg-amber-300"}>
                            <img alt={'usluga trymowania'} className={"w-full h-full object-cover"}
                                 src={'/mainPage1.jpg'}/>
                        </div>
                        <div className={"basis-2/3 p-7 flex flex-col justify-center items-center"}>
                            <p className={"text-center"}>Usługa combo, która obejmuje strzyżenie fryzury i
                                strzyżenie brody, to kompleksowe podejście do dbania o Twój wygląd z głową i brodą. Nasz
                                doświadczony zespół stylistów i barberów doskonale rozumie różnorodne potrzeby i
                                preferencje naszych klientów.</p>
                            <Link href={"/combo"} className={"mt-5 text-center text-lg font-bold border-2 border-[#362C1F] transition rounded-2xl px-4 py-2 hover:text-[#FF8960] hover:cursor-pointer hover:border-[#FF8960]"}>Dowiedz się więcej</Link>

                        </div>
                        <p className={"lg:-rotate-6 absolute -top-5 -left-1 lg:-top-3 lg:-left-10 border-2 border-[#362C1F] py-2 px-4 rounded-md bg-[#362C1F] text-white font-bold text-xl"}>Combo</p>
                    </div>
                </div>

                <div
                    className={"flex-col flex lg:flex-row justify-center space-x-0 lg:space-x-7 space-y-7 lg:space-y-0"}>
                    <div
                        className={"relative lg:basis-[35rem] border-2 border-[#C5B7A6] min-h-[13rem] rounded-l-md rounded-tr-xl rounded-br-3xl bg-[#FAEBDA] flex"}>
                        <div className={"basis-1/3 bg-amber-300"}>
                            <img alt={'usluga Strzyzenia'} className={"w-full h-full object-cover"}
                                 src={'/mainPage2.jpg'}/>
                        </div>
                        <div className={"basis-2/3 p-7 flex flex-col justify-center items-center"}>
                            <p className={"text-center"}>Nasza usługa repigmentacji brody to doskonałe rozwiązanie dla
                                mężczyzn pragnących odzyskać intensywny kolor i jednolity wygląd swojej brody. Nasz
                                doświadczony zespół specjalistów od pielęgnacji brody doskonale rozumie potrzeby i
                                oczekiwania naszych klientów.</p>
                            <Link href={"/repigmentacjaBrody"} className={"mt-5 text-center text-lg font-bold border-2 border-[#362C1F] transition rounded-2xl px-4 py-2 hover:text-[#FF8960] hover:cursor-pointer hover:border-[#FF8960]"}>Dowiedz się więcej</Link>

                        </div>
                        <p className={"lg:-rotate-6 absolute -top-5 -left-1 lg:-top-3 lg:-left-10 border-2 border-[#362C1F] py-2 px-4 rounded-md bg-[#362C1F] text-white font-bold text-xl"}>Repigmentacja
                            brody</p>
                    </div>

                    {/*<div*/}
                    {/*    className={"relative lg:basis-[35rem] border-2 border-[#C5B7A6] min-h-[13rem] rounded-l-md rounded-tr-xl rounded-br-3xl bg-[#FAEBDA] flex"}>*/}
                    {/*    <div className={"basis-1/3 bg-amber-300"}>*/}
                    {/*        <img alt={'usluga stylizacji'} className={"w-full h-full object-cover"}*/}
                    {/*             src={'/stylizacja.jpg'}/>*/}
                    {/*    </div>*/}
                    {/*    <div className={"basis-2/3 p-7 flex justify-center items-center"}>*/}
                    {/*        <p className={"text-center"}>Przekształć swoją fryzurę w naszym barber shopie. Oferujemy*/}
                    {/*            różnorodne usługi stylizacji włosów, pomagając Ci osiągnąć pożądany look. Zaufaj naszym*/}
                    {/*            specjalistom do zadbania o Twój wygląd.</p>*/}
                    {/*    </div>*/}
                    {/*    <p className={"lg:-rotate-6 absolute -top-5 -left-1 lg:-top-3 lg:-left-10 border-2 border-[#362C1F] py-2 px-4 rounded-md bg-[#362C1F] text-white font-bold text-xl"}>Stylizacja*/}
                    {/*        włosów</p>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    );
}//#FAEBDA
// #C5B7A6