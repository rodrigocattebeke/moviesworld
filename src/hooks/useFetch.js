import { useEffect, useState } from "react";

export default function useFetch(url = undefined) {
  if (!url) console.error("Se debe de especificar la url para el fetch.");

  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setData(undefined);
      setError(undefined);
      setIsError(false);
      setIsLoading(true);
      setIsSuccess(false);
      try {
        const res = await fetch(url, { signal: controller.signal });
        const data = await res.json();
        setData(data);
        setIsSuccess(true);
      } catch (error) {
        console.error(error);
        setIsError(true);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    // 🧹 Cleanup
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, error, isLoading, isError, isSuccess };
}
