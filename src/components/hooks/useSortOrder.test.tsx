import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useSortOrder } from "./useSortOrder";
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

describe("useSortOrder", () => {

    it("returns sorted by name ascending by default", () => {
        const { result } = renderHook(() => useSortOrder(getMockDocuments()));

        expect(getNames(result.current.sortedDocuments)).toEqual([
            "Report A",
            "Report B",
            "Report C",
            "Report D",
            "Report E",
        ]);
    });

    it("sorts by name descending when direction is set to desc", () => {
        const { result } = renderHook(() => useSortOrder(getMockDocuments()));

        act(() => {
            result.current.setSortDirection({ value: "desc" });
        });

        expect(getNames(result.current.sortedDocuments)).toEqual([
            "Report E",
            "Report D",
            "Report C",
            "Report B",
            "Report A",
        ]);
    });

    it("exposes the correct default sortKey and sortDirection", () => {
        const { result } = renderHook(() => useSortOrder(getMockDocuments()));
        expect(result.current.sortKey.value).toBe("name");
        expect(result.current.sortDirection.value).toBe("asc");
    });

    it("returns undefined when documents are undefined", () => {
        const { result } = renderHook(() => useSortOrder(undefined));
        expect(result.current.sortedDocuments).toBeUndefined();
    });

    it("sorts files by date asc when sortKey is 'added'", () => {
        const { result } = renderHook(() => useSortOrder(getMockDocuments()));

        act(() => {
            result.current.setSortKey({ value: "added" });
        });

        const names = getNames(result.current.sortedDocuments);
        const fileNames = names.filter((n) => !["Report B"].includes(n));

        expect(fileNames).toEqual(["Report C", "Report E", "Report A", "Report D"]);
    });

    it("sorts files by date desc when sortKey is 'added'", () => {
        const { result } = renderHook(() => useSortOrder(getMockDocuments()));

        act(() => {
            result.current.setSortKey({ value: "added" });
            result.current.setSortDirection({ value: "desc" });
        });

        const names = getNames(result.current.sortedDocuments);
        const fileNames = names.filter((n) => !["Report B"].includes(n));

        expect(fileNames).toEqual(["Report D", "Report A", "Report E", "Report C"]);
    });

    it("keeps folders at the bottom when sorting by date asc", () => {
        const { result } = renderHook(() => useSortOrder(getMockDocuments()));

        act(() => {
            result.current.setSortKey({ value: "added" });
            result.current.setSortDirection({ value: "asc" });
        });

        const names = getNames(result.current.sortedDocuments);
        const lastOne = names.slice(-1);

        expect(lastOne).toEqual(expect.arrayContaining(["Report B"]));
    });

    it("keeps folders at the bottom when sorting by date desc", () => {
        const { result } = renderHook(() => useSortOrder(getMockDocuments()));

        act(() => {
            result.current.setSortKey({ value: "added" });
            result.current.setSortDirection({ value: "desc" });
        });

        const names = getNames(result.current.sortedDocuments);
        const lastOne = names.slice(-1);

        expect(lastOne).toEqual(expect.arrayContaining(["Report B"]));
    });

});