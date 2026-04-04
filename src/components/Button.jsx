const Button = ({
    classes,
    type, 
    onClick, 
    text,
    children
}) => {
    return (
        <div className="button">
            <button
                className={`${classes && classes} bg-slate-800 px-6 py-4 rounded text-white uppercase tracking-wide text-lg cursor-pointer`}
                type={type}
                onClick={onClick}
            >
                {text}
                {children}
            </button>
        </div>
    )
}

export default Button;