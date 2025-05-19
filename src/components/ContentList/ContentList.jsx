"use client";
import { MovieCard } from "@/components/movie/MovieCard/MovieCard";
import styles from "./ContentList.module.css";

export const ContentList = ({ contentList = [], mode = "", type = undefined }) => {
  if (contentList.length == 0) console.error("No se aceptan arrays vacíos.");
  if (!type) return console.error("Se debe de especificar el tipo. (peliculas, series)");

  return contentList.length == 0 ? (
    <h3>No hay resultados para la búsqueda.</h3>
  ) : (
    <section className={`${styles.moviesContainer} container-xl`}>
      {contentList.map((movie, i) => {
        return <MovieCard movie={movie} mode={mode} key={i} type={type} />;
      })}
    </section>
  );
};
