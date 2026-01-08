import BlurbItem from "./BlurbItem";

const Blurbs = ({ blurbs }) => {
    blurbs = [
        { id: 1, icon: 'microscope', background: "red", title: "Research", description: "Personalize your offer and sell your product or offer directly in the funnel without further tools."},
        { id: 2, icon: 'binary', background: "orange", title: "Develop", description: "Personalize your offer and sell your product or offer directly in the funnel without further tools."},
        { id: 3, icon: 'terminal', background: "green", title: "Deploy", description: "Personalize your offer and sell your product or offer directly in the funnel without further tools."},
    ]
    return (
        <div className="blurbs flex flex-col md:flex-row gap-5 justify-around my-5">
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