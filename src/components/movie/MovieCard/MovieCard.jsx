import Image from "next/image";
import React from "react";
import styles from "./MovieCard.module.css";
import { getPosterImgUrl } from "@/helpers/moviesInfo";
import { MovieRate } from "./MovieRate/MovieRate";

export const MovieCard = ({ movieData }) => {
  const imageUrl = getPosterImgUrl(movieData.poster_path);

  return (
    <div className={`${styles.cardContainer}`}>
      <div className={`${styles.cardImgContainer}`}>
        <Image src={imageUrl} fill="true" objectFit="contain" alt={`Poster de la película ${movieData.title}`} />
      </div>
      <div className={`${styles.movieInfoContainer}`}>
        <p className={`${styles.movieTitle}`}>{movieData.original_title}</p>
        <MovieRate rate={movieData.vote_average} />
      </div>
    </div>
  );
};
