"use client";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

export const MovieList = ({ movies = [], mode = "", type = undefined }) => {
  if (movies.length == 0) console.error("No se aceptan arrays vacíos.");
  if (!type) return console.error("Se debe de especificar el tipo. (peliculas, series)");

  return movies.length == 0 ? (
    <h3>No hay resultados para la búsqueda.</h3>
  ) : (
    <section className={`${styles.moviesContainer} container-xl`}>
      {movies.map((movie, i) => {
        return <MovieCard movie={movie} mode={mode} key={i} type={type} />;
      })}
    </section>
  );
};
