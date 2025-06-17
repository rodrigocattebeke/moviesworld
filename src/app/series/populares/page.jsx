import { Loader } from "@/components/Loader/Loader";
import { ContentPage } from "@/components/pages/ContentPage/ContentPage";
import { Suspense } from "react";

export const metadata = {
  title: "Series Populares | MoviesLoc",
  description: "Mirá cuáles son las series más populares del momento. Información detallada de TMDB presentada por MoviesLoc.",
};

export default async function Popular() {
  return (
    <Suspense fallback={<Loader />}>
      <ContentPage title="Populares" url={`/api/series/populares`} sectionFilter={"popularity"} type={"series"} />;
    </Suspense>
  );
}
