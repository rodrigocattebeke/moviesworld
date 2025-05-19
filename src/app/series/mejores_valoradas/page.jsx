import { ContentPage } from "@/components/ContentPage/ContentPage";
import { Loader } from "@/components/Loader/Loader";
import { Suspense } from "react";

export default async function MejoresValoradas() {
  return (
    <Suspense fallback={<Loader />}>
      <ContentPage title="Mejores valoradas" url={`/api/series/mejores_valoradas`} sectionFilter={"vote_average"} type={"series"} />;
    </Suspense>
  );
}
