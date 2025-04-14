"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./SearchInput.module.css";
import { Search } from "@/components/icons/Search";
import { Result } from "./Result/Result";
import { useRouter } from "next/navigation";

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState(undefined);
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
        const res = await fetch(`/api/buscar?q=${encodeURIComponent(inputValue.trim())}&page=1`);
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.warn(error);
        setIsSuccess(true);
      }
    }, 1000);
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [inputValue]);

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Search width={"1.25rem"} height={"1.25rem"} />
        <input type="search" id="searchInput" name="searchInput" className={`${styles.searchInput}`} placeholder="Encuentra series y películas" onChange={handleInputChange} value={inputValue} />

        {/* Search result modal */}

        {!movies ? (
          ""
        ) : isSuccess ? (
          <p>Ocurrio un error al buscar la película.</p>
        ) : (
          <div className={styles.container}>
            <div className={styles.resultContainer}>{movies.length == 0 ? <p>No hay resultados para la busqueda</p> : movies.map((movie, i) => <Result movie={movie} key={i} />)}</div>
            {movies.length}
          </div>
        )}

        {/* Backdrop */}

        {/* <div className={`${styles.backdrop} ${styles.active}`}></div> */}
      </form>
    </>
  );
};
