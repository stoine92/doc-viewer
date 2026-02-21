import { fetchDocuments } from "./fetchDocuments";

describe("fetchDocuments", () => {
    it("fetches documents and returns array", async () => {
        const data = await fetchDocuments();
        expect(data).toBeInstanceOf(Array);
        expect(data.length).toBeGreaterThan(0);
    });
    
    it("returns items with expected props", async () => {
        const data = await fetchDocuments();
        const item = data[0];
        expect(item).toHaveProperty("type");
        expect(item).toHaveProperty("name");
        expect(item).toHaveProperty("added");
    })
});