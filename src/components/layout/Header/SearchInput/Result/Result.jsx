import { getPosterUrl } from "@/utils/getPosterUrl";
import styles from "./Result.module.css";
import Image from "next/image";

export const Result = ({ movie = null }) => {
  if (!movie) return console.error("Se necesita pasar datos de una pelicula");

  const posterUrl = getPosterUrl(movie.poster_path);
  return (
    <div className={styles.result}>
      <div className={`${styles.imgContainer}`}>
        <Image src={posterUrl} alt={`Poster de ${movie.title}`} width={50} height={20} loading="lazy" />
      </div>
      <div className={`${styles.descriptionContainer}`}>
        <p>{movie.title || ""}</p>
        <small>{movie.release_date.split("-")[0] || ""}</small>
      </div>
    </div>
  );
};
