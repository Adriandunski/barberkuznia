import MoveFromSide from "@/components/Animacje/MoveFromSide";

export default function Topic ({hiddenX, children} : {hiddenX: number, children: any}) {

    return (
        <div className={"h-[8rem] overflow-hidden flex justify-center"}>
            <MoveFromSide hiddenX={hiddenX}>
                <div className={"flex flex-col justify-center items-center"}>
                    <h2 className={"text-5xl mt-8 font-carter"}>{children}</h2>
                    <div className={"-bottom-6 -z-10"}>
                        <img className={'w-[18rem] h-full'} src={'line.png'}/>
                    </div>
                </div>
            </MoveFromSide>
        </div>

    );
}