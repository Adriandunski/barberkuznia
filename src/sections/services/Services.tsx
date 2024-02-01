import Topic from "@/components/Topic";

export default function Services() {
    return(
        <section>
            <div className={"flex"}>
                <div className={"basis-1/2"}>
                    <Topic hiddenX={-400}>Oferta</Topic>
                </div>
            </div>
            <div className={"flex flex-col"}>
                <div className={"flex"}>
                    <div className={"basis-[35rem] border border-rose-700 h-[15rem]"}>1</div>
                    <div className={"basis-[35rem] h-[15rem]"}>2</div>
                </div>
            </div>
        </section>
    );
}