const SubMenu = ({ links }) => {
    return (
        <nav className="sub-menu absolute top-0 right-0">
            <div className="bg-slate-200/95 p-5 min-w-60 rounded mt-5">
                {
                    links.length &&
                        links.map(item => {
                            return  (
                                <>
                                    { item.submenu 
                                        ?  <li className="border-b border-slate-300 mb-2 pb-2">
                                                {item.title}<SubMenu links={item.submenu} />
                                            </li>
                                        :  <li className="border-b border-slate-300 mb-2 pb-2">
                                                <a href="#">{item.title}</a>
                                            </li>
                                    }
                                </>
                            )
                        })
                }
            </div>
        </nav>
    )
}

export default SubMenu;