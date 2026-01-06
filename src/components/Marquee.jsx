import Container from "./Container";
import Amazon  from "../assets/company-logos/amazon-icon-logo-svgrepo-com.svg";
import Apple  from "../assets/company-logos/apple-logo-svgrepo-com.svg";
import Bmw  from "../assets/company-logos/bmw-logo-svgrepo-com.svg";
import Chanel  from "../assets/company-logos/chanel-2-logo-svgrepo-com.svg";
import Docker  from "../assets/company-logos/docker-logo-svgrepo-com.svg";
import Forbes  from "../assets/company-logos/forbes-logo-svgrepo-com.svg";
import GoPro  from "../assets/company-logos/gopro-hero-logo-svgrepo-com.svg";
import Heineken  from "../assets/company-logos/heineken-14-logo-svgrepo-com.svg";
import McDonald  from "../assets/company-logos/mcdonald-s-15-logo-svgrepo-com.svg";
import Microsoft  from "../assets/company-logos/microsoft-logo-svgrepo-com.svg";
import Netflix  from "../assets/company-logos/netflix-2-logo-svgrepo-com.svg";

const logos = [Amazon, Apple, Bmw, Chanel, Docker, Forbes, GoPro, Heineken, McDonald, Microsoft, Netflix];

const Marquee = () => {
    return (
        <section className="bg-green-100">
            <Container>
                <div className="text-slate-700 overflow-hidden min-w-full">
                    <div className="marquee-items animate-marquee flex gap-10">
                        {
                            [...logos, ...logos].map((item, index) => {
                                return <div key={index} className="marquee-item flex-none basis-28">
                                    <img src={item} className="w-10" />
                                </div>
                            })
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Marquee;