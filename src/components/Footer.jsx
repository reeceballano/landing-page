import { useState } from "react";
import Section from "../components/Section";
import Container from "../components/Container";
import CustomIcon from "../components/CustomIcon";
import Input from "../components/Input";
import Button from "../components/Button";

const Footer = () => {
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
        <>
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
                                <Button
                                    classes={"text-sm max-sm:w-full"}
                                    type={"button"}
                                    text="Send Message"
                                >

                                </Button>
                            </div>
                        </form>
                    </div>
                </Container>
                <Container classes={"hidden"}>
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
        </>
    )
}

export default Footer;