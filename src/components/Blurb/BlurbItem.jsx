import CustomIcon from "../CustomIcon";

const BlurbItem = ({
    icon, background, size = 64, color = "currentColor",
    title, description
}) => {

    const style = {
        backgroundColor: background,
    }

    return (
        <div className="blurb border border-gray-100 flex-1 rounded-xl p-5 text-center flex flex-col items-center shadow-md">
            <div style={style} className={`w-28 h-28 rounded-full border border-gray-200 flex items-center justify-center`}>
                <CustomIcon name={icon} size={size} color={color}/>
            </div>
            <h4 className={`text-2xl my-4`}>{title}</h4>
            <p className="text-slate-500 font-light text-lg">{description}</p>
        </div>
    )
}

export default BlurbItem;