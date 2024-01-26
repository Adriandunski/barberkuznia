export default function AboutUs() {
    return (
        <section className={"flex p-10"}>
            <div className={"basis-1/2 flex justify-center items-center"}>
                <div className={"w-[500px] h-[500px] bg-[url('/zdjecieSrodka.png')] bg-cover bg-left animate-blob"}>
                </div>
            </div>

            <div className={"basis-1/2 px-5"}>
                <h2 className={"text-5xl mb-4 mt-8 font-carter text-neutral-800"}>O nas</h2>
                <p className={"mb-3 leading-7 font-unbounded text-neutral-800"}>W "Kuźni Męskich Fryzur" przenosimy sztukę strzyżenia i pielęgnacji zarostu na wyższy poziom. Nasza firma to miejsce, w którym tradycja rzemieślnicza spotyka się z nowoczesnym podejściem do męskiej urody. Nasze usługi są hołdem dla męskiej elegancji i stylu. Nasze wnętrze emanuje męskim charakterem i elegancją.</p>
                <p className={"leading-7 font-unbounded text-neutral-800"}>To miejsce, gdzie każdy mężczyzna może poczuć się komfortowo i zrelaksować, delektując się chwilą spędzoną u nas. Przyjdź do nas i doświadcz wyjątkowej obsługi, profesjonalizmu oraz tradycji rzemieślniczej, która sprawi, że poczujesz się nie tylko odświeżony, ale także pełen pewności siebie i gotowy na zdobycie świata w swoim unikalnym stylu.</p>
            </div>
        </section>
    );
}