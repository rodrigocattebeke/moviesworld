"use client";

import { notFound, useParams } from "next/navigation";
import { Loader } from "@/components/Loader/Loader";
import { SerieInformationView } from "@/components/serie/SerieInformationView/SerieInformationView";
import { SeasonsCarousel } from "@/components/serie/SeasonsCarousel/SeasonsCarousel";
import useFetch from "@/hooks/useFetch";
import { ContentCarousel } from "@/components/movie/ContentCarousel/ContentCarousel";
import { ContentInformationView } from "@/components/ContentInformationView/ContentInformationView";

export default function Serie() {
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
        <h3 className="my-4">Ocurrio un error al cargar la película.</h3>
      ) : (
        <>
          <ContentInformationView type={"serie"} content={serie} />
          <SeasonsCarousel seasons={serie.seasons} />
          {recomendation.results.length == 0 ? "" : <ContentCarousel title={"Recomendaciones"} contentList={recomendation.results} type={"series"} />}
        </>
      )}
    </div>
  );
}
