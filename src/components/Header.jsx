import Container from "./Container";

const Header = () => {
    return (
        <section className="main-header flex">
            <Container>
                <div className="desktop-nav hidden md:flex">
                    <span>Logo</span>
                </div>

                <div className="mobile-nav block md:hidden">
                    mobile nav
                </div>
            </Container>
        </section>
    )
}

export default Header;