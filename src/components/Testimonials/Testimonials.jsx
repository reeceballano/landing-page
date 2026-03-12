import Carousel from "../Carousel/Carousel";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
    const testimonialsData = [
        { id: 1, name: 'Alex Morgan', company: 'CTO – Vertex Labs', text: 'Working with this team was a game-changer for our product roadmap. They moved fast, communicated clearly, and delivered solutions that scaled with our growth. It felt like having an extension of our own engineering team.'},
        { id: 1, name: 'Priya Desai', company: 'Head of Product – NovaCloud', text: 'From strategy to execution, the experience was seamless. Their technical expertise and attention to detail helped us ship faster without sacrificing quality. We saw measurable impact within weeks.'},
        { id: 1, name: 'Jordan Lee', company: 'CEO – Flux Systems', text: 'They consistently exceeded expectations and brought thoughtful ideas to the table. The partnership helped us modernize our infrastructure and unlock new capabilities we hadn’t considered before.'},
    ]

    const slides = [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    ];

    return (
        <div className="testimonials flex">
            {
                testimonialsData &&
                    <Carousel 
                        slides={testimonialsData}
                        columns={2} 
                        autoPlay interval={4000}
                        renderSlide={(item) => {
                            return <TestimonialItem testimonial={item} />
                        }}
                    />
                    // testimonialsData.map((item,i) => {
                    //     return <TestimonialItem key={i} testimonial={item}/>
                    // })
            }
        </div>
    )
}

export default Testimonials;