export default function KafelekKontakt({children}: {children: any[]}) {
    return (
        <div className={"basis-[18rem] flex flex-col items-center bg-[#C5B7A6] space-y-5 p-5 rounded-2xl shadow-2xl border-2 border-[#928576] text-[#362C1F]"}>
            <div>
                {children[0]}
            </div>
            {children[1]}
            {children[2]}
        </div>);
}