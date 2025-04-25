import sort from "@/assets/icons/sort.svg";
import movie from "@/assets/icons/movie.svg";
import arrowDropDown from "@/assets/icons/arrow_drop_down.svg";
import styles from "./Filter.module.css";
import Image from "next/image";
export const Filter = () => {
  return (
    <div className="container-xxl p-0 d-flex gap-3 flex-wrap">
      <div className={`${styles.singleFilterContainer}`}>
        <div className={styles.filterTitleContainer}>
          <Image src={sort} alt="Orden" />
          <p>Orden</p>
        </div>
        <div className={`${styles.filterSelectorContainer}`}>
          <p>2 seleccionados</p>
          <Image src={arrowDropDown} alt="Flecha dropdown" />
        </div>
      </div>
      <div className={styles.singleFilterContainer}>
        <div className={styles.filterTitleContainer}>
          <Image src={movie} alt="Géneros" />
          <p>Géneros</p>
        </div>
        <div className={styles.filterSelectorContainer}>
          <p>2 seleccionados</p>
          <Image src={arrowDropDown} alt="Flecha dropdown" />
        </div>
      </div>
    </div>
  );
};
