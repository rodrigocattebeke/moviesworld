import { MoviesPage } from "@/components/MoviesPage/MoviesPage";
import { Suspense } from "react";

export default async function MejoresValoradas() {
  return (
    <Suspense>
      <MoviesPage title="Mejores Valoradas" url={`/api/peliculas/mejores_valoradas`} sectionFilter={"vote_average"} />;
    </Suspense>
  );
}
