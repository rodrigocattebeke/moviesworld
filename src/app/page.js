import { Hero } from "@/components/layout/Hero/Hero";
import { ContentCarousel } from "@/components/movie/ContentCarousel/ContentCarousel";

export default async function Home() {
  try {
    const [popularesRes, mejoresRes] = await Promise.all([fetch("https://moviesloc.netlify.app/api/peliculas/populares", { cache: "no-store" }), fetch("https://moviesloc.netlify.app/api/peliculas/mejores_valoradas", { cache: "no-store" })]);

    const populares = await popularesRes.json();
    const mejores = await mejoresRes.json();

    return (
      <>
        <>
          <Hero />
          <ContentCarousel title="Peliculas populares" contentList={populares.results} type={"peliculas"} />
          <ContentCarousel title="Mejores valoradas" contentList={mejores.results} type={"peliculas"} />
        </>
      </>
    );
  } catch (error) {
    console.error("Error al acceder al servidor:", error);
    return <h2 className="my-4">Error loading data...</h2>;
  }
}
