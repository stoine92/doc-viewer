import type { FC } from "react";
import type { FileItem } from "../../lib/fetchDocuments";
import { formatDate } from "../utils/formatDate";
import styles from "./DocumentItem.module.scss";


interface DocumentItemProps {
    file: FileItem;
}

const DocumentItem: FC<DocumentItemProps> = ({ file }) => {
    return (
        <div className={styles.documentItem}>
            <span>{file.type}</span>
            <span>{file.name}</span>
            <span>{formatDate(file.added)}</span>
        </div>
    )
}

export default DocumentItem;