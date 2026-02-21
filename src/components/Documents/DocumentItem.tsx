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
            <div className={styles["documentItem_type"]}>
                {/* <span>{file.type}</span> */}
                <span className={styles["documentItem_type-name"]}>{file.name}</span>
            </div>
            <span className={styles["documentItem-date"]}>{formatDate(file.added)}</span>
        </div>
    )
}

export default DocumentItem;