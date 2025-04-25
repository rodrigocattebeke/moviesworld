"use client";

import { fetchFromTMDB } from "@/lib/fetchFromTMDB";
import { useEffect, useState } from "react";
import { MovieList } from "../movie/MovieList/MovieList";
import { Loader } from "../Loader/Loader";
import { Filter } from "../filters/Filter/Filter";

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
      <div className="container-xxl">
        <Filter />
      </div>
      <div className="container" style={{ minHeight: "85vh" }}>
        {isLoading ? <Loader /> : !results || results.length == 0 ? <p>No se encontraron resultados</p> : <MovieList movies={results} mode="search" />}
      </div>
    </section>
  );
};
