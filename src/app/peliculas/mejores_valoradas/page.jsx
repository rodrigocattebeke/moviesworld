import { Loader } from "@/components/Loader/Loader";
import { ContentPage } from "@/components/pages/ContentPage/ContentPage";
import { Suspense } from "react";

export const metadata = {
  title: "Películas Mejor Valoradas | MoviesLoc",
  description: "Explorá las películas con mejores puntuaciones de la crítica y el público. Datos actualizados desde TMDB en MoviesLoc.",
};

export default async function MejoresValoradas() {
  return (
    <Suspense fallback={<Loader />}>
      <ContentPage title="Mejores Valoradas" url={`/api/peliculas/mejores_valoradas`} sectionFilter={"vote_average"} type={"peliculas"} />;
    </Suspense>
  );
}
