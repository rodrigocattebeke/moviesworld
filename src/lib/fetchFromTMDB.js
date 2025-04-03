const TMDB_API_URL = `https://api.themoviedb.org/3`;
const TMDB_ACCESS_KEY = process.env.TMDB_ACCESS_KEY;

export async function fetchFromTMDB(endpoint, params = "") {
  const url = `${TMDB_API_URL}${endpoint}?${params}`;

  try {
    const res = await fetch(`${url}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_KEY}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error al obtener datos: ", error.message);
    return { error: error.message };
  }
}
