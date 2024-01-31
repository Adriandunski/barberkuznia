import Topic from "@/components/Topic";
import MapGoogle from "@/components/MapGoogle";
import {GoogleMap} from "@react-google-maps/api";
import {APIProvider, Map} from "@vis.gl/react-google-maps";

export default function ContactUs() {
    const apiKey = 'AIzaSyBKs-5b28km9XvTArmQZobY6VoVX4vjdQQ';

    return (
        <section>
            {/*<div className={"relative h-[40rem] bg-stone-700"}>*/}
            {/*    <div className={"absolute flex justify-between mx-5 -top-10 left-0 w-full"}>*/}
            {/*        <div className={"bg-white basis-[15rem] flex flex-col items-center p-4 space-y-4 shadow-2xl"}>*/}
            {/*            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-[#FF8961]">*/}
            {/*                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />*/}
            {/*                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />*/}
            {/*            </svg>*/}
            {/*            <p className={"font-bold text-xl"}>Numer Telefonu</p>*/}
            {/*            <a className={"font-medium"} href="tel:+48723435267">723 435 267</a>*/}
            {/*        </div>*/}
            {/*        <div >*/}
            {/*            Email*/}
            {/*        </div>*/}
            {/*        <div >*/}
            {/*            Adres*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    );
}

// <APIProvider apiKey={apiKey}>
//     <div className={"h-full w-full"}>
//         <Map
//             zoom={3}
//             center={{lat: 22.54992, lng: 0}}
//             gestureHandling={'greedy'}
//             disableDefaultUI={true}
//
//         />
//     </div>
// </APIProvider>