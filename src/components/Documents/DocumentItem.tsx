import type { FC } from "react";
import type { FileItem } from "../../lib/fetchDocuments";
import { formatDate } from "../utils/formatDate";


interface DocumentItemProps {
    file: FileItem;
}

const DocumentItem: FC<DocumentItemProps> = ({ file }) => {
    return (
        <div>
            <span>{file.type}</span>
            <span>{file.name}</span>
            <span>{formatDate(file.added)}</span>
        </div>
    )
}

export default DocumentItem;