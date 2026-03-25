const Input = ({ 
    type = "text", 
    label = "Text", 
    placeholder = "Text", 
    name, 
    value, 
    onChange, 
    id, 
    classes
}) => {
    return (
        <div className="input">
            <label htmlFor={id}>{label}</label>
            <input 
                name={name}
                id={id}
                type={type}
                label={label}
                placeholder={placeholder}
                className={`${classes}`}
                value={value}
                onChange={(e) => onChange(e)}
            />
        </div>
    )
}

export default Input;