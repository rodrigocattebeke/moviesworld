import { Loader } from "@/components/Loader/Loader";
import SearchPage from "@/components/pages/SearchPage/SearchPage";
import { Suspense } from "react";

export const metadata = {
  title: "Buscador - MoviesLoc",
  description: "Estás en el buscador de MoviesLoc, encuentra la información de las mejores series o peliculas.",
};

export default function Search() {
  return (
    <Suspense fallback={<Loader />}>
      <SearchPage />
    </Suspense>
  );
}
