export const getPosterImgUrl = (path) => {
  return `https://image.tmdb.org/t/p/w500${path}`;
};

export const getBackdropImgUrl = (path) => {
  return `https://image.tmdb.org/t/p/w1280${path}`;
};

// export const getMovies = async () => {
//   try {
//     const res = await fetch("https://api.themoviedb.org/3/movie/11?language=es-ES", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${process.env.ACCESS_KEY}`,
//       },
//     });
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getMovies = () => {
  return {
    adult: false,
    backdrop_path: "/2w4xG178RpB4MDAIfTkqAuSJzec.jpg",
    belongs_to_collection: {
      id: 10,
      name: "La guerra de las galaxias - Colección",
      poster_path: "/b8FzGmDRm8E1revfJGLbJb33BkO.jpg",
      backdrop_path: "/zZDkgOmFMVYpGAkR9Tkxw0CRnxX.jpg",
    },
    budget: 11000000,
    genres: [
      {
        id: 12,
        name: "Aventura",
      },
      {
        id: 28,
        name: "Acción",
      },
      {
        id: 878,
        name: "Ciencia ficción",
      },
    ],
    homepage: "",
    id: 11,
    imdb_id: "tt0076759",
    origin_country: ["US"],
    original_language: "en",
    original_title: "Star Wars",
    overview:
      'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.',
    popularity: 15.6594,
    poster_path: "/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg",
    production_companies: [
      {
        id: 1,
        logo_path: "/tlVSws0RvvtPBwViUyOFAO0vcQS.png",
        name: "Lucasfilm Ltd.",
        origin_country: "US",
      },
      {
        id: 25,
        logo_path: "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
        name: "20th Century Fox",
        origin_country: "US",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America",
      },
    ],
    release_date: "1977-05-25",
    revenue: 775398007,
    runtime: 121,
    spoken_languages: [
      {
        english_name: "English",
        iso_639_1: "en",
        name: "English",
      },
    ],
    status: "Released",
    tagline: "Hace mucho tiempo, en una galaxia muy lejana...",
    title: "La guerra de las galaxias",
    video: false,
    vote_average: 8.203,
    vote_count: 21012,
  };
};
