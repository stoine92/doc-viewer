import Container from "../components/Layout/Container";
import Section from "../components/Layout/Section";
import Documents from "../components/Documents/Documents";
import { useQuery } from "@tanstack/react-query";
import { fetchDocuments } from "../lib/fetchDocuments";
import type { DocumentItemProps } from "../lib/fetchDocuments";
import { useFilter } from "../components/hooks/useFilter";
import InputField from "../components/Form/InputField";
import SelectField from "../components/Form/SelectField";
import { useSortOrder } from "../components/hooks/useSortOrder";


function Home () {

    const { data: documents, isLoading } = useQuery<DocumentItemProps[]>({
        queryFn: () => fetchDocuments(),
        queryKey: ["documents"],
    });

    const { filter, setFilter, clearFilter, filteredDocuments } = useFilter(documents);

    const { sortedDocuments, sortKey, sortDirection, setSortKey, setSortDirection } = useSortOrder(filteredDocuments);


    return (
       <Container>
            <Section>
                <Section.Side>
                  <InputField 
                    label="Search Documents"
                    name="search"
                    placeholder="Type to search..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  />
                  
                  <SelectField
                    label="Sort by"
                    name="sortKey"
                    value={sortKey.value}
                    onChange={(e) => setSortKey({ value: e.target.value as "name" | "added" })}
                    options={[
                      {code: "name", description: "Name"},
                      {code: "added", description: "Date Added"}
                    ]}
                  />


                  <SelectField
                    label="Sort direction"
                    name="sortDirection"
                    value={sortDirection.value}
                    onChange={(e) => setSortDirection({ value: e.target.value as "asc" | "desc" })}
                    options={[
                      {code: "asc", description: "Ascending"},
                      {code: "desc", description: "Descending"}
                    ]}
                  />
                </Section.Side>

                <Section.Main>
                  <Section.Head title="Page title" subtitle="Page Subtitle" />

                  <Section.Border />

                  <Section.Content>
                    <Documents documents={sortedDocuments} isLoading={isLoading} />
                  </Section.Content>
                </Section.Main>
            </Section>
       </Container>
    )
}

export default Home;