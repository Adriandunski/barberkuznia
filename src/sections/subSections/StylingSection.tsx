import Topic from "@/components/Topic";

export default function StylingSection() {
    return (
        <section className={'w-full'}>
            <div className={"pt-28 h-full"}>
                <div className={"flex relative flex-col h-full"}>
                    <div className={"absolute flex flex-col justify-end w-full mt-[28rem] h-full -z-10"}>

                        <div className={"basis-1/12"}>
                            <svg className={"-mb-1"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill="#FAEBDA" fillOpacity="1"
                                      d="M0,32L60,53.3C120,75,240,117,360,117.3C480,117,600,75,720,96C840,117,960,203,1080,224C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                            </svg>
                        </div>
                        <div className={"basis-8/12 bg-[#FAEBDA]"}>
                        </div>
                    </div>

                    <div className={"flex justify-end"}>
                        <div className={"lg:basis-1/2 md:basis-3/4 basis-full"}>
                            <Topic hiddenX={400}>Stylizowanie Włosów</Topic>
                        </div>
                    </div>
                    <div
                        className={"flex lg:flex-row flex-col h-full pb-5 justify-center items-center gap-x-5 px-7 gap-y-5"}>
                        <div className={"basis-1/2 flex lg:h-auto h-[18rem] justify-center items-center"}>
                            <div
                                className={"w-[80%] aspect-square rounded-full border-2 border-[#7E7263] overflow-hidden"}>
                                <img className={"h-full w-full object-cover"}
                                     src={"./stylizacja.jpg"}/>
                            </div>

                        </div>
                        <div className={"basis-1/2"}>
                            <div className={"border-2 border-[#7E7263] p-4 rounded-2xl"}>
                                <p className={"text-center leading-6 font-bold lg:text-lg md:text-base"}>
                                    Nasza usługa stylizacji włosów to idealne rozwiązanie dla osób poszukujących
                                    profesjonalnego podejścia do swojego wyglądu. Nasz doświadczony zespół stylistów
                                    doskonale rozumie różnorodne potrzeby i preferencje naszych klientów, dlatego
                                    oferujemy szeroki zakres technik i stylów, aby dopasować się do każdej osobowości i
                                    okazji.
                                </p>
                                <p className={"text-center leading-6 font-bold lg:text-lg mt-10 md:text-base"}>
                                    Niezależnie od tego, czy marzysz o eleganckich lokach na specjalną okazję, czy też
                                    pragniesz codziennej stylizacji pasującej do Twojego aktywnego trybu życia, jesteśmy
                                    tutaj, aby Ci pomóc. Nasze usługi obejmują cięcie, koloryzację, upięcia, falowanie,
                                    prostowanie oraz wiele innych technik, które pomogą Ci osiągnąć pożądany efekt.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"lg:h-[10rem] h-[3rem]"}>

            </div>
        </section>
    );
}