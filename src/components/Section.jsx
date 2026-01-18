const Section = ({ classes, children }) => {

    return (
        <section className={`section main-section ${classes}`}>
            { children}
        </section>
    )
}

export default Section;