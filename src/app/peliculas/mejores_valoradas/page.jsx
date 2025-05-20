import { Loader } from "@/components/Loader/Loader";
import { ContentPage } from "@/components/pages/ContentPage/ContentPage";
import { Suspense } from "react";

export default async function MejoresValoradas() {
  return (
    <Suspense fallback={<Loader />}>
      <ContentPage title="Mejores Valoradas" url={`/api/peliculas/mejores_valoradas`} sectionFilter={"vote_average"} type={"peliculas"} />;
    </Suspense>
  );
}
