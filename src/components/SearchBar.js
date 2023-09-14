import { TopicFilter } from './TopicFilter';
import { LevelFilter } from './LevelFilter';
import { useQueryParams } from 'hooks/useQueryParams';

export const SearchBar = () => {
  const { resetFilters } = useQueryParams();

  return (
    <div>
      <TopicFilter />
      <LevelFilter />
      <button onClick={resetFilters}>Reset filters</button>
    </div>
  );
};
