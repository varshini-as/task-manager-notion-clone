import { useEffect, useState } from "react";

const useScrollTop = (threshold = 10) => {
    
    const [scrolled, setScrolled]  = useState<boolean>(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > threshold? true: false)
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [threshold])

    return scrolled
}
 
export default useScrollTop;