import { Microscope } from "lucide-react";
import Container from "../components/Container";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Section from "../components/Section";
import Blurbs from "../components/Blurb/Blurbs";
import laptop from "../assets/images/laptop.jpg";
import Testimonials from "../components/Testimonials/Testimonials";
import Button from "../components/Button";
import heroVideo from "../assets/videos/hero-video-2-output.mp4";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Home = () => {
    const videoRef = useRef();

    const isMobile = useMediaQuery({ maxWidth: 767});

    useGSAP(() => {
        //VIDEO ANIMATION
        const startValue = isMobile ? 'top 10%' : 'center 50%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.cta-section',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true
            }
        })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration
            })
        }
    }, [])

    return (
        <div className="homepage">
            <Hero />
            <Marquee />
            
            <Section classes="cta-section" bg="bg-white">
                <Container classes={"bg-stone-50 rounded-lg"}>
                    <div className="image-text flex flex-col md:flex-row gap-9">
                        <div className="image-container md:w-2/5">
                            {/* <img className="rounded-lg" src={laptop} alt="laptop" /> */}
                            <video
                                className="w-full" 
                                ref={videoRef}
                                src={heroVideo}
                                muted
                                playsInline
                                preload="auto"
                            />
                        </div>

                        <div className="text-container flex-2 justify-center items-center">
                            <h2 className="text-5xl/15 md:text-5xl/17  font-light mb-2">Coded by Human!</h2>
                            <p className="text-xl/9 md:text-xl/7 text-slate-600 font-light ">The development process emphasized understanding the problem deeply before implementing solutions. Challenges were addressed through analysis, iteration, and hands-on debugging, ensuring that the final result is both reliable and maintainable.</p>
                            <div className="hero-buttons flex justify-center md:justify-self-start gap-5 mt-10">
                                <Button 
                                    text="Explore Codebase"
                                    type="button"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            
            <Section classes="blurbs">
                <Container>
                    <h1 className="text-5xl/15 md:text-5xl/17  font-light mb-2 text-center">We Deliver Results</h1>
                    <h3 className="text-xl/9 md:text-2xl/9 text-slate-600 font-light text-center">We are a team of ninjas!</h3>

                    <div className="md:mx-auto mt-11">
                        <Blurbs />
                    </div>
                </Container>
            </Section>
            
            <Section classes={"bg-slate-50"}>
                <Container>
                    <h1 className="text-5xl/15 md:text-5xl/17  font-light mb-2 text-center">Clients Testimonials</h1>
                    <h3 className="text-xl/9 md:text-2xl/9 text-slate-600 font-light text-center">Real Stories, Real Results</h3>
                    
                    <div className="mt-11">
                        <Testimonials />
                    </div>
                </Container>
            </Section>
        </div>
    )
}

export default Home;