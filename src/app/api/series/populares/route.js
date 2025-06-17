import { fetchFromTMDB } from "@/lib/fetchFromTMDB";

export async function GET(req) {
  const allowedHosts = process.env.ALLOWED_HOSTS;
  const host = req.headers.get("host");

  if (!allowedHosts.includes(host)) {
    return Response.json({ error: "No tienes permiso para realizar esta petición." }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const params = new URLSearchParams(searchParams);

  const paramsObject = {
    page: params.get("page") || 1,
    sort_by: params.get("sort_by") || "popularity.desc",
    include_adult: "true",
  };

  try {
    const res = await fetchFromTMDB("/discover/tv", `${new URLSearchParams(paramsObject).toString()}`);
    return Response.json(res, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message || "Ocurrio un error en el servidor" }, { status: 500 });
  }
}
