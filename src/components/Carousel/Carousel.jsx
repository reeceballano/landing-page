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
        if(current == 0) { 
            setCurrent(0) 
        } else {
            setCurrent((prev) => (prev - 1) % 100);
        }
    }

    return (
        <div className="carousel overflow-hidden w-full">
            <div className="carousel-actions">
                <button onClick={() => handlePrev()}>Prev</button>
                <button onClick={() => handleNext()}>Next</button>
            </div>
            <div 
                className="carousel-item flex transition-all delay-75 ease-in-out duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {
                    slides &&
                        slides.map(slide => {
                            return <img className="w-full" key={slide} src={slide} />
                        })
                }
            </div>
        </div>
    )
}

export default Carousel;