import { useState } from "react";
import type { DocumentItemProps } from "../../lib/fetchDocuments";

export interface useFilterReturn {
    filter: string;
    setFilter: (value: string) => void;
    filteredDocuments: DocumentItemProps[] | undefined;
}

/**
 * Custom hook to filter documents by name
 */
export function useFilter(documents: DocumentItemProps[] | undefined): useFilterReturn {
    const [filter, setFilter] = useState<string>("");


    const filteredDocuments = documents?.filter((doc) => doc.name.trimStart().toLowerCase().includes(filter.trimStart().toLowerCase()));

    return {
        filter,
        setFilter,
        filteredDocuments
    }
}