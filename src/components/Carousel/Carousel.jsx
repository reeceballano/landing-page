import { useEffect, useState } from "react";

const Carousel = ({ slides, columns }) => {
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

    useEffect(() => {
        const autoplay = setInterval(() => {
            handleNext();
        },3000);

        return () => clearInterval(autoplay);
    },[current])

    return (
        <div className="carousel overflow-hidden w-full">
            <div className="carousel-actions">
                <button onClick={() => handlePrev()}>Prev</button>
                <button onClick={() => handleNext()}>Next</button>
            </div>
            <div 
                className="carousel-item flex gap-5"
            >
                {
                    slides &&
                        slides.map(slide => {
                            return <div key={slide} className="w-1/3 transition-all delay-75 ease-in-out duration-500"
                                    style={{ transform: `translateX(-${current * 100}%)` }}
                                >
                                <img className="w-full" key={slide} src={slide} />
                            </div>
                        })
                }
            </div>
        </div>
    )
}

export default Carousel;