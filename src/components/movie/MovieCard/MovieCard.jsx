import Image from "next/image";
import React from "react";
import styles from "./MovieCard.module.css";
import { MovieRate } from "./MovieRate/MovieRate";
import { getPosterUrl } from "@/utils/getPosterUrl";
import Link from "next/link";
import { titleToSlug } from "@/utils/titleToSlug";

export const MovieCard = ({ movie = undefined, mode = "", type = null }) => {
  if (!movie) return console.error("Se debe de pasar una pelicula o serie.");
  if (!type) return console.error("Se debe de pasar un tipo. Disponibles: Series, Peliculas");
  const imageUrl = getPosterUrl(movie.poster_path);
  const slug = titleToSlug(movie.title);
  const url = `/${type == "series" ? "serie" : "pelicula"}/${slug}-${movie.id}`;

  return (
    <Link href={url}>
      <div className={`${styles.cardContainer} ${mode == "search" ? styles.searchResultCard : ""}`}>
        <div className={`${styles.cardImgContainer}`}>
          <Image src={imageUrl} width={150} height={225} alt={`Poster de la película ${movie.title}`} sizes="(max-width: 380px) 80vw, (max-width: 540px) 45vw, (max-width:750px) 33vw, (max-width: 940px) 24vw, (max-width: 1200px) 20vw, 15vw" />
        </div>
        <div className={`${mode == "search" ? styles.hideMovieTitle : "d-none"}`}>
          <p>{movie.title}</p>
        </div>
        <div className={`${styles.movieInfoContainer} ${mode == "search" ? "d-none" : ""}`}>
          <p className={`${styles.movieTitle}`}>{movie.title}</p>
          <MovieRate rate={movie.vote_average} />
        </div>
      </div>
    </Link>
  );
};
