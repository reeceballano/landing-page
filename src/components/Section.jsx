const Section = ({ bg, children }) => {
    return (
        <section className={`section main-section ${bg}`}>
            { children}
        </section>
    )
}

export default Section;