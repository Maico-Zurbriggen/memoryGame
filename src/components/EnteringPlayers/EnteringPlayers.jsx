import { SelectPlayer } from "./components"

const EnteringPlayers = ({ onSubmit }) => {

  return (
    <>
      <h2>Enter The Players</h2>
      <form method="POST" onSubmit={onSubmit}>
        <fieldset>
          <SelectPlayer player={1} bg="bg-blue" nameInput="player1" />
          <SelectPlayer player={2} bg="bg-red" nameInput="player2" />
          <SelectPlayer player={3} bg="bg-green" nameInput="player3" />
          <SelectPlayer player={4} bg="bg-orange" nameInput="player4" />
        </fieldset>
        <button>Start</button>
      </form>
    </>
  )
}

export default EnteringPlayers;