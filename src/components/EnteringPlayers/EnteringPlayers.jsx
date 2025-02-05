import { SelectPlayer } from "./components";
import { ErrorMessage } from '..';
import './EnteringPlayers.css'

/*
Este componente es la ventana modal para ingresar los jugadores
*/

const EnteringPlayers = ({ onSubmit, errors }) => {
  return (
    <>
      <h2>Enter The Players</h2>
      <form method="POST" className="w-100" onSubmit={onSubmit}>
        <fieldset>
          <SelectPlayer player={1} bg="bg-blue" nameInput="player1" />
          <SelectPlayer player={2} bg="bg-red" nameInput="player2" />
          <SelectPlayer player={3} bg="bg-green" nameInput="player3" />
          <SelectPlayer player={4} bg="bg-orange" nameInput="player4" />
        </fieldset>
        <div className="errors-container">
          {errors.map((error, index) => (
            <ErrorMessage key={index} text={error} />
          ))}
        </div>
        <button className="resalt-text">Start</button>
      </form>
    </>
  );
};

export default EnteringPlayers;
