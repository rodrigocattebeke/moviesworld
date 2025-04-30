import { MoviesPage } from "@/components/MoviesPage/MoviesPage";

export default async function Popular() {
  return <MoviesPage title="Populares" url={`/api/peliculas/populares`} sectionFilter={"popularity"} />;
}
