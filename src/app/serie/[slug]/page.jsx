"use client";

import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader/Loader";
import { SerieInformationView } from "@/components/serie/SerieInformationView/SerieInformationView";
import { SeasonsCarousel } from "@/components/serie/SeasonsCarousel/SeasonsCarousel";

export default function Serie() {
  const { slug } = useParams();
  const [serie, setSerie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  if (!slug) return notFound();

  useEffect(() => {
    const getResults = async () => {
      setIsLoading(true);
      try {
        const id_serie = slug.split("-").pop();
        const res = await fetch(`/api/serie?id_serie=${id_serie}`);
        const result = await res.json();
        setSerie(result);
      } catch (error) {
        console.error(error);
        setSerie(null);
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
      ) : !serie ? (
        <h3>Ocurrio un error al cargar la película.</h3>
      ) : (
        <>
          <SerieInformationView serie={serie} />
          <SeasonsCarousel seasons={serie.seasons} />
          {/* <MovieCarousel title={"Recomendaciones"} route="peliculas/populares" /> */}
        </>
      )}
    </div>
  );
}
