import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Documents from "./Documents";
import type { DocumentItemProps } from "../../lib/fetchDocuments";


vi.mock("../utils/formatDate", () => ({
    formatDate: () => "15 Jan 2024",
}));

vi.mock("../Skeleton/Skeleton", () => ({
    default: () => <div data-testid="skeleton" />,
}));


const mockFile = (): DocumentItemProps => ({
    id: 1,
    name: "Test File",
    type: "pdf",
    added: "2024-02-08",
});


describe("Documents", () => {

    it("renders the skeleton when isLoading is true", () => {
        render(<Documents documents={undefined} isLoading={true} />);
        expect(screen.getByTestId("skeleton")).toBeInTheDocument();
    });

    it("does not render documents when isLoading is true", () => {
        render(<Documents documents={[mockFile()]} isLoading={true} />);
        expect(screen.queryByText("Test File")).not.toBeInTheDocument();
    });

    it("renders empty message when documents array is empty", () => {
        render(<Documents documents={[]} isLoading={false} />);
        expect(screen.getByText("No documents found based on your filter criteria.")).toBeInTheDocument();
    });

    it("does not render empty message when documents exist", () => {
        render(<Documents documents={[mockFile()]} isLoading={false} />);
        expect(screen.queryByText("No documents found based on your filter criteria.")).not.toBeInTheDocument();
    });

});