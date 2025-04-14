"use client";

import { notFound, useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MovieInformationView } from "@/components/movie/MovieInformationView/MovieInformationView";

export default function Pelicula() {
  const { slug } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  if (!slug) return notFound();

  useEffect(() => {
    const getResults = async () => {
      setIsLoading(true);
      const id_pelicula = slug.split("-").pop();
      const res = await fetch(`/api/pelicula?id_pelicula=${id_pelicula}`);
      const result = await res.json();
      console.log(result);
      setMovie(result);
      setIsLoading(false);
    };
    getResults();
  }, [slug]);

  return !movie ? (
    ""
  ) : (
    <>
      <MovieInformationView movie={movie} />
    </>
  );
}
