import Topic from "@/components/Topic";
import MapGoogle from "@/components/MapGoogle";
import {GoogleMap} from "@react-google-maps/api";
import RowHour from "@/sections/contacts/RowHour";

export default function ContactUs() {
    const apiKey = 'AIzaSyBKs-5b28km9XvTArmQZobY6VoVX4vjdQQ';

    return (
        <section className={"flex"}>
            <div className={"basis-1/2"}>
                Lewo
            </div>

            <div className={"basis-1/2"}>
                <Topic hiddenX={400}>Kontakt</Topic>
                <div className={"flex flex-col items-center"}>
                    <h3 className={"text-2xl"}>Godziny otawarcia</h3>
                    <div className={"grid grid-cols-2 grid-rows-7 space-x-5 border-2 border-rose-600 text-xl"}>
                        <RowHour day={"Poniedziałek"} hour={"6:00 - 17:00"}/>
                    </div>
                </div>
                <div>Ikonki social</div>
            </div>

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