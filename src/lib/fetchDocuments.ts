import raw from "../data/documents.json";

export interface FileItem {
    id: number;
    type: "pdf"| "doc" | "csv" | "mov";
    name: string;
    added: string;
}

export interface FolderItem {
    id: number;
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