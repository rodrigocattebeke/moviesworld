import { Star } from "@/components/icons/Star";
import { StarFilled } from "@/components/icons/StarFilled";
import styles from "./MovieRate.module.css";
export const MovieRate = ({ rate = 5 }) => {
  if (typeof rate !== "number") return console.warn("Solo se aceptan números.");
  if (rate > 10) return console.warn("La valoracion máxima por pelicula es de 10.");

  const pathPercentage = ((10 - rate) * 10).toFixed(2); //multiply with 10 for get the percentage

  return (
    <div className={`${styles.movieRate}`}>
      <div className={`${styles.movieStars}`}>
        <div
          className={`${styles.starsFilled}`}
          style={{
            clipPath: `inset(0 ${pathPercentage}% 0 0)`,
          }}
        >
          <StarFilled width={"1.55rem"} height={"1.55rem"} />
          <StarFilled width={"1.55rem"} height={"1.55rem"} />
          <StarFilled width={"1.55rem"} height={"1.55rem"} />
          <StarFilled width={"1.55rem"} height={"1.55rem"} />
          <StarFilled width={"1.55rem"} height={"1.55rem"} />
        </div>
        <div className={`${styles.stars}`}>
          <Star width={"1.55rem"} height={"1.55rem"} />
          <Star width={"1.55rem"} height={"1.55rem"} />
          <Star width={"1.55rem"} height={"1.55rem"} />
          <Star width={"1.55rem"} height={"1.55rem"} />
          <Star width={"1.55rem"} height={"1.55rem"} />
        </div>
      </div>

      <div className={`${styles.movieVote}`}>
        <p>{rate.toFixed(1)}</p>
      </div>
    </div>
  );
};
