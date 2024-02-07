import Topic from "@/components/Topic";

export default function AboutUs() {
    return (
        <section id={"about_us"} className={"flex flex-col-reverse p-5 space-x-5 md:flex-row lg:text-xl"}>
            <div className={"basis-1/2 flex justify-center items-center"}>
                <div className={"flex justify-center items-center max-w-[500px] max-h-[500px] bg-[url('/imageBarber1.jpg')] bg-cover bg-left animate-blob overflow-hidden"}>
                    <img alt={'zdjecieSalonu'} className={"object-cover aspect-square object-right-bottom"} src={'/imageBarber1.jpg'}/>
                </div>
            </div>

            <div className={"basis-3/4 mb-5 md:basis-1/2"}>
                <Topic hiddenX={400}>O Nas</Topic>
                <p className={"mb-3 leading-7 font-nunito text-neutral-800"}>W Kuźni Męskich Fryzur przenosimy sztukę strzyżenia i pielęgnacji zarostu na wyższy poziom. Nasza firma to miejsce, w którym tradycja rzemieślnicza spotyka się z nowoczesnym podejściem do męskiej urody. Nasze usługi są hołdem dla męskiej elegancji i stylu. Nasze wnętrze emanuje męskim charakterem i elegancją.</p>
                <p className={"leading-7 font-nunito text-neutral-800"}>To miejsce, gdzie każdy mężczyzna może poczuć się komfortowo i zrelaksować, delektując się chwilą spędzoną u nas. Przyjdź do nas i doświadcz wyjątkowej obsługi, profesjonalizmu oraz tradycji rzemieślniczej, która sprawi, że poczujesz się nie tylko odświeżony, ale także pełen pewności siebie i gotowy na zdobycie świata w swoim unikalnym stylu.</p>
            </div>
        </section>
    );
}