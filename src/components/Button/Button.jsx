import "./Button.css";

/*
Este componente es para los botones
*/

const Button = ({ id, text, onClick }) => {
  return (
    <button className="resalt-text" id={id} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
