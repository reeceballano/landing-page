import { useEffect, useState } from "react";

const Carousel = ({ slides, columns }) => {
    const [current, setCurrent] = useState(0);

    const renderedSlides = (slides.length <= 3) ? [...slides, ...slides, ...slides] : slides; 

    const itemsPerSlide = () => {
        switch(columns) {
            case 1 :
                return 'w-full';
            case 2:
                return 'w-1/2';
            case 3: 
                return 'w-1/3';
            case 4:
                return 'w-1/4';
            case 5:
                return 'w-1/5';
            case 6:
                return 'w-1/6';
            default:
                return 'w-full';
        }
    }

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
                className="carousel-item flex flex-nowrap gap-5"
            >
                {
                    slides &&
                        renderedSlides.map((slide,i) => {
                            return <div 
                                        key={i} 
                                        className={`${itemsPerSlide()} shrink-0 transition-all delay-75 ease-in-out duration-500`}
                                        style={{ transform: `translateX(-${current * 100}%)` }}
                                >
                                <img className="w-full" key={i} src={slide} />
                            </div>
                        })
                }
            </div>
        </div>
    )
}

export default Carousel;