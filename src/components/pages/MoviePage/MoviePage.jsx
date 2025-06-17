"use client";

import { notFound, useParams } from "next/navigation";
import { ContentInformationView } from "@/components/content/ContentInformationView/ContentInformationView";
import { Loader } from "@/components/Loader/Loader";
import { ContentCarousel } from "@/components/movie/ContentCarousel/ContentCarousel";
import useFetch from "@/hooks/useFetch";

export const MoviePage = () => {
  const { slug } = useParams();
  const id_pelicula = slug.split("-").pop();

  const { data: movie, isLoading: movieLoading } = useFetch(`/api/pelicula?id_pelicula=${id_pelicula}`);
  const { data: recomendation, isLoading: recomendationLoading } = useFetch(`/api/pelicula/recomendaciones/${id_pelicula}`);
  if (!slug) return notFound();
  return (
    <div className="container-xxl p-0" style={{ minHeight: "30vh" }}>
      {movieLoading || recomendationLoading ? (
        <div className="container mt-3">
          <Loader />
        </div>
      ) : !movie || !recomendation ? (
        <p className="my-4 fs-3">Hubo un error al cargar la película.</p>
      ) : (
        <>
          <ContentInformationView type={"pelicula"} content={movie} />
          {recomendation.results.length == 0 ? "" : <ContentCarousel title={"Recomendaciones"} contentList={recomendation.results} type={"peliculas"} />}
        </>
      )}
    </div>
  );
};
