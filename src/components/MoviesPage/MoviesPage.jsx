"use client";

import { fetchFromTMDB } from "@/lib/fetchFromTMDB";
import { useEffect, useState } from "react";
import { MovieList } from "../movie/MovieList/MovieList";
import { Loader } from "../Loader/Loader";

export const MoviesPage = ({ title = "", url = undefined, initialPage = 1 }) => {
  if (!url) return console.error("Debes de especificar una url de la api para obtener las peliculas.");

  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    const getResults = async () => {
      try {
        const res = await fetch(`${url}?page=${page}`);
        const data = await res.json();
        console.log(data);
        setResults(data.results);
      } catch (error) {
        console.error(error);
        setResults(null);
      } finally {
        setIsLoading(false);
      }
    };
    getResults();
  }, [url]);

  return (
    <section className="container-xxl">
      <h3>{title}</h3>
      <div className="row p-0">
        <aside className="col-0 col-lg-3"></aside>
        <div className="col-12 col-lg-9" style={{ minHeight: "85vh" }}>
          {isLoading ? <Loader /> : !results || results.length == 0 ? <p>No se encontraron resultados</p> : <MovieList movies={results} mode="search" />}
        </div>
      </div>
    </section>
  );
};
