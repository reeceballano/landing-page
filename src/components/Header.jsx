import Container from "./Container";
import logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import SubMenu from "./Navigation/SubMenu";
import MainNavDesktop from "./Navigation/MainNavDesktop";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="main-header border-b border-slate-100 fixed top-0 bg-slate-50/96 w-full">
            <Container>
                <MainNavDesktop />
                <div className="mobile-nav md:hidden">
                    <div className="flex items-center justify-between">
                        <div className="mobile-logo-container flex items-center">
                            <img className="h-20" src={logo} alt="logo" />
                            <h1 className="text-md uppercase font-bold text-slate-700">Ninja <span className="text-green-400">Dev</span></h1>
                        </div>
                        {
                            isOpen 
                            ? <X onClick={() => setIsOpen(false) } className="h-8 w-8 text-slate-900 cursor-pointer" />
                            : <Menu onClick={() => setIsOpen(true) } className="h-8 w-8 text-slate-900 cursor-pointer" />
                        }
                    </div>

                    <div className={`
                        mobile-nav-container overflow-hidden bg-slate-900/80 px-5 
                        rounded 
                        transition-all duration-300 
                        ${isOpen ? 'max-h-96 opacity-100 py-5' : 'max-h-0 opacity-0 py-0'}`
                    }>                        
                        <nav className="space-x-3 text-base uppercase font-semibold text-slate-100 tracking-wide">
                            <a className="block py-2 my-2 border-b border-slate-700" href="#">Home</a>
                            <a className="block py-2 my-2 border-b border-slate-700" href="#">About</a>
                            <a className="block py-2 my-2 border-b border-slate-700" href="#">Products</a>
                            <a className="block py-2 my-2 border-b border-slate-700" href="#">Contact</a>
                        </nav>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default Header;