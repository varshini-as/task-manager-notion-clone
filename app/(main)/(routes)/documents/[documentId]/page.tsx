"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";

import Toolbar from "@/app/(main)/_components/toolbar";
import Cover from "@/components/cover";
import { Skeleton } from "@/components/ui/skeleton";
import { useMemo } from "react";

type DocumentPageProps = {
  params: {
    documentId: Id<"documents">;
  };
};

const DocumentPage = ({ params }: DocumentPageProps) => {
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  const Editor = useMemo(() => dynamic(() => import("@/components/editor"), {ssr: false}), [])

  const update = useMutation(api.documents.update);

  const onChange = (content: string) => {
    update({
      id: params.documentId,
      content,
    });
  };

  if (document === undefined) {
    return (
      <div>
        <Cover.Skeleton />
        <div className="md:max-w-2xl l:max-w-3xl mx-auto mt-10">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="h-14 w-[50%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
      </div>
    );
  }

  if (document === null) {
    return <p>Not found</p>;
  }
  return (
    <div className="pb-40">
      <Cover url={document.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={document} />
        <Editor onChange={onChange} initialContent={document.content} />
      </div>
    </div>
  );
};

export default DocumentPage;
