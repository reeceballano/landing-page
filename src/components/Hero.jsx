import Section from "./Section";

const Hero = ({ hero, children }) => {
    return (
        <Section bg="bg-green-50">
            <div className="container">
                {children}
            </div>
        </Section>
    )
}

export default Hero;