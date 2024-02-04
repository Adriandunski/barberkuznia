import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import HeaderMain from "@/components/Naglowek/HeaderMain";
import Footer from "@/sections/footer/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Barbershop Kuźnia męskich fryzur",
    description: "Generated by create next app",
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
