import Button from "./Button";
import Carousel from "./Carousel/Carousel";
import Container from "./Container";
import Section from "./Section";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Hero = ({ hero, children }) => {
    const slides = [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    ];

    useGSAP(() => {
        const heroTitle = new SplitText('.hero-title', { type: 'chars, words'});
        const heroDescription = new SplitText('.hero-description', { type: 'lines'});

        gsap.from(heroTitle.chars, {
            yPercent: 100,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.01
        })

        gsap.from(heroDescription.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        })

    }, [])
    

    return (
        <Section classes={`hero-section md:min-h-[calc(100dvh-100px)] mt-[100px] flex items-center`}>
            <Container>
                    <div className="flex md:flex-row flex-col justify-center items-center_ gap-18">
                        <div className="hero-content md:flex-1">
                            <h1 className="hero-title text-xl/15 md:text-7xl/18 tracking-tight font-light mb-7 text-center md:text-left">Your Codebase's <span className="text-green-400">Secret Weapon.</span></h1>
                            <h3 className="hero-description text-xl/9 md:text-2xl/9 text-slate-600 font-light text-center md:text-left">With sharp instincts and lightning-fast problem-solving, this ninja developer transforms tricky challenges into clean, scalable, and reliable solutions.</h3>

                            <div className="hero-buttons flex flex-col md:flex-row justify-center md:justify-self-start gap-5 mt-8">
                                <Button 
                                    type="button"
                                    text="Explore Codebase"
                                    classes="hover:bg-slate-900 active:bg-slate-700"
                                />
                                
                                <Button 
                                    type="button"
                                    text="Contact Us"
                                    classes="!bg-green-500 hover:!bg-green-600 active:!bg-green-400"
                                />
                            </div>
                        </div>

                        <div className="hero-editor md:flex-1">
                            <div className="w-full top-0 object-fill object-bottom relative">
                                <Carousel slides={slides} columns={1} autoPlay interval={4000} />
                            </div>
                        </div>
                    </div>
                    
                    {children}

            </Container>
        </Section>
    )
}

export default Hero;