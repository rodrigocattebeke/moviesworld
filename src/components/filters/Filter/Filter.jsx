"use client";
import sort from "@/assets/icons/sort.svg";
import arrowDropDown from "@/assets/icons/arrow_drop_down.svg";
import styles from "./Filter.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
export const Filter = ({ initialOrder = "descendente", onOrderChange, availableOrders = ["descendente"] }) => {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    onOrderChange(order);
  }, [order]);

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
          {availableOrders.map((order, i) => (
            <li
              key={i}
              onClick={() => {
                setOrder(order);
              }}
            >
              <p className="dropdown-item">{order}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
