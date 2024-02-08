import Topic from "@/components/Topic";

export default function ComboSection() {
    return (<section className={'w-full'}>
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
                        <Topic hiddenX={400}>Combo</Topic>
                    </div>
                </div>
                <div
                    className={"flex lg:flex-row flex-col h-full pb-5 justify-center items-center gap-x-5 px-7 gap-y-5"}>
                    <div className={"basis-1/2 flex lg:h-auto h-[18rem] justify-center items-center"}>
                        <div className={"w-[80%] aspect-square rounded-full border-2 border-[#7E7263] overflow-hidden"}>
                            <img className={"h-full w-full object-cover"}
                                 src={"./mainPage1.jpg"}/>
                        </div>

                    </div>
                    <div className={"basis-1/2"}>
                        <div className={"border-2 border-[#7E7263] p-4 rounded-2xl"}>
                            <p className={"text-center leading-6 font-bold lg:text-lg md:text-base"}>
                                Niezależnie od tego, czy potrzebujesz świeżego cięcia fryzury, czy też precyzyjnego
                                przycięcia i stylizacji brody - jesteśmy tutaj, aby Ci pomóc osiągnąć pożądany efekt.
                                Nasze usługi obejmują konsultację dotyczącą stylu, strzyżenie i kształtowanie zarówno
                                fryzury, jak i brody, a także wykończenie konturów, aby uzyskać schludny i
                                zharmonizowany wygląd.
                            </p>
                            <p className={"text-center leading-6 font-bold lg:text-lg mt-10 md:text-base"}>
                                Dzięki naszemu profesjonalnemu podejściu oraz wykorzystaniu najnowszych technik i
                                wysokiej jakości narzędzi i produktów, możesz mieć pewność, że Twój wygląd będzie
                                nienaganny i zgodny z Twoimi oczekiwaniami. Nasz zespół nie tylko dba o estetykę, ale
                                również o zdrowie skóry i włosów, stosując odpowiednie produkty pielęgnacyjne i techniki
                                strzyżenia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"lg:h-[10rem] h-[3rem]"}>

        </div>
    </section>);
}