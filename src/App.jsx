import { Microscope } from "lucide-react";
import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Section from "./components/Section";
import Blurbs from "./components/Blurb/Blurbs";
import laptop from "../src/assets/images/laptop.jpg";
import Testimonials from "./components/Testimonials/Testimonials";
import Carousel from "./components/Carousel/Carousel";
import CustomIcon from "./components/CustomIcon";
import Input from "./components/Input";
import { useState } from "react";
import Button from "./components/Button";

const App = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        console.log('name', e)
        setUserData((prev) => ({
            ...prev,
            [name]: value
        }))

    }

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
                                <Button 
                                    text="Explore Codebase"
                                    type="button"
                                />
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
            <Section classes={"bg-black"}>
                <Container classes={"md:flex gap-10"}>
                    <div className="flex-1">
                        <h4 className="text-xs uppercase text-gray-300 font-semibold tracking-wider">Free Consultation</h4>
                        <h1 className="text-white text-upper text-5xl/15 md:text-5xl/20 font-semibold mb-2 text-left ">Get in touch!</h1>
                        <p className="text-xl/9 md:text-lg/7 text-gray-300 font-light text-left">We’d love to hear from you! Whether you have a question, feedback, or just want to learn more about what we offer, our team is here to help. Reach out to us anytime and we’ll make sure to respond as quickly as possible with the information or support you need.</p>
                        <div className="my-8">
                            <div className="flex items-center gap-3 my-3">
                                <div className={"p-1 inline-block border border-neutral-600 bg-neutral-700"}>
                                    <CustomIcon name={"phone"} size={21} color={"#fff"}/>
                                </div>
                                <span className="text-white text-sm">+63-917-123-4567</span>
                            </div>

                            <div className="flex items-center gap-3 my-3">
                                <div className={"p-1 inline-block border border-neutral-600 bg-neutral-700"}>
                                    <CustomIcon name={"mail"} size={21} color={"#fff"}/>
                                </div>
                                <span className="text-white text-sm">hello@local.dev</span>
                            </div>
                            
                            <div className="flex items-center gap-3 my-3">
                                <div className={"p-1 inline-block border border-neutral-600 bg-neutral-700"}>
                                    <CustomIcon name={"link"} size={21} color={"#fff"}/>
                                </div>
                                <span className="text-white text-sm">https://local.dev</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <form className="flex flex-col gap-3 bg-white p-7">
                            <h4 className="text-xs uppercase text-gray-600 font-semibold tracking-wider mb-3">Request Appointment</h4>
                            <Input 
                                name={'name'}
                                type="text"
                                label={'Name'}
                                placeholder={'Name'}
                                value={userData.name}
                                id={userData.name}
                                onChange={handleOnchange}
                            />
                            <div className="flex flex-col md:flex-row gap-3">
                                <Input 
                                    name={'email'}
                                    type="email"
                                    label={'Email'}
                                    placeholder={'Email'}
                                    value={userData.email}
                                    id={userData.email}
                                    onChange={handleOnchange}
                                    classes={'flex-none md:flex-1'}
                                />
                                <Input 
                                    name={'phone'}
                                    type="phone"
                                    label={'Phone'}
                                    placeholder={'Phone'}
                                    value={userData.phone}
                                    id={userData.phone}
                                    onChange={handleOnchange}
                                    classes={'flex-none md:flex-1'}
                                />
                            </div>
                            <Input 
                                name={'message'}
                                type="textarea"
                                label={'Message'}
                                placeholder={'Message'}
                                value={userData.message}
                                id={userData.message}
                                onChange={handleOnchange}
                                classes={'flex-none md:flex-1'}
                            />
                            <div className="hero-buttons flex justify-end gap-5 mt-5">
                                <Button></Button>
                                <button className="bg-slate-800 px-6 py-4 rounded text-white uppercase tracking-wide text-sm max-sm:w-full">Send Message</button>
                            </div>
                        </form>
                    </div>
                </Container>
            </Section>

            <Section classes="hidden">
                <Container>
                    {JSON.stringify(userData)}
                    {
                        Object.keys(userData).map((name,i) => {
                            return  (
                                <Input 
                                    key={i}
                                    name={name}
                                    type="text"
                                    label={name}
                                    placeholder={name}
                                    value={userData[name]}
                                    id={userData[name]}
                                    onChange={handleOnchange}
                                />
                            )
                        })
                    }
                </Container>
            </Section>
        </div>
    )
}

export default App;