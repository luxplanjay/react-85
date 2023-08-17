export const SearchBar = () => {
  return (
    <div>
      <input type="text" placeholder="Topic filter" />
      <select>
        <option value="">Beginner</option>
        <option value="">Intermediate</option>
        <option value="">Advanced</option>
      </select>
    </div>
  );
};
