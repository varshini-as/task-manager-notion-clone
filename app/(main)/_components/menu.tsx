"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { MoreHorizontal, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type MenuProps = {
  documentId: Id<"documents">;
};
const Menu = ({ documentId }: MenuProps) => {
  const {user} = useUser();
  const router = useRouter();

  const archive = useMutation(api.documents.archive);

  const onArchive = () => {
    const promise = archive({ id: documentId });

    toast.promise(promise, {
      loading: "Moving to trash...",
      success: "Moved to trash!",
      error: "Failed to marchive note.",
    });

    router.push("/documents");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60"
        align="end"
        alignOffset={8}
        forceMount
      >
        <DropdownMenuItem onClick={onArchive}><Trash className="h-4 w-4 mr-2"/>Delete</DropdownMenuItem>
        <div className="text-xs p-2 text-muted-foreground">Last edited by: {user?.fullName ?? user?.username}</div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

Menu.Skeleton = function MenuSkeleton() {
    return (
        <Skeleton className="h-10 w-10"/>
    )
}

export default Menu;
