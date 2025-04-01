"use client";
import { getMovies } from "@/helpers/moviesInfo";
import React from "react";
import Slider from "react-slick";
import { MovieCard } from "../MovieCard/MovieCard";
import { ArrowForward } from "@/components/icons/ArrowForward";
import { ArrowBack } from "@/components/icons/ArrowBack";

export const MovieCarousel = () => {
  const movie = getMovies();

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: "block", backgroundColor: "var(--background-color-primary)", left: "0" }} onClick={onClick}>
        <ArrowBack />
      </div>
    );
  };

  const ArrowNext = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: "block", backgroundColor: "var(--background-color-primary)", right: "0" }} onClick={onClick}>
        <ArrowForward />
      </div>
    );
  };

  const movieArray = [movie, movie, movie, movie, movie, movie, movie, movie, movie, movie, movie, movie, movie, movie];
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <ArrowNext />,
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
    <section className="container-xxl">
      <Slider {...settings}>
        {movieArray.map((movie, i) => (
          <MovieCard movieData={movie} key={i} />
        ))}
      </Slider>
    </section>
  );
};
