import Card from "../Card";
import CustomIcon from "../CustomIcon";

const BlurbItem = ({
    icon, background, size = 64, color = "currentColor",
    title, description
}) => {

    const style = {
        backgroundColor: background,
    }

    return (
        <Card border>
            <div style={style} className={`w-28 h-28 rounded-full border border-gray-200 flex items-center justify-center`}>
                <CustomIcon name={icon} size={size} color={color}/>
            </div>
            <h4 className={`text-2xl my-4`}>{title}</h4>
            <p className="text-slate-500 font-light text-lg">{description}</p>
        </Card>
    )
}

export default BlurbItem;