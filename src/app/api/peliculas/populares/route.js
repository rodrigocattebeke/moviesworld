import { fetchFromTMDB } from "@/lib/fetchFromTMDB";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const params = new URLSearchParams(searchParams).toString();
  try {
    ("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc&without_genres=Action");
    const res = await fetchFromTMDB("/discover/movie", `popularity.desc&${params}`);
    return Response.json(res, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message || "Ocurrio un error en el servidor" }, { status: 500 });
  }
}
