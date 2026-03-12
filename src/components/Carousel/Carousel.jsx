import { useEffect, useState, useCallback } from "react";

const Carousel = ({
    slides = [],
    columns = 1,
    renderSlide,          // (slide, index) => JSX  — custom slide renderer
    autoplayDelay = 3000, // set to null/0 to disable autoplay
    gap = 20,             // gap between slides in px
}) => {
    const [current, setCurrent] = useState(0);

    // Duplicate slides if not enough to fill the visible columns
    const renderedSlides = slides.length <= columns
        ? [...slides, ...slides, ...slides]
        : slides;

    // Width accounts for gap distribution across columns
    const itemStyle = {
        width: `calc(${100 / columns}% - ${(gap * (columns - 1)) / columns}px)`,
    };

    const handleNext = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const handlePrev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        if (!autoplayDelay) return;
        const timer = setInterval(handleNext, autoplayDelay);
        return () => clearInterval(timer);
    }, [handleNext, autoplayDelay]);

    return (
        <div className="carousel w-full">

            {/* Navigation */}
            <div className="flex gap-2 mb-4">
                <button
                    onClick={handlePrev}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
                >
                    Prev
                </button>
                <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
                >
                    Next
                </button>
            </div>

            {/* Track */}
            <div className="overflow-hidden w-full">
                <div className="flex flex-nowrap" style={{ gap: `${gap}px` }}>
                    {renderedSlides.map((slide, i) => (
                        <div
                            key={i}
                            className="max-sm:w-full! shrink-0 transition-transform ease-in-out duration-500"
                            style={{
                                ...itemStyle,
                                // calc() corrects for the gap offset on each step
                                transform: `translateX(calc(-${current * 100}% - ${current * gap}px))`,
                            }}
                        >
                            {renderSlide
                                ? renderSlide(slide, i)
                                : <img className="w-full h-auto object-cover" src={slide} alt={`Slide ${i + 1}`} />
                            }
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            i === current ? "bg-gray-800" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>

        </div>
    );
};

export default Carousel;
