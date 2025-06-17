"use client";

import { notFound, useParams } from "next/navigation";
import { Loader } from "@/components/Loader/Loader";
import { SeasonsCarousel } from "@/components/serie/SeasonsCarousel/SeasonsCarousel";
import useFetch from "@/hooks/useFetch";
import { ContentCarousel } from "@/components/movie/ContentCarousel/ContentCarousel";
import { ContentInformationView } from "@/components/content/ContentInformationView/ContentInformationView";

export const SeriePage = () => {
  const { slug } = useParams();

  const id_serie = slug.split("-").pop();

  const { data: serie, isLoading: serieLoading } = useFetch(`/api/serie?id_serie=${id_serie}`);
  const { data: recomendation, isLoading: recomendationLoading } = useFetch(`/api/serie/recomendaciones/${id_serie}`);

  if (!slug) return notFound();

  return (
    <div className="container-xxl p-0" style={{ minHeight: "30vh" }}>
      {serieLoading || recomendationLoading ? (
        <div className="container mt-3">
          <Loader />
        </div>
      ) : !serie || !recomendation ? (
        <p className="my-4 fs-3">Ocurrio un error al cargar la película.</p>
      ) : (
        <>
          <ContentInformationView type={"serie"} content={serie} />
          <SeasonsCarousel seasons={serie.seasons} />
          {recomendation.results.length == 0 ? "" : <ContentCarousel title={"Recomendaciones"} contentList={recomendation.results} type={"series"} />}
        </>
      )}
    </div>
  );
};
