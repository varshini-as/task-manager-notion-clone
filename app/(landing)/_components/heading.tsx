"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {
    const {isAuthenticated, isLoading} = useConvexAuth()

    return ( 
    <div className="max-w-5xl space-x-4 gap-y-3 contents">
        <h2 className="text-7xl sm:text-5xl md:text-6xl font-bold">Seamless Documentation for Simplified Workflows. Welcome to <span className="underline">DocFlow</span></h2>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">A connected workspace where <br /> better and faster work happens.</h3>
        {
            isLoading && <Spinner size="lg"/>
        }
        {isAuthenticated && !isLoading &&
            <Button asChild>
                <Link href="/documents">
                Enter DocFlow <ArrowRight className="h-4 w-a4 ml-2"/>
                </Link>
            </Button>
        }
        {!isAuthenticated && !isLoading && 
            <SignInButton mode="modal">
                <Button>
                    Get DocFlow free <ArrowRight className="h-4 w-a4 ml-2"/>
                </Button>
            </SignInButton>

        }
    </div> );
}
 
export default Heading;