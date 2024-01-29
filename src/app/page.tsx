'use client'

import HeaderMain from "@/components/Naglowek/HeaderMain";
import MainPage from "@/sections/mainPage/MainPage";
import AboutUs from "@/sections/aboutUs/AboutUs";
import Opinions from "@/sections/opinions/Opinions";
import ContactUs from "@/sections/contacts/ContactUs";

export default function Home() {

    return (
        <>
            <HeaderMain></HeaderMain>
            <MainPage></MainPage>
            <AboutUs></AboutUs>
            <Opinions></Opinions>
            <ContactUs></ContactUs>
        </>
    );
}
