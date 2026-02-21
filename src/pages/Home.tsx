import Container from "../components/Layout/Container";
import Section from "../components/Layout/Section";
import Documents from "../components/Documents/Documents";
import { useQuery } from "@tanstack/react-query";
import { fetchDocuments } from "../lib/fetchDocuments";
import type { DocumentItemProps } from "../lib/fetchDocuments";


function Home () {

    const { data: documents, isLoading } = useQuery<DocumentItemProps[]>({
        queryFn: () => fetchDocuments(),
        queryKey: ["documents"],
    });


    return (
       <Container>
            <Section>
                <Section.Side>
                  <span>Test</span>
                </Section.Side>

                <Section.Main>
                  <Section.Head title="Page title" subtitle="Page Subtitle" />

                  <Section.Border />

                  <Section.Content>
                    <Documents documents={documents} isLoading={isLoading} />
                  </Section.Content>
                </Section.Main>
            </Section>
       </Container>
    )
}

export default Home;