import Container from "./Container";

const Marquee = () => {
    return <Container>
        <div className="marquee-items w-full flex flex-row shrink-0 overflow-hidden animate-marquee">
            <div className="marquee-item basis-2/4">Item 1</div>
            <div className="marquee-item basis-2/4">Item 2</div>
            <div className="marquee-item basis-2/4">Item 3</div>
            <div className="marquee-item basis-2/4">Item 4</div>
            <div className="marquee-item basis-2/4">Item 5</div>
            <div className="marquee-item basis-2/4">Item 6</div>
            <div className="marquee-item basis-2/4">Item 1</div>
            <div className="marquee-item basis-2/4">Item 2</div>
            <div className="marquee-item basis-2/4">Item 3</div>
            <div className="marquee-item basis-2/4">Item 4</div>
            <div className="marquee-item basis-2/4">Item 5</div>
            <div className="marquee-item basis-2/4">Item 6</div>

        </div>
    </Container>
}

export default Marquee;