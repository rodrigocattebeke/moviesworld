export const getPosterUrl = (path) => {
  if (!path) {
    return "/assets/images/image_not_found.jpg";
  } else {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
};
