"use client";

import { fetchFromTMDB } from "@/lib/fetchFromTMDB";
import { useEffect, useState } from "react";

export const MoviesPage = ({ title = "", url = undefined }) => {
  if (!url) return console.error("Debes de especificar una url de la api para obtener las peliculas.");

  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getResults = async () => {
      try {
        const res = await fetchFromTMDB(url, `page=${page}`);
        const data = res.json();
        setResults(data.results);
      } catch (error) {
        console.error(error);
        setResults(null);
      } finally {
        isLoading(false);
      }
    };
  }, [url]);

  return (
    <section className="container-xxl">
      <h3>{title}</h3>
      <div className="row p-0">
        <aside className="col-4"></aside>
        {isLoading ? <p>Cargando...</p> : !results || results.length == 0 ? <p>No se encontraron resultados</p> : <div className="col-8"></div>}
      </div>
    </section>
  );
};
