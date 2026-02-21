import { useQuery } from "@tanstack/react-query";
import { fetchDocuments } from "../../lib/fetchDocuments";
import type { DocumentItemProps } from "../../lib/fetchDocuments";
import DocumentItem from "./DocumentItem";
import Collapsible from "../Collapsible/Collapsible";


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
                    <Collapsible title={doc.name}>
                        {doc.files.map((file) => {
                            return(
                                <DocumentItem key={file.name} file={file} small/>
                            )
                        })}
                    </Collapsible>
                );
            })}
        </>
    )
}

export default Documents;