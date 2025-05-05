"use client";

import { getBackdropUrl } from "@/utils/getBackdropUrl";
import { getPosterUrl } from "@/utils/getPosterUrl";

import styles from "./MovieInformation.module.css";
import Image from "next/image";
import { useState } from "react";
import { MovieRate } from "./MovieRate/MovieRate";

export const MovieInformationView = ({ movie = {} }) => {
  if (Object.keys(movie).length == 0) return console.error("El objeto pasado está vacío.");

  const [showMore, setShowMore] = useState(false);

  const handleShowClick = () => {
    setShowMore(!showMore);
  };

  const moviePoster = getPosterUrl(movie.poster_path);
  const movieBackdrop = getBackdropUrl(movie.backdrop_path);
  const prodCompaniesString = movie.production_companies ? movie.production_companies.map((comp) => comp.name).join(", ") : undefined;

  return (
    <section className="container-xl py-4 position-relative">
      <div className={styles.backdropImageContainer}>
        <Image src={movieBackdrop} width={900} height={290} sizes="100vw" alt={`Banner de la película ${movie.title}`} className={styles.backdropImage} />
      </div>
      <div className={`${styles.container} container`}>
        <div className="row p-0 row-gap-4">
          <div className="col-12 col-sm-4 d-flex justify-content-center">
            <Image src={moviePoster} width={150} height={230} sizes={"25vw"} alt={`Póster de la película ${movie.title}`} className={styles.posterImage} />
          </div>
          <div className="col-12 col-sm-8 d-flex flex-column gap-3">
            <div className={`${styles.movieHeader}  text-center text-sm-start`}>
              <h2>{movie.title}</h2>
              {prodCompaniesString ? <small>Producido por: {prodCompaniesString} </small> : ""}
            </div>
            <div className={styles.movieInformation}>
              <div className={`d-flex gap-2 justify-content-center justify-content-sm-start`}>
                <p>{movie.release_date.split("-")[0]}</p>
                <p>{movie.runtime}min</p>
                <p>{movie.genres.map((g) => g.name).join(", ")}</p>
              </div>
              <div className={"d-flex justify-content-center justify-content-sm-start"}>
                <MovieRate rate={movie.vote_average} totalVotes={movie.vote_count} />
              </div>
            </div>
            <div className={styles.movieDescription}>
              <p className={`${styles.overview} ${showMore ? styles.active : ""}`}>{movie.overview}</p>
              <p className={styles.showMore} onClick={handleShowClick}>
                {showMore ? "Ver menos" : "Ver más"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
