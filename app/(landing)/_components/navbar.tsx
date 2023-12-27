"use client";
import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {

    const scrolled = useScrollTop();

    useEffect(() => {
        console.log(scrolled);
    }, [scrolled])
    
    return ( 
        <div className={cn("z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6", scrolled && "border-b shadow-sm")}>
            <Logo />
            <div className="md:ml-auto items-center justify-between md:justify-end font-semibold flex gap-x-2 w-full">
                Login
                <ModeToggle />
            </div>
        </div>
     );
}
 
export default Navbar;