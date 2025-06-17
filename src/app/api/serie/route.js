import { fetchFromTMDB } from "@/lib/fetchFromTMDB";

export async function GET(req) {
  const allowedHosts = ["moviesloc.netlify.app"];
  const host = req.headers.get("host");

  if (!allowedHosts.includes(host)) {
    return Response.json({ error: "No tienes permiso para realizar esta petición." }, { status: 401 });
  }

  const serie_id = req.nextUrl.searchParams.get("id_serie");

  try {
    const res = await fetchFromTMDB(`/tv/${serie_id}`);
    return Response.json(res, { status: 200 });
  } catch (error) {
    console.warn(error);
    return Response.json(error, { status: 500 });
  }
}
