import Container from "./Container";
import logo from "../assets/logo.svg";

const Header = () => {
    return (
        <section className="main-header">
            <Container>
                <div className="desktop-nav hidden md:flex justify-between">
                    <div className="logo-container flex space-x-1 items-center">
                        <img className="h-15" src={logo} alt="logo" />
                        <h1 className="text-sm uppercase font-bold text-slate-700">Ninja <span className="text-green-400">Dev</span></h1>
                    </div>

                    <div className="nav-container flex items-center">
                        <nav className="space-x-3 text-xs uppercase font-semibold text-slate-700 tracking-wide">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Products</a>
                        <a href="#">Contact</a>
                        </nav>
                    </div>
                </div>

                <div className="mobile-nav block md:hidden">
                    mobile nav
                </div>

            </Container>
        </section>
    )
}

export default Header;