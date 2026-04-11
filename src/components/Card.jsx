const Card = ({ classes, border, children }) => {
    const withBorder = () => {
        return border ? 'border border-gray-100 shadow-md' : '';
    }

    return <div className={`${classes && classes} ${withBorder()} card flex-1 rounded-xl p-5 text-center flex flex-col items-center`}>
        { children }
    </div>
}

export default Card;