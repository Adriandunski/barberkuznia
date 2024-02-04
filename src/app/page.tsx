'use client'

import HeaderMain from "@/components/Naglowek/HeaderMain";
import MainPage from "@/sections/mainPage/MainPage";
import AboutUs from "@/sections/aboutUs/AboutUs";
import Opinions from "@/sections/opinions/Opinions";
import ContactUs from "@/sections/contacts/ContactUs";
import Services from "@/sections/services/Services";

export default function Home() {

    return (
        <>
            <MainPage></MainPage>
            <AboutUs></AboutUs>
            <Services></Services>
            <Opinions></Opinions>
            <ContactUs></ContactUs>
        </>



    );
}


