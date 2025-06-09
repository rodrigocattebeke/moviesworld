"use client";

import { getBackdropUrl } from "@/utils/getBackdropUrl";
import { getPosterUrl } from "@/utils/getPosterUrl";
import styles from "./ContentInformation.module.css";
import Image from "next/image";
import { useState } from "react";
import { Rate } from "@/components/Rate/Rate";
import { AddToFavorite } from "@/components/AddToFavorite/AddToFavorite";

export const ContentInformationView = ({ type = undefined, content = {} }) => {
  if (Object.keys(content).length == 0) return console.error("El objeto pasado está vacío.");
  if (!content) return console.error("Se debe de pasar una pelicula o serie.");
  if (!type) return console.error("Se debe de pasar un tipo. Disponibles: serie, pelicula");
  if (type !== "serie" && type !== "pelicula") return console.error("El tipo pasado es incorrecto. Tipos validos: serie - pelicula");

  const [showMore, setShowMore] = useState(false);

  const handleShowClick = () => {
    setShowMore(!showMore);
  };

  //Normalize
  const title = type == "serie" ? content.name : content.title;
  const contentPoster = getPosterUrl(content.poster_path);
  const contentBackdrop = getBackdropUrl(content.backdrop_path);
  // // Producers
  let prods = "";
  if (type == "pelicula") {
    prods = content.production_companies ? content.production_companies.map((comp) => comp.name).join(", ") : undefined;
  } else if (type == "serie") {
    prods = content.created_by ? content.created_by.map((creator) => creator.name).join(", ") : undefined;
  }

  return (
    <section className="container-xl py-4 position-relative">
      <div className={styles.backdropImageContainer}>
        <Image src={contentBackdrop} width={900} height={290} sizes="100vw" alt={`Banner de la película ${content.title}`} className={styles.backdropImage} />
      </div>
      <div className={`${styles.container} container`}>
        <div className="row p-0 row-gap-4">
          <div className="col-12 col-sm-4 d-flex justify-content-center">
            <div className={styles.contentImgContainer}>
              <div className={styles.addToFavoritesContainer}>
                <AddToFavorite type={type} id={content.id} />
              </div>
              <Image src={contentPoster} width={150} height={230} sizes={"25vw"} alt={`Póster de la película ${title}`} className={styles.posterImage} />
            </div>
          </div>
          <div className="col-12 col-sm-8 d-flex flex-column gap-3">
            <div className={`${styles.contentHeader}  text-center text-sm-start`}>
              <h2>{title}</h2>
              {prods ? <small>Producido por: {prods} </small> : ""}
            </div>
            <div className={styles.contentInformation}>
              <div className={`d-flex gap-2 justify-content-center justify-content-sm-start`}>
                {type !== "pelicula" ? (
                  ""
                ) : (
                  <>
                    <p>{content.release_date.split("-")[0]}</p>
                    <p>{content.runtime}min</p>
                  </>
                )}
                <p>{content.genres.map((g) => g.name).join(", ")}</p>
              </div>
              <div className={"d-flex justify-content-center justify-content-sm-start"}>
                <Rate rate={content.vote_average} totalVotes={content.vote_count} />
              </div>
            </div>
            <div className={styles.contentDescription}>
              <p className={`${styles.overview} ${showMore ? styles.active : ""}`}>{content.overview}</p>
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
