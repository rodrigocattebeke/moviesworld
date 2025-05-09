"use client";

import { getBackdropUrl } from "@/utils/getBackdropUrl";
import { getPosterUrl } from "@/utils/getPosterUrl";
import styles from "./SerieInformationView.module.css";
import Image from "next/image";
import { useState } from "react";
import { Rate } from "@/components/Rate/Rate";

export const SerieInformationView = ({ serie = {} }) => {
  if (Object.keys(serie).length == 0) return console.error("El objeto pasado está vacío.");

  const [showMore, setShowMore] = useState(false);

  const handleShowClick = () => {
    setShowMore(!showMore);
  };

  const seriePoster = getPosterUrl(serie.poster_path);
  const serieBackdrop = getBackdropUrl(serie.backdrop_path);
  const creatorsString = serie.created_by ? serie.created_by.map((creator) => creator.name).join(", ") : undefined;

  return (
    <section className="container-xl py-4 position-relative">
      <div className={styles.backdropImageContainer}>
        <Image src={serieBackdrop} width={900} height={290} sizes="100vw" alt={`Banner de la película ${serie.title}`} className={styles.backdropImage} />
      </div>
      <div className={`${styles.container} container`}>
        <div className="row p-0 row-gap-4">
          <div className="col-12 col-sm-4 d-flex justify-content-center">
            <Image src={seriePoster} width={150} height={230} sizes={"25vw"} alt={`Póster de la serie ${serie.name}`} className={styles.posterImage} />
          </div>
          <div className="col-12 col-sm-8 d-flex flex-column gap-3">
            <div className={`${styles.serieHeader}  text-center text-sm-start`}>
              <h2>{serie.name}</h2>
              {creatorsString ? <small>Creado por: {creatorsString} </small> : ""}
            </div>
            <div className={styles.serieInformation}>
              <div className={`d-flex gap-2 justify-content-center justify-content-sm-start`}>
                <p>Géneros{serie.genres.map((g) => g.name).join(", ")}</p>
              </div>
              <div className={"d-flex justify-content-center justify-content-sm-start"}>
                <Rate rate={serie.vote_average} totalVotes={serie.vote_count} />
              </div>
            </div>
            <div className={styles.serieDescription}>
              <p className={`${styles.overview} ${showMore ? styles.active : ""}`}>{serie.overview}</p>
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
