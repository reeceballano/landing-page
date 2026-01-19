const Card = ({ children }) => {
    return <div className="card border border-gray-100 flex-1 rounded-xl p-5 text-center flex flex-col items-center shadow-md">
        { children }
    </div>
}

export default Card;