"use client";

import { notFound, useSearchParams } from "next/navigation";
import styles from "./Pelicula.module.css";
import { useEffect, useState } from "react";
import movieExample from "@/app/api/movie.json";
import { MovieInformationView } from "@/components/movie/MovieInformationView/MovieInformationView";

export default function Pelicula() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  if (!query) return notFound();

  useEffect(() => {
    const getResults = async () => {
      setIsLoading(true);
      //   const res = await fetch(`/api/pelicula?q=${query}`);
      //   const results = await res.json();
      const result = movieExample;
      setMovie(result);
      setIsLoading(false);
    };
    getResults();
  }, [query]);

  return !movie ? (
    ""
  ) : (
    <>
      <MovieInformationView movie={movie} />
    </>
  );
}
