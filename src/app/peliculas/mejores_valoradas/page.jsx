import { MoviesPage } from "@/components/MoviesPage/MoviesPage";

export default async function MejoresValoradas() {
  return <MoviesPage title="Mejores Valoradas" url={`/api/peliculas/mejores_valoradas`} sectionFilter={"vote_average"} />;
}
