import Star from "@/sections/opinions/Star";


export default function CardOpinion({urlImageFace, urlImageItem, name, opinion } :
                                    {urlImageFace: string, urlImageItem: string, name: string, opinion: string}) {

    return (
        <div id={'card_opinions'} className={"relative shrink-0 basis-[24rem] md:basis-[30rem] flex flex-col items-center p-7 rounded-2xl shadow-2xl hover:cursor-grab"}>
            <div className={"flex flex-col justify-center items-center space-y-5"}>
                <div>{name}</div>
                <div className={"flex"}>
                    <Star czyZolta={true}></Star>
                    <Star czyZolta={true}></Star>
                    <Star czyZolta={true}></Star>
                    <Star czyZolta={true}></Star>
                    <Star czyZolta={true}></Star>
                </div>
                <div className={"text-center"}><p>{opinion}</p></div>
            </div>


            <div className={"px-16 w-full -top-10 left-0 absolute flex justify-between"}>
                <div className={"w-20 h-20 bg-[#faebda] rounded-full flex justify-center items-center"}>
                    <img src={urlImageItem} className={"w-[70%] h-[70%] object-center object-contain"}/>
                </div>
                <div className={"w-20 h-20 rounded-full"}>
                    <img src={urlImageFace} className={"w-full h-full"}/>
                </div>
            </div>
        </div>
    );
}