"use client";

import { notFound, useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MovieInformationView } from "@/components/movie/MovieInformationView/MovieInformationView";
import { Loader } from "@/components/Loader/Loader";
import { MovieCarousel } from "@/components/movie/MovieCarousel/MovieCarousel";

export default function Pelicula() {
  const { slug } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  if (!slug) return notFound();

  useEffect(() => {
    const getResults = async () => {
      setIsLoading(true);
      try {
        const id_pelicula = slug.split("-").pop();
        const res = await fetch(`/api/pelicula?id_pelicula=${id_pelicula}`);
        const result = await res.json();
        setMovie(result);
      } catch (error) {
        console.error(error);
        setMovie(null);
      } finally {
        setIsLoading(false);
      }
    };
    getResults();
  }, [slug]);

  return (
    <div className="container-xxl p-0" style={{ minHeight: "30vh" }}>
      {isLoading ? (
        <div className="container mt-3">
          <Loader />
        </div>
      ) : !movie ? (
        <h3>Ocurrio un error al cargar la película.</h3>
      ) : (
        <>
          <MovieInformationView movie={movie} />
          <MovieCarousel title={"Recomendaciones"} route="peliculas/populares" />
        </>
      )}
    </div>
  );
}
