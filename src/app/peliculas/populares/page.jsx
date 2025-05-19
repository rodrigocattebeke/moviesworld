import { ContentPage } from "@/components/ContentPage/ContentPage";
import { Loader } from "@/components/Loader/Loader";
import { Suspense } from "react";

export default async function Popular() {
  return (
    <Suspense fallback={<Loader />}>
      <ContentPage title="Populares" url={`/api/peliculas/populares`} sectionFilter={"popularity"} type={"peliculas"} />;
    </Suspense>
  );
}
