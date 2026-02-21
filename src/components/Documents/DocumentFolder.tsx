import type { FC } from "react";
import type { FolderItem } from "../../lib/fetchDocuments";
import { formatDate } from "../utils/formatDate";


interface DocumentFolderProps {
    folder: FolderItem;
}

const DocumentFolder: FC<DocumentFolderProps> = ({ folder }) => {
    console.log(folder);
    return (
        <div>
            <span>{folder.type}</span>
            <span>{folder.name}</span>

            {folder.files.map((file) => {
                
                return(
                    <span key={file.name}>{file.name}</span>
                )
            })}
        </div>
    )
}

export default DocumentFolder;