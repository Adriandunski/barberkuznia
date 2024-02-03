import {useEffect, useState} from "react";

export default function useWindowWith(width : number) {

    const [isMore, setIsMore] = useState(false);

    function checkWindowSize() {
        if (window.innerWidth > width) {
            setIsMore(true)
        } else {
            setIsMore(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', checkWindowSize);
        checkWindowSize();

        return () => {
            window.removeEventListener('resize', checkWindowSize);
        }
    }, []);

    return isMore;
}