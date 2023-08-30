export const SearchBar = ({
  level,
  topic,
  onChangeLevel,
  onChangeTopic,
  onReset,
}) => {
  return (
    <div>
      <input
        type="text"
        value={topic}
        onChange={evt => onChangeTopic(evt.target.value)}
        placeholder="Topic filter"
      />
      <select value={level} onChange={evt => onChangeLevel(evt.target.value)}>
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <button onClick={onReset}>Reset filters</button>
    </div>
  );
};
