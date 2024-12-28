import './App.css'
import { Panel, Button, EnteringPlayers } from './components'
import { useModalContext } from './components/EnteringPlayers/context/UseModalContext'

const cards = [[1, 1, 2, 2, 3], [3, 4, 4, 5, 5], [6, 6, 7, 7, 8], [8, 9, 9, 10, 10], [11, 11, 12, 12, 13], [13, 14, 14, 15, 15]]

function App() {
  const { setState } = useModalContext();

  const play = () => {
    setState(true);
  }

  return (
    <div>
      <h1>Memory Game</h1>
      <Panel cards={cards} />
      <Button text="JUGAR" onClick={play} />
      <EnteringPlayers>
        <h1>Se Abrio</h1>
      </EnteringPlayers>
    </div>
  )
}

export default App