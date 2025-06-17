import { Loader } from "@/components/Loader/Loader";
import { ContentPage } from "@/components/pages/ContentPage/ContentPage";
import { Suspense } from "react";

export const metadata = {
  title: "Series Mejor Valoradas | MoviesLoc",
  description: "Conocé las series con las mejores valoraciones según TMDB. Descubrí las más destacadas en MoviesLoc.",
};

export default async function MejoresValoradas() {
  return (
    <Suspense fallback={<Loader />}>
      <ContentPage title="Mejores valoradas" url={`/api/series/mejores_valoradas`} sectionFilter={"vote_average"} type={"series"} />;
    </Suspense>
  );
}
