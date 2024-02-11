import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import HeaderMain from "@/components/Naglowek/HeaderMain";
import Footer from "@/sections/footer/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Barbershop Kuźnia męskich fryzur",
    description: "To miejsce, gdzie każdy mężczyzna może poczuć się komfortowo i zrelaksować, delektując się chwilą spędzoną u nas. Przyjdź do nas i doświadcz wyjątkowej obsługi, profesjonalizmu oraz tradycji rzemieślniczej, która sprawi, że poczujesz się nie tylko odświeżony, ale także pełen pewności siebie i gotowy na zdobycie świata w swoim unikalnym stylu.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" style={{scrollBehavior: 'smooth'}}>
        <body className={inter.className}>
        <HeaderMain></HeaderMain>
        {children}
        <Footer></Footer>
        </body>
        </html>
    );
}
