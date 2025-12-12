import Container from "./Container";
import Section from "./Section";

const Hero = ({ hero, children }) => {
    return (
        <Section bg="bg-green-50 md:min-h-[calc(100dvh-100px)] flex items-center">
            <Container>
                    <div className="flex justify-center items-center gap-10">
                        <div className="hero-content md:flex-1">
                            <h1 className="text-5xl font-light mb-7 text-center md:text-left">Your Codebase's <span className="text-green-400">Secret Weapon.</span></h1>
                            <h3 className="text-2xl/9 text-slate-600 font-light text-center md:text-left">With sharp instincts and lightning-fast problem-solving, this ninja developer transforms tricky challenges into clean, scalable, and reliable solutions.</h3>
                        </div>

                        <div className="hero-editor md:flex-1">
                            editor
                        </div>
                    </div>
                    
                    {children}

            </Container>
        </Section>
    )
}

export default Hero;