"use client";

import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Item from "./item";
import { cn } from "@/lib/utils";
import { FileIcon } from "lucide-react";

type DocumentsListProps = {
  parentDocumentId?: Id<"documents">;
  level?: number;
  data?: Doc<"documents">[];
};

const DocumentsList = ({ parentDocumentId, level = 0 }: DocumentsListProps) => {
  const params = useParams();
  const router = useRouter();

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const onExpand = (documentId: string) => {
    console.log(documentId);
    
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [documentId]: !prevExpanded[documentId],
    }));
  };

  const documents = useQuery(api.documents.getSidebar, {
    parentDocument: parentDocumentId,
  });

  const onRedirect = (documentId: string) => {
    router.push(`/documents/${documentId}`);
  };

  // If documents are still being fetched
  if (documents === undefined) {
    return (
      <>
        <Item.Skeleton level={level} />
        {level === 0 && (
          <>
            <Item.Skeleton level={level} />
            <Item.Skeleton level={level} />
          </>
        )}
      </>
    );
  }
  return (
    <>
      {(!documents || documents.length == 0) && <p
        style={{ paddingLeft: level ? `${level * 12 + 25}px` : undefined }}
        className={cn(
          "hidden text-sm font-medium text-muted-foreground/80",
          expanded && "last: block",
          level === 0 && "hidden"
        )}
      >
        No pages inside
      </p>}
      {documents?.map((document) => {
        return (
          <div key={document._id}>
            <Item
              id={document._id}
              label={document.title}
              icon={FileIcon}
              documentIcon={document.icon}
              expanded={expanded[document._id]}
              active={params.documentId === document._id}
              level={level}
              onClick={() => {onRedirect(document._id)}}
              onExpand={() => onExpand(document._id)}
            />
            {expanded[document._id] && <DocumentsList parentDocumentId={document._id} level={level + 1} />}
          </div>
        );
      })}
    </>
  );
};

export default DocumentsList;
