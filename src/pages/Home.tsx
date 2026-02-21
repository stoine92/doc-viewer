import Container from "../components/Layout/Container";
import Section from "../components/Layout/Section";
import Documents from "../components/Documents/Documents";


function Home () {
    return (
       <Container>
            <Section>
                <Section.Main>
                  <Section.Head title="Page title" subtitle="Page Subtitle" />
                  <Section.Border />

                  <Section.Content>
                    <Documents />
                  </Section.Content>
                </Section.Main>
            </Section>
       </Container>
    )
}

export default Home;