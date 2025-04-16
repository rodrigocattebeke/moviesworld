import { fetchFromTMDB } from "@/lib/fetchFromTMDB";
import { moviesArray } from "../moviesArray";

export async function GET(req) {
  const query = req.nextUrl.searchParams.get("q");
  const page = req.nextUrl.searchParams.get("page");

  try {
    const res = await fetchFromTMDB("/search/movie", `query=${query}&page=${page || 1}`);
    return Response.json(res, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message || "Ocurrio un error en el servidor" }, { status: 500 });
  }
}
