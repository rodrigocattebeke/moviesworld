export const titleToSlug = (title) => {
  const slug = title.replace(/\s/g, "_");
  return encodeURIComponent(slug);
};
