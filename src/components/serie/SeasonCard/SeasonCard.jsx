import Image from "next/image";
import React from "react";
import styles from "./SeasonCard.module.css";
import { getPosterUrl } from "@/utils/getPosterUrl";
import { Rate } from "@/components/Rate/Rate";

export const SeasonCard = ({ season = undefined }) => {
  if (!season) return console.error("Se debe de pasar la temporada.");
  const imageUrl = getPosterUrl(season.poster_path);
  console.log(season);
  return (
    <div className={`${styles.cardContainer}`}>
      <div className={`${styles.cardImgContainer}`}>
        <Image src={imageUrl} width={150} height={225} alt={`Poster de la película ${season.name}`} sizes="(max-width: 380px) 80vw, (max-width: 540px) 45vw, (max-width:750px) 33vw, (max-width: 940px) 24vw, (max-width: 1200px) 20vw, 15vw" />
      </div>
      <div className={styles.cardDescription}>
        <p className={styles.seasonName}>{season.name}</p>
        <Rate rate={season.vote_average} showVotes={false} />
        <div className={styles.seasonDate}>
          <p>{season.air_date.split("-")[0]}</p>
          <p>-</p>
          <p>{season.episode_count} capitulos</p>
        </div>
      </div>
    </div>
  );
};
