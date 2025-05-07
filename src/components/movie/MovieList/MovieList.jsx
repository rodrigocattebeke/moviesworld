"use client";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

export const MovieList = ({ movies = [], mode = "", type = undefined }) => {
  if (movies.length == 0) console.error("No se aceptan arrays vacíos.");
  if (!type) return console.error("Se debe de especificar el tipo. (peliculas, series)");

  const normalizeMedia = (media, type) => {
    return {
      id: media.id,
      poster_path: media.poster_path,
      title: type == "series" ? media.name : media.title,
      vote_average: media.vote_average,
    };
  };
  return movies.length == 0 ? (
    <h3>No hay resultados para la búsqueda.</h3>
  ) : (
    <section className={`${styles.moviesContainer} container-xl`}>
      {movies.map((movie, i) => {
        const media = normalizeMedia(movie, type);
        return <MovieCard movie={media} mode={mode} key={i} />;
      })}
    </section>
  );
};
