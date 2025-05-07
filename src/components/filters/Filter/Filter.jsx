"use client";
import arrowDropDown from "@/assets/icons/arrow_drop_down.svg";
import styles from "./Filter.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
export const Filter = ({ title = "", icon = undefined, onFilterChange, availableFilters = [""], selected = undefined }) => {
  const [filterSelected, setSelectedFilter] = useState(selected || availableFilters[0]);

  useEffect(() => {
    onFilterChange(filterSelected);
  }, [filterSelected]);

  return (
    <div className="container-xxl p-0 d-flex gap-3 flex-wrap">
      <div className={`${styles.singleFilterContainer}`}>
        <div className={styles.filterTitleContainer}>
          {icon ? <Image src={icon} alt={title} /> : ""}
          <p>{title}</p>
        </div>
        <div className={styles.filterSelectorContainer} data-bs-toggle="dropdown" aria-expanded="false">
          <p>{filterSelected}</p>
          <Image src={arrowDropDown} alt="Flecha dropdown" />
        </div>
        <ul className={`${styles.dropdownMenu} dropdown-menu `}>
          {availableFilters.map((filter, i) => (
            <li
              key={i}
              onClick={() => {
                setSelectedFilter(filter);
              }}
            >
              <p className="dropdown-item">{filter}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
