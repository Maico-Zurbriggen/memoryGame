const ResultsTable = ({ players }) => {
  return (
    <table>
      <tbody>
        {players.map((player, j) => (
          <tr key={j}>
            <th className="resalt-text names">{player.name}:</th>
            {Array.from({ length: player.points }).map((_, i) => (
              <td key={i} className={`points-indicator ${player.bg}`}></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
