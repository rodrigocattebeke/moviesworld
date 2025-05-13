"use client";

import { notFound, useParams } from "next/navigation";
import { MovieInformationView } from "@/components/movie/MovieInformationView/MovieInformationView";
import { Loader } from "@/components/Loader/Loader";
import { ContentCarousel } from "@/components/movie/ContentCarousel/ContentCarousel";
import useFetch from "@/hooks/useFetch";

export default function Pelicula() {
  const { slug } = useParams();
  const id_pelicula = slug.split("-").pop();

  const { data: movie, isLoading: movieLoading } = useFetch(`/api/pelicula?id_pelicula=${id_pelicula}`);
  const { data: similar, isLoading: similarLoading } = useFetch(`/api/pelicula/similares/${id_pelicula}`);

  if (!slug) return notFound();

  return (
    <div className="container-xxl p-0" style={{ minHeight: "30vh" }}>
      {movieLoading || similarLoading ? (
        <div className="container mt-3">
          <Loader />
        </div>
      ) : !movie || !similar ? (
        <h3>Ocurrio un error al cargar la película.</h3>
      ) : (
        <>
          <MovieInformationView movie={movie} />
          <ContentCarousel title={"Recomendaciones"} contentList={similar.results} type={"peliculas"} />
        </>
      )}
    </div>
  );
}
