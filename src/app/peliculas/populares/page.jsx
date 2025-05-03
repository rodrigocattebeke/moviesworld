import { Loader } from "@/components/Loader/Loader";
import { MoviesPage } from "@/components/MoviesPage/MoviesPage";
import { Suspense } from "react";

export default async function Popular() {
  return (
    <Suspense fallback={<Loader />}>
      <MoviesPage title="Populares" url={`/api/peliculas/populares`} sectionFilter={"popularity"} />;
    </Suspense>
  );
}
