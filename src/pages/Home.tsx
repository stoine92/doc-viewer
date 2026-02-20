import Container from "../components/Layout/Container";
import Section from "../components/Layout/Section";


function Home () {
    return (
       <Container>
            <Section>
                <Section.Main>
                  <Section.Head title="Page title" subtitle="Page Subtitle" />
                  <Section.Border />
                </Section.Main>
            </Section>
       </Container>
    )
}

export default Home;