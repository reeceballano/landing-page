import { useState } from "react";

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    const handleNext = () => {
        console.log('next');
        if(current == slides.length - 1) { 
            setCurrent(0) 
        } else {
            setCurrent((prev) => (prev + 1) % 100);
        }
    }

    const handlePrev = () => {
        console.log('prev');
        if(current == slides.length - 1) { 
            setCurrent(0) 
        } else {
            setCurrent((prev) => (prev - 1) % 100);
        }
    }

    return (
        <div className="carousel">
            <div className="carousel-actions">
                <button onClick={() => handlePrev()}>Prev</button>
                <button onClick={() => handleNext()}>Next</button>
            </div>
            <div className="carousel-item">
                {JSON.stringify(current)}
                {JSON.stringify(slides)}
            </div>
        </div>
    )
}

export default Carousel;