import { useState } from "react";
import SubMenu from "./SubMenu";
import logo from "../../assets/logo.svg";

const MainNavDesktop = () => {
    const [links, setLinks] = useState([
        { id: 1, title: 'Home', url: '#' },
        { id: 2, title: 'About', url: '#' },
        { id: 3, title: 'Solutions', url: '#', submenu: [
            { id: 31, title: 'Mobile', url: '#' },
            { id: 32, title: 'Desktop', url: '#' },
        ] },
        { id: 4, title: 'Contact', url: '#' },
    ])

    const [isOpen, setIsOpen] = useState(false);

    return (
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
                                                    ?   <li onMouseOver={() => setIsOpen(true)}>{item.title}
                                                            { isOpen && <SubMenu links={item.submenu} /> }
                                                        </li>
                                                    :   <li><a href={item.url}>{item.title}</a></li>
                                            }
                                        </div>
                            })
                    }
                </nav>
            </div>
        </div>
    )
}

export default MainNavDesktop;