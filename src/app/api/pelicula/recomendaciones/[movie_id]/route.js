import { fetchFromTMDB } from "@/lib/fetchFromTMDB";

export async function GET(req, { params }) {
  const allowedHosts = process.env.ALLOWED_HOSTS;
  const host = req.headers.get("host");

  if (!allowedHosts.includes(host)) {
    return Response.json({ error: "No tienes permiso para realizar esta petición." }, { status: 401 });
  }

  const { movie_id } = await params;
  try {
    const res = await fetchFromTMDB(`/movie/${movie_id}/recommendations`);
    return Response.json(res, { status: 200 });
  } catch (error) {
    console.warn(error);
    return Response.json(error, { status: 500 });
  }
}
