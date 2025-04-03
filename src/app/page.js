import { Hero } from "@/components/Hero/Hero";
import { MovieCarousel } from "@/components/movie/MovieCarousel/MovieCarousel";

export default async function Home() {
  return (
    <>
      <Hero />
      <MovieCarousel title="Peliculas populares" route="peliculas/populares" />
      <MovieCarousel title="Mejores valoradas" route="peliculas/mejores_valoradas" />
    </>
  );
}
