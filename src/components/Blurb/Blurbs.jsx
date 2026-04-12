import { useGSAP } from "@gsap/react";
import BlurbItem from "./BlurbItem";
import gsap from "gsap";

const Blurbs = ({ blurbs }) => {
    useGSAP(() => {
        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '.blurbs',
        //         markers: true,
        //         start: 'center 05%',
        //         end: 'top 50%',
        //         scrub: true,
        //         // pin: true
        //     }
        // })

        // gsap.utils.toArray('.blurb').forEach((box) => {
        //     tl.from(box, 
        //         {
        //             // backgroundColor: 'green',
        //             y: 100,
        //             opacity: 0,
        //             duration: 0.5,
        //             ease: 'expo.inOut',
        //             // toggleActions: "reverse"
        //         }
        //     )
        // })
    },[])

    blurbs = [
        { id: 1, icon: 'microscope', background: "lightcoral", title: "Research", description: "Personalize your offer and sell your product or offer directly in the funnel without further tools."},
        { id: 2, icon: 'binary', background: "lightsalmon", title: "Develop", description: "Personalize your offer and sell your product or offer directly in the funnel without further tools."},
        { id: 3, icon: 'terminal', background: "lightgreen", title: "Deploy", description: "Personalize your offer and sell your product or offer directly in the funnel without further tools."},
    ]

    return (
        <div className="blurbs md:w-4/5 md:mx-auto flex flex-col md:flex-row gap-5 my-5 justify-around">
            {
                blurbs &&
                    blurbs.map(item => {
                        return <BlurbItem 
                            key={item.id} 
                            icon={item.icon} 
                            background={item.background}
                            title={item.title} 
                            description={item.description} 
                        />
                    })
            }
        </div>
    )
}

export default Blurbs;