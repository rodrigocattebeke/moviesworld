import { moviesArray } from "../moviesArray";

export async function GET(req) {
  const query = req.nextUrl.searchParams.get("q");
  const array = moviesArray();

  return Response.json(array, { status: 200 });
}
