import { fetchFromTMDB } from "@/lib/fetchFromTMDB";

export async function GET(req, { params }) {
  const { serie_id } = await params;
  try {
    const res = await fetchFromTMDB(`/tv/${serie_id}/recommendations`);
    return Response.json(res, { status: 200 });
  } catch (error) {
    console.warn(error);
    return Response.json(error, { status: 500 });
  }
}
