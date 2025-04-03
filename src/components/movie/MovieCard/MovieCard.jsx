import Image from "next/image";
import React from "react";
import styles from "./MovieCard.module.css";
import { MovieRate } from "./MovieRate/MovieRate";
import { getPosterUrl } from "@/utils/getPosterUrl";

export const MovieCard = ({ movieData }) => {
  const imageUrl = getPosterUrl(movieData.poster_path);

  return (
    <div className={`${styles.cardContainer}`}>
      <div className={`${styles.cardImgContainer}`}>
        <Image src={imageUrl} width={150} height={265} alt={`Poster de la película ${movieData.title}`} sizes="(max-width: 380px) 80vw, (max-width: 540px) 45vw, (max-width:750px) 33vw, (max-width: 940px) 24vw, (max-width: 1200px) 20vw, 15vw" />
      </div>
      <div className={`${styles.movieInfoContainer}`}>
        <p className={`${styles.movieTitle}`}>{movieData.title}</p>
        <MovieRate rate={movieData.vote_average} />
      </div>
    </div>
  );
};
