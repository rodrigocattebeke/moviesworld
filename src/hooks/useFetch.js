import { useEffect, useRef, useState } from "react";

export default function useFetch(url = undefined) {
  if (!url) console.error("Se debe de especificar la url para el fetch.");

  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setData(undefined);
      setError(undefined);
      setIsError(false);
      setIsLoading(true);
      setIsSuccess(false);

      setIsMounted(true);

      try {
        const res = await fetch(url, { signal: controller.signal });
        const data = await res.json();
        if (isMounted) {
          setData(data);
          setIsSuccess(true);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error);
          setIsError(true);
          setError(error);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    fetchData();

    // Cleanup
    return () => {
      setIsMounted(false);
      controller.abort();
    };
  }, [url, isMounted]);

  return { data, error, isLoading, isError, isSuccess };
}
