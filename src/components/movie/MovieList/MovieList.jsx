"use client";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

export const MovieList = ({ movies = [], mode = "" }) => {
  if (movies.length == 0) console.error("No se aceptan arrays vacíos.");

  return movies.length == 0 ? (
    <h3>No hay resultados para la búsqueda.</h3>
  ) : (
    <section className={`${styles.moviesContainer} container-xl`}>
      {movies.map((movie, i) => (
        <MovieCard movie={movie} mode={mode} key={i} />
      ))}
    </section>
  );
};
