import raw from "../data/documents.json";

export interface FileItem {
    type: "pdf"| "doc" | "csv" | "mov";
    name: string;
    added: string;
}

export interface FolderItem {
    type: "folder";
    name: string;
    files: FileItem[];
}


export type DocumentItemProps = FileItem | FolderItem;

const documents: DocumentItemProps[] = raw as any;

export const fetchDocuments = async (): Promise<DocumentItemProps[]> => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(documents);
        }, 500);
    });
};