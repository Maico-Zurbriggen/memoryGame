import { Player, Card } from "./components";
import './Panel.css'

const Panel = ({ player1, player2, player3, player4 }) => {
    return (
        <section className="panel hidden" id="panel">
        <ul className="players">
            <Player name={player1} bg="bg-blue" />
            <Player name={player2} bg="bg-red" />
            <Player name={player3} bg="bg-green" />
            <Player name={player4} bg="bg-orange" />
        </ul>
        <table>
            <tbody>
                <tr>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </tr>
                <tr>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </tr>
                <tr>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </tr>
                <tr>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </tr>
                <tr>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </tr>
            </tbody>
        </table>
        </section>
    )
}

export default Panel;