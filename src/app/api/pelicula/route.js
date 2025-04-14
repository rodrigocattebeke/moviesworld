export async function GET(req) {
  const query = req.nextUrl.searchParams.get("q");

  console.log(query);

  //   const array = moviesArray();

  //   return Response.json(array, { status: 200 });
}
