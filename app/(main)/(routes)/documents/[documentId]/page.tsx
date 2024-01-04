"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";

import Toolbar from "@/app/(main)/_components/toolbar";

type DocumentPageProps = {
  params: {
    documentId: Id<"documents">;
  };
};

const DocumentPage = ({ params }: DocumentPageProps) => {
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  if (document === undefined) {
    return <p>Loading...</p>;
  }

  if (document === null) {
    return <p>Not found</p>;
  }
  return (
    <div className="pb-40">
      <div className="h-[35vh]"/>
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={document} />
      </div>
    </div>
  );
};

export default DocumentPage;
