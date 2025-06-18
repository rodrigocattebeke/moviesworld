"use client";
import Slider from "react-slick";
import { ArrowForward } from "@/components/icons/ArrowForward";
import { ArrowBack } from "@/components/icons/ArrowBack";
import styles from "./SeasonsCarousel.module.css";
import { SeasonCard } from "../SeasonCard/SeasonCard";

export const SeasonsCarousel = ({ seasons = undefined }) => {
  if (!seasons) return console.error("Se debe pasar las temporadas para mostrarlas.");
  if (!Array.isArray(seasons)) return console.error("Solo se aceptan arrays de objetos.");

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} ${styles.prevArrow}`} style={{ ...style }} onClick={onClick}>
        <ArrowBack />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} ${styles.nextArrow}`} style={{ ...style }} onClick={onClick}>
        <ArrowForward />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    variableWidth: true,
  };

  return (
    <section className="container-xxl my-5 overflow-x-hidden">
      <>
        <h2 className={`${styles.title}`}>Temporadas</h2>
        <Slider {...settings} className={styles.slider}>
          {seasons.map((season, i) => (season.air_date ? <SeasonCard season={season} /> : ""))}
        </Slider>
      </>
    </section>
  );
};
