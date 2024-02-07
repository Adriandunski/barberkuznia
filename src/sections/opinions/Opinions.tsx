import CardOpinion from "@/sections/opinions/CardOpinion";
import {motion, useAnimation} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {useInView} from "react-intersection-observer";
import Topic from "@/components/Topic";
import Link from "next/link";

export default function Opinions() {
    const opinionsCarsd = opinions.map(op => {
        return <CardOpinion key={op.id} urlImageFace={op.urlImageFace} urlImageItem={op.urlImageItem} name={op.name} opinion={op.opinion}/>
    });

    const refComp = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    const [ref, inView] = useInView();
    const controls = useAnimation();
    const variants = {visible: {opacity: 1, scale: 1, y: 0}, hidden: {opacity: 0, scale: 0, y: 20}}

    useEffect(() => {
        const withOfComp = refComp.current?.scrollWidth ?? 0
        const withOfWindows = window.innerWidth;

        const newWith = 0 - (withOfComp - withOfWindows) - 20;

        setWidth(newWith)
    }, []);

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <section id={'opinions'}  className={"pb-10 overflow-hidden"}>
            <div className={"flex"}>
                <div className={"basis-full md:basis-1/2"}>
                    <Topic hiddenX={400}>Opinie</Topic>
                </div>
            </div>
            <motion.div ref={refComp} drag="x" dragConstraints={{left: width, right: 0}} className={'flex p-5 space-x-3 mt-10'}>
                {opinionsCarsd}
            </motion.div>
            <div ref={ref} className={"w-full flex justify-center items-center mt-3"}>
                <motion.button
                    variants={variants}
                    initial={"hidden"}
                    transition={{type: "spring", delay: 0.5}}
                    animate={controls}
                    className={"border-2 border-black rounded-2xl py-3 px-5"}>
                    <Link target="_blank" href={"https://www.google.com/search?sca_esv=e51918ddf39b0c56&sxsrf=ACQVn0_D1FnJdjKtMFrY505aQHy5SO4gfw:1707329843951&q=barbershop-kuznia+czestochowa&uds=AMwkrPtlNfmIqxlzy6LzeiHOrfP7rY6EZKxt0T9O31LAxeMJQUJ_qiP_kZpfx-N5MiB6a2egERWVcwEzEZTtEH9qcc1lkQPENp3o08EwD1Z2WY3Fhozq3ExsMs4I87Hq2wWCbgTgNsvzaPIeVIgs2GWjAiydlJHZDQ&si=AKbGX_rcuucMgom2rba1cdwsvM2SVoIkP2btyqGMV4t0GuHIs4sGV_1tpuqR0YHG4Rzd9SeGc5NQ_Pi4DJK4HXk52YlAbPFeFMgAkFJMtyXuK4o_xV7PJH8%3D&sa=X&sqi=2&ved=2ahUKEwiyqvOm65mEAxVcQvEDHQOeCj8Q3PALegQIFBAE&biw=1317&bih=945&dpr=1"}>
                        Zobacz Wszystkie
                    </Link>
                </motion.button>
            </div>
        </section>
    );
}

const opinions = [
    {id: 0, urlImageFace:"/faces/face1.png", urlImageItem:"/items/Item1.png", name: "Karol Zębik", opinion: "Bardzo serdecznie polecam wizytę u Patrycji: niezwykła profesjonalistka w swoim fachu, świetna i sprawna usługa, w dodatku miła i przyjemna atmosfera. Nic tylko i korzystać! ;)"},
    {id: 1, urlImageFace:"/faces/face2.png", urlImageItem:"/items/Item2.png", name: "Maciej Labus", opinion: "Miałem okazję już drugi raz skorzystać z usług tego salonu i muszę powiedzieć, że nigdy jeszcze nie byłem tak zadowolony ze swojej fryzury! Nie ma się totalnie do czego przyczepić, wszystko stoi na najwyższym poziomie - również umiejętności obsługi a w szczególności fryzjera Piotrka. Serdecznie polecam :)"},
    {id: 2, urlImageFace:"/faces/face3.png", urlImageItem:"/items/Item3.png", name: "Łukasz Kubacki", opinion: "Towarzyska atmosfera Patrycja bardzo często stawia na interakcję między fryzjerem a klientem. Możesz porozmawiać o swoich preferencjach, stylu, a nawet pogadać o sprawach dnia codziennego. To tworzy przyjazną atmosferę, co jest istotne dla wielu mężczyzn. Gorąco Polecam"},
    {id: 3, urlImageFace:"/faces/face4.png", urlImageItem:"/items/Item4.png", name: "Damian Waw", opinion: "Przyszedłem do Pani pierwszy raz i powiem szczerze, jestem naprawdę pozytywnie zaskoczony. Szybko, sprawnie i dokładnie a to jest najważniejsze. Bez zbędnych poprawek. Pozdrawiam i serdecznie polecam"},
    {id: 4, urlImageFace:"/faces/face5.png", urlImageItem:"/items/Item5.png", name: "Marczelo Forelli", opinion: "Pan Piotr oczywiście najlepszy barber w Częstochowie i mimo licznych skoków w bok zawsze wracam, ja naprawdę byłem obcinany przez wielu barberów ale Piotrek jest na 1 miejscu."},
    {id: 5, urlImageFace:"/faces/face6.png", urlImageItem:"/items/Item6.png", name: "Szymon Ciszewski", opinion: "Fachowa obsługa, indywidualne podejście do klienta, strzyżenie na wysokim poziomie i dbałość o każdy szczegół. Kolejna wizyta u Piotrka umówiona od razu."},
    {id: 6, urlImageFace:"/faces/face7.png", urlImageItem:"/items/Item7.png", name: "Sebastian Jawura", opinion: "Wyjątkowe miejsce, stworzone przez Profesjonalistkę. Świetny klimat, produkty , doradztwo i usługa na najwyższym poziomie, to wszytko w miłej atmosferze , zawsze pełne zadowolenie . Polecam serdecznie"},
    {id: 7, urlImageFace:"/faces/face8.png", urlImageItem:"/items/Item8.png", name: "Jakub Kowalski", opinion: "Od kilku lat chodzę tylko do Patrycji. Pełen profesjonalizm. Patrycja jest super osobą, czas spędzony u niej to sama przyjemność."},
    {id: 7, urlImageFace:"/faces/face9.png", urlImageItem:"/items/Item9.png", name: "Szymon Wilk", opinion: "Polecam! Patrycja robi świetną robotę! W salonie panuje miła atmosfera a wychodząc zawsze jestem zadowolony z fryzury!"},
    {id: 7, urlImageFace:"/faces/face10.png", urlImageItem:"/items/Item10.png", name: "Dawild Pil", opinion: "Bardzo serdecznie polecam!! Poza krzykami i biciem, to bardzo fachowa obsługa 😁😁👌💪"},
]