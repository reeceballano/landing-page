const Container = ({children}) => {
    return (
        <div className="container mx-auto px-2 py-5 md:px-10">
            {children}
        </div>
    )
}

export default Container;