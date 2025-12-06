const Hero = ({ hero, children }) => {
    return (
        <div className="hero">
            <div className="@container">
                {children}
            </div>
        </div>
    )
}

export default Hero;