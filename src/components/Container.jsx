const Container = ({classes, children}) => {
    return (
        <div className={`${classes && classes} container mx-auto p-5 md:p-8 w-11/12 md:w-11/12`}>
            {children}
        </div>
    )
}

export default Container;