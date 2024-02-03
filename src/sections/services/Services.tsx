import Topic from "@/components/Topic";

export default function Services() {
    return(
        <section id={'services'}>
            <div className={"flex"}>
                <div className={"md:basis-1/2 basis-3/4"}>
                    <Topic hiddenX={-400}>Oferta</Topic>
                </div>
            </div>
            <div className={"flex flex-col space-y-7 mx-10"}>
                <div
                    className={"flex-col flex lg:flex-row justify-center space-x-0 lg:space-x-7 space-y-7 lg:space-y-0"}>
                    <div
                        className={"relative lg:basis-[35rem] border-2 border-[#C5B7A6] h-[15rem] rounded-l-md rounded-tr-xl rounded-br-3xl bg-[#FAEBDA] flex"}>
                        <div className={"basis-1/3 bg-amber-300"}>

                        </div>
                        <div className={"basis-2/3 p-5"}>
                            opis
                        </div>
                        <p className={"-rotate-6 absolute -top-3 -left-10 border-2 border-[#362C1F] py-2 px-4 rounded-md bg-[#362C1F] text-white font-bold text-xl"}>Strzyżenie włosów</p>
                    </div>

                    <div
                        className={"relative lg:basis-[35rem] border-2 border-[#C5B7A6] h-[15rem] rounded-l-md rounded-tr-xl rounded-br-3xl bg-[#FAEBDA] flex"}>
                        <div className={"basis-1/3 bg-amber-300"}>

                        </div>
                        <div className={"basis-2/3 p-5"}>
                            opis
                        </div>
                        <p className={"-rotate-6 absolute -top-3 -left-10 border-2 border-[#362C1F] py-2 px-4 rounded-md bg-[#362C1F] text-white font-bold text-xl"}>Stylizacja włosów</p>
                    </div>
                </div>

                <div
                    className={"flex-col flex lg:flex-row justify-center space-x-0 lg:space-x-7 space-y-7 lg:space-y-0"}>
                    <div
                        className={"relative lg:basis-[35rem] border-2 border-[#C5B7A6] h-[15rem] rounded-l-md rounded-tr-xl rounded-br-3xl bg-[#FAEBDA] flex"}>
                        <div className={"basis-1/3 bg-amber-300"}>

                        </div>
                        <div className={"basis-2/3 p-5"}>
                            opis
                        </div>
                        <p className={"-rotate-6 absolute -top-3 -left-10 border-2 border-[#362C1F] py-2 px-4 rounded-md bg-[#362C1F] text-white font-bold text-xl"}>Trymowanie brody</p>
                    </div>

                    <div
                        className={"relative lg:basis-[35rem] border-2 border-[#C5B7A6] h-[15rem] rounded-l-md rounded-tr-xl rounded-br-3xl bg-[#FAEBDA] flex"}>
                        <div className={"basis-1/3 bg-amber-300"}>

                        </div>
                        <div className={"basis-2/3 p-5"}>
                            opis
                        </div>
                        <p className={"-rotate-6 absolute -top-3 -left-10 border-2 border-[#362C1F] py-2 px-4 rounded-md bg-[#362C1F] text-white font-bold text-xl"}>Strzyzenie</p>
                    </div>
                </div>
            </div>
        </section>
    );
}//#FAEBDA
// #C5B7A6