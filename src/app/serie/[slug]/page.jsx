"use client";

import { notFound, useParams } from "next/navigation";
import { Loader } from "@/components/Loader/Loader";
import { SerieInformationView } from "@/components/serie/SerieInformationView/SerieInformationView";
import { SeasonsCarousel } from "@/components/serie/SeasonsCarousel/SeasonsCarousel";
import useFetch from "@/hooks/useFetch";
import { ContentCarousel } from "@/components/movie/ContentCarousel/ContentCarousel";

export default function Serie() {
  const { slug } = useParams();

  const id_serie = slug.split("-").pop();

  const { data: serie, isLoading: serieLoading } = useFetch(`/api/serie?id_serie=${id_serie}`);
  const { data: similar, isLoading: similarLoading } = useFetch(`/api/serie/similares/${id_serie}`);

  if (!slug) return notFound();

  return (
    <div className="container-xxl p-0" style={{ minHeight: "30vh" }}>
      {serieLoading || similarLoading ? (
        <div className="container mt-3">
          <Loader />
        </div>
      ) : !serie || !similar ? (
        <h3>Ocurrio un error al cargar la película.</h3>
      ) : (
        <>
          <SerieInformationView serie={serie} />
          <SeasonsCarousel seasons={serie.seasons} />
          <ContentCarousel title={"Recomendaciones"} contentList={similar.results} type={"series"} />
        </>
      )}
    </div>
  );
}
