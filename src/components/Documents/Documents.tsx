import { useQuery } from "@tanstack/react-query";
import { fetchDocuments } from "../../lib/fetchDocuments";
import type { DocumentItemProps, FileItem } from "../../lib/fetchDocuments";
import DocumentItem from "./DocumentItem";


const Documents = () => {


    const { data, isLoading } = useQuery<DocumentItemProps[]>({
        queryFn: () => fetchDocuments(),
        queryKey: ["documents"],
    });

    if (isLoading) return <div>Loading documents...</div>;

    
    return (
        <>
            {data?.map((doc) => {
                if(doc.type !== "folder"){
                    return (
                        <DocumentItem key={doc.name} file={doc as FileItem} />
                    )
                }
                return null;
            })}
            <span>Documents</span>
        </>
    )
}

export default Documents;