const SelectPlayer = ({ player, bg, nameInput }) => {
  return (
    <label>
      <span className={`${bg}`}></span>
      <input type="text" placeholder={`Player ${player}`} id={nameInput} />
    </label>
  );
};

export default SelectPlayer;
