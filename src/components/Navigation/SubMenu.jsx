const SubMenu = ({ links }) => {
    return (
        <nav className="sub-menu bg-slate-200/95 p-5 absolute min-w-60 top-5 right-0 rounded">
            {
                links.length &&
                    links.map(item => {
                        return  (
                            <div key={item.id} className="relative">
                                { item.submenu 
                                    ?  <li className="border-b border-slate-300 mb-2 pb-2">
                                            {item.title}<SubMenu links={item.submenu} />
                                        </li>
                                    :  <li className="border-b border-slate-300 mb-2 pb-2">
                                            <a href="#">{item.title}</a>
                                        </li>
                                }
                            </div>
                        )
                    })
            }
        </nav>
    )
}

export default SubMenu;