import { useSearchParams } from 'react-router-dom';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get('topic') ?? '';
  const level = searchParams.get('level') ?? 'all';

  const changeTopic = newTopic => {
    searchParams.set('topic', newTopic);
    setSearchParams(searchParams);
  };

  const changeLevel = newLevel => {
    searchParams.set('level', newLevel);
    setSearchParams(searchParams);
  };

  const resetFilters = () => {
    setSearchParams({
      topic: '',
      level: 'all',
    });
  };

  return {
    topic,
    level,
    changeTopic,
    changeLevel,
    resetFilters,
  };
};
