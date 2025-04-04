"use client";

import { useSearchParams } from "next/navigation";
import styles from "./buscar.module.css";
import { useEffect, useState } from "react";

export default function Buscar() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getResults = async () => {
      const res = await fetch(`/api/buscar?q=${query}`);
      const results = await res.json();
      console.log(results);
      setResults(results);
      setIsLoading(false);
    };
    getResults();
  }, [query]);

  return (
    <section className={`container position-relative mt-3`}>
      <div className={styles.container}>
        <div className="container d-flex flex-row p-0">
          <h2 className={`${styles.title}`}>Resultados de busqueda para: {query}</h2>
        </div>
      </div>
      <div className={`${styles.resultsContainer} container`}>{isLoading ? <p>Cargando...</p> : <p>hola resultados</p>}</div>
    </section>
  );
}
