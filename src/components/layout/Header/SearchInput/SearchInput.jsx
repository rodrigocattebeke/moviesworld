"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./SearchInput.module.css";
import { Search } from "@/components/icons/Search";
import { Result } from "./Result/Result";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState(undefined);
  const [series, setSeries] = useState(undefined);
  const [isSuccess, setIsSuccess] = useState(false);
  const timeoutRef = useRef();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.searchInput && e.target.searchInput.blur) e.target.searchInput.blur();
    router.push(`/buscar?q=${encodeURIComponent(inputValue)}`);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMovies(undefined);
  };

  //Search input value on change
  useEffect(() => {
    if (/^\s*$/.test(inputValue)) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      return setMovies(undefined);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(async () => {
      try {
        const [moviesRes, seriesRes] = await Promise.all([fetch(`/api/buscar?type=movie&q=${encodeURIComponent(inputValue.trim())}&page=1`), fetch(`/api/buscar?type=tv&q=${encodeURIComponent(inputValue.trim())}&page=1`)]);

        const moviesData = await moviesRes.json();
        const seriesData = await seriesRes.json();
        setMovies(moviesData.results.slice(0, 8));
        setSeries(seriesData.results.slice(0, 8));
        setIsSuccess(true);
      } catch (error) {
        console.warn(error);
        setIsSuccess(false);
      }
    }, 1000);
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [inputValue]);

  const clearContent = () => {
    setMovies(undefined);
    setSeries(undefined);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Search width={"1.25rem"} height={"1.25rem"} />
        <input type="search" id="searchInput" name="searchInput" className={`${styles.searchInput}`} placeholder="Encuentra series y películas" onChange={handleInputChange} value={inputValue} />

        {/* Search result modal */}

        {!movies || !series ? (
          ""
        ) : (
          <div className={styles.container}>
            {!isSuccess ? (
              <p>Ocurrio un error, intente de nuevo.</p>
            ) : (
              <div className={styles.resultContainer}>
                {movies.length == 0 && series.length == 0 ? (
                  <p className="m-0 ps-3 py-2">No hay resultados para la busqueda</p>
                ) : (
                  <>
                    {movies.map((movie, i) => (
                      <Result content={movie} key={i} onClick={clearContent} type={"movie"} />
                    ))}
                    {series.map((serie, i) => (
                      <Result content={serie} key={i} onClick={clearContent} type={"serie"} />
                    ))}

                    <Link href={`/buscar?q=${encodeURIComponent(inputValue.trim())}`} className={styles.showMore} onClick={clearContent}>
                      Ver todos los resultados
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </form>
      {/* Backdrop */}

      <div className={`${styles.backdrop} ${movies && series ? styles.active : ""}`} onClick={clearContent}></div>
    </>
  );
};
