const SelectPlayer = ({ player, bg, nameInput }) => {
  return (
    <label className="flex-center">
      <span className={`color-indicator ${bg}`}></span>
      <input type="text" placeholder={`Player ${player}`} id={nameInput} />
    </label>
  );
};

export default SelectPlayer;
