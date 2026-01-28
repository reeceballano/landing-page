import Card from "../Card";

const TestimonialItem = ({ testimonial }) => {
    const { id, name, company, text } = testimonial;

    return (
        <Card>
            <p className="text-slate-500 font-light text-2xl/9 italic">{text}</p>
            <span className={`text-md mt-5 text-white`}>{name}</span>
            <span className={`text-xs text-slate-50`}>{company}</span>
        </Card>
    )
}

export default TestimonialItem;