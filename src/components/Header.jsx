import Container from "./Container";
import logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import SubMenu from "./Navigation/SubMenu";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [links, setLinks] = useState([
        { id: 1, title: 'Home', url: '#' },
        { id: 2, title: 'About', url: '#' },
        { id: 3, title: 'Solutions', url: '#', submenu: [
            { id: 31, title: 'Mobile', url: '#' },
            { id: 32, title: 'Desktop', url: '#' },
        ] },
        { id: 4, title: 'Contact', url: '#' },
    ])

    return (
        <section className="main-header border-b border-slate-100 fixed top-0 bg-slate-50/96 w-full">
            <Container>
                <div className="desktop-nav hidden md:flex justify-between">
                    <div className="logo-container flex space-x-1 items-center">
                        <img className="h-15" src={logo} alt="logo" />
                        <h1 className="text-sm uppercase font-bold text-slate-700">Ninja <span className="text-green-400">Dev</span></h1>
                    </div>

                    <div className="nav-container flex items-center">
                        <nav className="space-x-3 text-xs uppercase font-medium text-slate-700 tracking-widest flex list-none">
                            {
                                links.length &&
                                    links.map(item => {
                                        return  <div key={item.id} className="relative">
                                                    {
                                                        item.submenu
                                                            ? <li>{item.title}<SubMenu links={item.submenu} /></li>
                                                            : <li><a href={item.url}>{item.title}</a></li>
                                                    }
                                                </div>
                                    })
                            }
                            {/* <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li className="relative">Solutions
                                <nav className="sub-menu bg-slate-200/95 p-5 absolute min-w-60 top-5 right-0 rounded">
                                    <li className="border-b border-slate-300 mb-2 pb-2">
                                        <a href="#">Desktop</a>
                                    </li>
                                    <li className="border-b border-slate-300 mb-2 pb-2">
                                        <a href="#">Mobile</a>
                                    </li>
                                    <li className="border-b border-slate-300 mb-2 pb-2">
                                        <a href="#">This is a long item</a>
                                    </li>
                                </nav>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li> */}
                        </nav>
                    </div>
                </div>

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