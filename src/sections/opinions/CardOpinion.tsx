import Star from "@/sections/opinions/Star";
import {useEffect, useRef} from "react";


export default function CardOpinion({urlImageFace, urlImageItem } :
                                    {urlImageFace: string, urlImageItem: string}) {

    return (
        <div className={"relative shrink-0 basis-[30rem] flex flex-col items-center p-7 rounded-2xl shadow-2xl hover:cursor-grab"}>
            <div className={"flex flex-col justify-center items-center space-y-5"}>
                <div>Adam Jóźwiak</div>
                <div className={"flex"}>
                    <Star czyZolta={true}></Star>
                    <Star czyZolta={true}></Star>
                    <Star czyZolta={true}></Star>
                    <Star czyZolta={true}></Star>
                    <Star czyZolta={false}></Star>
                </div>
                <div className={"text-center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna lorem, interdum eget augue eleifend, pellentesque lacinia elit. Donec efficitur massa sit amet purus cursus consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
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