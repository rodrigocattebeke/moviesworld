import { getPosterUrl } from "@/utils/getPosterUrl";
import styles from "./Result.module.css";
import Image from "next/image";
import Link from "next/link";
import { titleToSlug } from "@/utils/titleToSlug";

export const Result = ({ content = null, onClick, type = undefined }) => {
  if (!content) return console.error("Se necesita pasar datos de una pelicula");
  if (!type) return console.error(`Se necesita pasar el parametro "type". Los disponibles son: serie, movie`);
  if (type !== "movie" && type !== "serie") return console.error(`Los disponibles son: serie, movie`);

  const posterUrl = getPosterUrl(content.poster_path);
  const title = type == "movie" ? content.title : content.name;
  const slug = titleToSlug(title);
  const contentId = content.id;
  const urlType = type == "movie" ? "pelicula" : "serie";

  return (
    <Link href={`/${urlType}/${slug}-${contentId}`} onClick={onClick}>
      <div className={styles.result}>
        <div className={`${styles.imgContainer}`}>
          <Image src={posterUrl} alt={`Poster de ${title}`} width={50} height={20} loading="lazy" />
        </div>
        <div className={`${styles.descriptionContainer}`}>
          <p>{title || ""}</p>
          {type == "movie" ? <small>{content.release_date ? content.release_date.split("-")[0] : ""}</small> : ""}
        </div>
      </div>
    </Link>
  );
};
