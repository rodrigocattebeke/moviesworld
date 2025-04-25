export const getBackdropUrl = (path) => {
  if (!path) {
    return "/assets/images/image_not_found.jpg";
  } else {
    return `https://image.tmdb.org/t/p/w1280${path}`;
  }
};
