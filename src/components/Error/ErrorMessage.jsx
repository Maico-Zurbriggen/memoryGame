import './ErrorMessage.css';

const ErrorMessage = ({ text }) => {
  return (
    <p className="errors">
    {text}
    </p>
  )
}

export default ErrorMessage;