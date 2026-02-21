import type { FC } from "react";
import type { FileItem } from "../../lib/fetchDocuments";
import { formatDate } from "../utils/formatDate";
import ButtonLink from "../Buttons/ButtonLink";
import styles from "./DocumentItem.module.scss";


interface DocumentItemProps {
    file: FileItem;
    small?: boolean;
}

const DocumentItem: FC<DocumentItemProps> = ({ file, small }) => {

    const classes: string[] = [styles.documentItem];
    const titleClasses: string[] = [styles["documentItem_type-name"]];

    if (small) {
        classes.push(styles["documentItem--small"]);
        titleClasses.push(styles["documentItem_type-name--small"]);
    }

    return (
        <div className={classes.join(" ")}>
            <div className={styles["documentItem_type"]}>
                {/* <span>{file.type}</span> */}
                <ButtonLink className={titleClasses.join(" ")}>{file.name}</ButtonLink>
            </div>
            <span className={styles["documentItem-date"]}>{formatDate(file.added)}</span>
        </div>
    )
}

export default DocumentItem;