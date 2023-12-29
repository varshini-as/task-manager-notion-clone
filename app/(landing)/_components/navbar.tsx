"use client";
import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

const Navbar = () => {

    const scrolled = useScrollTop();
    const {isAuthenticated, isLoading} = useConvexAuth();

    useEffect(() => {
        console.log(scrolled);
    }, [scrolled])
    
    return ( 
        <div className={cn("z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6", scrolled && "border-b shadow-sm")}>
            <Logo />
            <div className="md:ml-auto items-center justify-between md:justify-end font-semibold flex gap-x-2 w-full">
                {isLoading && <Spinner size="default" />}
                {!isAuthenticated && !isLoading && 
                  <>
                    <SignInButton mode="modal">
                      <Button variant="ghost" size="sm">
                        Login
                      </Button>
                    </SignInButton>
                    <SignInButton mode="modal">
                      <Button size="sm">
                        Get DocFlow Free
                      </Button>
                    </SignInButton>
                  </>
                }
                {isAuthenticated && !isLoading && (
                    <>
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/documents">
                          Enter DocFlow
                        </Link>
                      </Button>
                      <UserButton afterSignOutUrl="/"/>
                    </>
                  )
                }
                <ModeToggle />
            </div>
        </div>
     );
}
 
export default Navbar;