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
        { id: 5, title: 'With Sub', url: '#', submenu: [
            { id: 51, title: 'Mobile', url: '#' },
            { id: 52, title: 'Desktop', url: '#' },
        ] },
    ])

    const [isOpen, setIsOpen] = useState(false);

    const [menuId, setMenuId] = useState(null);

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
                            links.map((item,i) => {
                                return  <div key={i}>
                                        {
                                            item.submenu
                                                ?   <li 
                                                        onMouseOver={() => setMenuId(item.id)}
                                                        onMouseLeave={() => setMenuId(null)}
                                                    >
                                                        <div className="relative">
                                                            {item.title}
                                                            { (menuId === item.id) && <SubMenu links={item.submenu} /> }

                                                        </div>
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