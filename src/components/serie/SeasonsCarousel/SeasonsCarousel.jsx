"use client";
import Slider from "react-slick";
// import { MovieCard } from "../MovieCard/MovieCard";
import { ArrowForward } from "@/components/icons/ArrowForward";
import { ArrowBack } from "@/components/icons/ArrowBack";
import "./SeasonsCarousel.css";
import { useState } from "react";
import { SeasonCard } from "../SeasonCard/SeasonCard";

export const SeasonsCarousel = ({ seasons = undefined }) => {
  if (!seasons) return console.error("Se debe pasar las temporadas para mostrarlas.");
  if (!Array.isArray(seasons)) return console.error("Solo se aceptan arrays de objetos.");

  const [isLoading, setIsLoading] = useState(true);

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} prevArrow`} style={{ ...style }} onClick={onClick}>
        <ArrowBack />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} nextArrow`} style={{ ...style }} onClick={onClick}>
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
        <h2 className={`title`}>Temporadas</h2>
        <Slider {...settings}>
          {seasons.map((season, i) => (
            <SeasonCard season={season} />
          ))}
        </Slider>
      </>
    </section>
  );
};
