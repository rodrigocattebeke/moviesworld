"use client";

import { notFound, useSearchParams } from "next/navigation";
import styles from "./buscar.module.css";
import { useEffect, useRef, useState } from "react";
import { MovieList } from "@/components/movie/MovieList/MovieList";
import { Loader } from "@/components/Loader/Loader";

export default function Buscar() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q"));
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const observerRef = useRef(null);

  if (!query) return notFound();

  //Get the new query when it is change, and clear the results state
  useEffect(() => {
    const newQuery = searchParams.get("q");
    setQuery(newQuery);
    setResults([]);
    setIsLoading(true);
  }, [searchParams.get("q")]);

  useEffect(() => {
    const getResults = async () => {
      try {
        const res = await fetch(`/api/buscar?q=${query}&page=${page}`);
        const results = await res.json();
        setResults((prevResults) => [...prevResults, ...results.results]);
        setTotalPages(results.total_pages);
      } catch (error) {
        console.log(error);
        setResults(null);
      } finally {
        setIsLoading(false);
      }
    };
    getResults();
  }, [query, page]);

  //Observer config
  const options = {
    threshold: "0.1",
  };
  const callback = (entries) => {
    if (entries[0].isIntersecting) {
      if (page <= totalPages) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
  }, [results]);

  return (
    <section className={`container position-relative mt-3`}>
      <div className={styles.container}>
        <div className="container d-flex flex-row p-0">
          <h2 className={`${styles.title}`}>Resultados de busqueda para: {query}</h2>
        </div>
      </div>
      <div className={`${styles.resultsContainer} container`}>
        {isLoading ? (
          <Loader />
        ) : !results ? (
          <h3>Ocurrio un error al hacer la búsqueda.</h3>
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
}
