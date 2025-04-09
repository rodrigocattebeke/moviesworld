"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./SearchInput.module.css";
import { Search } from "@/components/icons/Search";
import { Result } from "./Result/Result";

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const timeoutRef = useRef();

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //Search input value on change
  useEffect(() => {
    if (/^\s*$/.test(inputValue)) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/buscar?q=${encodeURIComponent(inputValue.trim())}`);
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.warn(error);
        setIsSuccess(true);
      }
    }, 800);
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [inputValue]);

  return (
    <>
      <form className={styles.form}>
        <Search width={"1.25rem"} height={"1.25rem"} />
        <input type="search" id="searchInput" className={`${styles.searchInput}`} placeholder="Encuentra series y películas" onChange={onInputChange} value={inputValue} />

        {/* Search result modal */}

        {!movies ? (
          ""
        ) : isSuccess ? (
          <p>Ocurrio un error al buscar la película.</p>
        ) : (
          <div className={styles.container}>
            <div className={styles.resultContainer}>{movies.length == 0 ? <p>No hay resultados para la busqueda</p> : movies.map((movie) => <Result movie={movie} />)}</div>
          </div>
        )}

        {/* Backdrop */}

        {/* <div className={`${styles.backdrop} ${styles.active}`}></div> */}
      </form>
    </>
  );
};
