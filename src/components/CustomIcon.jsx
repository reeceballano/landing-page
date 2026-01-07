import { DynamicIcon } from 'lucide-react/dynamic';

const CustomIcon = ({ name, size, color }) => {
    return <DynamicIcon name={name} size={size} color={color} strokeWidth={1}/>
}

export default CustomIcon;