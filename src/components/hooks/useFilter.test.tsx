import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useFilter } from "./useFilter";
import type { DocumentItemProps } from "../../lib/fetchDocuments";

const getMockDocuments = (): DocumentItemProps[] => [
    {
        id: 1,
        name: "Report A",
        type: "pdf",
        added: "2025-06-06"
    },
    {
        id: 2,
        name: "Report C",
        type: "csv",
        added: "2024-01-12"
    },
    {
        id: 3,
        name: "Report B",
        type: "folder",
        files: []
    },
    {
        id: 4,
        name: "Report E",
        type: "mov",
        added: "2024-05-30"
    },
    {
        id: 5,
        name: "Report D",
        type: "csv",
        added: "2026-02-05"
    }
]

function getNames(docs: DocumentItemProps[] | undefined) {
    return docs?.map((d) => d.name) ?? [];
};

describe("useFilter", () => {

    it("returns all documents when filter is empty by default", () => {
        const { result } = renderHook(() => useFilter(getMockDocuments()));

        expect(getNames(result.current.filteredDocuments)).toEqual([
            "Report A",
            "Report C",
            "Report B",
            "Report E",
            "Report D",
        ]);
    });

    it("filter documents by an exact name match", () => {
        const { result } = renderHook(() => useFilter(getMockDocuments()));

        act(() => {
            result.current.setFilter("Report C");
        });

        expect(getNames(result.current.filteredDocuments)).toEqual([
            "Report C"
        ]);
    });

    it("filter documents by partial name match", () => {
        const { result } = renderHook(() => useFilter(getMockDocuments()));

        act(() => {
            result.current.setFilter("Repor");
        });

        expect(getNames(result.current.filteredDocuments)).toEqual([
            "Report A",
            "Report C",
            "Report B",
            "Report E",
            "Report D",
        ]);
    });

    it("returns undefined when documents are undefined", () => {
        const { result } = renderHook(() => useFilter(undefined));
        expect(result.current.filteredDocuments).toBeUndefined();
    });

    it("ignores leading whitespace in the filter string", () => {
        const { result } = renderHook(() => useFilter(getMockDocuments()));

        act(() => {
            result.current.setFilter("   Report C");
        });

        expect(getNames(result.current.filteredDocuments)).toEqual([
            "Report C"
        ]);
    });

    it("returns an empty array when no documents match the search", () => {
        const { result } = renderHook(() => useFilter(getMockDocuments()));

        act(() => {
            result.current.setFilter("Test A");
        });

        expect(getNames(result.current.filteredDocuments)).toEqual([]);
    });

    it("search is not case sensitive", () => {
        const { result } = renderHook(() => useFilter(getMockDocuments()));

        act(() => {
            result.current.setFilter("report a");
        });

        expect(getNames(result.current.filteredDocuments)).toEqual([
            "Report A"
        ]);
    });

});