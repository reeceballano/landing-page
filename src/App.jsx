import { Microscope } from "lucide-react";
import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Section from "./components/Section";
import CustomIcon from "./components/CustomIcon";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Hero />
            <Marquee />
            <Section c>
                <Container>
                    <h1 className="text-5xl/15 md:text-5xl/17  font-light mb-2 text-center">We Deliver Results</h1>
                    <h3 className="text-xl/9 md:text-2xl/9 text-slate-600 font-light text-center">We are a team of ninjas!</h3>

                    <div className="w-8/12 mx-auto mt-11">
                        <div className="blurbs flex justify-around">
                            <div className="blurb border border-gray-200 rounded basis-3xs p-5">
                                <CustomIcon name="microscope" size={64} color={"currentColor"}/>
                                <h4 className="text-2xl my-4">Research</h4>
                                <p className="text-slate-500">Personalize your offer and sell your product or offer directly in the funnel without further tools.</p>
                            </div>
                            <div className="blurb border border-gray-200 rounded basis-3xs p-5">
                                <CustomIcon name="microscope" size={64} color={"currentColor"}/>
                                <h4 className="text-2xl my-4">Research</h4>
                                <p className="text-slate-500">Personalize your offer and sell your product or offer directly in the funnel without further tools.</p>
                            </div>
                            <div className="blurb border border-gray-200 rounded basis-3xs p-5">
                                <CustomIcon name="microscope" size={64} color={"currentColor"}/>
                                <h4 className="text-2xl my-4">Research</h4>
                                <p className="text-slate-500">Personalize your offer and sell your product or offer directly in the funnel without further tools.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            <div className="h-screen">

            </div>
        </div>
    )
}

export default App;