const ResultsTable = ({ players }) => {
  return (
    <table>
      <tbody>
        {players.map((player, j) => (
          <tr key={j}>
            <th>{player.name}:</th>
            {Array.from({ length: player.points }).map((_, i) => (
              <td key={i} className={`${player.bg}`}></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
