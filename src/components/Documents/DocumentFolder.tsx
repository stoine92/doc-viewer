import type { FC } from "react";
import type { FolderItem } from "../../lib/fetchDocuments";
import styles from "./DocumentFolder.module.scss";


interface DocumentFolderProps {
    folder: FolderItem;
}

const DocumentFolder: FC<DocumentFolderProps> = ({ folder }) => {
    console.log(folder);
    const amountOfItems = folder?.files?.length || 0;

    return (
        <div className={styles.documentFolder}>
            <div className={styles.documentFolder_type}>
                {/* <span>{folder.type}</span> */}
                <span className={styles["documentFolder_type-name"]}>{folder.name}</span>
            </div>
            <span className={styles["documentFolder-files"]}>{`${amountOfItems} files`}</span>

            {/* {folder.files.map((file) => {
                
                return(
                    <span key={file.name}>{file.name}</span>
                )
            })} */}
        </div>
    )
}

export default DocumentFolder;