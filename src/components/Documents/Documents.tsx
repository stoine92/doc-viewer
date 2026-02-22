import type { FC } from "react";
import type { DocumentItemProps } from "../../lib/fetchDocuments";
import DocumentItem from "./DocumentItem";
import Collapsible from "../Collapsible/Collapsible";
import Skeleton from "../Skeleton/Skeleton";
import styles from "./Documents.module.scss";

interface DocumentsProps {
    documents: DocumentItemProps[] | undefined;
    isLoading: boolean;
}

const Documents: FC<DocumentsProps> = ({ documents, isLoading }) => {

    if (isLoading) return <Skeleton />;

    if(documents?.length === 0) {
        return (
            <p className={styles["documents-empty"]}>No documents found based on your filter criteria.</p>
        )
    }
    
    return (
        <>
            {documents?.map((doc) => {
                if(doc.type !== "folder"){
                    return (
                        <DocumentItem key={doc.id} file={doc} />
                    )
                }
                return (
                    <Collapsible title={doc.name}>
                        {doc.files.map((file) => {
                            return(
                                <DocumentItem key={file.id} file={file} small/>
                            )
                        })}
                    </Collapsible>
                );
            })}
        </>
    )
}

export default Documents;