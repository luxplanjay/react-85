import { useRef } from 'react';
import axios from 'axios';

// ref
// 1 click -> if() -> false -> controller 1 -> http
// 2 click -> if() -> true -> cancel 1 -> controller 2 -> http
// 3 click -> if() -> true -> cancel 2 -> controller 3 -> http

export const HttpReqAbortOnEvent = () => {
  const controllerRef = useRef();

  const fetchData = async () => {
    // Если ЕСТЬ предыдущий запрос - ОТМЕНИТЬ
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    // Создать новый контроллер
    controllerRef.current = new AbortController();

    try {
      const url = 'https://jsonplaceholder.typicode.com/todos';
      await axios.get(url, {
        signal: controllerRef.current.signal,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Make request</button>
      <button onClick={() => controllerRef.current.abort()}>Cancel req</button>
    </div>
  );
};
