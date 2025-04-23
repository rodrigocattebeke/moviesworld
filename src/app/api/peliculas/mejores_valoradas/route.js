import { fetchFromTMDB } from "@/lib/fetchFromTMDB";

export async function GET(req) {
  try {
    const res = await fetchFromTMDB("/movie/top_rated");
    return Response.json(res, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message || "Ocurrio un error en el servidor" }, { status: 500 });
  }
}
