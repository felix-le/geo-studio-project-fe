import { useState } from 'react';

const useRequest = ({ request }) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [wasExecuted, setWasExecuted] = useState(false);

  async function execute(...args) {
    setIsRunning(true);
    try {
      const result = await request(...args);
      if (result.data) {
        setResult(result.data);
      } else {
        setResult(result);
      }
      setError(null);
      setIsRunning(false);
      setWasExecuted(true);
      return result;
    } catch (err) {
      setError(err.data);
      setIsRunning(false);
      setWasExecuted(true);
      return Promise.reject(err);
    }
  }

  function reset() {
    setResult(null);
    setError(null);
    setIsRunning(false);
    setWasExecuted(false);
  }

  return {
    execute,
    reset,
    result,
    error,
    isRunning,
    wasExecuted,
  };
};

export default useRequest;
