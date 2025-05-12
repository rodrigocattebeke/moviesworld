"use client";
import Slider from "react-slick";
import { MovieCard } from "../MovieCard/MovieCard";
import { ArrowForward } from "@/components/icons/ArrowForward";
import { ArrowBack } from "@/components/icons/ArrowBack";
import styles from "./MovieCarousel.module.css";

export const MovieCarousel = ({ title = undefined, contentList = undefined, type = undefined }) => {
  if (!contentList) return console.error("Se debe de pasar la lista de elementos para el carousel.");
  if (!type) return console.error("Se debe de pasar un tipo. Disponibles: Series, Peliculas");

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
      <div className={`${className} ${styles.nextArrow}`} onClick={onClick}>
        <ArrowForward />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="container-xxl my-5 overflow-x-hidden">
      <>
        {title ? <h2 className={`${styles.title}`}>{title}</h2> : ""}
        <Slider {...settings}>
          {contentList.map((content, i) => (
            <MovieCard movie={content} key={i} type={type} />
          ))}
        </Slider>
      </>
    </section>
  );
};
