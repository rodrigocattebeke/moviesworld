"use client";
import styles from "./buscar.module.css";
import videoSettingsIcon from "@/assets/icons/video_settings.svg";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ContentList } from "@/components/ContentList/ContentList";
import { Loader } from "@/components/Loader/Loader";
import { Filter } from "@/components/filters/Filter/Filter";

export default function Buscar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get("q"));
  const [type, setType] = useState(searchParams.get("type") || "peliculas");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const observerRef = useRef(null);

  if (!query) return notFound();

  //Searchs types
  const searchTypes = {
    peliculas: "movie",
    series: "tv",
  };

  //Get the new query when it is change, and clear the results state
  useEffect(() => {
    const newQuery = searchParams.get("q");
    const newType = searchParams.get("type") || "peliculas";
    setQuery(newQuery);
    setType(newType);
    setResults([]);
    setIsLoading(true);
    setPage(1);
  }, [searchParams.toString()]);

  useEffect(() => {
    const getResults = async () => {
      try {
        const res = await fetch(`/api/buscar?q=${query}&page=${page}&type=${searchTypes[type]}`);
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
  }, [query, page, type]);

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

  //On search type change
  const onTypeChange = (type) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("type", type);
    router.push(`?${params.toString()}`);
  };
  return (
    <section className={`container position-relative mt-3`}>
      <div className={styles.container}>
        <div className="container d-flex flex-row p-0">
          <h2 className={`${styles.title}`}>Resultados de busqueda para: {query}</h2>
        </div>
      </div>
      <div className={`${styles.resultsContainer} container`}>
        <Filter title="Tipo" icon={videoSettingsIcon} onFilterChange={onTypeChange} availableFilters={Object.keys(searchTypes)} selected={type} />
        {isLoading ? (
          <Loader />
        ) : !results ? (
          <h3>Ocurrio un error al hacer la búsqueda.</h3>
        ) : (
          <>
            <ContentList contentList={results} mode="search" type={type} />
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
