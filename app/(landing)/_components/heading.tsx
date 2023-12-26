"use-client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
    return ( 
    <div className="max-w-3xl space-x-4 gap-y-3">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Seamless Documentation for Simplified Workflows – 
            Organize, Edit, and Share Your Documents Effortlessly. Welcome to <span className="underline">DocHub</span></h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">A connected workspace where <br /> better and faster work happens.</h3>
        <Button>Try now <ArrowRight className="h-4 w-a4 ml-2"/></Button>
    </div> );
}
 
export default Heading;