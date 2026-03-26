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
        <>
            {/* <label htmlFor={id}>{label}</label> */}
            {
                type == 'textarea' 
                ?
                    <textarea 
                        name={name}
                        id={id}
                        label={label}
                        placeholder={placeholder.toUpperCase()}
                        className={`${classes} placeholder:text-slate-400 py-3 px-5 border border-slate-700`}
                        value={value}
                        onChange={(e) => onChange(e)}
                    >
                    </textarea>
                :    
                    <input 
                        name={name}
                        id={id}
                        type={type}
                        label={label}
                        placeholder={placeholder.toUpperCase()}
                        className={`${classes} placeholder:text-slate-400 py-3 px-5 border border-slate-700`}
                        value={value}
                        onChange={(e) => onChange(e)}
                    />
            }
        </>
    )
}

export default Input;