import { Loader } from "@/components/Loader/Loader";
import { ContentPage } from "@/components/pages/ContentPage/ContentPage";
import { Suspense } from "react";

export const metadata = {
  title: "Películas Populares | MoviesLoc",
  description: "Descubrí las películas más populares del momento según TMDB. Información actualizada y organizada por MoviesLoc.",
};

export default async function Popular() {
  return (
    <Suspense fallback={<Loader />}>
      <ContentPage title="Populares" url={`/api/peliculas/populares`} sectionFilter={"popularity"} type={"peliculas"} />;
    </Suspense>
  );
}
