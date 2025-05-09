import { Star } from "@/components/icons/Star";
import { StarFilled } from "@/components/icons/StarFilled";
import styles from "./Rate.module.css";
export const Rate = ({ rate = 10, totalVotes = 1 }) => {
  if (typeof rate !== "number") return console.warn("Solo se aceptan números.");
  if (rate > 10) return console.warn("La valoracion máxima es de 10.");

  const pathPercentage = ((10 - rate) * 10).toFixed(2); //multiply with 10 for get the percentage

  return (
    <div className={styles.votesContainer}>
      <div className={`${styles.Rate}`}>
        <div className={`${styles.vote}`}>
          <p>{rate.toFixed(1)}</p>
        </div>
        <div className={`${styles.starsContainer}`}>
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
      </div>
      <p className="m-0">{totalVotes} votos</p>
    </div>
  );
};
