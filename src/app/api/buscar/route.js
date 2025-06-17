import { fetchFromTMDB } from "@/lib/fetchFromTMDB";

export async function GET(req) {
  const allowedHosts = process.env.ALLOWED_HOSTS;
  const host = req.headers.get("host");

  if (!allowedHosts.includes(host)) {
    return Response.json({ error: "No tienes permiso para realizar esta petición." }, { status: 401 });
  }

  const query = req.nextUrl.searchParams.get("q");
  const page = req.nextUrl.searchParams.get("page");
  const type = req.nextUrl.searchParams.get("type");
  if (type !== "tv" && type !== "movie") return Response.json({ error: `Debes de pasar el parámetro "type". Los types validos son: "tv" , "movie"` }, { status: 404 });

  try {
    const res = await fetchFromTMDB(`/search/${type}`, `include_adult=true&query=${query}&page=${page || 1}`);
    return Response.json(res, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message || "Ocurrio un error en el servidor" }, { status: 500 });
  }
}
