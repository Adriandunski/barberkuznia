import Topic from "@/components/Topic";

export default function CuttingSection() {
    return (
        <section className={'h-screen'}>
            <div className={"flex relative h-screen"}>
                <div className={"absolute w-full h-full top-[30rem] -z-10"}>
                    <div className={"basis-1/2"}></div>
                    <div>
                        <svg className={"-mb-1"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#FAEBDA" fillOpacity="1"
                                  d="M0,32L60,53.3C120,75,240,117,360,117.3C480,117,600,75,720,96C840,117,960,203,1080,224C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                        </svg>
                    </div>
                    <div className={"basis-1/2 bg-[#FAEBDA] h-full"}>
                    </div>
                </div>

                <div className={"flex flex-col pt-36 w-full"}>
                    <div className={"flex h-full w-full flex-row px-7"}>
                        <div className={"basis-1/2 flex justify-center items-center"}>
                            <div className={"flex h-full justify-center items-center w-[80%]"}>
                                <img className={"rounded-lg border-4 border-[#362C1F]"} src={"./strzyżenie.jpg"}/>
                            </div>
                        </div>
                        <div className={"basis-1/2 pt-20"}>
                            <Topic hiddenX={400}>Strzyżenie Włosów</Topic>
                            <div className={"border-2 border-[#362C1F] p-4 rounded-2xl"}>
                                <p className={"text-center leading-6 font-bold text-lg"}>
                                    "Nasze strzyżenie to więcej niż tylko przycięcie końcówek - to prawdziwe sztuki
                                    kreatywne, które podkreślają Twoją osobowość i styl. Nasz doświadczony barber
                                    konsultuje się z każdym klientem, aby dokładnie zrozumieć ich preferencje i
                                    oczekiwania.
                                </p>
                                <p className={"text-center leading-6 font-bold text-lg mt-10"}>
                                    Nasza usługa strzyżenia to nie tylko technika, to również wyjątkowa
                                    atmosfera i relacja, która sprawia, że każda wizyta jest niezapomnianym
                                    doświadczeniem. Bez względu na to, czy preferujesz klasyczne strzyżenie, nowoczesne
                                    trendy czy unikatowe style, nasi barberzy mają umiejętności i pasję, aby stworzyć
                                    dla Ciebie perfekcyjną fryzurę. Dołącz do nas i odkryj, jak strzyżenie włosów może
                                    być prawdziwą formą sztuki.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>


            </div>
        </section>
    );
}

// <div className={"basis-1/2 flex justify-center items-center border-red-400"}>
//     <div className={"flex h-full justify-center items-center w-[80%]"}>
//         <img className={"rounded-lg"} src={"./strzyżenie.jpg"}/>
//     </div>
// </div>
// <div className={"basis-1/2 border-2 border-red-400 pt-36"}>
//     <Topic hiddenX={400}>Strzyżenie Włosów</Topic>
// </div>