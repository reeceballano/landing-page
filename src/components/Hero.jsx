import Container from "./Container";
import Section from "./Section";

const Hero = ({ hero, children }) => {
    return (
        <Section bg="bg-green-50">
            <Container>
                {children}
            </Container>
        </Section>
    )
}

export default Hero;