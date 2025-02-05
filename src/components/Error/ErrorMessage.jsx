import "./ErrorMessage.css";

/*Este componente es para mostrar los mensajes de error, cuando tenemos un error en el estado errors*/

const ErrorMessage = ({ text }) => {
  return <p className="errors resalt-text">{text}</p>;
};

export default ErrorMessage;
