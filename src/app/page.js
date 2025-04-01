import { Hero } from "@/components/Hero/Hero";
import { MovieCarousel } from "@/components/movie/MovieCarousel/MovieCarousel";

export default async function Home() {
  return (
    <>
      <Hero />
      <MovieCarousel />
    </>
  );
}
