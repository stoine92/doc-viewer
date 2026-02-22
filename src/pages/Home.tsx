import Container from "../components/Layout/Container";
import Section from "../components/Layout/Section";
import Documents from "../components/Documents/Documents";
import { useQuery } from "@tanstack/react-query";
import { fetchDocuments } from "../lib/fetchDocuments";
import type { DocumentItemProps } from "../lib/fetchDocuments";
import { useFilter } from "../components/hooks/useFilter";
import { useSortOrder } from "../components/hooks/useSortOrder";
import FilterAndSort from "../components/FilterAndSort/FilterAndSort";


function Home () {

    const { data: documents, isLoading } = useQuery<DocumentItemProps[]>({
        queryFn: () => fetchDocuments(),
        queryKey: ["documents"],
    });

    const { filter, setFilter, filteredDocuments } = useFilter(documents);

    const { sortedDocuments, sortKey, sortDirection, setSortKey, setSortDirection } = useSortOrder(filteredDocuments);


    if(documents?.length === 0 && !isLoading) {
        return (
            <Container>
                <Section>
                    <Section.Main>
                        <Section.Head 
                            title="No documents found" 
                            subtitle="Please add some documents to get started"
                        />
                    </Section.Main>
                </Section>
            </Container>
        )
    }

    return (
       <Container>
            <Section>
                <Section.Side>
                  <FilterAndSort 
                    filter={filter}
                    setFilter={setFilter}
                    sortKey={sortKey}
                    setSortKey={setSortKey}
                    sortDirection={sortDirection}
                    setSortDirection={setSortDirection}
                  />
                </Section.Side>

                <Section.Main>
                  <Section.Head 
                    title="My Documents" 
                    subtitle={`Showing ${sortedDocuments ? sortedDocuments.length : 0} document${sortedDocuments && sortedDocuments.length !== 1 ? "s" : ""}`}
                    DialogContent={
                      <>
                        <FilterAndSort 
                          filter={filter}
                          setFilter={setFilter}
                          sortKey={sortKey}
                          setSortKey={setSortKey}
                          sortDirection={sortDirection}
                          setSortDirection={setSortDirection}
                        />
                      </>
                    }
                  />
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