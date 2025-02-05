/*
Este componente muestra los resultados finales de los jugadores en el componente EndScreen
*/

const ResultsTable = ({ players }) => {
  return (
    <>
      {players.map((player, j) => (
        <div key={j} className="w-auto results-container">
          <p className="resalt-text name">{player.name}:</p>
          {Array.from({ length: player.points }).map((_, i) => (
            <span key={i} className={`points-indicator ${player.bg}`} ></span>
          ))}
        </div>
      ))}
    </>
  );
};

export default ResultsTable;
