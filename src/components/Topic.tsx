import MoveFromSide from "@/components/Animacje/MoveFromSide";
import {useMediaQuery} from "react-responsive";

export default function Topic ({hiddenX, children} : {hiddenX: number, children: any}) {


    return (
        <div className={"h-[8rem] overflow-hidden"}>
            <MoveFromSide hiddenX={hiddenX}>
                <div className={"flex flex-col justify-center items-center"}>
                    <h2 className={"text-5xl font-carter"}>{children}</h2>
                    <div className={"-bottom-6 -z-10"}>
                        <img className={'w-[18rem] h-full'} src={'line.png'}/>
                    </div>
                </div>
            </MoveFromSide>
        </div>

    );
}