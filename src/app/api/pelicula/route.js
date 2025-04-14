import { fetchFromTMDB } from "@/lib/fetchFromTMDB";

export async function GET(req) {
  const movie_id = req.nextUrl.searchParams.get("id_pelicula");

  try {
    const res = await fetchFromTMDB(`/movie/${movie_id}`, "language=es-ES");
    return Response.json(res, { status: 200 });
  } catch (error) {
    console.warn(error);
    return Response.json(error, { status: 500 });
  }
}
