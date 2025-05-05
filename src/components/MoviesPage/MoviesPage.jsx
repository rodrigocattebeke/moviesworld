"use client";

import { useEffect, useRef, useState } from "react";
import { MovieList } from "../movie/MovieList/MovieList";
import { Loader } from "../Loader/Loader";
import { Filter } from "../filters/Filter/Filter";
import { useRouter, useSearchParams } from "next/navigation";

export const MoviesPage = ({ title = "", url = undefined, sectionFilter = undefined }) => {
  if (!url) return console.error("Debes de especificar una url de la api para obtener las peliculas.");
  if (!sectionFilter) return console.error("Se debe de especificar el filtro de la sección. Filtros validos: popularity");

  const orderOptions = {
    ascendente: `${sectionFilter}.asc`,
    descendente: `${sectionFilter}.desc`,
  };

  const navigation = useRouter();
  const searchParams = useSearchParams();
  const initialOrder = searchParams.get("orden") || "descendente";
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [orderSelected, setOrderSelected] = useState(orderOptions[initialOrder] || `${sectionFilter}.desc`);
  const observerRef = useRef(null);

  //Observer config
  const options = {
    threshold: "0.1",
  };
  const callback = (entries) => {
    if (entries[0].isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
  }, [results]);

  //Get movies

  useEffect(() => {
    const getResults = async () => {
      try {
        const res = await fetch(`${url}?page=${page}&sort_by=${orderSelected}`);
        const data = await res.json();
        setResults([...results, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error(error);
        setResults(null);
      } finally {
        setIsLoading(false);
      }
    };
    getResults();
  }, [searchParams.toString(), page]);

  //On order change

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
        {isLoading ? (
          <Loader />
        ) : !results || results.length == 0 ? (
          <p>No se encontraron resultados</p>
        ) : (
          <>
            <MovieList movies={results} mode="search" />
            {/* If the total pages is more than 1, show loader with observer for infinite scroll */}
            {totalPages > 1 ? (
              <div className="mt-3" ref={observerRef}>
                <Loader />
              </div>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </section>
  );
};
