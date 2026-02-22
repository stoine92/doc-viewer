import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import DocumentItem from "./DocumentItem";
import type { FileItem } from "../../lib/fetchDocuments";


vi.mock("../utils/formatDate", () => ({
    formatDate: () => "15 Jan 2024",
}));


const getMockFile = (overrides?: Partial<FileItem>): FileItem => ({
    id: 1,
    name: "Test Document",
    type: "pdf",
    added: "2024-02-06",
    ...overrides,
});


describe("DocumentItem", () => {

    it("renders the file name", () => {
        render(<DocumentItem file={getMockFile()} />);
        expect(screen.getByText("Test Document")).toBeInTheDocument();
    });

    it("renders the formatted date", () => {
        render(<DocumentItem file={getMockFile()} />);
        expect(screen.getByText("15 Jan 2024")).toBeInTheDocument();
    });

    it("renders the file type badge in uppercase", () => {
        render(<DocumentItem file={getMockFile({ type: "pdf" })} />);
        expect(screen.getByText("PDF")).toBeInTheDocument();
    });


    it("applies small modifier classes when small prop is true", () => {
        render(<DocumentItem file={getMockFile()} small />);

        const root = screen.getByText("Test Document").closest("div[class]")?.parentElement;
        expect(root?.className).toContain("documentItem--small");
    });

    it("applies small modifier to title when small prop is true", () => {
        render(<DocumentItem file={getMockFile()} small />);

        const title = screen.getByText("Test Document");
        expect(title.className).toContain("documentItem_type-name--small");
    });

    it("does not apply small modifier classes when small is omitted", () => {
        render(<DocumentItem file={getMockFile()} />);

        const root = screen.getByText("Test Document").closest("div[class]")?.parentElement;
        expect(root?.className).not.toContain("documentItem--small");
    });
});