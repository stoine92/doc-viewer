import { useState, type Dispatch } from "react";
import type { DocumentItemProps } from "../../lib/fetchDocuments";

interface UseSortOrderReturn {
    sortedDocuments: DocumentItemProps[] | undefined;
    sortKey: SortKeyInterface;
    sortDirection: SortDirectionInterface;
    setSortKey: Dispatch<React.SetStateAction<SortKeyInterface>>;
    setSortDirection: Dispatch<React.SetStateAction<SortDirectionInterface>>;
}

interface SortKeyInterface {
    value: "name" | "added";
}

interface SortDirectionInterface {
    value: "asc" | "desc";
}

export function useSortOrder (documents: DocumentItemProps[] | undefined): UseSortOrderReturn {

    const [sortKey, setSortKey] = useState<SortKeyInterface>({value: "name"});
    const [sortDirection, setSortDirection] = useState<SortDirectionInterface>({value: "asc"});


    const sortedDocuments = documents ? documents.sort((a, b) => {
        let comparison = 0;

        if (sortKey.value === "name") {
            comparison = a.name.localeCompare(b.name);
        } else if (sortKey.value === "added") {
            if(a.type === "folder" && b.type === "folder") {
                return 0;
            }else if (a.type === "folder") {
                return 1;
            }else if (b.type === "folder") {
                return -1;
            }

            comparison = new Date(a.added).getTime() - new Date(b.added).getTime();

        }

        return sortDirection.value === "asc" ? comparison : -comparison;
    }) : undefined;


    return { 
        sortedDocuments,
        sortKey,
        sortDirection,
        setSortKey,
        setSortDirection,
    };
}