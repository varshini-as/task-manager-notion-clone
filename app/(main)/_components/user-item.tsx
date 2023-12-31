"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { ChevronsLeftRight } from "lucide-react";

const UserItem = () => {

    const {user} = useUser(); 
    console.log(user);
    

    return ( 
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center text-sm p-3 w-full hover:bg-primary/5">
                    <div className="gap-x-2 flex items-center max-w-[150px]">
                        <Avatar className="h-5 w-5">
                            <AvatarImage src={user?.imageUrl ?? "Guest"} />
                        </Avatar>
                        <span className="text-start font-medium line-clamp-1">
                            {user?.username}
                        </span>
                    </div>
                    <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 w-4"/>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="start" alignOffset={11} forceMount>
                <div className="flex flex-col space-y-4 p-2">
                    <p className="text-xs font-medium leading-none text-muted-foreground">{user?.emailAddresses[0].emailAddress}</p>
                    <div className="flex items-center gap-x-2">
                        <div className="rounded-md bg-secondary p-1">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={user?.imageUrl}/>
                            </Avatar>
                        </div>
                        <p className="text-sm line-clamp-1">{user?.username}</p>
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="w-full cursor-pointer text-muted-foreground" asChild>
                    <SignOutButton>
                        Logout
                    </SignOutButton>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
     );
}
 
export default UserItem;