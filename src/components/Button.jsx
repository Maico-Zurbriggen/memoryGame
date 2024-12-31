const Button = ({ id, text, onClick }) => {
    return (
        <button id={id} onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-8 rounded w-1/6 uppercase">
            {text}
        </button>
    )
}

export default Button;