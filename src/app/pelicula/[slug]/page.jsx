import { MoviePage } from "@/components/pages/MoviePage/MoviePage";

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const title = slug.split("-")[0];

  return {
    title: `${title} - MoviesLoc`,
    description: `Conocé todo sobre ${title} en MoviesLoc.`,
  };
}

export default function Pelicula() {
  return <MoviePage />;
}
