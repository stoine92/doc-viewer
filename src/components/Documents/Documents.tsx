import type { FC } from "react";
import type { DocumentItemProps } from "../../lib/fetchDocuments";
import DocumentItem from "./DocumentItem";
import Collapsible from "../Collapsible/Collapsible";

interface DocumentsProps {
    documents: DocumentItemProps[] | undefined;
    isLoading: boolean;
}

const Documents: FC<DocumentsProps> = ({ documents, isLoading }) => {

    if (isLoading) return <div>Loading documents...</div>;

    
    return (
        <>
            {documents?.map((doc) => {
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