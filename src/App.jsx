import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Section from "./components/Section";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Hero />
            <Marquee />
            <Section>
                <Container>
                    <h1 className="text-5xl/15 md:text-5xl/17  font-light mb-2 text-center">We Deliver Results</h1>
                    <h3 className="text-xl/9 md:text-2xl/9 text-slate-600 font-light text-center">We are a team of ninjas!</h3>
                </Container>
            </Section>
            <div className="h-screen">

            </div>
        </div>
    )
}

export default App;