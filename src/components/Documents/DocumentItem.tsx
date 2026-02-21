import type { FC } from "react";
import type { FileItem } from "../../lib/fetchDocuments";
import { formatDate } from "../utils/formatDate";
import ButtonLink from "../Buttons/ButtonLink";

//Icons
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';

//Styles
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
    };


    const FileIcon: React.ElementType = file.type === "pdf" ? PictureAsPdfOutlinedIcon : file.type === "doc" ? ArticleOutlinedIcon : InsertChartOutlinedIcon;

    return (
        <div className={classes.join(" ")}>
            <div className={styles["documentItem_type"]}>
                <FileIcon />
                <ButtonLink className={titleClasses.join(" ")}>{file.name}</ButtonLink>
            </div>
            <span className={styles["documentItem-date"]}>{formatDate(file.added)}</span>
        </div>
    )
}

export default DocumentItem;