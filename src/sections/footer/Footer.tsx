import Link from "next/link";

export default function Footer() {
    return(
        <footer className={"w-screen"}>
            <div className={"bg-[#FAEBDA] flex p-5 "}>
                <div className={"basis-1/3"}>
                    <h4>Barbershop Kuźnia</h4>
                    <h5>Męskich Fryzur</h5>

                </div>
                <div className={"basis-1/3"}>
                    <h4>Usługi</h4>
                    <div className={"flex flex-col gap-y-4"}>
                        <Link href={'#'}>Strzyżenie włosów</Link>
                        <Link href={'#'}>Stylizacja włosów</Link>
                        <Link href={'#'}>Trymowanie brody</Link>
                    </div>
                </div>
                <div className={"basis-1/3 "}>
                    Kontakt
                </div>
            </div>
            <div className={"flex justify-center items-center"}>
                Coppyright
            </div>
        </footer>
    );
}