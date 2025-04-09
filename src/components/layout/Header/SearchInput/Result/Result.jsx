import styles from "./Result.module.css";

export const Result = ({ movie = null }) => {
  if (!movie) return console.error("Se necesita pasar datos de una pelicula");

  return (
    <div className={styles.result}>
      <div className={`${styles.imgContainer}`}>
        <img src="#" />
      </div>
      <div className={`${styles.descriptionContainer}`}>
        <p>{movie.title || ""}</p>
        <small>{movie.release_date || ""}</small>
      </div>
    </div>
  );
};
