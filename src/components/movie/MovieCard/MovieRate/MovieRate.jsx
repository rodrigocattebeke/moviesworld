import { Star } from "@/components/icons/Star";
import { StarFilled } from "@/components/icons/StarFilled";
import styles from "./MovieRate.module.css";
export const MovieRate = ({ rate = 5 }) => {
  if (typeof rate !== "number") return console.warn("Solo se aceptan números.");
  if (rate > 10) return console.warn("La valoracion máxima por pelicula es de 10.");

  const normalizeRate = (rate / 2).toFixed(1); //divide by 2 to get the rate up to 5
  const percentage = ((normalizeRate * 100) / 5).toFixed(1);
  const pathPercentage = 100 - percentage; //Subtract the percentage from 100 since the clipPath outputs from right to left
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
        <p>{normalizeRate}</p>
      </div>
    </div>
  );
};
