'use client'

import {APIProvider, Map, AdvancedMarker, Pin} from "@vis.gl/react-google-maps";

export default function MapGoogle() {
    const apiKey = 'AIzaSyBKs-5b28km9XvTArmQZobY6VoVX4vjdQQ';

    return (
        <APIProvider apiKey={apiKey}>
            <Map
                zoom={15}
                center={{lat: 50.81799349510598, lng: 19.114408825877298}}
                gestureHandling={'greedy'}
                disableDefaultUI={false}
                mapId={"123"}
            >
                <AdvancedMarker position={{lat: 50.81799349510598, lng: 19.114408825877298}}>
                    <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                </AdvancedMarker>
            </Map>
        </APIProvider>
    );
}