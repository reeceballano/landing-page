import Card from "../Card";

const TestimonialItem = ({ testimonial }) => {
    const { id, name, company, text } = testimonial;

    return (
        <Card>
            <p className="text-slate-500 font-light text-xl/7 italic">{text}</p>
            <span className={`text-md mt-5 text-slate-800`}>{name}</span>
            <span className={`text-xs text-slate-500`}>{company}</span>
        </Card>
    )
}

export default TestimonialItem;