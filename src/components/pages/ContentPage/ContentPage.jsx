"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import sort from "@/assets/icons/sort.svg";
import { ContentList } from "@/components/content/ContentList/ContentList";
import { Filter } from "@/components/filters/Filter/Filter";
import { Loader } from "@/components/Loader/Loader";

export const ContentPage = ({ title = "", url = undefined, sectionFilter = undefined, type = undefined }) => {
  if (!url) return console.error("Debes de especificar una url de la api para obtener las peliculas.");
  if (!sectionFilter) return console.error("Se debe de especificar el filtro de la sección. Filtros validos: popularity, vote_average");
  if (!type) return console.error("Se debe de especificar el tipo de datos recibido. Válidos: peliculas, series");

  const orderOptions = {
    descendente: `${sectionFilter}.desc`,
    ascendente: `${sectionFilter}.asc`,
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

  //On order change, push the query in the url and reset states

  const onOrderChange = (order) => {
    navigation.push(`?orden=${order}`);
    setOrderSelected(orderOptions[order]);
    setPage(1);
    setResults([]);
    setIsLoading(true);
  };

  return (
    <section className="container-xxl">
      <h3>{title}</h3>
      <div className="container-xxl">
        <Filter title="Orden" icon={sort} onFilterChange={onOrderChange} availableFilters={Object.keys(orderOptions)} />
      </div>
      <div className="container" style={{ minHeight: "85vh" }}>
        {isLoading ? (
          <Loader />
        ) : !results || results.length == 0 ? (
          <p>No se encontraron resultados</p>
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
};
