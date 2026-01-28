import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
    const testimonialsData = [
        { id: 1, name: 'Alex Morgan', company: 'CTO – Vertex Labs', text: 'Working with this team was a game-changer for our product roadmap. They moved fast, communicated clearly, and delivered solutions that scaled with our growth. It felt like having an extension of our own engineering team.'},
        { id: 1, name: 'Priya Desai', company: 'Head of Product – NovaCloud', text: 'From strategy to execution, the experience was seamless. Their technical expertise and attention to detail helped us ship faster without sacrificing quality. We saw measurable impact within weeks.'},
        { id: 1, name: 'Jordan Lee', company: 'CEO – Flux Systems', text: 'They consistently exceeded expectations and brought thoughtful ideas to the table. The partnership helped us modernize our infrastructure and unlock new capabilities we hadn’t considered before.'},
    ]

    return (
        <div className="testimonials flex">
            {
                testimonialsData &&
                    testimonialsData.map((item) => {
                        return <TestimonialItem key={item} testimonial={item}/>
                    })
            }
        </div>
    )
}

export default Testimonials;