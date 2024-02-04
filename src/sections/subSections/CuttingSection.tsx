import Topic from "@/components/Topic";

export default function CuttingSection() {
    return(
        <section className={'w-screen h-screen'}>
            <div className={"flex justify-center h-full"}>
                <div className={"basis-1/2 flex"}>
                    <img src={'/strzyzenie.jpg'}/>
                </div>
                <div className={"basis-1/2 flex"}>
                    <Topic hiddenX={400}>Strzyżenie włosów</Topic>
                </div>
            </div>
        </section>
    );
}