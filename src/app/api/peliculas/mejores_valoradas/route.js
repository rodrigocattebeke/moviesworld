import { fetchFromTMDB } from "@/lib/fetchFromTMDB";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const params = new URLSearchParams(searchParams);

  const paramsObject = {
    page: params.get("page") || 1,
    sort_by: params.get("sort_by") || "vote_average.desc",
  };

  try {
    const res = await fetchFromTMDB("/discover/movie", `${new URLSearchParams(paramsObject).toString()}`);
    return Response.json(res, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message || "Ocurrio un error en el servidor" }, { status: 500 });
  }
}
