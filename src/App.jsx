import { Microscope } from "lucide-react";
import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Section from "./components/Section";
import Blurbs from "./components/Blurb/Blurbs";
import laptop from "../src/assets/images/laptop.jpg";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Hero />
            <Marquee />
            
            <Section bg="bg-white">
                <Container classes={"bg-stone-50 rounded-lg"}>
                    <div className="image-text flex flex-col md:flex-row gap-9">
                        <div className="image-container md:w-2/5">
                            <img className="rounded-lg" src={laptop} alt="laptop" />
                        </div>

                        <div className="text-container flex-2 justify-center items-center">
                            <h2 className="text-5xl/15 md:text-5xl/17  font-light mb-2">Coded by Human!</h2>
                            <p className="text-xl/9 md:text-xl/7 text-slate-600 font-light ">The development process emphasized understanding the problem deeply before implementing solutions. Challenges were addressed through analysis, iteration, and hands-on debugging, ensuring that the final result is both reliable and maintainable.</p>
                            <div className="hero-buttons flex justify-center md:justify-self-start gap-5 mt-10">
                                <button className="bg-slate-800 px-6 py-4 rounded text-white uppercase tracking-wide text-lg">Explore Codebase</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            
            <Section>
                <Container>
                    <h1 className="text-5xl/15 md:text-5xl/17  font-light mb-2 text-center">We Deliver Results</h1>
                    <h3 className="text-xl/9 md:text-2xl/9 text-slate-600 font-light text-center">We are a team of ninjas!</h3>

                    <div className="md:mx-auto mt-11">
                        <Blurbs />
                        <Blurbs />
                    </div>
                </Container>
            </Section>
            
            <Section>
                <Container>
                    <h1 className="text-5xl/15 md:text-5xl/17  font-light mb-2 text-center">Clients Testimonials</h1>
                    <h3 className="text-xl/9 md:text-2xl/9 text-slate-600 font-light text-center">We are a team of ninjas!</h3>

                </Container>
            </Section>
            <div className="h-screen">

            </div>
        </div>
    )
}

export default App;