"use client";

import { useEffect, useState } from "react";
import { MovieList } from "../movie/MovieList/MovieList";
import { Loader } from "../Loader/Loader";
import { Filter } from "../filters/Filter/Filter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const MoviesPage = ({ title = "", url = undefined, initialPage = 1, section = undefined }) => {
  if (!url) return console.error("Debes de especificar una url de la api para obtener las peliculas.");
  if (!section) return console.error("Se debe de especificar la sección visitada. Secciones validas: top_rated, popular");

  const navigation = useRouter();
  const searchParams = useSearchParams();
  const initialOrder = searchParams.get("orden") || "descendente";

  const orderOptions = {
    ascendente: "popularity.asc",
    descendente: "popularity.desc",
  };

  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(initialPage);
  const [orderSelected, setOrderSelected] = useState(orderOptions[initialOrder] || "popularity.desc");

  useEffect(() => {
    const getResults = async () => {
      try {
        const res = await fetch(`${url}?page=${page}&sort_by=${orderSelected}`);
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
  }, [url, searchParams.toString()]);

  const onOrderChange = (order) => {
    navigation.push(`?orden=${order}`);
    setOrderSelected(orderOptions[order]);
  };

  return (
    <section className="container-xxl">
      <h3>{title}</h3>
      <div className="container-xxl">
        <Filter initialOrder={initialOrder} onOrderChange={onOrderChange} availableOrders={Object.keys(orderOptions)} />
      </div>
      <div className="container" style={{ minHeight: "85vh" }}>
        {isLoading ? <Loader /> : !results || results.length == 0 ? <p>No se encontraron resultados</p> : <MovieList movies={results} mode="search" />}
      </div>
    </section>
  );
};
