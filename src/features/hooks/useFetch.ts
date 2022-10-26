import { useEffect, useState } from "react";

const useFetch = () => {
  const [status, setStatus] = useState<{
    status: number | null;
    error: string;
  }>({ status: null, error: "" });

  const controller = new AbortController();
  const signal = controller.signal;

  const runFetch = async <T>(
    url: string,
    options: RequestInit
  ): Promise<T | null> => {
    let response = new Response();
    try {
      response = await fetch(url, { ...options, signal });
      setStatus((prevState) => ({ ...prevState, status: response.status }));
      return response.json();
    } catch (e) {
      setStatus((prevState) => ({
        ...prevState,
        status: response.status,
        error: `${e}`,
      }));
      return null;
    }
  };

  const abortFetch = () => controller.abort();

  useEffect(() => abortFetch, []);

  return { runFetch, abortFetch, status };
};

export default useFetch;
