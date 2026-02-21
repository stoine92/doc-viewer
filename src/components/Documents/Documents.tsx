import { useQuery } from "@tanstack/react-query";
import { fetchDocuments } from "../../lib/fetchDocuments";
import type { DocumentItemProps } from "../../lib/fetchDocuments";
import DocumentItem from "./DocumentItem";
import DocumentFolder from "./DocumentFolder";


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
                        <DocumentItem key={doc.name} file={doc} />
                    )
                }
                return (
                    <DocumentFolder key={doc.name}  folder={doc} />
                );
            })}
        </>
    )
}

export default Documents;