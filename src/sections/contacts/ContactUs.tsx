import Topic from "@/components/Topic";
import MapGoogle from "@/components/MapGoogle";
import {GoogleMap} from "@react-google-maps/api";
import {APIProvider, Map} from "@vis.gl/react-google-maps";

export default function ContactUs() {
    const apiKey = 'AIzaSyBKs-5b28km9XvTArmQZobY6VoVX4vjdQQ';

    return (
        <section>
            <div className={"flex justify-end mr-32"}>
                <Topic hiddenX={250}>Kontakt</Topic>
            </div>
            <div className={"relative border-2 border-amber-600 h-[40rem]"}>
                <div className={"flex w-full h-full"}>
                    <div className={"basis-1/2 border-2 border-rose-700 h-full flex flex-col items-center"}>
                        <div className={""}>

                        </div>
                        <div className={"grid grid-rows-4 grid-cols-2 gap-x-4 items-stretch"}>
                            <div className={"col-start-1 border-2 border-rose-700 flex items-center"}>
                                <div className={"flex"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                                    </svg>
                                    Nr. Telefonu
                                </div>
                            </div>
                            <div className={"col-start-2 border-2 border-rose-700 flex items-center"}>
                                723435267
                            </div>

                            <div className={"col-start-1 border-2 border-rose-700 flex items-center"}>
                                <div className={"flex"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                    Email
                                </div>
                            </div>
                            <div className={"col-start-2 border-2 border-rose-700 flex items-center"}>
                                adriandunski27@gmail.com
                            </div>

                            <div className={"col-start-1 border-2 border-rose-700 flex items-center"}>
                                <div className={"flex"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    Adres
                                </div>
                            </div>
                            <div className={"col-start-2 border-2 border-rose-700 flex items-center"}>
                                <div className={"flex flex-col justify-center"}>
                                    <div>Jana Kilińskiego 56</div>
                                    <div>Częstochowa 42-218 </div>
                                </div>
                            </div>

                        </div>


                        {/*<div className={"flex h-[3rem] items-center space-x-7"}>*/}
                        {/*    <div className={"flex"}>*/}
                        {/*        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">*/}
                        {/*            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />*/}
                        {/*        </svg>*/}
                        {/*        Nr. telefonu*/}
                        {/*    </div>*/}
                        {/*    <div>723-435-267</div>*/}
                        {/*</div>*/}

                        {/*<div className={"flex h-[5rem] items-center space-x-7"}>*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">*/}
                        {/*        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />*/}
                        {/*    </svg>*/}
                        {/*    Email*/}
                        {/*    <div>adriandunski27@gmail.com</div>*/}
                        {/*</div>*/}

                        {/*<div className={"flex h-[5rem] items-center space-x-7"}>*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">*/}
                        {/*        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />*/}
                        {/*        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />*/}
                        {/*    </svg>*/}
                        {/*    Adres*/}
                        {/*    <div className={"flex flex-col h-[5rem] justify-center"}>*/}
                        {/*        <div>Jana Kilińskiego 56</div>*/}
                        {/*        <div>Częstochowa 42-218 </div>*/}
                        {/*    </div>*/}

                        {/*</div>*/}
                        {/*<div className={"flex"}>*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">*/}
                        {/*        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />*/}
                        {/*    </svg>*/}

                        {/*    Godziny otwarcia*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div
                    className={"absolute top-0 right-0 h-full w-[50%] border-rose-700 border-2 flex justify-center items-center rounded-l-[10rem] overflow-hidden"}>
                    <div
                        className={"w-[85%] h-[85%] items-center aspect-square rounded-2xl overflow-hidden border-rose-700 border-2"}>
                        <MapGoogle></MapGoogle>
                    </div>
                </div>
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