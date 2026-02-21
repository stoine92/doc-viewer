import raw from "../data/documents.json";

interface FileItem {
    type: "pdf" | "folder" | "doc" | "csv" | "mov";
    name: string;
    added: string;
}

interface FolderItem {
    type: "pdf" | "doc" | "csv" | "mov";
    name: string;
    folder: FileItem[];
}


type DocumentItem = FileItem | FolderItem;

const documents: DocumentItem[] = raw as any;

export const fetchDocuments = async (): Promise<DocumentItem[]> => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(documents);
        }, 500);
    });
};