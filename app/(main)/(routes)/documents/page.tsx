"use client";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentsPage = () => {

    const {user} = useUser();


  return <div className="flex flex-col h-full items-center justify-center space-y-3">
    <Image src="/empty.png" height={300} width={300} alt="empty" className="dark:hidden"/>
    <Image src="/empty-dark.png" height={300} width={300} alt="empty" className="hidden dark:block"/>
    <h2 className="font-semibold">Welcome to {user?.username}&apos;s DocFlow</h2>
    <Button><PlusCircle className="h-4 w-4 mr-2" />Create a note</Button>
  </div>;
};

export default DocumentsPage;
