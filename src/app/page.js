import { Hero } from "@/components/layout/Hero/Hero";
import { ContentCarousel } from "@/components/movie/ContentCarousel/ContentCarousel";

export default async function Home() {
  try {
    const [popularMoviesRes, topRatedMoviesRes, popularSeriesRes, topRatedSeriesRes] = await Promise.all([fetch("https://moviesloc.netlify.app/api/peliculas/populares"), fetch("https://moviesloc.netlify.app/api/peliculas/mejores_valoradas"), fetch("https://moviesloc.netlify.app/api/series/populares"), fetch("https://moviesloc.netlify.app/api/series/mejores_valoradas")]);

    if (!popularMoviesRes.ok || !topRatedMoviesRes.ok || !popularMoviesRes.ok || !topRatedMoviesRes.ok) throw new Error("Ocurrió un error, intenta de nuevo");

    const popularMovies = await popularMoviesRes.json();
    const topRatedMovies = await topRatedMoviesRes.json();
    const popularSeries = await popularSeriesRes.json();
    const topRatedSeries = await topRatedSeriesRes.json();

    return (
      <>
        <>
          <Hero />
          <ContentCarousel title="Peliculas populares" contentList={popularMovies.results} type={"peliculas"} />
          <ContentCarousel title="Peliculas mejores valoradas" contentList={topRatedMovies.results} type={"peliculas"} />
          <ContentCarousel title="Series populares" contentList={popularSeries.results} type={"series"} />
          <ContentCarousel title="Series mejores valoradas" contentList={topRatedSeries.results} type={"series"} />
        </>
      </>
    );
  } catch (error) {
    console.error("Error al acceder al servidor:", error);
    return <h2 className="my-4">Ocurrió un error al cargar el contenido, intente más tarde.</h2>;
  }
}
