import { fetchFromTMDB } from "@/lib/fetchFromTMDB";

export async function GET(req) {
  const serie_id = req.nextUrl.searchParams.get("id_serie");

  try {
    const res = await fetchFromTMDB(`/tv/${serie_id}`);
    return Response.json(res, { status: 200 });
  } catch (error) {
    console.warn(error);
    return Response.json(error, { status: 500 });
  }
}
