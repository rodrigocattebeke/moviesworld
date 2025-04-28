import sort from "@/assets/icons/sort.svg";
import movie from "@/assets/icons/movie.svg";
import arrowDropDown from "@/assets/icons/arrow_drop_down.svg";
import styles from "./Filter.module.css";
import Image from "next/image";
import { useState } from "react";
export const Filter = () => {
  const [order, setOrder] = useState("desc");
  const [genre, setGenre] = useState("");

  const orderOptions = [
    { title: "descendente", value: "desc" },
    { title: "ascendente", value: "asc" },
  ];

  const genresOptions = [
    { title: "Acción", value: "action" },
    { title: "Suspenso", value: "suspense" },
  ];

  return (
    <div className="container-xxl p-0 d-flex gap-3 flex-wrap">
      <div className={`${styles.singleFilterContainer}`}>
        <div className={styles.filterTitleContainer}>
          <Image src={sort} alt="Orden" />
          <p>Orden</p>
        </div>
        <div className={styles.filterSelectorContainer} data-bs-toggle="dropdown" aria-expanded="false">
          <p>{order}</p>
          <Image src={arrowDropDown} alt="Flecha dropdown" />
        </div>
        <ul className={`${styles.dropdownMenu} dropdown-menu `}>
          {orderOptions.map((order, i) => (
            <li key={i} onClick={() => setOrder(order.value)}>
              <p className="dropdown-item">{order.title}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${styles.singleFilterContainer} dropdown`}>
        <div className={styles.filterTitleContainer}>
          <Image src={movie} alt="Géneros" />
          <p>Géneros</p>
        </div>
        <div className={styles.filterSelectorContainer} data-bs-toggle="dropdown" aria-expanded="false">
          <p>{genre}</p>
          <Image src={arrowDropDown} alt="Flecha dropdown" />
        </div>
        <ul className={`${styles.dropdownMenu} dropdown-menu`}>
          {genresOptions.map((genre, i) => (
            <li onClick={() => setGenre(genre.value)} key={i}>
              <p className="dropdown-item">{genre.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
