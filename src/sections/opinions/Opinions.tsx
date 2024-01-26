import CardOpinion from "@/sections/opinions/CardOpinion";

export default function Opinions() {
    return (
        <section className={"h-[35rem] border-red-400 border-2 "}>
            <div className={'flex p-5 space-x-3 mt-20'}>
                <CardOpinion></CardOpinion>
                <CardOpinion></CardOpinion>
            </div>
        </section>
    );
}