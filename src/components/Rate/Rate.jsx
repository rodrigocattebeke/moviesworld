import { Star } from "@/components/icons/Star";
import { StarFilled } from "@/components/icons/StarFilled";
import styles from "./Rate.module.css";
export const Rate = ({ rate = 10, totalVotes = 1, showVotes = true }) => {
  if (typeof rate !== "number") return console.warn("Solo se aceptan números.");
  if (rate > 10) return console.warn("La valoracion máxima es de 10.");

  const normalizeRate = (rate / 2).toFixed(1); //divide by 2 to get the rate up to 5
  const percentage = ((normalizeRate * 100) / 5).toFixed(1);
  const pathPercentage = 100 - percentage; //Subtract the percentage from 100 since the clipPath outputs from right to left

  return (
    <div className={styles.votesContainer}>
      <div className={`${styles.Rate}`}>
        <div className={`${styles.vote}`}>
          <p>{normalizeRate}</p>
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
      {showVotes ? <p className="m-0">{totalVotes} votos</p> : ""}
    </div>
  );
};
