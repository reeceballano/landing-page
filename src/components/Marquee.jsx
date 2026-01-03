import Container from "./Container";

const Marquee = () => {
    return (
        <Container>
            <div className="text-slate-700 overflow-hidden min-w-full">
                <div className="marquee-items animate-marquee flex gap-10">
                    {
                        [...Array(100)].map((item, index) => {
                            return <div key={item} className="marquee-item w-2xs flex flex-1">Item {index}</div>

                        })
                    }
                </div>
            </div>
        </Container>
    )
}

export default Marquee;